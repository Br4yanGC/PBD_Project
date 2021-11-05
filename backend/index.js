var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 9000;

//Método get que selecciona los todos productos de determinada bodega
//por medio de su user_id
/*
app.get('/products/:user_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();

  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, product_stock, created_date, modified_date " +
                " FROM products " +
                " WHERE user_id = ? ";
  var myValues = [req.params.user_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});
*/

/*
  Método get que selecciona los todos productos de determinada bodega
  por medio de su user_id
*/
app.get('/products/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();

  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, product_stock, created_date, modified_date " +
                " FROM products " +
                " WHERE product_id = ? ";
  var myValues = [req.params.product_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results[0]);
    connection.end();
  });
});

/* 
  Método get que selecciona los productos de determinado tipo
  de 1 sola bodega. Por ejemplo probar en Postman: 
  localhost:9000/products?user_id=1&product_type=viveres
  Eso devolvera todos los productos de la bodedga 1 del tipo viveres. 
*/
app.get('/products', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();

  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, product_stock, user_id, created_date, modified_date " +
                " FROM products " +
                " WHERE 1 = 1 ";
  var myValues = [];

  if(req.query.user_id){
    myQuery += " AND user_id = ? ";
    myValues.push(req.query.user_id);
  }
  if(req.query.product_type){
    myQuery += " AND UPPER(product_type) = UPPER(?) ";
    myValues.push(req.query.product_type);
  }
  console.log(myQuery, myValues);
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/* 
  Método get que selecciona los productos ADD TO CART
  de 1 sola bodega. Por ejemplo probar en Postman: 
  localhost:9000/productsCart?user_id=1
  Eso devolvera todos los productos de la bodedga 1 del tipo viveres. 
*/
app.get('/productsCart', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();

  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, user_id " +
                " FROM cart " +
                " WHERE 1 = 1 ";
  var myValues = [];

  if(req.query.user_id){
    myQuery += " AND user_id = ? ";
    myValues.push(req.query.user_id);
  }
  
  console.log(myQuery, myValues);
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

//Método para agregar productos a una determindad bodega mediante el user_id de la bodega
// Por ejemplo: localhost:9000/products/2
// En el body debe ir lo siguiente: 
/* 
{
  "product_name": "Cepillo Dental",
  "product_trademark": "Colgate",
  "product_price": 3.5,
  "product_type": "aseo y limpieza",
  "product_stock": 5
}
*/
// Esto agrega a la bodega del usuario 2 el producto de cepillo dental.
app.post('/products', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });

  connection.connect();
  var myQuery = " INSERT INTO products (product_name, product_trademark, product_price, " +
                " product_type, product_stock, user_id, created_date, modified_date) " +
                " VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW()); ";
  var myValues = [req.body.product_name, req.body.product_trademark,
      req.body.product_price, req.body.product_type, req.body.product_stock, req.body.user_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

// Esto agrega al shopping-cart 1 producto de cepillo dental.
app.post('/cart', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });

  connection.connect();
  var myQuery = " INSERT INTO cart (product_name, product_trademark, product_price, " +
                " product_type, user_id) " +
                " VALUES (?, ?, ?, ?, ?); ";
  var myValues = [req.body.product_name, req.body.product_trademark,
      req.body.product_price, req.body.product_type, req.body.user_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

//Método que borra un producto de un determinado usuario (Es decir solo de 1 bodega)
// Se utiliza tanto el user_id y también el product_id
//Por ejemplo: localhost:9000/products/2/52 
//Esto borra el producto con el product_id 52 de la bodega del usuario 2.
app.delete('/products/:user_id/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " DELETE FROM products " +
                " WHERE product_id = ?; ";
  var myValues = [ req.params.product_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

//Método que borra un producto de un determinado usuario en el SHOPPING CART
// Se utiliza tanto el user_id y también el product_id
//Por ejemplo: localhost:9000/products/2/52 
//Esto borra el producto con el product_id 52 de la bodega del usuario 2.
app.delete('/productsCart/:user_id/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " DELETE FROM cart " +
                " WHERE product_id = ?; ";
  var myValues = [ req.params.product_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

//Modificar un producto de un con su respectivo product_id
//Por ejemplo: localhost:9000/products/51
/*{
  "product_name": "Gaaa Dental",
  "product_trademark": "Colgate",
  "product_price": 3.5,
  "product_type": "aseo y limpieza",
  "product_stock": 5
}*/
//Esto modifica el producto con product_id 51.

app.put('/products/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });

  connection.connect();
  var myQuery = " UPDATE products SET modified_date = NOW() ";
  var myValues = [ ];
  
  if (req.body.product_name){
    myQuery += " , product_name = ? ";
    myValues.push(req.body.product_name);
  }
  if (req.body.product_trademark){
    myQuery += " , product_trademark = ? ";
    myValues.push(req.body.product_trademark);
  }
  if (req.body.product_price){
    myQuery += " , product_price = ? ";
    myValues.push(req.body.product_price);
  }
  if (req.body.product_type){
    myQuery += " , product_type = ? ";
    myValues.push(req.body.product_type);
  }
  if (req.body.product_stock){
    myQuery += " , product_stock = ? ";
    myValues.push(req.body.product_stock);
  }

  myQuery += " WHERE product_id = ? "
  myValues.push(req.params.product_id);

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

app.post('/users', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " INSERT INTO users (username, password, modified_date, created_date) " +
                " VALUES (?, MD5(?), NOW(), NOW()) ";
  var myValues = [ req.body.username, req.body.password ];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

app.post('/login', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });

  connection.connect();
  var myQuery = " SELECT user_id, username " +
                " FROM users " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results[0]);
    connection.end();
  });
});

app.listen(port, function(){
  console.log("Server start in port 9000!")
})

