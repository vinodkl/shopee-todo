var mongo = require('mongodb'),
	Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('shopbonedb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'shopbonedb' database");
        db.collection('categories', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'categories' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.getAllCategories = function(req, res) {
	db.collection('categories', function(err, collection) {
        collection.find().toArray(function(err, item) {
            res.send(item);
        });
    });
}

exports.getCategoryById = function(req, res) {
	//res.send({name: 'here '+req.params.id});	
    var id =req.params.id;
    console.log('retrived category ' + id);
    db.collection('categories', function(err, collection) {
        collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
}

exports.createCategory = function(req, res) {
	var category = req.body;
	db.collection('categories', function(err, collection) {
		collection.insert(category, {safe:true}, function(err, result){
			if(err) {
				res.send({error: 'insert category error'});
			} else {
				console.log('Success: '+ result[0]);
				res.send(result[0]);
			}
		});
	});
}

exports.updateCategory = function(req, res) {
    var id = req.params.id,
        category = req.body;
        delete( category._id );
    db.collection('categories', function(err, collection){ 
        collection.update({'_id' : new BSON.ObjectID(id)}, category, {safe:true}, function(err, result) {
            if(err) {

                res.send('error on PUT');
            } else {
                res.send(category);
            }
        })
    });
}

exports.deleteCategory = function(req, res) {
    var id = req.params.id;

    db.collection('categories', function(err, collection){
        collection.remove({'_id' : new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if(err) {
                res.send('error on DELETE');
            } else {
                res.send('delete successfull');
            }
        })
    });
}

exports.addShopItem = function(req, res) {
    var shopitem = req.body;
    db.collection('shop_items', function(err, collection) {
        collection.insert(shopitem, {safe:true}, function(err, result){
            if(err) {
                res.send({error: 'insert new shopitem error'});
            } else {
                console.log('Success: '+ result[0]);
                res.send(result[0]);
            }
        });
    });
}

exports.getAllShopItems = function(req, res) {
    db.collection('shop_items', function(err, collection) {
        collection.find().toArray(function(err, item) {
            res.send(item);
        });
    });
}

exports.getShopItem = function(req, res) {
    //res.send({name: 'here '+req.params.id});  
    var id =req.params.id;
    console.log('retrived shopitem ' + id);
    db.collection('shop_items', function(err, collection) {
        collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
}

exports.updateShopitem = function(req, res) {
    var id = req.params.id,
        shopitem = req.body;
        delete( shopitem._id );
    db.collection('shop_items', function(err, collection){ 
        collection.update({'_id' : new BSON.ObjectID(id)}, shopitem, {safe:true}, function(err, result) {
            if(err) {
                res.send('error on PUT');
            } else {
                res.send(shopitem);
            }
        })
    });
}

exports.deleteShopitem = function(req, res) {
    var id = req.params.id;

    db.collection('shop_items', function(err, collection){
        collection.remove({'_id' : new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if(err) {
                res.send('error on DELETE');
            } else {
                res.send('delete successfull');
            }
        })
    });
}

var populateDB = function() {
 
    var cat = [
    {
        creator: "Vinod",
        name: "Hardware",
        parent: "none"
    },
    {
        creator: "Kumar",
        name: "Software",
        parent: "none"
    }];
 
    db.collection('categories', function(err, collection) {
        collection.insert(cat, {safe:true}, function(err, result) {});
    });
 
};