import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
import authRouter from './presentation/routes/authRoutes'
import { connectDB } from './infrastructure/config/db';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
});

export default app;