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

Path: /todos

#### GET

`/todos/{id}`

##### Parámetros

| Nombre        | Localización | Descripción       | Requerido     | Ejemplo       |
| ------------- | -            | ----------------- | -             | ------------- |
| id            | Path         | Id del To Do      | Sí            | 5             |

##### Retorna

Objeto To Do en formato JSON

```
{
    id: int,
    title: string,
    placeId: int,
    description: string,
    deadline: int (epoch),
    priority: int
}
```

##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 200       | Operación correcta              |
| 400       | Id incorrecto o con mal formato |
| 404       | Id inexistente                  |
| 500       | Error interno                   |

#### POST

`/todos`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| title         | Body          | Título del To Do                                                                   | Sí        | "Comprar pan"         |
| placeId       | Body          | Id del lugar                                                                       | Sí        | 7                     |
| description   | Body          | Descripción del To Do                                                              | No        | "Pan lactal Bimbo"    |
| deadline      | Body          | Fecha límite, en un string con formato ISO UTC                                     | No        | 2020-04-22T11:12:45Z  |
| priority      | Body          | Prioridad del To Do. Valor numérico de 1 (menos prioritario) a 5 (más prioritario) | No        | 3                     |


##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 201       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 500       | Error interno                   |

#### PUT

`/todos`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| id            | Body          | Id del To Do                                                                       | Sí        | 5                     |
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

`/todos/{id}`

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

### Lugares

Path: /places

#### GET

`/places?limit=X&offset=X`

##### Parámetros

| Nombre        | Localización | Descripción                                    | Requerido     | Ejemplo       |
| ------------- | -            | -----------------                              | -             | ------------- |
| limit         | Query String | Cantidad de elementos a traer                  | No            | 20            |
| offset        | Query String | Cantidad de elementos a partir del cual traer  | No            | 40            |

##### Retorna

Lista de Places en formato JSON

```
{
    places: [
        {
            id: string,
            name: string
        }
    ],
    limit: int (same as requested),
    offset: int (el offset para el próximo request o el mismo si no hay más elementos)
}
```

#### GET

`/places/{id}`

##### Parámetros

| Nombre        | Localización | Descripción       | Requerido     | Ejemplo       |
| ------------- | -            | ----------------- | -             | ------------- |
| id            | Path         | Id del Lugar      | Sí            | 5             |

##### Retorna

Objeto lugar en formato JSON

```
{
    id: string,
    name: string
}
```

##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 200       | Operación correcta              |
| 400       | Id incorrecto o con mal formato |
| 404       | Id inexistente                  |
| 500       | Error interno                   |

#### POST

`/places`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| name          | Body          | Nombre del lugar                                                                   | Sí        | "Casa"                |


##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 201       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 500       | Error interno                   |

#### PUT

`/places`

##### Parámetros

| Nombre        | Localización  | Descripción                                                                        | Requerido | Ejemplo               |
| ------------- | -             | -----------------                                                                  | -         | -------------         |
| id            | Body          | Id del Lugar                                                                       | Sí        | 5                     |
| name          | Body          | Nombre del Lugar                                                                   | Sí        | "Casa"                |


##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 204       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 404       | El id no existe                 |
| 500       | Error interno                   |

#### DELETE

`/places/{id}`

##### Parámetros body

| Nombre        | Localización  | Descripción       | Requerido | Ejemplo               |
| ------------- | -             | ----------------- | -         | -------------         |
| id            | Path          | Id del Lugar      | Sí        | 5                     |



##### Status Codes

| Valor     | Descripción                     |
| --------- | -----------------               |
| 204       | Operación correcta              |
| 400       | Parámetros incorrectos          |
| 404       | El id no existe                 |
| 500       | Error interno                   |

#### GET To Dos by Place

`/places/{id}/todos?limit=X&offset=X`

##### Parámetros

| Nombre        | Localización | Descripción                                    | Requerido     | Ejemplo       |
| ------------- | -            | -----------------                              | -             | ------------- |
| id            | Path         | Id del Lugar                                   | Sí            | 5             |
| limit         | Query String | Cantidad de elementos a traer                  | No            | 20            |
| offset        | Query String | Cantidad de elementos a partir del cual traer  | No            | 40            |

##### Retorna

Lista de To Dos en formato JSON

```
{
    todos: [
        {
            id: int,
            title: string,
            description: string,
            deadline: string (ISO UTC date),
            priority: int
        }
    ],
    limit: int (same as requested),
    offset: int (el offset para el próximo request o el mismo si no hay más elementos)
}
```
