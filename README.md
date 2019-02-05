# expressapp
Express App

### init
npm init
npm install --save express body-parser mongoose
node app.js
db.createCollection("expressapp")

### run
mongod --dbpath /Users/marcoguastalli/opt/MongoDB/m27data/db --auth
node app.js

### login
mongo -u local -p local 127.0.0.1:27017 --authenticationDatabase admin

### play
curl -X POST --header "Content-Type: application/x-www-form-urlencoded" --header "Accept: text/html" -d "name=apple&price=0" "http://localhost:1234/products/create"