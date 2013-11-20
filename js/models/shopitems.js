window.ShopItem = Backbone.Model.extend({
	idAttribute: "_id",
	url: function() {
		if(this.get('_id')) {
			return hostName + "/shopitem/" + this.get('_id');
		} else {
			return hostName + "/shopitems";
		}
	},
	defaults: function() {
		return {
			purchased: false,
			category: null,
		}
	},
	parse: function(response) {	
		response.category = new Category(response.category);
		return response;
	}
});

window.ShoppingList = Backbone.Collection.extend({
	model: ShopItem,
	url: hostName + '/shopitems',
	toBuy: function() {
		return new ShoppingList(this.where({purchased: false}));
	}
});