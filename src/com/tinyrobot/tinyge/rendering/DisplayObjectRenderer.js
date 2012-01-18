jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.flibble.geom.Matrix',
		'com.tinyrobot.flibble.geom.Point',
		'com.tinyrobot.tinyge.components.core.AnimatedComponent'
	],
  name: 'com.tinyrobot.tinyge.rendering.DisplayObjectRenderer',
  as: function() {
    DisplayObjectRenderer = AnimatedComponent.extend({
				init: function(){
					this._super();
					this.x = 0;
					this.y = 0;
					this.scalex = 1;
					this.scaley = 1;
					this.width = 0;
					this.height = 0;
					this.rotation = 0;
					this.registrationPoint = new Point(0,0);
					this.positionReference;
				},
				onFrame: function(){ //here is where we should try updating our matrix
					if(!this.displayObject) return;
					/*this.displayObject.x = this.x;
					this.displayObject.y = this.y;
					this.displayObject.width = this.width;
					this.displayObject.height = this.height;
					this.displayObject.scalex = this.scalex;
					this.displayObject.scaley = this.scaley;*/
					
					if(this.positionReference){
						this.x = this.positionReference.x;
						this.y = this.positionReference.y;
					}
					
					if(this.rotationReference){
						this.rotation = this.rotationReference.value;
						//this.rotation = this.rotationReference.value > 360 ? 0 : this.rotationReference.value;
						//this.rotation = this.rotationReference.value < -360 ? 360 : this.rotationReference.value;
					}
					
					if(this.sizeReference){ //course, this relies on a width and height being set...
						this.scalex = this.sizeReference.x / this.width;
						this.scaley = this.sizeReference.y / this.height;
					}
					
					var m = new Matrix();//this.displayObject.matrix;
					var p = new Point(this.registrationPoint.x,this.registrationPoint.y);
					m.translate(-p.x,-p.y);
					m.scale(this.scalex,this.scaley);
					m.rotate(this.rotation*Math.PI/180);
					m.translate(p.x,p.y);
					m.translate(this.x,this.y);
					this.displayObject.matrix = m;
					//this.displayObject.rotation = this.rotation;
				},
				onAdd: function(){
					this._super();
					this.scene.add(this);
				},
				destroy: function(){
					this._super();
					this.scene.remove(this);
				}
		});
  }
});
