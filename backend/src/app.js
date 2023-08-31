import express from 'express';
import questionRoutes from "./routes/question.js";
import triviaRoutes from "./routes/trivia.js";

const app = express();

app.use(express.json());

app.disable('x-powered-by');

app.use('/question', questionRoutes);
app.use('/trivia', triviaRoutes);

export default app;