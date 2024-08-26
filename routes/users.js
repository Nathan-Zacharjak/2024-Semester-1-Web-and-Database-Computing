var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  if (req.method === "POST") {
    console.log("POST from a user");

    if (req.get('Content-Type') !== "application/json") {
      res.sendStatus(412);
    }
  }

  if (req.session.saved_text !== 'It works') {
    res.sendStatus(403);
  } else {
    next();
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let posts = [];
router.post('/addpost', function (req, res) {
  posts.push(req.body);
  res.send();
});

router.get('/getposts', function (req, res) {
  let postsReversed = structuredClone(posts);
  postsReversed.reverse();

  let noOfPosts = req.query.n;
  let postsToSend = [];

  if (noOfPosts && noOfPosts > 0) {
    let i = 0;

    for (const post of postsReversed) {
      postsToSend.push(post);
      i = i + 1;

      if (i >= noOfPosts) {
        break;
      }
    }
  } else {
    postsToSend = postsReversed;
  }

  res.send(postsToSend);
});

router.get('/getposts/id/:n', function (req, res) {
  let id = req.params.n;
  let post = posts[id];
  res.send(post);
});

router.get('/accepted', function (req, res) {
  if (req.session.saved_text === 'It works') {
    res.send('It works');
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
