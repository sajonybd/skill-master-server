const express = require('express');
const app = express();
const courses = require('./api/courses.json');
const blogs = require('./api/blogs.json');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Skill Master API Server Running!')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(cr => cr.id === id) || {};
  console.log(course);
  res.send(course)
})

app.get('/blogs', (req, res) => {
  res.send(blogs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})