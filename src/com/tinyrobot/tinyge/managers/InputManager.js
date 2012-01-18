jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.managers.InputManager',
	as: function(){
		InputManager = Class.extend({
			init: function(){
				//KEYCODE CONSTS
				this.W = 87;
				this.A = 65;
				this.S = 83;
				this.D = 68;
				this.J = 74;
				this.L = 76;
				this.K = 75;
				this.SPACE = 32;
				
				this.keys = {};
				var that = this;
				window.onkeydown = function(e){
					that.keys[e.keyCode] = true;
					return false;
				}
				window.onkeyup = function(e){
					that.keys[e.keyCode] = false;
					return false;
				}
			},
			keyDown: function(key){
				return this.keys[key] == true;
			}
		});
	}
});
