const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();


const server = require('./server');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


// read
app.get("/getAll", (request, response) =>{
    response.json({
        sucess: true
    })
});





app.listen(process.env.PORT, ()=>{
    console.log('app is running')
})