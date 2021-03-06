jingo.declare({
	require: [
		'util.Class',
		'com.tinyrobot.flibble.event.EventDispatcher',
		'com.tinyrobot.flibble.event.TimerEvent'
	],
  name: 'com.tinyrobot.flibble.util.Timer',
  as: function() {
  	Timer = EventDispatcher.extend({
				init: function(resolution,repeatCount){
					this._super();
					this.resolution = resolution;
					this.repeatCount = repeatCount;
				},
				start: function(){
					var that = this;
					this.timeout = setTimeout(function(){
							if(!that.repeatCount){
								that.dispatchEvent(TimerEvent.TIMER);
								that.start();
							}else if(that.repeatCount && that.repeatCount >  0){
								that.dispatchEvent(TimerEvent.TIMER);
								that.repeatCount --;
								that.start();
							}
					},this.resolution);
				},
				stop: function(){
					if(this.timeout) clearTimeout(this.timeout);
				}
		});
	}
});
