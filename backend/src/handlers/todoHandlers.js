const buildBaseHandlers = require('./baseHandlers')["buildHandlers"];

const buildHandlers = ({ controller }) => {
	if (!controller) {
		throw new Error('The controller is required');
    }

    const getByPlace = (request, response, next) => {
		try {
			const result = controller.getByPlace({ placeId: request.params.id });
			response.status(200).send(JSON.stringify(result));
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
