import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectDB } from './config/mongo';
import bookRouter from './routes/book.routes';
import { sendError } from './utils/response.util';

process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);

app.use((_req: Request, res: Response) => {
  sendError(res, 404, 'Ruta no encontrada en la API');
});

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  });
};

startServer();