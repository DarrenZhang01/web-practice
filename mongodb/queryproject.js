/* Only used for testing project in query
	Examples from "https://docs.mongodb.com/" */
"use strict"
let MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function(err, client) {
	let db = client.db("test");

    db.collection('inventory').insertMany([
        {
            item: "journal",
            status: "A",
            size: { h: 14, w: 21, uom: "cm" },
            instock: [ { warehouse: "A", qty: 5 } ]
        },
        {
            item: "notebook",
            status: "A",
            size: { h: 8.5, w: 11, uom: "in" },
            instock: [ { warehouse: "C", qty: 5 } ]
        },
        {
            item: "paper",
            status: "D",
            size: { h: 8.5, w: 11, uom: "in" },
            instock: [ { warehouse: "A", qty: 60 } ]
        },
        {
            item: "planner",
            status: "D",
            size: { h: 22.85, w: 30, uom: "cm"},
            instock: [ { warehouse: "A", qty: 40 } ]
        },
        {
            item: "postcard",
            status: "A",
            size: { h: 10, w: 15.25, uom: "cm" },
            instock: [
                { warehouse: "B", qty: 15 },
                { warehouse: "C", qty: 35 }
            ]
        }
    ]);

    var cursor = db.collection('inventory').find({
        status: "A"
    });

    var cursor1 = db.collection('inventory').find({
        status: "A"
    }).project({ item: 1, status: 1 });

    var cursor2 = db.collection('inventory').find({
        status: "A"
    }).project({ item: 1, status: 1, _id: 0 });

    // Return all but the excluded fields
    var cursor3 = db.collection('inventory').find({
        status: "A"
    }).project({ status: 0, instock: 0 });

    // Return specific fields in embedded documents
    var cursor4 = db.collection('inventory').find({
        status: "A"
    }).project({ item: 1, status: 1, "size.uom": 1 });

    // Projection on embedded documents in an array
    var cursor5 = db.collection('inventory').find({
        status: "A"
    }).project({ item: 1, status: 1, "instock.qty": 1 });

    // Project specific array elements in the returned array
    var cursor6 = db.collection('inventory').find({
        status: "A"
    }).project({ item: 1, status: 1, "instock": { $slice: -1 } });

    client.close();
});
