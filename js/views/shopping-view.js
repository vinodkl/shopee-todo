window.ShoppingView = Backbone.View.extend({
	template: "#shoppingView",
	events: {
		'click .addtolist': 'addToList'
	},
	initialize: function() {
		_.bindAll(this, 'render');
		this.collection = new ShoppingList();
		this.collection.bind('reset', this.render);
		this.collection.bind('add', this.render);
		this.collection.fetch();
		this.options.categories.bind('all', this.render);
	},
	addToList: function() {
		var items = _.compact($(this.el).find('.listbox').val().split('\n')),
			c = this.options.categories.first();
		_.each(items, function(i){
			this.collection.create({name: i, category: c});
		}, this);
	},
	render: function() {
		$(this.el).html($(this.template).html());
		this.collection.toBuy().each(function(shopItem) {
			var viewModels = {model: shopItem,
							categories: this.options.categories }
			var view = new ShopItemView(viewModels);
			$(this.el).find('.shoppinglist').append(view.render().el);
		}, this);
	}
});	