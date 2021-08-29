var fade = function(node,styles){
	var level = 1;
	var step = function(){
		var i, hex = level.toString(16);
		styles = styles || ['backgroundColor']
		for(i = 0; i < styles.length; i += 1){
			node.style[styles[i]] = "#ffff" + hex + hex;
		}
		if(level < 15){
			level += 1;
			setTimeout(step,100);
		}
	};
	console.log(setTimeout(step,100))
}

fade(document.body)