import { connectToDatabase } from "$lib/dbConnect";
import { ObjectId } from "mongodb";

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
		return {
			status: 500,
			body: {
				error: "Server error"
			}
		};
	}
};

const post = async (request) => {
	try {
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection("Test");
		const todo = JSON.parse(request.body);
		await collection.insertOne(todo);
		return {
			status: 200,
			body: {
				status: "Success"
			}
		};
	} catch (e) {
		return {
			status: 500,
			body: {
				error: "Server error"
			}
		};
	}
};

const put = async (request) => {
	try {
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection("Test");
		const todo = JSON.parse(request.body);
		await collection.updateOne(
			{ _id: new ObjectId(todo._id) },
			{ $set: { completed: todo.completed } }
		);
		return {
			status: 200,
			body: {
				status: "Success"
			}
		};
	} catch (e) {
		return {
			status: 500,
			body: {
				error: "Server error"
			}
		};
	}
};

const del = async (request) => {
	// Todo
};

export { get, post, put, del };
