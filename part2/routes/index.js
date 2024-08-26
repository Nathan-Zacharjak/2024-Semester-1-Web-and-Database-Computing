var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get_actors', function (req, res, next) {
  req.pool.getConnection(function(err, connection){
    if (err) {
      res.sendStatus(500);
      return;
    }

    var query = "SELECT first_name, last_name FROM actor";
    connection.query(query, [], function(qerr, rows, fields){
      connection.release();
      if (qerr) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

router.post('/send_actor', function (req, res, next) {
  req.pool.getConnection(function(err, connection){
    if (err) {
      res.sendStatus(500);
      return;
    }


    var actor = req.body;

    var query = "INSERT INTO actor (first_name, last_name) VALUES (?,?)";
    connection.query(query, [actor.first_name, actor.last_name], function(qerr, rows, fields){
      connection.release();
      if (qerr) {
        res.sendStatus(500);
      }
    });
  });
});

router.get('/test', function(req, res){
  // Test connect to the database
  req.pool.getConnection(function(err, connection){
    if (err) {
      res.sendStatus(500);
      return;
    }

    var query = "SELECT * FROM actor WHERE first_name = ?";
    var name = "ED";
    connection.query(query, [name], function(qerr, rows, fields){
      connection.release();
      if (qerr) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

module.exports = router;
