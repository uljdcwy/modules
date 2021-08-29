function canvasSupport(){
	return !!document.createElement('canvas').getContext;
}

export default canvasSupport