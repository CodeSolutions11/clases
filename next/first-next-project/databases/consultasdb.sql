
-- Crear base de datos
CREATE DATABASE code_clases;

-- data types 

CHAR, VARCHAR, BOOL, INT, FLOAT, DECIMAL, DATE, DATETIME, TIMESTAMP


-- Seleccionar base de datos
use

-- Crear tablas
CREATE TABLE

-- Eliminar tabla
DROP TABLE

-- creacion de la tabla users
CREATE TABLE users(
    user_id INT,
    user_name VARCHAR(50),
    user_email VARCHAR(100),
    user_date DATE
);

-- Seleccionar todos los datos de registrados en un tabla
SELECT * FROM


-- insertar registros en la tabla users
INSERT INTO users (user_id, user_name, user_email, user_date)
VALUES (1, "Samuel", "samuel@gmail.com", "2024-09-24");

INSERT INTO users (user_id, user_name, user_email, user_date)
VALUES (2, "Rosa", "rosa@gmail.com", "2024-09-24");

INSERT INTO users (user_id, user_name, user_email, user_date)
VALUES (3, "Mercedes", "mercedes@gmail.com", "2024-09-24");

INSERT INTO users (user_id, user_name, user_email, user_date)
VALUES (4, "Ewil", "ewil@gmail.com", "2024-09-24");

--
INSERT INTO users (user_id, user_name, user_email, user_date)
VALUES (1, "Samuel", "samuel@gmail.com", "2024-09-24"),
(2, "Rosa", "rosa@gmail.com", "2024-09-24"),
(3, "Mercedes", "mercedes@gmail.com", "2024-09-24"),
(4, "Ewil", "ewil@gmail.com", "2024-09-24")
;


-- eliminar TODOS registros de la tabla users
DELETE FROM users;

-- Eliminar un registro en particular
DELETE FROM users WHERE user_id=2;

-- Actualizar registros de una tabla
UPDATE users
SET user_name="Jesus", user_email="jesus@gmail.com"
WHERE user_id=4;


-- Modificar columnas de una tabla
ALTER TABLE users
MODIFY COLUMN user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY;

ALTER TABLE users
MODIFY COLUMN user_name VARCHAR(50) NOT NULL
;
ALTER TABLE users
MODIFY COLUMN user_email VARCHAR(100) NOT NULL
;
ALTER TABLE users
MODIFY COLUMN user_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
;


--
SELECT * FROM users
ORDER BY user_name;

SELECT * FROM users
ORDER BY user_name DESC;