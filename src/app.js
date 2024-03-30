import express from 'express';
import indexRouter from './routers/indexRouter.js';
import loginRouter from './routers/loginRouter.js';
import path from 'path';

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Set the views directory and view engine
app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'ejs');

// Use routers
app.use('/', indexRouter);
app.use('/login', loginRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
