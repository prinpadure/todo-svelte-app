import { connectToDatabase } from "$lib/dbConnect";

const get = async (request): Promise<any> => {
	try {
		const completed = request.query.get("completed") === "true";
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection("Test");
		const todos = await collection.find({ completed }).toArray();
		return {
			status: 200,
			body: {
				todos
			}
		};
	} catch (err) {
		console.log(err);
		return {
			status: 500,
			body: {
				error: "Server error"
			}
		};
	}
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
