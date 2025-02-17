const express = require('express')
const dotenv = require('dotenv')
const connectMongoDB = require('./db');

dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.send('Server connected');
});


connectMongoDB();

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});