require('dotenv').config();
const massive = require('massive');
const express = require('express');
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
const ctrl = require('./controllers/product_controller')

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  console.log('db connected')
  app.set('db', db)
}).catch(err => console.log(err));

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:product_id', ctrl.getOne)
app.put('/api.products/:product_id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:product_id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Serving it up port ${SERVER_PORT} style!`));