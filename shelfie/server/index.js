require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      app = express(),
      controller = require('./controller');
      
const {SERVER_PORT, DB_URI} = process.env;

app.use(express.json());

massive({
  connectionString: DB_URI,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log('DB is connected')
}).catch(err => console.log(err));


app.get('/api/inventory', controller.getItems);
app.get('/api/product/:id', controller.getSingleItem);
app.post('/api/product', controller.addItem);
app.delete('/api/product/:id', controller.deleteItem);
app.put('/api/product/:id', controller.editItem);

app.listen(SERVER_PORT, () => console.log(`Server is crushing it on ${SERVER_PORT}`));