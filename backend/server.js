import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import contractsRoutes from '../backend/routes/contract.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contracts', contractsRoutes);

app.listen(3000, () => {
  console.log('Servidor backend en http://localhost:3000');
});
