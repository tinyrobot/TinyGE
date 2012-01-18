jingo.declare({
	require: [
		'util.Class'
	],
  name: 'com.tinyrobot.tinyge.managers.SoundManager',
  as: function() {
    SoundManager = Class.extend({
			init: function(){
				this.maxChannels = 10;
				this.channels = [];
				
				var cb = function(){
					this.active = false;
				}
				
				for(var i = 0; i < this.maxChannels; i++){
					var a = new Audio();
					a.active = false;
					//a.volume = 0.2;
					
					a.addEventListener("ended",cb,false); //scary - chrome happy with/without false, firefox 3 cries if false not specified.
					
					this.channels.push(a);
				}
			},
			loop: function(path,volume){
				for(var i = 0; i < this.channels.length; i++){
					if(this.channels[i].active == false){
						this.channels[i].src = path;
						this.channels[i].loop = true;
						this.channels[i].volume = volume || 1;
						this.channels[i].play();
						this.channels[i].active = true;
						return this.channels[i];
					}
				}
			},
			play: function(path,volume){
				for(var i = 0; i < this.channels.length; i++){
					if(this.channels[i].active == false){
						this.channels[i].src = path;
						this.channels[i].volume = volume || 1;
						this.channels[i].play();
						this.channels[i].active = true;
						return this.channels[i];
					}
				}
			},
			stop: function(path){ //revisit this one, logic doesn't seem quite right...
				for(var i = 0; i < this.channels.length; i++){
					if(this.channels[i].src.indexOf(path) != -1){
						this.channels[i].loop = false;
						this.channels[i].pause();
						this.channels[i].active = false;
					}
				}
			}
		});
  }
});
