const get = async (request): Promise<any> => {
	const completed = request.query.get("completed") === "true";
	return {
		status: 200,
		body: {
			completed
		}
	};
};

const post = async (request) => {
	const completed = request.query;
	return {
		status: 200,
		body: {
			completed
		}
	};
};

const put = async (request) => {
	const completed = request.query;
	return {
		status: 200,
		body: {
			todo: "todo"
		}
	};
};

const del = async (request) => {
	const completed = request.query;
	return {
		status: 200,
		body: {
			todo: "todo"
		}
	};
};

export { get };
