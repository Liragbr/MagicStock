const express = require('express');
const { Pool } = require('pg');
const app = express();

// Configuração do Pool de Conexões com PostgreSQL
const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '15121608',
  database: 'db_usuario',
  port: 5432,
});

// Middleware para tratar JSON
app.use(express.json());

// Rota POST para inserir um usuário específico no banco de dados
app.post('/add-user', async (req, res) => {
  try {
    // Valores específicos que você deseja inserir
    const query = "INSERT INTO usuarios(email, usuario, senha) VALUES ('fulanindital@gmail.com', 'fulanindital', '123456')";
    
    // Executar a consulta
    await db.query(query);
    res.status(201).send('Usuário inserido com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir usuário:', err);
    res.status(500).send('Erro ao inserir usuário');
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [username, password]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao registrar usuário");
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
    if (result.rows.length > 0) {
      res.status(200).send("Login bem-sucedido");
    } else {
      res.status(401).send("Credenciais inválidas");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao fazer login");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
