jingo.declare({
	require: [
		'com.tinyrobot.tinyge.components.core.TickedComponent'
	],
  name: 'com.tinyrobot.tinyge.components.core.Spatial',
  as: function() {
    Spatial = TickedComponent.extend({ //in pbe, spatial gets subclassed to implement special movement - does that sound sensible? Like FLowFieldSpatial?
				init: function(){
					this._super();
					this.x = 0;
					this.y = 0;
					this.width = 0;
					this.height = 0;
					this.rotation = {value: 0};
					this.vx = 0;
					this.vy = 0;
					this.velocity = new Point(0,0);
					this.angularVelocity = {value:0};
				},
				onTick: function(){
					this.rotation.value += this.angularVelocity.value;
					
					this.position.x += this.velocity.x;
					this.position.y += this.velocity.y;
				},
				onAdd: function(){
					this._super();
					this.spatialManager.add(this);
				},
				destroy: function(){
					this._super();
					this.spatialManager.remove(this);
				},
				onCollide: function(s1,s2){
					
				}
		});
  }
});
