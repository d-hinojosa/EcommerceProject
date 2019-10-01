const mysql = require("mysql");
const morgan = require("morgan");
const router = require('express').Router()


////////////////////////////////////
//   instantiate middleware    ////
//////////////////////////////////


// router.use(morgan);

////////////////////////////////////
//  create database connection ////
//////////////////////////////////
var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306,
  user: "root",
  password: process.env.MYPASSWORD,
  database: "ecommerce_dB"
});

////////////////////////////////////
////       api catalogue       ////
//////////////////////////////////

// Health Check -- Checking for valid db connection by pinging the host
router.get("/routerlication/healthcheck", function(req, res) {
	connection.ping(function (err) {
		if (err) throw err;
		console.log('Server responded to ping');
		res.status(200).json("Connection is working");
	})
});

////////////////////////////////////
////       Products API        ////
//////////////////////////////////

// fetch all products
router.get("/products", (req, res) => {

  // Get query parameter from request
  var orderBy = req.query.orderBy ? req.query.orderBy : null ;
  console.log(orderBy);

  // If query parameter is set then filter results
  if (orderBy) {
    // Order from $$$ - $
    if (orderBy === 'Desc'){
      connection.query("SELECT * FROM Products ORDER BY product_price DESC", function(err, data) {
        if (err) {
          console.log(err)
          res.status(500).json("Something went wrong");
        }
        res.status(200).json(data);
      });
    } else if (orderBy === 'Asc') {
      connection.query("SELECT * FROM Products ORDER BY product_price ASC", function(err, data) {
        if (err) {
          console.log(err)
          res.status(500).json("Something went wrong");
        }
        res.status(200).json(data);
      });
    }else {
      connection.query("SELECT * FROM Products", function(err, data) {
        if (err) {
          console.log(err)
          res.status(500).json("Something went wrong");
        }
        res.status(200).json(data);
      });
    }

  }
  
});

// fetch specfic product based on product id
router.get("/products/:productid", (req, res) => {
  let product = req.params.productid;
  connection.query("SELECT * FROM Products WHERE product_id = ?", [product], function(
    err,
    data
  ) {
    if (err) {
			console.log(err);
      res.status(500).json({ message: "error grabbing product" });
		}
		
		if (data && data.length) {
			res.status(200).json(data);
		} else {
			res.status(404).json("Product does not exist");
		}

    
  });
});

router.get("/invoiceprice/:productid/:quant", (req, res) => {
  let product = req.params.productid;
  let quantity = req.params.quant;
  connection.query(
    "SELECT ? as product_id, product_name, (price * ?)AS invoice_price FROM Products WHERE product_id = ?",
    [product, quantity, product],
    (err, data) => {
      res.json(data);
    }
  );
});
/*
// fetch specific product and calculate invoice price
router.get('/invoiceprice/:productid/:quant', (req, res) => {  
  
//   this api endpoint retrieves a product based on product id
//   and multiplies the quantity ordered (req.params.quant) by
//   the price for the product. The object is updated with invoice
//   price and returned 
  
})
*/


module.exports = router