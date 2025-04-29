const mysql = require('mysql2');

const db = mysql.createConnection({
    'host': 'localhost',
    'user':'root',
    'password':'',
    'database' : 'mysql_crud_db'
})

db.connect((err)=>{
    if(err){
        console.log("Error Connecting Database",err);
        return;
    }
    console.log("Connected to mysql")
})

module.exports = db;