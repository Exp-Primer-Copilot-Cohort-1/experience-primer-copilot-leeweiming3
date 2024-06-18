//Create web server
const express = require('express');
//Create web server
const app = express();
//Create web server
const port = 3000;
//Create web server
const path = require('path');
//Create web server
const bodyParser = require('body-parser');
//Create web server
const fs = require('fs');
//Create web server
const commentsPath = path.join(__dirname, 'comments.json');
//Create web server
const comments = require(commentsPath);
//Create web server
app.use(express.static('public'));
//Create web server
app.use(bodyParser.json());
//Create web server
app.get('/comments', (req, res) => {
  res.json(comments);
});
//Create web server
app.post('/comments', (req, res) => {
  comments.push(req.body);
  fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});
//Create web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//