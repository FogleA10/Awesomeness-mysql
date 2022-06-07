const mysql=require("mysql2")

require('dotenv').config();

const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // {TODO: Add your MySQL password}
        password: process.env.db_password,
        database: 'employee_db'
    },
    console.log(`Connected to the inventory_db database.`)
);
connection.connect(function(err){
    if(err) throw err;
})
module.exports = connection