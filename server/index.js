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

// Iniciando o servidor Express na porta 3002
app.listen(3002, () => {
  console.log('Servidor rodando na porta 3002');
});
