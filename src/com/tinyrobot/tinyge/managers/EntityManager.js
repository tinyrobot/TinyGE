jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.managers.EntityManager',
	as: function(){
	EntityManager = Class.extend({
			init: function(){
				this.entities = {};
			},
			add: function(name,e){
				this.entities[name] = e;
			},
			remove: function(name){
				if(!this.entities[name]) return;
				this.entities[name].onRemove();
				delete this.entities[name];
			},
			getEntitiesByType: function(type){
				var rar = [];
				for(var thing in this.entities){
					if(this.entities[thing].type && this.entities[thing].type == type){
						rar.push(this.entities[thing]);
					}
				}
				return rar;
			}
		});
	}
});
