jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.components.core.Component',
  as: function() {
    Component = Class.extend({
				init: function(){},
				onAdd: function(){},
				onRemove: function(){}
		});
  }
});
