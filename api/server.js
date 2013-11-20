var express = require('express'),
	routes = require('./routes/shopbone_routes');
 
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});

app.get('/categories', routes.getAllCategories);
app.post('/categories', routes.createCategory);
app.get('/category/:id', routes.getCategoryById);
app.put('/category/:id', routes.updateCategory);
app.delete('/category/:id', routes.deleteCategory);

app.get('/shopitems', routes.getAllShopItems);
app.post('/shopitems', routes.addShopItem);
app.get('/shopitem/:id', routes.getShopItem);
app.put('/shopitem/:id', routes.updateShopitem);
app.delete('/shopitem/:id', routes.deleteShopitem);

//app.get('/', routes.)

app.listen(4080);

console.log('Listening on port 4080...');
