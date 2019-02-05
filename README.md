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
http://localhost:1234/products/welcome
curl -X GET --header "Accept: text/html" "http://localhost:1234/products/welcome"

##### (Create)RUD
curl -X POST --header "Content-Type: application/x-www-form-urlencoded" --header "Accept: text/html" -d "name=apple&price=27" "http://localhost:1234/products/create"

##### C(Read)UD
http://localhost:1234/products/5c59427ed7afd90fd712825a
curl -X GET --header "Accept: text/html" "http://localhost:1234/products/5c59427ed7afd90fd712825a"

##### CR(Update)D
curl -X PUT --header "Content-Type: application/x-www-form-urlencoded" --header "Accept: text/html" -d "name=apple&price=75" "http://localhost:1234/products/5c59427ed7afd90fd712825a/update"

##### CRU(Delete)
curl -X DELETE --header "Accept: text/html" "http://localhost:1234/products/5c593751ca48870acaef910d/delete"
