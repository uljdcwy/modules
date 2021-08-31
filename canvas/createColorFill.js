function createColorFill(attrObj){
	var tempColor,attrObj;
	attrObj = attrObj || null
	if(attrObj.fillType === 'colorFill'){
		tempColor = attrObj.textFillColor;
	}else if(attrObj.fillType === 'linearGradient'){
		var gradient = ctx.createLinearGradient(attrObj.xPositiontextWidth/2
		,attrObj.yPosition,attrObj.textWidth,attrObj.yPosition);
		gradient.addColorStop(0,attrObj.textFillColor[0]);
		gradient.addColorStop(0.6,attrObj.textFillColor[1]);
		tempColor = gradient;
	}else if(attrObj.fillType === 'radialGradient'){
		var gradient = ctx.createRadialGradient(attrObj.xPosition,attrObj.yPosition,
		1,attrObj.xPosition,attrObj.yPosition,attrObj.textWidth);
		gradient.addColorStop(0,attrObj.textFillColor[0]);
		gradient.addColorStop(0.6,attrObj.textFillColor[1]);
		tempColor = gradient;
	}else if(attrObj.fillType === 'pattern'){
		tempColor = ctx.createPattern(attrObj.pattern,'repeat')
	}else{
		tempColor = attrObj.textFillColor[0];
	};
	
	ctx.fillStyle = tempColor;
	
}

/*
	objJSON = {
		fillType: String,
		textFillColor: String || Array,
		xPositiontextWidth: Number,
		yPosition: Number,
		textWidth: Number,
		xPosition: Number,
		pattern: Object // image Obj
	}
*/