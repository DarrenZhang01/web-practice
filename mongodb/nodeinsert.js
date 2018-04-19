/* This file is for testing mongodb using nodejs
	Examples from "https://docs.mongodb.com/" */
var mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://localhost:27017", function (err, client) {
	var db = client.db("test");
	db.collection("inventory").insertOne({
		item: "canvas",
		qty: 100,
		tags: ["cotton"],
		size: { h: 28, w: 35.5, uom: "cm" }
	});
	db.collection("inventory").insertMany([
		{ item: "journal",
			qty: 25,
			tags: ["blank", "red"],
			size: { h: 14, w: 21, uom: "cm" }
		},
		{ item: "mat",
			qty: 85,
			tags: ["gray"],
			size: { h: 27.9, w: 35.5, uom: "cm" }
		},
		{ item: "mousepad",
			qty: 25,
			tags: ["gel", "blue"],
			size: { h: 19, w: 22.85, uom: "cm" }
		}
	]);
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
	console.log("What you insert just now: " + db.collection("inventory").find({item: "canvas"}));
	client.close();
	console.log("The database connection is now closed!");
});
