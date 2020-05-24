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
			const result = controller.getAllPaginated({ limit: request.params.limit, offset: request.params.offset });
			response.status(200).send(JSON.stringify(result));
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
