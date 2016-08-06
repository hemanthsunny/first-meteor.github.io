import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
/*
	Variables = new Mongo.Collection('firstCollection');
if(Meteor.isClient){

Template.resolution.helpers({
/*	resolutions: [
	{ title: "Header title"},
	{ title: "Body title"},
	{ title: "Footer title"}
	]
*
	firstCollection: function() {
		console.log(Variables.find());
		return Variables.find();
	}
});
/*
Template.body.events({
	'submit .new-resolution': function(event){
		var takeEvent = event.target.title.value;

		Variables.insert({
			title: takeEvent,
			createdAt: new Date()
		});

		event.target.title.value = "";
		return false;
	}
});*
}
if(Meteor.isServer){
	Meteor.startup(function(){
		//code to run on server at startup
	});
}
*/