import express from "express";
import tasksRouter from './routes/tasks.routes.js';
import errorHandler from './middleware/tasks.middleware.js'

const app = express();

app.use(express.json());


app.use(errorHandler.errorHandler);


app.use('/api/tasks', tasksRouter);

export default app;