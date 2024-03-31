import express from 'express';
import indexRouter from './routers/indexRouter.js';
import authRouter from './routers/authRouter.js';
import path from 'path';

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
