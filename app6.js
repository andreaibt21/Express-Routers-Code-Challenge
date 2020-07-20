//Create a POST /soups route. It should add a new soup name to the soups array from the name property of the req.query object. It should also set a status code for ‘Created’

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

const soupsRouter = express.Router();
app.use('/soups', soupsRouter);


soupsRouter.post('/', (req, res, next) => {
 //new soup from user
  const newSoup = req.query.name;
  //add newsoup to soups
 soups.push(newSoup);
 //send status and new soup
 res.status(201).send(newSoup);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

