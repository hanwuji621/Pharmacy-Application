// Password and stuff is stored in plain text here

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createPool({
    host: "pharmapp.cjtng9j3effi.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "EwJaeD^&kX56kF%PRt",
    database: "pharmapp"
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/drugs', cors(), function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM drugs', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/insurance', cors(), function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM insurance_data', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/drugs so you can see the data.');
 console.log('Go to http://localhost:3000/insurance so you can see the data.');
});
