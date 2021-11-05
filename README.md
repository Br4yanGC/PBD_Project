# Grupo "Ojito Ojito"

# Integrantes:

- Brayan Eduardo Gomero Castillo  (@Br4yanGC)
- Sanders Chancan Chanca (@Zanderz17)
- Diego Antonio Escajadillo Guerrero (@DiEsGue07)
- Anderson David Cárcamo Vargas   (@AndersonCarcamo)

# Tema del proyecto

`Aplicación web en la cual los propietarios de las bodegas podrán acceder y ser capaces de planificar sus compras`

## Motivación

Consideramos que esta idea es interesante porque permitirá a diferentes usuarios hacer un uso planificado de su dinero. Asimismo, esta aplicación estará enfocada en el mercado peruano, es decir, contará con precios extraídos de productos que podemos encontrar en supermercados o bodegas peruanas. De esta manera, el usuario podrá encontrar una recopilación de todos los productos que posiblemente esté buscando en una sola aplicación con una aproximación a su precio real en el mercado, lo que facilitará la gestión de su dinero.



## Funcionalidades

| Angular Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/login` | `POST /login` | Realizar login | 
| `/register` | `POST /user` | Crear un nuevo usuario | 
| `/ ` | `POST /login` | Se muestra el home de la aplicación web | 
| `/shopping-cart` | `GET /login` | Se muestra lod productos ADD TO CART de 1 sola bodega | 
| `/user-interface/aseo-y-limpieza` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo aseo y limpieza de 1 sola bodega. | 
| `/user-interface/aseo-y-limpieza/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo aseo y limpieza de 1 sola bodega. |
| `/user-interface/aseo-y-limpieza/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo aseo y limpieza de un con su respectivo product_id | 
| `/user-interface/bebidas` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo bebidas de 1 sola bodega. | 
| `/user-interface/bebidas/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo bebidas de 1 sola bodega. |
| `/user-interface/bebidas/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo bebidas de un con su respectivo product_id | 
| `/user-interface/carnes-y-embutidos` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo carnes y embutidos de 1 sola bodega. | 
| `/user-interface/carnes-y-embutidos/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo carnes y embutidos de 1 sola bodega. |
| `/user-interface/carnes-y-embutidos/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo carnes y embutidos de un con su respectivo product_id | 
| `/user-interface/dulces-y-snacks` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo dulces y snacks de 1 sola bodega. | 
| `/user-interface/dulces-y-snacks/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo dulces y snacks de 1 sola bodega. |
| `/user-interface/dulces-y-snacks/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo dulces y snacks de un con su respectivo product_id | 
| `/user-interface/frutas-y-verduras` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo frutas y verduras de 1 sola bodega. | 
| `/user-interface/frutas-y-verduras/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo frutas y verduras de 1 sola bodega. |
| `/user-interface/frutas-y-verduras/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo frutas y verduras de un con su respectivo product_id | 
| `/user-interface/utiles-escolares` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo utiles escolares de 1 sola bodega. | 
| `/user-interface/utiles-escolares/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo utiles escolares de 1 sola bodega. |
| `/user-interface/utiles-escolares/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo utiles escolares de un con su respectivo product_id | 
| `/user-interface/viveres` | `GET /products/:user_id/:product_id` | Se muestra los productos del tipo viveres de 1 sola bodega. | 
| `/user-interface/viveres/delete/:user_id/:product_id` | `DELETE /products/:user_id/:product_id` | Se elimina productos del tipo viveres de 1 sola bodega. |
| `/ser-interface/viveres/edit/:product_id` | `PUT /products/:product_id` | Modifica un producto del tipo viveres de un con su respectivo product_id | 


## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`Se recomienda copiar y ejecutar manualmente todos los códigos del archivo bodega.sql`

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