Recipes = new Meteor.Collection("recipes");

RecipeSchema = new SimpleSchema({
	fname:{
		type: String,
		label: "First Name"
	},
	lname:{
		type: String,
		label: "Last Name"
	},
	age:{
		type: Number,
		label: "Age"
	},
	description: {
		type: String,
		label: "description"
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoForm:{
			type: "hidden"
		}
	},
	createdAt:{
		type: Date,
		autoValue: function(){
			return new Date()
		},
		autoForm:{
			type: "hidden"
		}
	}
});	

//Attach custom Schema to the Recipes
Recipes.attachSchema(RecipeSchema);