var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function (req, res, next) {

  // if ('user' in req.session) {
  //   console.log(req.session.user);
  // }


  req.pool.getConnection(function (err, connection) {
    if (err) {
      // console.log(err);
      res.sendStatus(500);
      return;
    }
    var query = `SELECT  q_tags.tags,
                          users.given_name AS author,
                          questions.title,
                          questions.content,
                          questions.timestamp,
                          questions.q_id,
                          IFNULL(q_up.tally,0) AS upvotes
                  FROM questions INNER JOIN users ON questions.author = users.u_id
                  LEFT JOIN q_tags ON q_tags.question = questions.q_id
                  LEFT JOIN q_up ON q_up.question = questions.q_id;`;
    connection.query(query, function (queryError, rows, fields) {
      connection.release(); // release connection
      if (queryError) {
        // console.log(queryError);
        res.sendStatus(500);
        return;
      }
      for (let row of rows) {
        row.tags = row.tags.split(',');
      }
      res.json(rows); // send response
    });
  });

});


module.exports = router;
