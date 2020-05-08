import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import delay from 'express-delay';
import authRouter from './routes/auth';
import profileRouter from './routes/profile';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(delay(50, 300));
app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/profile', profileRouter);
export default app;
