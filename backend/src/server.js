const PlaceRepository = require('./repositories/placeRepository');
const PlaceService = require('./services/placeService');
const PlaceController = require('./controllers/placeController');
const TodoRepository = require('./repositories/todoRepository');
const TodoService = require('./services/todoService');
const TodoController = require('./controllers/todoController');
const express = require('express');
const ValueError = require('./utils/valueError');
const NotExistsError = require('./utils/notExistsError');
const { buildHandlers: buildBaseHandlers } = require('./handlers/baseHandlers');
const { buildHandlers: buildTodoHandlers } = require('./handlers/todoHandlers');


const placeRepository = new PlaceRepository({});
const placeService = new PlaceService({ repository: placeRepository });
const placeController = new PlaceController({ service: placeService });
const todoRepository = new TodoRepository({});
const todoService = new TodoService({ repository: todoRepository, placeRepository });
const todoController = new TodoController({ service: todoService });

const placeHandlers = buildBaseHandlers({ controller: placeController });
const todoHandlers = buildTodoHandlers({ controller: todoController })

const server = express();

server.use(express.json());

server.get('/todos/:id', todoHandlers.getSingle);
server.put('/todos', todoHandlers.update);
server.post('/todos', todoHandlers.create);
server.delete('/todos/:id', todoHandlers.delete);
server.get('/places/:id/todos', todoHandlers.getByPlace);
server.get('/places', placeHandlers.getAllPaginated);
server.get('/places/:id', placeHandlers.getSingle);
server.put('/places', placeHandlers.update);
server.post('/places', placeHandlers.create);
server.delete('/places/:id', placeHandlers.delete);

server.use((error, request, response, next) => {
	if (!(error instanceof ValueError)) {
		next(error);
	}

	response.status(422).json({ message: error.message });
});

server.use((error, request, response, next) => {
	if (!(error instanceof NotExistsError)) {
		next(error);
	}

	response.status(404).json({ message: error.message });
});

server.use((error, request, response, next) => {
	console.log(error);
	response.status(500).json({ message: error.message });
});

server.listen(parseInt(process.env.PORT || '3003'));
