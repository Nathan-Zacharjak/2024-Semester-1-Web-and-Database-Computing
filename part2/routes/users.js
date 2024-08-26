var argon2 = require('argon2');
var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {

    if ('user' in req.body && req.body.user !== null
        && 'pass' in req.body && req.body.pass !== null) {

        req.pool.getConnection(function (err, connection) {
            if (err) {
                // console.log(err);
                res.sendStatus(500);
                return;
            }
            var query = `SELECT u_id,given_name,family_name,username,email,password_hash
                            FROM users WHERE username = ?`;
            connection.query(query, [req.body.user], async function (qErr, rows, fields) {
                connection.release(); // release connection
                if (qErr) {
                    // console.log(qErr);
                    res.sendStatus(500);
                    return;
                }
                if (rows.length > 0) {
                    let user = rows[0];
                    let valid = await argon2.verify(user.password_hash, req.body.pass);

                    if (valid) {
                        delete user.password_hash;
                        req.session.user = user;
                        res.json(user);
                    } else {
                        res.sendStatus(401);
                    }

                } else {
                    res.sendStatus(401);
                }
            });
        });


    } else {
        res.sendStatus(400);
    }

});



router.post('/signup', async function (req, res, next) {

    if ('user' in req.body && req.body.user !== null
        && 'pass' in req.body && req.body.pass !== null
        && 'email' in req.body
        && 'given_name' in req.body
        && 'family_name' in req.body) {


        let hash = await argon2.hash(req.body.pass);
        // console.log(hash);

        req.pool.getConnection(function (err, connection) {
            if (err) {
                // console.log(err);
                res.sendStatus(500);
                return;
            }
            var query = `INSERT INTO users (given_name,family_name,username,password_hash,email)
                            VALUES (?,?,?,?,?);`;
            connection.query(query, [
                req.body.given_name,
                req.body.family_name,
                req.body.user,
                hash,
                req.body.email], function (qErr, rows, fields) {
                    connection.release(); // release connection
                    if (qErr) {
                        // console.log(qErr);
                        res.sendStatus(500);
                        return;
                    }
                    res.end();
                });
        });



    } else {
        res.sendStatus(400);
    }

});


router.use(function (req, res, next) {
    if ('user' in req.session) {
        next();
    } else {
        res.sendStatus(401);
    }
});


router.post('/logout', function (req, res, next) {

    delete req.session.user;
    res.send();

});


router.post('/addpost', function (req, res, next) {

    if ("title" in req.body && req.body.title !== null
        && "content" in req.body && req.body.content !== null
        && "tags" in req.body) {
        req.body.author = req.session.user;

        req.pool.getConnection(function (err, connection) {
            if (err) {
                res.sendStatus(500);
                // console.log(err);
                return;
            }
            var query = `INSERT INTO questions (author,title,content,timestamp) VALUES (?,?,?,NOW());`;
            const parameters = [req.body.author.u_id, req.body.title, req.body.content];
            connection.query(query, parameters, function (queryError, rows, fields) {
                if (queryError) {
                    res.sendStatus(500);
                    // console.log(queryError);
                    connection.release(); // release connection if error
                    return;
                }

                // If successful, add tags
                // Build & run query
                var tagsQuery = 'INSERT INTO question_tags (tagname,question) VALUES ';
                let tagsParameters = [];

                for (const tag of req.body.tags) {
                    tagsQuery += `(?,LAST_INSERT_ID()),`;
                    tagsParameters.push(tag);
                }

                tagsQuery = tagsQuery.replace(/,$/, '');

                // console.log(tagsQuery, tagsParameters);

                connection.query(tagsQuery, tagsParameters, function (qErr, qRows, qFields) {
                    connection.release(); // release connection
                    if (qErr) {
                        res.sendStatus(500);
                        // console.log(qErr);
                        return;
                    }
                    res.end(); // send response
                });
            });
        });

    } else {
        res.sendStatus(400);
    }


});


module.exports = router;
