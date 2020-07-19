// Write a GET /sausages route that sends back the whole sausageTypes array.


const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const sausagesRoute = express.Router();
app.use('/sausages',sausagesRoute)

sausagesRoute.get('/', (req, res, next) => {
 res.send(sausageTypes); 
});
