var express = require('express');
var app = express();
var connection = require('./database');

app.get('/', function(req, res){
    let sql = "select full_name as Name , sum(pAmount) as Purchases, sum(sAmount) as Sells from user_info, transactions where user_info.uid = transactions.uid group by user_info.uid";
    connection.query(sql, function(err, results){
        if(err) throw error;
        res.send(results);
    });
});

app.listen(3000, function(){
    console.log('App listening');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database Connected');
    });
});  