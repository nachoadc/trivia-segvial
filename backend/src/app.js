import express from 'express';
import questionRoutes from "./routes/question.js";

const app = express();

app.use(express.json());

app.disable('x-powered-by');

app.use('/question', questionRoutes);

export default app;