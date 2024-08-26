SELECT SUM(length) FROM film INNER JOIN film_actor
    ON film.film_id = film_actor.film_id
    INNER JOIN actor
    ON film_actor.actor_id = actor.actor_id
    WHERE first_name = 'ANGELA' AND last_name = 'WITHERSPOON';