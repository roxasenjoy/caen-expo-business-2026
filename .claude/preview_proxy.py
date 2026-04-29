"""Reverse proxy minimal qui forwards vers le Docker (localhost:9000).
Utilise la variable d'env PORT fournie par Claude Preview.
"""
import os, sys, urllib.request, urllib.error
from http.server import BaseHTTPRequestHandler, HTTPServer

TARGET = "http://localhost:9000"

class Proxy(BaseHTTPRequestHandler):
    def _proxy(self, method):
        try:
            length = int(self.headers.get("Content-Length", 0) or 0)
            body = self.rfile.read(length) if length else None
            req = urllib.request.Request(TARGET + self.path, data=body, method=method)
            for h, v in self.headers.items():
                if h.lower() not in ("host", "content-length", "connection"):
                    req.add_header(h, v)
            try:
                resp = urllib.request.urlopen(req, timeout=15)
                status, headers, payload = resp.status, resp.getheaders(), resp.read()
            except urllib.error.HTTPError as e:
                status, headers, payload = e.code, e.getheaders(), e.read() or b""

            self.send_response(status)
            for h, v in headers:
                if h.lower() not in ("transfer-encoding", "connection", "content-length"):
                    self.send_header(h, v)
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            if payload:
                self.wfile.write(payload)
        except Exception as e:
            self.send_response(502)
            self.end_headers()
            self.wfile.write(f"proxy error: {e}".encode())

    def do_GET(self):     self._proxy("GET")
    def do_POST(self):    self._proxy("POST")
    def do_PUT(self):     self._proxy("PUT")
    def do_DELETE(self):  self._proxy("DELETE")
    def do_HEAD(self):    self._proxy("HEAD")
    def do_OPTIONS(self): self._proxy("OPTIONS")

    def log_message(self, *a, **kw): pass


port = int(os.environ.get("PORT", "9100"))
print(f"proxy listening on :{port} -> {TARGET}", file=sys.stderr, flush=True)
HTTPServer(("0.0.0.0", port), Proxy).serve_forever()
