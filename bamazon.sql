DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camera", "Electronics", 87.50, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Assecories", 12.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Electronics", 199.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mirror", "Home Decor", 34.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Air", "Electronics", 1450.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Swimsuit", "Clothing", 12.35, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smart TV", "Electronics", 150.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pots", "Kitchen", 65.00, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Magic Bullet Blender", "Kitchen & Dining", 29.99, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keruig-Coffee Maker", "Kitchen & Dining", 139.99, 8);

