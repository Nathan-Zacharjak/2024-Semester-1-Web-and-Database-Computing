var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res){
  var param = req.query.drink;
  switch (param) {
    case 'tea':
      res.send('A delicious cup of tea!');
      break;

    case 'coffee':
      res.sendStatus(418);
      break;

    default:
      res.sendStatus(400);
      break;
  }
});

var pass_it_on_text = 'first';
router.post('/pass-it-on', function(req, res){
  var param = req.body.message;

  if (param === '' || param === null) {
    res.sendCode(400);
  } else {
    res.send(pass_it_on_text);
    pass_it_on_text = param;
  }

});

router.post('/combine', function(req, res){
  var { lines, suffix } = req.body;
  var response = '';

  for (const line of lines) {
    response = response + line + suffix + '\n';
  }

  res.send(response);
});

router.get('/cookie', function (req, res, next) {
  let cookieNumber = req.cookies.task3_1;

  if (!cookieNumber) {
    cookieNumber = 1;
  } else {
    cookieNumber++;
  }

  res.cookie('task3_1', cookieNumber);
  res.send();
});

router.post('/tcaccept', function (req, res, next) {
  req.session.saved_text = 'It works';
  res.send('It works');
});

module.exports = router;
