const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Cont = require('./models/data.js')
require('dotenv').config()
const app = express();
const mongoDB = require('./db')
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT || 3000

mongoDB();



app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/data', async (req, res) => {
  try {
    data = await Cont.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
})

app.post('/compose', async (req, res) => {
  const data = req.body;
  if (data.password === process.env.PASSWORD) {
    await Cont.create({ title: req.body.title, content: req.body.content });
  }
  res.send('Data received successfully.');
});

app.post('/dataById', async(req, res)=>{
  const data = req.body;
  const dataId = await Cont.find({"_id":data.id});
  res.send(dataId);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})