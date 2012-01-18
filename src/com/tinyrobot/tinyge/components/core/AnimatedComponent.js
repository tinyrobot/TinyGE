jingo.declare({
	require: [
		'com.tinyrobot.tinyge.components.core.Component',
		'com.tinyrobot.tinyge.Globals'
	],
  name: 'com.tinyrobot.tinyge.components.core.AnimatedComponent',
  as: function() {
    AnimatedComponent = Component.extend({
				onAdd: function(){
					Globals.processManager.addAnimatedComponent(this);
				},
				destroy: function(){
					Globals.processManager.removeAnimatedComponent(this);
				},
				onFrame: function(){//override me
				}
		});
  }
});
