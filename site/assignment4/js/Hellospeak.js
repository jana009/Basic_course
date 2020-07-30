(function(window){
	var hellospeaker={};
	hellospeaker.bye=function(name){
		console.log(`Hello ${name}`)
	}
window.hellospeaker=hellospeaker;
})(window);
