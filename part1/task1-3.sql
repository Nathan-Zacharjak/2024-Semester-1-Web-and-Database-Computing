DROP DATABASE IF EXISTS task1_3;
CREATE DATABASE task1_3;
USE task1_3;


CREATE TABLE Users (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    hash VARCHAR(256),
    salt VARCHAR(128),
    email VARCHAR(100) UNIQUE,
    PRIMARY KEY (user_id)
);
INSERT INTO Users
    VALUES (1, "admin", "9322bf1ed3c721a9476e161f9df79dd5e67a285c43f102d98a3e7328695c588e237ca16f1e6f5e2650af6c71adfb35f9627c294bd924a677c4773377447d9b1f", "3e99bf8d9518884303c03933b3b25501a671c040af57d3bf5c87081c0ec5881a", "admin@admin.com");
INSERT INTO Users
    VALUES (2, "bob", "9322bf1ed3c721a9476e161f9df79dd5e67a285c43f102d98a3e7328695c588e237ca16f1e6f5e2650af6c71adfb35f9627c294bd924a677c4773377447d9b1f", "3e99bf8d9518884303c03933b3b25501a671c040af57d3bf5c87081c0ec5881a", "bob@bob.com");


CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT,
    order_date_time TIMESTAMP,
    user_id INT,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE SET NULL
);
INSERT INTO Orders
    VALUES (1, "2024-06-21 02:37:55", 1);
INSERT INTO Orders
    VALUES (2, "2024-06-10 02:37:55", 2);


CREATE TABLE Shoes (
    shoe_id INT AUTO_INCREMENT,
    size INT,
    style VARCHAR(100),
    brand VARCHAR(100),
    price DECIMAL(6,2),
    PRIMARY KEY (shoe_id)
);
INSERT INTO Shoes
    VALUES (1, 10, "boots", "nike", 19.95);
INSERT INTO Shoes
    VALUES (2, 5, "sandals", "rivers", 9.95);


CREATE TABLE Purchases (
    purchase_id INT AUTO_INCREMENT,
    quantity INT,
    order_id INT,
    shoe_id INT,
    PRIMARY KEY (purchase_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (shoe_id) REFERENCES Shoes(shoe_id) ON DELETE SET NULL
);
INSERT INTO Purchases
    VALUES (1, 2, 1, 1);
INSERT INTO Purchases
    VALUES (2, 4, 2, 2);

-- SELECT username, email FROM Users
--     INNER JOIN Orders ON Users.user_id = Orders.user_id
--     INNER JOIN Purchases ON Orders.order_id = Purchases.order_id
--     WHERE shoe_id = 1
--     AND DATEDIFF(NOW(), order_date_time) < 5;