// Mount the sauceRouter with app.use so that a GET /sauces request sends back the sauces array.

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const pastas = ['agnolotti', 'cavatelli', 'gemelli', 'tortellini'];

//create router for pasta
const pastasRouter = express.Router();
app.use('/pastas', pastasRouter);

pastasRouter.get('/', (req, res, next) => {
  res.send(pastas);
});

//create router for pasta
const sauceRouter = express.Router();
app.use('/sauces', sauceRouter );

const sauces = ['carbonara', 'primavera', 'bolognese', 'puttanesca', 'fra diavolo']

sauceRouter.get('/', (req, res, next) => {
  res.send(sauces);
});
