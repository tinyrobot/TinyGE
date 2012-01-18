jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.tinyge.components.core.Component',
		'com.tinyrobot.tinyge.Globals'
	],
  name: 'com.tinyrobot.tinyge.components.core.TickedComponent',
  as: function() {
    TickedComponent = Component.extend({
				init: function(){},
				onAdd: function(){
					Globals.processManager.add(this);
				},
				destroy: function(){
					Globals.processManager.remove(this);
				},
				onTick: function(){}
		});
  }
});
