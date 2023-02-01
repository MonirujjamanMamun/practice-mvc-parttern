const express = require('express');
const errorHandelar = require('./errorHandelar');
const productsRouter = require('./router/products.router');
const toolsRouter = require('./router/tools.router');
const { connectToServer } = require('./utils/dbConection');
const app = express();
app.use(express.json());
const port = 5000;

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(port, `Server is running ${port}`);
    });
  } else {
    console.log(err);
  }
});

app.get('/', (req, res) => {
  res.send('First get api');
});

app.use('/api/tools', toolsRouter);

app.use('/api/products', productsRouter);

app.use(errorHandelar);

app.all('*', (req, res) => {
  res.send('Router not found');
});
