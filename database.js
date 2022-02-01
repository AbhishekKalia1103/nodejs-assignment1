var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'user_database',
    user:'root',
    password:'aK!!0311',
});

module.exports = connection;