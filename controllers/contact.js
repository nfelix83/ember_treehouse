Blogger.ContactController = Ember.Controller.extend({
	actions: {
		messageSent: false,

		sendMessage: function(){
			var message = prompt('Pssssst, what is it: ');
			this.set('messageSent', true);
			var timeout = 200;
			this.set('confirmationNumber', Math.round(Math.random()*100000));
		}
	}
});