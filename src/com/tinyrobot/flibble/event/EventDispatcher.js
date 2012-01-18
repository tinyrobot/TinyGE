jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.flibble.event.EventDispatcher',
  as: function() {
    EventDispatcher = Class.extend({
			init: function(){
				this.listeners = {};
			},
			addEventListener: function(type,callback){
				if(!this.listeners[type]) this.listeners[type] = [];
				if(this.listeners[type].indexOf(callback) == -1){
					this.listeners[type].push(callback);
				}
			},
			dispatchEvent: function(type,data){
				if(!this.listeners[type]) return;
				var arr = this.listeners[type]; //helps in the scenario that removeAllListeners is called while looping!
				for(var i = 0; i < arr.length; i++){
					var cb = arr[i];
					cb(data);
				}
			},
			removeAllListeners: function(){
				for(var thing in this.listeners){
					while(this.listeners[thing].length > 0){
							this.listeners[thing].pop();
					}
					delete this.listeners[thing];
				}
			},
			removeEventListener: function(){
				
			}
		})
  }
});
