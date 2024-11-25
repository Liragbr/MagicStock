import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();
const port = 3000;

// Configuração do pool de conexões do PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bd_ms',
  password: '12345',
  port: 5432,
});

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rota para obter todos os itens
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter itens:', err);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para adicionar um novo usuário
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao registrar usuário:', err);
    res.status(500).send({ error: err.message, details: err });
  }
});

// Rota de login de usuário
app.get('/login', async (req, res) => {
  const { username, password } = req.query;
  console.log(`Tentativa de login com username: ${username} e password: ${password}`);
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );
    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login bem-sucedido', user: result.rows[0] });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (err) {
    console.error('Erro ao fazer login:', err);
    res.status(500).send('Erro no servidor');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});