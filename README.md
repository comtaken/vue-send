# vue-sumple
![image](https://github.com/comtaken/vue-send/assets/65578523/07e0fc17-1538-4bef-bc2a-1047a5fa65e5)
<hr>  

![image](https://github.com/comtaken/vue-send/assets/65578523/79fc711f-13ab-43a3-94f7-2d8163be3d2d)

# Vue.js環境構築  
- 前提条件

  Linux（RedHat系）が立ち上がる事
- 手順
  - $ cd /
  - $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  - $ export NVM_DIR="$HOME/.nvm"
  - 一回ターミナル閉じて立ち上げなおす
  - $ nvm install node
  - $ nvm -v
  - $ nvm install 16.20.1
  - $ nvm use 16.20.1
  - $ node -v
  - $ npm -v
  - $ cd /var/www/html/
  - $ npm config set user 0
  - $ npm config set unsafe-perm true
  - $ npm update -g npm
  - $ npm install -g @vue/cli
  - $ vue create sample
  - $ firewall-cmd --add-port=8080/tcp --permanent
  - $ firewall-cmd --reload
  - $ cd /var/www/html/sample
  - $ npm run serve
  - IPアドレス:8080アクセス

