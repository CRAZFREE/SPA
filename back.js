const express= require('express');
const cors= require('cors');
let mysql=require('mysql');
let config= require('./config.js');
let connection= mysql.createConnection(config);
const app= express();
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
connection.connect(err=>{
    if(err){
        return err;
    }
});

app.get('/products/add',(req,res)=>{
    const{USN,NAME,ADM_YEAR,ADM_THROUGH,BATCH_YEAR}=req.query
    const INSERT_W=`'INSERT INTO students (USN, NAME, ADM_YEAR, ADM_THROUGH, BATCH_YEAR) VALUES (${USN}, ${NAME},${ADM_YEAR} ,${ADM_THROUGH},${BATCH_YEAR})`
    
    connection.query(INSERT_W,(err,results)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfull")
        }
    })
})

app.get('/',(req,res)=>{
    res.send("Go to /products to check the values and /products/add to add the values to the DBMS");
});

app.get('/products',(req,res)=>{
    connection.query(select,(err,results,fields)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});



let select='SELECT * FROM student';

app.listen(4000,()=>{
    console.log('Working on port 4000')
});