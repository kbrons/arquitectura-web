const buildBaseHandlers = require('./baseHandlers')["buildHandlers"];

const buildHandlers = ({ controller }) => {
	if (!controller) {
		throw new Error('The controller is required');
    }

    const getByPlace = (request, response, next) => {
		try {
			const params = { limit: Number(request.query.limit), offset: Number(request.query.offset), placeId: Number(request.params.id) };
			const result = controller.getByPlace(params);
			response.status(200).send(JSON.stringify({
				todos: result.results,
				limit: result.limit,
				offset: result.nextOffset
			}));
		}
		catch (error) {
			next(error);
		}
	};

    return {
        ...buildBaseHandlers({controller}),
        getByPlace
    }
}

module.exports = {
	buildHandlers
};
