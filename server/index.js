const express = require('express');
const { Pool } = require("pg");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});

const pool = new Pool({
  user: "postgre",
  host: "localhost",
  database: "postgres",
  password: "Rogs4455@",
  port: 5432,
});

app.get("/dados", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sua_tabela");
    res.json(result.rows); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar dados");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});