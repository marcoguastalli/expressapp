# expressapp
Express App

### init
npm init
npm install --save express body-parser mongoose
node app.js
use local
db.createCollection("expressapp")

### run
mongodb --dbpath $MONGODB_DATA/db --auth
node app.js

### MongoDB
mongo -u local -p local 127.0.0.1:27017 --authenticationDatabase admin
use local
db.products.find()

### login
mongo -u local -p local 127.0.0.1:27017 --authenticationDatabase admin

### play
http://localhost:1234/products/welcome
curl -X GET --header "Accept: text/html" "http://localhost:1234/products/welcome"

##### (Create)RUD
curl -X POST --header "Content-Type: application/x-www-form-urlencoded" --header "Accept: text/html" -d "name=apple&price=27" "http://localhost:1234/products/create"

##### C(Read)UD
http://localhost:1234/products/5c59427ed7afd90fd712825a
curl -X GET --header "Accept: text/html" "http://localhost:1234/products/5dd30618876393300438c86b"

##### CR(Update)D
curl -X PUT --header "Content-Type: application/x-www-form-urlencoded" --header "Accept: text/html" -d "name=carrot&price=27" "http://localhost:1234/products/5c90b23cd6f0e513d0fc0029/update"

##### CRU(Delete)
curl -X DELETE --header "Accept: text/html" "http://localhost:1234/products/5c90b23cd6f0e513d0fc0029/delete"

### cURL
curl -I HEAD http://localhost:1234/products/faseII/ById?id=5e92cd916c24d3174c25cbd8