import Copy from '../copy/copy.js'

function mix(){
	var i = 1,
	len = arguments.length,
	target = arguments[0],
	arg;
	var transitionObj = new function F(){}
	for(;i < len;i++){
		arg = arguments[i];
		if(typeof arg === 'function'){
			new Copy(arg,transitionObj);
		}else{
			throw new Error("未创建该抽象类")
		}
	}
	target.prototype = transitionObj;
}

export default mix;

