var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/search', function (req, res, next) {
    const size = req.body.size.toLowerCase();
    const style = req.body.style.toLowerCase();
    const brand = req.body.brand.toLowerCase();
    const price = req.body.price.toLowerCase();

    if (size === '' && style === '' && brand === '' && price === '') {
        res.status(200).send('empty search');
        return;
    }
    const search = {
        size: size, style: style, brand: brand, price: price
    };

    let query = "SELECT * FROM Shoes WHERE";
    let parameters = [];
    let firstCriteria = true;

    for (const key in search) {
        if (Object.hasOwnProperty.call(search, key)) {
            const criteria = search[key];

            if (criteria === '') {
                continue;

            } else if (firstCriteria) {
                if (key === 'price') {
                    query = query + " " + key + " < ?";
                } else {
                    query = query + " " + key + " = ?";
                }
                firstCriteria = false;

            } else if (key === 'price') {
                query = query + " AND " + key + " < ?";
            } else {
                query = query + " AND " + key + " = ?";
            }

            parameters.push(criteria);
        }
    }

    query = query + " LIMIT 50;";

    // console.log("Search query:", query);

    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            // console.log("Connection error:", err);
            return;
        }

        connection.query(query, parameters, function (err2, rows, fields) {
            connection.release();
            if (err) {
                res.sendStatus(500);
                // console.log("Query error:", err2);
                return;
            }
            // console.log("Rows:", rows);
            res.json(rows);
        });
    });
});

module.exports = router;
