require("dotenv").config();
const mysql = require("mysql");
const router = require("express").Router();


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

connection.connect(function(err){
  if(err){
    console.log("Error connecting to mysql")
    console.log(err)
  }
  else{
    console.log("Connection worked")
  }
});

////////////////////////////////////
////       api catalogue       ////
//////////////////////////////////

// Health Check -- Checking for valid db connection by pinging the host
router.get("/healthcheck", function(req, res) {
  connection.ping(function(err) {
    if (err) throw err;
    console.log("Server responded to ping");
    res.status(200).json("Connection is working");
  });
});

////////////////////////////////////
////       Products API        ////
//////////////////////////////////

// fetch all products
router.get("/products", (req, res) => {
  // Get query parameter from request
  var orderBy = req.query.orderBy ? req.query.orderBy : null;

  // If query parameter is set then filter results
  if (orderBy) {
    // Order from $$$ - $
    if (orderBy === "Desc") {
      connection.query(
        "SELECT * FROM Products ORDER BY product_price DESC",
        function(err, data) {
          if (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
          }
          res.status(200).json(data);
        }
      );
    } else if (orderBy === "Asc") {
      connection.query(
        "SELECT * FROM Products ORDER BY product_price ASC",
        function(err, data) {
          if (err) {
            console.log(err);
            res.status(500).json("Something went wrong");
          }
          res.status(200).json(data);
        }
      );
    }
  } else {
    connection.query("SELECT * FROM Products", function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
      }
      res.status(200).json(data);
    });
  }
});

// fetch specfic product based on product id
router.get("/products/:productid", (req, res) => {
  let product = req.params.productid;
  connection.query(
    "SELECT * FROM Products WHERE product_id = ?",
    [product],
    function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "error grabbing product" });
      }

      if (data && data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json("Product does not exist");
      }
    }
  );
});

////////////////////////////////////
////       Contacts API        ////
//////////////////////////////////

// fetch all contacts
router.get("/contacts", (req, res) => {
  connection.query("SELECT * FROM Contacts", function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    }
    res.status(200).json(data);
  });
});

// Create a contact
router.post("/contacts", (req, res) => {
  
  if (req.body === null || req.body === undefined) {
    res.status(400).json("Please enter a valid contact");
  }

  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    contact_email: req.body.contact_email,
    contact_address: req.body.contact_address,
    city: req.body.city,
    zipcode: req.body.zipcode,
    state: req.body.state,
    phone: req.body.phone
  }
  
  connection.query(
    "INSERT INTO Contacts SET ?",
    contact,
    function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    }
    res.status(200).json(data);
  });
});

// Delete a Contact
router.delete("/contacts/:contactid", (req, res) => {
  let contactId = req.params.contactid;

  connection.query("DELETE FROM Contacts WHERE contact_id = ?", [contactId], function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    }
    res.status(200).json({message: 'Contact was deleted.'});
  });
  
});

// Update a contact
router.put("/contacts/:contactid", (req, res) => {
  let contactId = req.params.contactid;

  if (req.body === null || req.body === undefined) {
    res.status(400).json("Please enter a valid contact information");
  }

  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    contact_email: req.body.contact_email,
    contact_address: req.body.contact_address,
    city: req.body.city,
    zipcode: req.body.zipcode,
    state: req.body.state,
    phone: req.body.phone
  }
  
  connection.query(
    "UPDATE Contacts SET ? WHERE contact_id = ?",
    [contact, contactId],
    function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json("Something went wrong");
    }
    res.status(200).json(data);
  });
});

module.exports = router;
