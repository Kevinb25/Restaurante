# Api Dish

model: name, description, price, available, category, imageUrl

## Recuperar todos los platos

Method: GET
Url: /api/dishes

Response: Array con todos los platos 

## Recuperar los platos por categoria

Method: GET
Url: /api/dishes/category/:category

Response: Array con todos los platos pertenecientes a la categoria 

## Recuperar los platos por id

Method: GET
Url:/api/dishes/:dishId

response: el objeto que representa al plato con el dishId

## Creacion de platos

Method: POST
Url: /api/dishes
Body: name, description, price, available, category, imageUrl,- allergenIds: number[] (opcional) , 
- extraIds: number[] (opcional),
- created_at (timestamp, autogenerado),
- updated_at (timestamp, autogenerado)

Response: El  nuevo plato se ha creado con exito

## Actualizacion de platos

Method: PUT
Url: /api/dishes/:dishId
Body: los campos a editar

Response: El  plato editado

## Eliminacion de platos

Method: DELETE
Url: /api/dishes/:dishId

Response: el Plato se ha eliminado con exito