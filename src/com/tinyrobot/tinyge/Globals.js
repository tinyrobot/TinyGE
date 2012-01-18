jingo.declare({
	require: [
		'com.tinyrobot.flibble.display.Scene',
		//'com.tinyrobot.flibble.display.Sprite',
		/*'com.tinyrobot.tinyge.rendering.DisplayObjectScene',
		'com.tinyrobot.tinyge.managers.ProcessManager',
		'com.tinyrobot.tinyge.managers.SoundManager'*/
	],
  name: 'com.tinyrobot.tinyge.Globals',
  as: function() {
  	//console.log("what");
    Globals = {
			init: function(name){
				//flash like inits
				Globals.flashScene = new Scene(name);
				Globals.stage = Globals.flashScene.root;
				
				/* jingo wasn't happy about the circular dependency so currently scene
					 and managers are added in the user's code */
				
				//important = after flashlike but before anything ticked
				//Globals.processManager = new ProcessManager();
				
				//Globals.scene = new DisplayObjectScene();
				//Globals.scene.sceneView = Globals.stage.addChild(new Sprite());
				
				//TweenIt.init(Globals.stage);
				
				//managers
				//Globals.soundManager = new SoundManager();
			}
		}
  }
});
