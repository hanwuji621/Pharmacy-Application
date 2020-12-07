var mysql = require('mysql');
var async = require('async');

var con = mysql.createConnection({
  host: "pharmapp.cjtng9j3effi.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "EwJaeD^&kX56kF%PRt",
  database: "pharmapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


function getDrugs(callback)
{
    con.query('SELECT * from drugs', function(err, result)
    {
        if (err)
            callback(err,null);
        else
            callback(null,result);
    });
}

getDrugs(function(err,data){
        if (err) {
            console.log("ERROR : ", err);
        } else {
            console.log("result from db is : ", data);
        }
});





// // For drugs
// con.query("select * from drugs;", function (err, result) {
//   if (err) throw error;
//   setValue(result);
// });
//
// var lenRow = queryResult.length;
//
// for (i = 0; i < lenRow; i++) {
//   console.log("## row is " + i);
//   console.log(queryResult[i].drug_name + " " + queryResult[i].price + " " + queryResult[i].strength);
// }


con.end();
