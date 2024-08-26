SELECT name, rental_date FROM rental INNER JOIN customer_list
    ON rental.customer_id = customer_list.ID
    WHERE return_date IS NULL
    ORDER BY rental_date ASC
    LIMIT 1;