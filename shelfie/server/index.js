require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      app = express(),
      controller = require('../server/controller');
      
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

app.listen(SERVER_PORT, () => console.log(`Server is crushing it on ${SERVER_PORT}`));