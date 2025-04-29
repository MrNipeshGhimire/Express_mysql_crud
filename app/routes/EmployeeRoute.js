let express = require('express');
const { InsertEmployee, FetchEmployee, UpdateEmployee, DeleteEmployee, GetSingleEmployee } = require('../controllers/EmployeeController');

let employeeRoute = express.Router();

//Routes
employeeRoute.get('/get',FetchEmployee)
employeeRoute.post('/insert',InsertEmployee);
employeeRoute.put('/update/:id', UpdateEmployee);
employeeRoute.delete('/delete/:id',DeleteEmployee);
employeeRoute.get('/get/:id',GetSingleEmployee);




module.exports = employeeRoute;