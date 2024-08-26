var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Task 3.1
let lastvisit = "";
router.get("/last.txt", function(req, res, next){
  res.send(lastvisit);
  let d = Date();
  lastvisit = d.toString();
});

// Task 3.2
let colours = ["red", "yellow", "green", "blue"];
let index = 0;
router.get("/color.html", function(req, res, next){
  let colour = colours[index];

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Task 3.2</title>
      <link rel="stylesheet" href="stylesheets/style.css">
  </head>

  <body>
      <h1 class="${colour}">${colour}</h1>
  </body>
  </html>`);

  index+=1;
  if (index > 3) {
    index = 0;
  }
});

// Task 3.3
let timestamps = [];
router.get("/log.html", function(req, res, next){
  timestamps.push(Date().toLocaleString());

  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Task 3.3</title>
      <link rel="stylesheet" href="stylesheets/style.css">
  </head>

  <body>
      <ul>`;

  for (const timestamp of timestamps) {
    html = html + "<li>" + timestamp + "</li>\n";
  }

  html = html + `</ul></body></html>`;

  res.send(html);
});

// Task 3.4
let visitedBefore = false;
router.get("/first.html", function(req, res, next){
  if (!visitedBefore){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Task 3.4</title>
        <link rel="stylesheet" href="stylesheets/style.css">
    </head>

    <body>
        <h1><a href="/main.html">Welcome</a></h1>
    </body>
    </html>`);

    visitedBefore = true;

  } else {
    res.redirect("/main.html");
  }
});

router.get("/main.html", function(req, res, next){
  if (visitedBefore){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Task 3.4</title>
        <link rel="stylesheet" href="stylesheets/style.css">
    </head>

    <body>
        <h1>My main site</h1>
        <p>random text</p>
    </body>
    </html>`);

    visitedBefore = true;

  } else {
    res.redirect("/first.html");
  }
});

// Task 4.2
let coloursIndex = 0;
router.get("/color.txt", function(req, res, next){
  let colour = colours[coloursIndex];
  res.send(colour);

  coloursIndex+=1;
  if (coloursIndex > 3) {
    coloursIndex = 0;
  }
});

// Task 4.3
let timestamps2 = [];
router.get("/log.json", function(req, res, next){
  timestamps2.push(Date().toLocaleString());
  let string = JSON.stringify(timestamps2);
  res.send(string);
});

router.get("/log-ro.json", function(req, res, next){
  res.send(JSON.stringify(timestamps2));
});

// Task 4.4
router.get("/contact.ajax", function(req, res, next){
  res.send(`<a href="mailto:nathan.zacharjak@student.adelaide.edu.au">
    nathan.zacharjak@student.adelaide.edu.au
  </a>`);
});

router.get("/search.ajax", function(req, res, next){
  res.send(`<input type="text">
  <button type="button">search</button>`);
});

// Task 4.5
let acceptedBefore = false;
router.get("/accept", function (req, res, next) {
  res.sendStatus(200);
  acceptedBefore = true;
});

router.get("/content.ajax", function (req, res, next) {
  if (acceptedBefore) {
    res.send(`<p id="acceptText">You accepted</p>
    <p>Congrats!</p>`);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
