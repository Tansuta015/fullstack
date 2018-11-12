const pgp = require('pg-promise')();
var db = pgp('postgres://weaclbeiwbxfsq:27abbf9f549e54ea47de0b0e387e2d77cea04352f95426ccc713a672b1fcdb65@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d1himi9nqbifnr?ssl=true');
db.any


//product
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', //ให้คนเรียกใช้ไปใช้งานถ้าไม่errorจะขึ้นsuccess
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve products id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('UPDATE products set id = ${id}, title = ${title}, price = ${price}, created_at = ${created_at}, tags =${tags} ' + ' where id =' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('DELETE FROM products  where id =' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//user
function getAllUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', 
                    data: data,
                    message: 'Retrieved ALL users'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved users id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve users id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertUser(req, res) {
    db.none('insert into users(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateUser(req, res) {
    db.none('update users set id = ${id} ,title = ${title} , price= ${price} , tags= ${tags} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteUser(req, res) {
    db.none('delete from users where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
//purchases

function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from purchases where id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchases id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve purchases id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertPurchases(req, res) {
    db.none('insert into purchases(id, title, price,state, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${state}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchases(req, res) {
    db.none('update purchases set id = ${id} ,title = ${title} , price= ${price} ,state= ${state} , tags= ${tags} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchases(req, res) {
    db.none('delete from purchases where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//purchase_items
function getAllPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success', 
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {

            console.log('ERROR:', error)
        })
}

function getPurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(500)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieve purchase_items id: req.params.id'
                })
            console.log('ERROR:', error)
        })
}

function insertPurchase_items(req, res) {
    db.none('insert into purchase_items(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchase_items(req, res) {
    db.none('update purchase_items set id = ${id} ,title = ${title} , price= ${price} , tags= ${tags} where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchase_items(req, res) {
    db.none('delete from purchase_items where id ='+ req.params.id , req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    //user
    getAllUsers,
    getUserByID,
    insertUser,
    updateUser,
    deleteUser,
    //purchases
    getAllPurchases,
    getPurchasesByID,
    insertPurchases,
    updatePurchases,
    deletePurchases, 
    //Purchase_items
    getAllPurchase_items,
    getPurchase_itemsByID,
    insertPurchase_items,
    updatePurchase_items,
    deletePurchase_items
};