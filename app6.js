//Create a POST /soups route. It should add a new soup name to the soups array from the name property of the req.query object. It should also set a status code for ‘Created’

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

const soupsRouter = express.Router();
app.use('/soups', soupsRouter);


soupsRouter.post('/', (req, res, next) => {
  const newSoup = req.query.name;
  soups.push(newSoup);
  res.status(201).send(newSoup);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

