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

app.listen(SERVER_PORT, () => console.log(`Server is crushing it on ${SERVER_PORT}`));