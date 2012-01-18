jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.managers.SpatialManager',
	as: function(){
	SpatialManager = Class.extend({
			init: function(){
				//GE.processManager.add(this);
				this.spatials = [];
			},
			add: function(c){
				this.spatials.push(c);
			},
			remove: function(c){
				var ind = this.spatials.indexOf(c);
				if(ind == -1) return;
				this.spatials.splice(ind,1);
			},
			onTick: function(){ //should this actually occur tho?
				for(var i = 0; i < this.spatials.length; i++){
					var s1 = this.spatials[i];
					if(!s1.collideable) continue;
					for(var j = i+1; j < this.spatials.length; j++){
						var s2 = this.spatials[j];
						if(!s2.collideable) continue;
						
						var rect1 = [this.spatials[i].x,this.spatials[i].y,this.spatials[i].width,this.spatials[i].height];
						var rect2 = [this.spatials[j].x,this.spatials[j].y,this.spatials[j].width,this.spatials[j].height];
						
						if(!((rect1[1] > rect2[1]+rect2[3]) || (rect1[1]+rect1[3] < rect2[1]) ||
						(rect1[0] > rect2[0]+rect2[2]) || (rect1[0]+rect1[2] < rect2[0]))){
							s1.onCollide(s1,s2);
							s2.onCollide(s1,s2);
						}
					}
				}
			}
		});
	}
});
