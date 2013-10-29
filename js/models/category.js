window.Category = Backbone.Model.extend({
	idAttribute: "_id",
	url : function() {
		if(this.get('_id')) {
			return "http://localhost:4080/category/" + this.get('_id');
		} else {
			return "http://localhost:4080/categories"
		}
	}
});