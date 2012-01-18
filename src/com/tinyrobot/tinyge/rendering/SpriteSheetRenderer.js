jingo.declare({
	require: [
		'com.tinyrobot.tinyge.components.core.AnimatedComponent'
	],
  name: 'com.tinyrobot.tinyge.rendering.SpriteSheetRenderer',
  as: function() {
			SpriteSheetRenderer = AnimatedComponent.extend({ //needs serious rethinking, the _render override's a bit of a hack but better than having multiple bitmaps imo
					init: function(){
						this._super();
						this.x = 0;
						this.y = 0;
						this.scalex = 1;
						this.scaley = 1;
						this.width = 0;
						this.height = 0;
						this.rotation = 0;
						this.frameRate = 1000/30;
						this.last = new Date().getTime();
						this.registrationPoint = new Point(0,0);
					},
					onAdd: function(){
						this._super();
						this.scene.add(this);
						
						var that = this;
						this.displayObject._render = function(ctx){
							var sx = parseInt(that.frame % that.cols) * that.frameWidth;
							var sy = parseInt(that.frame/that.cols) * that.frameHeight;
							
							ctx.drawImage(this.image,sx,sy,that.frameWidth,that.frameHeight,0,0,that.frameWidth,that.frameHeight);
						}
					},
					onFrame: function(){
						if(!this.displayObject) return;
						
						var now = new Date().getTime();
						if(now - this.last >= this.frameRate){
							if(this.frame + 1 < this.numFrames){
								this.frame ++;
							}else{
								this.frame = 0;
							}
							this.last = now;
						}
						
						/*if(!this.displayObject) return;
						this.displayObject.x = this.x;
						this.displayObject.y = this.y;
						this.displayObject.width = this.width;
						this.displayObject.height = this.height;
						this.displayObject.scalex = this.scalex;
						this.displayObject.scaley = this.scaley;
						this.displayObject.rotation = this.rotation;*/
						
						var m = new Matrix();//this.displayObject.matrix;
						var p = new Point(this.registrationPoint.x,this.registrationPoint.y);
						m.translate(-p.x,-p.y);
						m.scale(this.scalex,this.scaley);
						m.rotate(this.rotation*Math.PI/180);
						m.translate(p.x,p.y);
						m.translate(this.x,this.y);
						this.displayObject.matrix = m;
					}
			});
	}
});
