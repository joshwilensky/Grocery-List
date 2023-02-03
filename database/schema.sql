CREATE DATABASE groceries;

USE groceries;

CREATE TABLE groceries (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(255),
  quantity INT,
  PRIMARY KEY (id)
);