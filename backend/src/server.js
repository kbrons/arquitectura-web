const PlaceRepository = require('./repositories/placeRepository');
const PlaceService = require('./services/placeService');
const PlaceController = require('./controllers/placeController');
const TodoRepository = require('./repositories/TodoRepository');
const TodoService = require('./services/TodoService');
const TodoController = require('./controllers/TodoController');
const express = require('express');
const { buildHandlers: buildBaseHandlers } = require('./handlers/baseHandlers');
const { buildHandlers: buildTodoHandlers } = require('./handlers/todoHandlers');


const placeRepository = new PlaceRepository();
const placeService = new PlaceService({ repository: placeRepository });
const placeController = new PlaceController({ service: placeService });
const todoRepository = new TodoRepository();
const todoService = new TodoService({ repository: todoRepository });
const todoController = new TodoController({ service: todoService });

const placeHandlers = buildBaseHandlers({ controller: placeController });
const todoHandlers = buildTodoHandlers({ controller: todoController })

const server = express();

server.use(express.json());

server.get('/todo/:id', todoHandlers.getSingle);
server.put('/todo', todoHandlers.update);
server.post('/todo', todoHandlers.create);
server.delete('/todo/:id', todoHandlers.delete);
server.get('/place/:id/todos', todoHandlers.getByPlace);
server.get('/place/:id', placeHandlers.getSingle);
server.put('/place', placeHandlers.update);
server.post('/place', placeHandlers.create);
server.delete('/place/:id', placeHandlers.delete);

server.use((error, request, response, next) => {
	console.log(error);
	response.status(500).json({ message: error.message });
});

server.listen(parseInt(process.env.PORT || '3003'));
