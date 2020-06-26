const ValueError = require('../utils/valueError');

const buildHandlers = ({ controller }) => {
	if (!controller) {
		throw new Error('The controller is required');
	}

	const getSingle = (request, response, next) => {
		try {
			const result = controller.getSingle({ id: request.params.id });
			response.status(200).send(JSON.stringify(result));
		}
		catch (error) {
			next(error);
		}
	};

	const getAllPaginated = (request, response, next) => {
		try {
			const params = { limit: Number(request.query.limit), offset: Number(request.query.offset) };
			const result = controller.getAllPaginated(params);
			response.status(200).send(JSON.stringify({
				places: result.results,
				limit: result.limit,
				offset: result.nextOffset
			}));
		}
		catch (error) {
			next(error);
		}
	};

	const create = (request, response, next) => {
		try {
			controller.create({ params: request.body });
			response.status(201).send();
		}
		catch (error) {
			next(error);
		}
	};

	const update = (request, response, next) => {
		try {
			controller.update({ params: request.body });
			response.status(204).send();
		}
		catch (error) {
			next(error);
		}
	};

	const deleteHandler = (request, response, next) => {
		try {
			controller.delete({ id: request.params.id });
			response.status(204).send();
		}
		catch (error) {
			next(error);
		}
	};


	return {
		getSingle,
		getAllPaginated,
		create,
		update,
		delete: deleteHandler
	};
}



module.exports = {
	buildHandlers
};
