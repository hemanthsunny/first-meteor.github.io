FlowRouter.route('/home',{
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});	
FlowRouter.route('/recipe-book',{
	name: 'recipe-book',
	action(){
		//BlazeLayout.render('MainLayout');
		BlazeLayout.render('MainLayout',{main: 'Recipes'});
	}
})