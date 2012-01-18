jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.managers.ResourceManager',
	as: function(){
	ResourceManager = Class.extend({
			init: function(){
				this.images = {};
			},
			addImage: function(path){
				if(!this.images[path]){
					this.images[path] = new Image();
					this.images[path].src = path; //should set this on load() and have event listener when done
				}
			},
			getImage: function(path){
				return this.images[path];
			}
		});
	}
});
