import express from 'express';
import { pool } from '../db.js';

const router = express.Router();
const TABLE = 'contracts_test_santiagoperez';

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT name, premium_amount FROM ${TABLE}`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener contratos' });
  }
});

router.post('/', async (req, res) => {
  const { name, premium } = req.body;
  if (!name || isNaN(premium)) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  try {
    await pool.query(
      `INSERT INTO ${TABLE} (name, premium_amount) VALUES ($1, $2)`,
      [name, premium]
    );
    res.status(201).json({ message: 'Contrato agregado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al agregar contrato' });
  }
});

export default router;