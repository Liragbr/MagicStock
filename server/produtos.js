import express from 'express';
import pkg from 'pg';

const { Pool } = pkg;
const router = express.Router();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bd_ms',
  password: '12345',
  port: 5432,
});

// Rota para adicionar um novo produto
router.post('/', async (req, res) => {
    const { img, name, price, qtd, barcode } = req.body;
    if (!img || !name || !price || !qtd || !barcode) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    try {
      const result = await pool.query(
        'INSERT INTO products (img, name, price, qtd, barcode) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [img, name, price, qtd, barcode]
      );
      res.status(201).json({ message: 'Produto adicionado com sucesso', product: result.rows[0] });
    } catch (err) {
      console.error('Erro ao adicionar produto:', err);
      res.status(500).send('Erro no servidor');
    }
  });

// Rota para atualizar um produto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { img, name, price, qtd, barcode } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET img = $1, name = $2, price = $3, qtd = $4, barcode = $5 WHERE id = $6 RETURNING *',
      [img, name, price, qtd, barcode, id]
    );
    res.status(200).json({ message: 'Produto atualizado com sucesso', product: result.rows[0] });
  } catch (err) {
    console.error('Erro ao atualizar produto:', err);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM products');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Erro ao obter produtos:', err);
      res.status(500).send('Erro no servidor');
    }
  });


// Outras rotas (obter todos os produtos, deletar produto, etc.) podem ser adicionadas aqui

export default router;