	# Examples from "https://docs.mongodb.com/" 
# Subdocument key order matters in a few of these examples so we have
# to use bson.son.SON instead of a Python dict.
from bson.son import SON

db.inventory.insert_many([
    {
        "item": "journal",
        "instock": [
            SON([("warehouse", "A"), ("qty", 5)]),
            SON([("warehouse", "C"), ("qty", 15)])
        ]
    },
    {
        "item": "notebook",
        "instock": [
            SON([("warehouse", "C"), ("qty", 5)])
        ]
    },
    {
        "item": "paper",
        "instock": [
            SON([("warehouse", "A"), ("qty", 60)]),
            SON([("warehouse", "B"), ("qty", 15)])
        ]
    },
    {
        "item": "planner",
        "instock": [
            SON([("warehouse", "A"), ("qty", 40)]),
            SON([("warehouse", "B"), ("qty", 5)])
        ]
    },
    {
        "item": "postcard",
        "instock": [
            SON([("warehouse", "B"), ("qty", 15)]),
            SON([("warehouse", "C"), ("qty", 35)])
        ]
    }
])
