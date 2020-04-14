# Create the `burgers_db`
CREATE DATABASE burgers_db;

# Switch to or use the `burgers_db`
USE burgers_db;

# Create a `burgers` table
CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)
);
  


