const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
const mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

app.use(cors());

var userId;
app.use(morgan('combined'))


app.get('/sd.html', (req, res, next) => {
    // console.log("Responding to root")

    res.send("Hello Crazfree");
});

// app.get("/users", (req, res) => {
//     var user1 = {
//         fisrt_name: "sam",
//         Last_name: "jain"
//     }
//     res.json(user1)
// })

app.get('/users/:id', (req, res) => {
    // console.log("Fetching users with id " + req.params.id)
    userId = req.params.id;
    const queryString = "SELECT * FROM first_year WHERE USN = ?"
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("You got an eror " + err);
        } else {
            console.log("let's see");
            res.json(rows);
        }
    });
});

app.get('/users/', (req, res) => {
    // console.log("Fetching users with id " + req.params.id)
    // userId = req.params.id;
    const queryString = "SELECT * FROM first_year"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("You got an eror " + err);
        } else {
            console.log("let's see");
            res.json(rows);
        }
    });
});

app.listen(4003, () => {
    console.log("Server is listening on 4003");
})

module.exports = app;