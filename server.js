var express = require('express');
var app = express();
var db = require('./database')
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); //บรรทัดนี้สำคัญมาก
app.use(bodyParser.urlencoded({
    extended: true
}));

//Add routing
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);


});
//product
app.get('/api/products/', db.getAllProducts);

app.get('/api/products/:id', db.getProductByID);

app.post('/api/products/', db.insertProduct);

app.put('/api/products/:id', db.updateProduct);

app.delete('/api/products/:id', db.deleteProduct);
//user
app.get('/api/users/', db.getAllUsers);
app.get('/api/users/:id' , db.getUserByID);
app.post('/api/users', db.insertUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);

//Purchases
app.get('/api/purchases/', db.getAllPurchases);
app.get('/api/purchases/:id' , db.getPurchase_itemsByID);
app.post('/api/purchases', db.insertPurchases);
app.put('/api/purchases/:id', db.updatePurchases);
app.delete('/api/purchases/:id', db.deletePurchases);

//Purchase_items
app.get('/api/purchase_items/', db.getAllPurchase_items);
app.get('/api/purchase_items/:id' , db.getPurchase_itemsByID);
app.post('/api/purchase_items', db.insertPurchase_items);
app.put('/api/purchase_items/:id', db.updatePurchase_items);
app.delete('/api/purchase_items/:id', db.deletePurchase_items);

var port = process.env.PORT || 8080; //เผื่อขึ้นheroku
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});