var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var _ = require('underscore');

	
AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		default:
			return true;
	}
});