var hostName = "http://localhost:4080";
window.Category = Backbone.Model.extend({
	idAttribute: "_id",
	url : function() {
		if(this.get('_id')) {
			return hostName + "/category/" + this.get('_id');
		} else {
			return hostName + "/categories";
		}
	},
	defaults: function() {
		return {
			name: "untitled",
			creator: "Vinod",
			parent: "none"
		};
	}
});


window.CategoryCollection = Backbone.Collection.extend({
	model: Category,
	url: hostName + "/categories"
});

