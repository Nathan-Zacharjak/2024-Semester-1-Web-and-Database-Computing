CREATE VIEW recent_customer
AS
SELECT customer.customer_id, store_id, first_name, last_name, email, address_id, active, create_date, customer.last_update, rental_date AS recent_rental_date FROM customer
    INNER JOIN rental ON customer.customer_id = rental.customer_id
    ORDER BY recent_rental_date DESC
    LIMIT 10;