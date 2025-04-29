const employeeRoute = require("./app/routes/EmployeeRoute");
const db = require("./db_config/db");
const express = require('express');

//database connection db
// console.log(db)

let app = express();
app.use(express.json());

// routes
app.use('/api',employeeRoute)


app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})