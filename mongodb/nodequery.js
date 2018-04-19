/* Only used for testing query
	Examples from "https://docs.mongodb.com/" */
	
let MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function(err, client) {
	let db = client.db("test");
	db.collection('inventory').insertMany([
		{
			item: "journal",
			qty: 25,
			size: { h: 14, w: 21, uom: "cm" },
			status: "A"
		},
		{
			item: "notebook",
			qty: 50,
			size: { h: 8.5, w: 11, uom: "in" },
			status: "A"
		},
		{
			item: "paper",
			qty: 100,
			size: { h: 8.5, w: 11, uom: "in" },
			status: "D"
		},
		{
			item: "planner",
			qty: 75,
			size: { h: 22.85, w: 30, uom: "cm" },
			status: "D"
		},
		{
			item: "postcard",
			qty: 45,
			size: { h: 10, w: 15.25, uom: "cm" },
			status: "A"
		}
	]);

	var cursor = db.collection("inventory").find({});
	var cursor1 = db.collection("inventory").find({status: "D"});
	var cursor2 = db.collection("inventory").find({status: {$in: ["A", "D"]}});
	var cursor3 = db.collection("inventory").find({status: "A", qty: {$lt: 30}});
	console.log(cursor);
	console.log(cursor1);
	console.log(cursor2);
	console.log(cursor3);

	client.close();
});
