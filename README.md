**1\. Install Yarn and php**
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
sudo apt install php libapache2-mod-php
```

**2\. Configure on server**
```bash
sudo mv translator_interface /var/www/  
vi /var/www/translator_interface/assets/ts/Util/Translate.ts  
    -> in the file:
        update host address line 14
yarn install
yarn run dev
sudo vi /etc/apache2/sites-available/000-default.conf   
    -> in the file:  
        comment ServerAdmin webmaster@localhost  
        change DocumentRoot to DocumentRoot /var/www/translator_interface/public  
```


**3\. Restart Apache server**
```bash
sudo service apache2 restart    
```
