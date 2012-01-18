jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.tinyge.components.core.AnimatedComponent',
		'com.tinyrobot.tinyge.Globals'
	],
  name: 'com.tinyrobot.tinyge.rendering.DisplayObjectScene',
  as: function() {
    DisplayObjectScene = AnimatedComponent.extend({ //THIS IS A DISPLAYOBJECT SCENE FOR NOW
				init: function(cname){
					this.sceneView;
					this.layers = [[],[],[]]; //...dynamicize!
					this.trackObject;
					this.onAdd(); //root animatedComponent...?
				},
				add: function(thing){
					this.layers[thing.layer].push(thing);
					this.sceneView.addChild(thing.displayObject);
				},
				remove: function(thing){
					if(this.layers[thing.layer].indexOf(thing) == -1) return;
					this.layers[thing.layer].splice(this.layers[thing.layer].indexOf(thing),1);
					this.sceneView.removeChild(thing);
				},
				onFrame: function(){
					//alter sort order here by calling onRender on a displayobject layer. seems unneccessary for now tho.
					if(this.trackObject){
						var matrix = new Matrix();
						matrix.translate(-(this.trackObject.x+this.trackObject.width/2)+this.sceneView.root.width/2,-(this.trackObject.y+this.trackObject.height/2)+this.sceneView.root.width/2);
						this.sceneView.matrix = matrix;
					}
				}
		});
  }
});
