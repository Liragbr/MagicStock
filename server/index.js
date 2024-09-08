const express = require('express');
const app = express();
const postgresql = express('db');

const db = postgresql.createPool({
 
    host:"localhost",
    user:"user_db_1725757023783_1zivs6g1lyj",
    password:"<DlEh*YrKhMj)39c",
    database:"db_1725757023783_1zivs6g1lyj",
});
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3001, () => {
  console.log('Hello World');
});