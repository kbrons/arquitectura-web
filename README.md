# Arquitectura Web - UP

# Trabajo Práctico
## Miembros
- Kevin Bronstein

## To Do Manager
Aplicación para organizar tu día y tareas pendientes, para tener todo a mano cuando lo necesites. Cada ítem pendiente pertenece a una lista, identificada por un lugar. Las diferentes listas te permiten ordenar tus pendientes para tenerlos cuando estés en el lugar y el momento para hacerlos.

Los ítems tienen obligatoriamente un título y pertenecen a un lugar, pero también permiten agregar una descripción, fecha límite y prioridad, con los cuales serán ordenados al mostrarse.

Los lugares son completamente configurables, y ofrecemos para empezar "Casa" y "Trabajo".

## Stack
### Back End
- Node.JS
- MongoDB

### Front End
- React JS

## API

### To Do

Path: /todo

#### GET

`/todo/{id}`

##### Parámetros

| Nombre        | Localización | Descripción       | Requerido     | Ejemplo       |
| ------------- | -            | ----------------- | -             | ------------- |
| id            | Path         | Id del To Do      | Sí            | 5             |

##### Retorna

Objeto To Do en formato JSON

##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 200       | Operación correcta              |
| 400       | Id incorrecto o con mal formato |
| 404       | Id inexistente                  |
| 500       | Error interno                   |

#### POST

`/todo`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| title         | Body          | Título del To Do                                                                   | Sí        | "Comprar pan"         |
| placeId       | Body          | Id del lugar                                                                       | Sí        | 7                     |
| description   | Body          | Descripción del To Do                                                              | No        | "Pan lactal Bimbo"    |
| deadline      | Body          | Fecha límite en formato ISO UTC                                                    | No        | 2020-04-22T11:12:45Z  |
| priority      | Body          | Prioridad del To Do. Valor numérico de 1 (menos prioritario) a 5 (más prioritario) | No        | 3                     |


##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 201       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 500       | Error interno                   |

#### PUT

`/todo/{id}`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| id            | Path          | Id del To Do                                                                       | Sí        | 5                     |
| title         | Body          | Título del To Do                                                                   | No        | "Comprar pan"         |
| placeId       | Body          | Id del lugar                                                                       | No        | 7                     |
| description   | Body          | Descripción del To Do                                                              | No        | "Pan lactal Bimbo"    |
| deadline      | Body          | Fecha límite en formato ISO UTC                                                    | No        | 2020-04-22T11:12:45Z  |
| priority      | Body          | Prioridad del To Do. Valor numérico de 1 (menos prioritario) a 5 (más prioritario) | No        | 3                     |


##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 204       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 404       | El id no existe                 |
| 500       | Error interno                   |

#### DELETE

`/todo/{id}`

##### Parámetros body

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| id            | Path          | Id del To Do                                                                       | Sí        | 5                     |



##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 204       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 404       | El id no existe                 |
| 500       | Error interno                   |

