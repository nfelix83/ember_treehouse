Blogger.AboutController = Ember.Controller.extend({
	actions: {
		isPictureShowing: false,
		
		showRealName: function(){
			alert("Dracula is fictional, but was inspired by a dude named Vlad.  Fucking, Vlad.");
		},
		showPicture: function(){
			this.set('isPictureShowing', !(this.get('isPictureShowing')));
		}
	}
});