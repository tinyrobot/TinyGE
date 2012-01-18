jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.flibble.display.DisplayObject',
		'com.tinyrobot.tinyge.Globals'
	],
  name: 'com.tinyrobot.tinyge.managers.ProcessManager',
  as: function() {
    ProcessManager = Class.extend({
				init: function(){
					this.ticker = new DisplayObject();
					Globals.stage.addChild(this.ticker);
					
					this.things = [];
					this.animatedThings = [];
				},
				start: function(){
					
					this.ticker.addEventListener("onEnterFrame",this.onFrame.bind(this));
				},
				stop: function(){
					//removeeventlistener somehow
				},
				onFrame: function(){
					//call onTick of ticked objects (on fixed timestep)
					for(var i = 0; i< this.things.length; i++){
						this.things[i].onTick();
					}
					for(var i = this.animatedThings.length-1; i >= 0; i--){ //pretty much so that scene can get inited first but onFrame last
						this.animatedThings[i].onFrame();
					}
				},
				add: function(thing){
					if(this.things.indexOf(thing) == -1) this.things.push(thing);
				},
				addAnimatedComponent: function(thing){
					//console.log("adding",thing);
					if(this.animatedThings.indexOf(thing) == -1) this.animatedThings.push(thing);
				},
				removeAnimatedComponent: function(thing){
					//console.log("removing",thing);
					if(this.animatedThings.indexOf(thing) != -1) this.animatedThings.splice(this.animatedThings.indexOf(thing),1);
				},
				remove: function(thing){
					if(this.things.indexOf(thing) != -1) this.things.splice(this.things.indexOf(thing),1);
				}
		});
  }
});
