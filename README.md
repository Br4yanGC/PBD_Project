# Grupo "Ojito Ojito"

# Integrantes:

- Brayan Eduardo Gomero Castillo  (@Br4yanGC)
- Sanders Chancan Chanca (@Zanderz17)
- Diego Antonio Escajadillo Guerrero (@DiEsGue07)
- Anderson David Cárcamo Vargas   (@AndersonCarcamo)

# Tema del proyecto

`Aplicación web enfocada en la gestión de bodegas`

## Motivación

Dada la coyuntura en la que nos encontramos muchas personas han visto conveniente abrir un negocio que les permita traer ingresos a su hogar. Es así como nacen las populares bodeguitas, las cuales a diferencia de aquellas bodegas a las que ya venimos acostumbrados, estas han pasado ha implementar ciertas tecnologías que le permitan tener un mejor manejo sobre sus bodegas. En ese sentido, la presente aplicación web apunta a ello, al generar un sistema el cual le permita a las personas, que cuenten con una bodega, administrar los productos con los que cuentan, clasificarlos por su tipo, anhadirles un precio y en general gestionarlos a los mismos.


## Funcionalidades

| Angular Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/` | ` - ` | Realizar login | 
| `/user-interface` | ` - ` | Mostrar la pantalla de inicio al iniciar sesion | 
| `/user-interface/view/:product_id` | `GET /products/:product_id` | Mostrar un producto y sus caracteristícas anhadidas | 
| `/shopping-cart` | `GET /productsCart` <br> `DELETE /productsCart/:user_id/:product_id` | Mostrar los productos 'Add to cart' | 
| `/products-new` | `POST /products` | Anhadir nuveos productos | 
| `/login` | `POST /login` | Realizar el login de los usuarios | 
| `/register` | `POST /users` | Registrar nuevos usuarios al sistema | 
| `/user-interface/aseo-y-limpieza` | `GET /products` | Mostrar los productos del tipo aseo y limpieza |
| `/user-interface/aseo-y-limpieza/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar determinado producto del tipo aseo y limpieza |
| `/user-interface/aseo-y-limpieza/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo aseo y limpieza | 
| `/user-interface/bebidas` | `GET /products` | Mostrar los productos del tipo bebidas  | 
| `/user-interface/bebidas/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar determinado producto del tipo bebidas |
| `/user-interface/bebidas/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo bebidas | 
| `/user-interface/carnes-y-embutidos` | `GET /products` | Mostrar los productos del tipo carnes y embutidos | 
| `/user-interface/carnes-y-embutidos/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar productos del tipo carnes y embutidos |
| `/user-interface/carnes-y-embutidos/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo carnes y embutidos | 
| `/user-interface/dulces-y-snacks` | `GET /products` | Mostrar los productos del tipo dulces y snacks | 
| `/user-interface/dulces-y-snacks/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar productos del tipo dulces y snacks |
| `/user-interface/dulces-y-snacks/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo dulces y snacks | 
| `/user-interface/frutas-y-verduras` | `GET /products` | Mostrar los productos del tipo frutas y verduras | 
| `/user-interface/frutas-y-verduras/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar productos del tipo frutas y verduras |
| `/user-interface/frutas-y-verduras/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo frutas y verduras | 
| `/user-interface/utiles-escolares` | `GET /products` | Mostrar los productos del tipo utiles escolares | 
| `/user-interface/utiles-escolares/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar determinado producto del tipo utiles escolares |
| `/user-interface/utiles-escolares/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo utiles escolares | 
| `/user-interface/viveres` | `GET /products` | Mostrar los productos del tipo viveres | 
| `/user-interface/viveres/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Eliminar determinado producto del tipo viveres |
| `/user-interface/viveres/edit/:product_id` | `PUT /products/:product_id` | Modificar un producto del tipo viveres | 


## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`source bodega.sql`

3. Necesita tener el siguiente usuario:

- Usuario: `utec`
- Clave: `1234567890`

### Backend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`nodemon index.js`

### Frontend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`ng serve --open`