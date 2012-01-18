jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.flibble.event.EventDispatcher'
	],
  name: 'com.tinyrobot.tinyge.components.core.Entity',
  as: function() {
    Entity = EventDispatcher.extend({
				init: function(){
					this._super();
					this.components = {};
				},
				add: function(name,c){
					if(this.components[name]) return;
					this.components[name] = c;
				},
				get: function(name){
					if(this.components[name]) return this.components[name];
				},
				initialize: function(name){
					this.name = name;
					Globals.entityManager.add(name,this);
					for(var key in this.components){
						this.components[key].owner = this;
						this.components[key].onAdd();
					}
				},
				remove: function(name){
					if(!this.components[name]) return;
					this.components[name].onRemove();
					delete this.components[name];
				},
				destroy: function(){
					Globals.entityManager.remove(this.name);
				},
				onRemove: function(){ //called by entitymanager
					for(var thing in this.components){
						this.components[thing].destroy();
						delete this.components[thing];
					}
				}
		});
  }
});
