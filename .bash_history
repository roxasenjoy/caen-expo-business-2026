#1777492191
ls
#1777492195
git status
#1777492207
git restore .ovhconfig
#1777492215
rm .ovhconfig
#1777492215
ls
#1777492218
git status
#1777492229
rm .htaccess 
#1777492233
cd public/.htaccess 
#1777492237
cd public/
#1777492238
ls
#1777492239
ls -la
#1777492244
rm .htaccess 
#1777492245
ls
#1777492356
cd ..
#1777492358
git status
#1777492362
rm .bash_history
#1777492363
ls
#1777492364
git status
#1777492373
git checkout main-php5-3
#1777492381
git branch main-php5-3
#1777492384
git status
#1777492390
git pull origin main-php5-3
#1777492490
ls
#1777492491
cd docker
#1777492491
ls
#1777492493
cd mysql/
#1777492493
ls
#1777492508
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia < ~/docker/mysql/init.sql
#1777492510
cd ..
#1777492510
cd ..
#1777492511
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia < ~/docker/mysql/init.sql
#1777492530
ls
#1777492547
nano .env
#1777492704
nano .htaccess
#1777492738
openssl rand -base64 32
#1777492742
nano .htaccess
#1777492792
cat .htaccess 
#1777492806
rm .env
#1777492887
cat > ~/.env << 'EOF'
DB_HOST=idlabsfrlvia.mysql.db
DB_NAME=idlabsfrlvia
DB_USER=idlabsfrlvia
DB_PASSWORD=TON_MOT_DE_PASSE_DB
SESSION_SECRET=LA_CLE_GENEREE_AVEC_OPENSSL
APP_ENV=production

#1777492921
git pull
#1777492922
cat > ~/.env << 'EOF'

DB_HOST=idlabsfrlvia.mysql.db

DB_NAME=idlabsfrlvia

DB_USER=idlabsfrlvia

DB_PASSWORD=D25eF3fe2Ef5fe5

SESSION_SECRET=OWyIXnCeRAVWTWSMTuwjx/aYY6w2AmwIBL3nFJ4+jaA=

APP_ENV=production

EOF

#1777492929
ls
#1777492931
cat .env
#1777492969
# 1. Vérifier que le code est à jour
#1777492969
cat ~/public/includes/config.php | head -10
#1777492976
# 2. Vérifier que le .env existe et son contenu
#1777492976
cat ~/.env
#1777492981
# 3. Vérifier que PHP voit bien le .env
#1777492982
php -r "var_dump(file_exists(realpath('/homez.' . getmyuid() . '/' . get_current_user() . '/.env')));"
#1777492985
# 4. Tester la connexion DB directement
#1777492986
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia -e "SHOW TABLES;"
#1777493038
# Mettre le code à jour
#1777493040
cd ~ && git pull origin main-php5-3
#1777493100
php -r "echo password_hash('idlabsexpo2026CIA', PASSWORD_BCRYPT, array('cost' => 12)) . PHP_EOL;"
#1777493139
php -r "echo crypt('idlabsexpo2026CIA', '\$2y\$12\$' . substr(strtr(base64_encode(openssl_random_pseudo_bytes(16)), '+', '.'), 0, 22)) . PHP_EOL;"
#1777493158
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia -e "INSERT INTO admin_credentials (id, $2y$12$kJbO5o95O8Y8easJmikhx.OnsIRDju9ifhyEEZEjnxVb/ckb1sEOa) VALUES (1, 'LE_HASH_ICI');"
#1777493191
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia -e "INSERT INTO admin_credentials (id, password_hash) VALUES (1, '$2y$12$kJbO5o95O8Y8easJmikhx.OnsIRDju9ifhyEEZEjnxVb/ckb1sEOa');"
#1777493244
mysql
#1777493251
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia
#1777493312
mysql -h idlabsfrlvia.mysql.db -u idlabsfrlvia -p idlabsfrlvia
#1777496669
git pull origin main-php5-3
#1777502524
ls
#1777502525
cd videos
#1777502526
ls
#1777502530
ls -la
#1777502587
cd public
#1777502589
cd pu
#1777502591
cd ..
#1777502591
cd public/
#1777502592
ls
#1777502593
cd videos
#1777502594
ls
#1777502596
cp ~/videos/JB\ -\ Gemini\ -\ GEMS\ -\ System\ prompt.mp4 ~/public/videos/jb-gemini-gems-system-prompt.mp4
#1777502614
ls -lh ~/public/videos/ | grep jb
#1777502698
md5sum ~/videos/JB\ -\ Gemini\ -\ GEMS\ -\ System\ prompt.mp4
#1777502699
md5sum ~/public/videos/jb-gemini-gems-system-prompt.mp4
#1777502715
cp -f ~/videos/JB\ -\ Gemini\ -\ GEMS\ -\ System\ prompt.mp4 ~/public/videos/jb-gemini-gems-system-prompt.mp4
#1777502733
cd ..
#1777502734
git status
#1777502741
cd ..
#1777502742
git status
#1777502805
git pull
#1777502824
git pull origin main-php5.3
#1777502829
git pull origin main-php5-3
#1777503267
ls
#1777503270
cd public
#1777503270
ls
#1777503271
cd videos
#1777503272
ls -la
#1777503312
cd ..
#1777503312
cd ..
#1777503313
ls
#1777503314
cd videos
#1777503314
ls
#1777503316
ls -la
#1777503360
cd ..
#1777503365
git pull origin main-php5.3
#1777503370
git pull origin main-php5-3
#1777503375
git status
#1777503391
git branch main-php5-3
#1777503398
git status main-php5.3
#1777503405
git branh
#1777503407
git branch
#1777503414
git checkout main-php5.3
#1777503418
git checkout main-php5-3
#1777503425
cat .htaccess 
#1777503426
ls
#1777503438
git status
#1777503460
git status
#1777503468
git add .htaccess 
#1777503472
git commit -m "htaccess main"
#1777503474
git push origin main
#1777503483
git checkout main-php5-3
#1777503485
git statu
#1777503492
git checkout main
#1777503556
git status
#1777503568
git checkout main
#1777503570
git status
#1777503575
git status
#1777503712
git pull origin main
#1777503716
git status 
#1777503726
nano .htaccess
#1777503767
bit branch -l
#1777503769
git branch
