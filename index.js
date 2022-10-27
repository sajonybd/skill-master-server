const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Skill Master API Server v1 Running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})