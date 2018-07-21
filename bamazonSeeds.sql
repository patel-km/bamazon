DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT(50) NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NOT NULL,
  dept VARCHAR(100) NOT NULL,
  price DECIMAL (5,2) NOT NULL,
  stock INT (50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, dept, price, stock)
VALUES ("Hammock", "Outdoor", "40", "40");

INSERT INTO products (item, dept, price, stock)
VALUES ("Kayak", "Outdoor", "120", "30");

INSERT INTO products (item, dept, price, stock)
VALUES ("Wireless Headphones", "Electronics", "100", "30");

INSERT INTO products (item, dept, price, stock)
VALUES ("Multicolored Pen Set", "Arts/Crafts", "20", "50");

INSERT INTO products (item, dept, price, stock)
VALUES ("High Speed Blender", "Kitchenware", "300", "30");

INSERT INTO products (item, dept, price, stock)
VALUES ("Oreo O's", "Groceries", "3", "50");

INSERT INTO products (item, dept, price, stock)
VALUES ("Toaster Oven", "Kitchenware", "25", "30");

INSERT INTO products (item, dept, price, stock)
VALUES ("500 Piece puzzle", "Games", "3", "50");

INSERT INTO products (item, dept, price, stock)
VALUES ("Glitter", "Arts/Crafts", "5", "50");

INSERT INTO products (item, dept, price, stock)
VALUES ("Reusable straws", "Kitchenware", "10", "30");