const express = require('expess');
const mysql = require('mysql');
const port = 3000;


const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',


})

app.get("/", (req,res) => {
    res.send("<h1>Hello world</h1>");
});

app.listen(port, () =>{
    console.log("");
})