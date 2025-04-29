const db = require("../../db_config/db");

const InsertEmployee = (req,res)=>{
    const {name, address, phone} = req.body;

    let sql = "INSERT INTO employee(name,address,phone) values(?,?,?)";
    db.query(sql, [name,address,phone],(err,result)=>{
        if(err){
            res.send({status:0,msg:"Unable to insert data", err})
        }else{
            res.send({status:1, msg:"Data inserted successfully",result})
        }
    })
}

const FetchEmployee = (req,res)=>{
    let sql = "SELECT * FROM employee";
    db.query(sql, (err,result)=>{
        if(err){
            return res.status(500).send({status:0,err:err})
        }
        return res.status(200).send({success:true,data:result})
    })
}

const DeleteEmployee = (req,res)=>{
    let id = req.params.id;
    console.log(id)

    let sql = "DELETE FROM employee WHERE id=?";
    db.query(sql,[id], (err,result)=>{
        if(err){
            return res.send({status:0, msg:"Error Deleting data",err:err});
        }
        return res.send({status:1,msg:"Data deleted successfully",result})
    })
    
}

const UpdateEmployee =(req,res)=>{
    let id = req.params.id;

    const {name,address,phone}=req.body;

    let sql = "UPDATE employee SET name=?, address=?, phone=? WHERE id=?";
    db.query(sql,[name,address,phone,id], (err,result)=>{
        if(err){
            return res.send({status:0,msg:"Error Updating Data",err})
        }
        return res.send({status:1,msg:"Data updated successfully",result})
    })

}

const GetSingleEmployee =(req,res)=>{
    let id = req.params.id;
    let sql = "SELECT * from employee WHERE id=?";
    db.query(sql,[id], (err,result)=>{
        if(err){
            return res.send({status:0, msg:"Error selecting data",err});
        }
        return res.send({status:1, data:result})
    })

}

module.exports = {InsertEmployee,FetchEmployee,UpdateEmployee,DeleteEmployee,GetSingleEmployee}