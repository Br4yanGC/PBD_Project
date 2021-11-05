create database StockBodegas;
use StockBodegas;

CREATE TABLE users(
    user_id int NOT NULL AUTO_INCREMENT,
    username varchar(100) NOT NULL UNIQUE,
    password varchar(100) NOT NULL,
    created_date datetime,
    modified_date datetime, 
    PRIMARY KEY (user_id)
);

CREATE TABLE products(
    product_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(100) NOT NULL,
    product_trademark varchar(100) NULL,
    product_price float NOT NULL,
    product_type varchar(100) NOT NULL,
    product_stock int NOT NULL,
    user_id int, 
    created_date datetime,
    modified_date datetime, 
    PRIMARY KEY (product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE cart(
    product_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(100) NOT NULL,
    product_trademark varchar(100) NULL,
    product_price float NOT NULL,
    product_type varchar(100) NOT NULL,
    user_id int,
    PRIMARY KEY (product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (username, password, created_date, modified_date) 
VALUES ('roberto@hotmail.com', MD5('roberto123'), NOW(), NOW());

INSERT INTO users(username, password, created_date, modified_date) 
VALUES ('alonso@hotmail.com', MD5('enero101992'), NOW(), NOW());

INSERT INTO users(username, password, created_date, modified_date) 
VALUES ('alicia@hotmail.com', MD5('alicia22222'), NOW(), NOW());

#Bodega1

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Sal de mesa 1kg', 'EMSAL', 1.60, 'viveres',30,1,now(),now());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lata de atun', 'Campomar', 3.40, 'viveres',23,1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lata de atun', 'Primor',5.70, 'viveres',23,1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lata de atun', 'Vega', 5.20, 'viveres',23,1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Azucar Rubia 1kg', 'BELLs', 3.50, 'viveres',23,1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Pepsi', 2.20, 'bebidas',40, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Seven UP', 1.80, 'bebidas',22, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 1.5lt', 'Inca Kola', 5.90, 'bebidas',22, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 400 ml', 'Big Cola', 1.50, 'bebidas',55, 1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Colores X 12L Triangulaes', 'VINIFAN', 5.80, 'utiles escolares',10, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lapicero 061 Ice Morado', 'Faber Castell', 2.00, 'utiles escolares',15, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lapicero 064 Roller Gel', 'Faber Castell', 3.70, 'utiles escolares',15, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lapicero 061 Ice Rojo', 'Faber Castell', 2.00, 'utiles escolares',15, 1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Detergente 500g','Ace', 4.40, 'aseo y limpieza',15, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Detergente 500g', 'Opal', 4.80, 'aseo y limpieza',15, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Cepillo Dental', 'Colgate', 3.50, 'aseo y limpieza',5, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Cepillo Dental', 'Oral-B', 3.30, 'aseo y limpieza',15, 1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Naranja 2.5kg', NULL, 6.60, 'frutas y verduras', 5, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Platano de seda unidad', NULL, 1.00, 'frutas y verduras', 10, 1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Hot Dog 220g', NULL, 5.20, 'carnes y embutidos', 5, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Pate de higado 100g', NULL, 2.50, 'carnes y embutidos', 10, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Hot dog Ahumado 165g', NULL, 4.40, 'carnes y embutidos', 10, 1,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Galleta de soda', 'San Jorge', 3.10, 'dulces y snacks', 10, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Galleta dulce', 'Black Out', 0.70, 'dulces y snacks', 10, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Galleta dulce', 'Caritas', 0.70, 'dulces y snacks', 10, 1,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Galleta dulce', 'Frac', 0.70, 'dulces y snacks', 10, 1,NOW(),NOW());

#Bodega2:

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Huevos 1kg', NULL, 5.60, 'viveres', 15,2,now(),now());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Aceite 1L', 'Primor', 13.00, 'viveres',10,2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Arroz 1kg', NULL, 5.20, 'viveres',20,2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lata de atun', 'Vega', 5.20, 'viveres',15,2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Azucar Rubia 1kg', NULL, 3.00, 'viveres',12,2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Inca Kola', 2.50, 'bebidas',10, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Coca Cola', 2.50, 'bebidas',15, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 2.5lt', 'Inca Kola', 5.60, 'bebidas',10, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa 400 ml', 'Big Cola', 1.50, 'bebidas',30, 2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lapiz', 'Mongol', 1.00, 'utiles escolares',30, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Borrador', 'Faber Castell', 1.50, 'utiles escolares',10, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Regla 30cm', 'Artesco', 1.60, 'utiles escolares',4, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Cuaderno', 'Justus', 4.00, 'utiles escolares',3, 2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Jabon Antibacterial 120gr','Protex', 2.50, 'aseo y limpieza',11, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Pasta Dental 150ml', 'Colgate', 3.60, 'aseo y limpieza',6, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Cepillo Dental', 'Colgate', 3.50, 'aseo y limpieza',15, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Papel higienico', 'Suave', 1.20, 'aseo y limpieza',20, 2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Manzana 1kg', NULL, 2.20, 'frutas y verduras', 10, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Pera 1kg', NULL, 3.50, 'frutas y verduras', 7, 2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Hot Dog 440g', 'Suiza', 10.80, 'carnes y embutidos', 5, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Chorizo precocido 100g', NULL, 2.50, 'carnes y embutidos', 10, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Hot dog Ahumado 165g', NULL, 4.40, 'carnes y embutidos', 10, 2,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Piqueo Snax', 'Frito Lay', 2.00, 'dulces y snacks', 20, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Lays', 'Frito Lay', 1.20, 'dulces y snacks', 20, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Tor-Tees', 'Frito Lay', 1.20, 'dulces y snacks', 20, 2,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, created_date, modified_date)
VALUES('Rellenitas', 'GalletasGN', 0.50, 'dulces y snacks', 30, 2,NOW(),NOW());

#Bodega3:

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Sal de Mesa 1 kg', 'BELLS', 1.30, 'viveres', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Saco de Arroz 50 kg', 'CASSERITA', 105.00, 'viveres', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Azucar Blanca 5 kg', 'BELLS', 15.00, 'viveres', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Azucar Rubia 5 kg ', 'CARTAVIO', 16.20, 'viveres', 25, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa Inca Kola 3 Lt', 'Inca Kola', 9.50, 'bebidas', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Inca Kola Lata 355 ml', 'Inca Kola', 4.90, 'bebidas', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Gaseosa Inca Kola 500 ml', 'Inca Kola', 2.6,'bebidas', 50, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Six-Pack Coca Cola 500 ml', 'Coca Cola', 11.90, 'bebidas', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Gasesosa Coca Cola 3 Lt', 'Coca Cola', 9.50, 'bebidas', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Six-Pack Cerveza CUSQUENA Malta Botella 310 ml', 'CUSQUENA', 24.90, 'bebidas', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Six-Pack Cerveza CUSQUENA Trigo Botella 310 ml', 'CUSQUENA', 24.90, 'bebidas', 30, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Pack Resaltadores Artesco x 8 unid', 'ARTESCO', 32.00, 'utiles escolares', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Engrapador Artesco M526 Negro', 'ARTESCO', 11.20, 'utiles escolares', 25, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Lapicero PILOT BPS-GP Negro', 'PILOT', 4.00, 'utiles escolares', 50, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Lapicero PILOT BPS-GP Azul', 'PILOT', 4.00, 'utiles escolares', 50, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Lapicero PILOT BPS-GP Rojo', 'PILOT', 4.00, 'utiles escolares', 40, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('SUAVITEL Naturals 2.9 L', 'SUAVITEL', 25.20,'aseo y limpieza', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('SUAVITEL Naturals 2.3 L', 'SUAVITEL', 17.50, 'aseo y limpieza', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Detergente en polvo ACE 5.8 Kg', 'ACE', 42.90,'aseo y limpieza', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papel Higienico ELITE Natural Soft 40 Unid.', 'ELITE', 33.70, 'aseo y limpieza', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papel Higienico SUAVE Rondemax 40 Unid.', 'SUAVE', 24.90, 'aseo y limpieza', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Lavavajillas Liquido Ayudin 900 ml', 'AYUDIN', 12.00, 'aseo y limpieza', 20, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papa blanca Yungay x 1Kg', NULL, 2.29, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papa Amarilla x 1Kg', NULL, 3.99, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Cebolla Roja x 1Kg', NULL, 2.89, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Tomate Italiano x 1Kg', NULL, 6.99, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('BETERRAGA x 1Unid.', NULL, 3.90, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papaya x 1Kg.', NULL, 5.40, 'frutas y verduras', 15, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Granadilla x 1Unid.', NULL, 0.70, 'frutas y verduras', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Platano x 1Kg.', NULL, 2.39, 'frutas y verduras', 20, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Pollo entero con menudensia x Kg', NULL, 8.79, 'carnes y embutidos', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Chuleta de pavita x Kg', 'SAN FERNANDO', 26.00, 'carnes y embutidos', 15, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Salchicha de Huacho x UND', 'CASA EUROPEA', 7.90, 'carnes y embutidos', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Jamonada Sandwich x UND', 'SUIZA', 4.20, 'carnes y embutidos', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Hot Dog Paquete 220 gr', 'SUIZA', 5.20, 'carnes y embutidos', 20, 3, NOW(), NOW());


INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Chocolate Sublime SONRISA x UND', 'SUBLIME', 2.10, 'dulces y snacks', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Gomitas 100 gr x UND', 'MOLITALIA', 4.20, 'dulces y snacks', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Galleta Tentacion Chocolate 6UNDS', 'TENTACION', 3.40, 'dulces y snacks', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Papas fritas Inka x UND', 'INKA-CHIPS', 7.50, 'dulces y snacks', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('PRINGLES Sabor Original x UND', 'PRINGLES', 10.90, 'dulces y snacks', 20, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Galleta Oreo Sabor Original x UND', 'OREO', 3.90, 'dulces y snacks', 30, 3, NOW(), NOW());

INSERT INTO products(product_name, product_trademark, product_price, product_type,product_stock, user_id, created_date, modified_date)
VALUES('Galleta Chokosoda x UND', 'FIELD', 4.90, 'dulces y snacks', 30, 3, NOW(), NOW());