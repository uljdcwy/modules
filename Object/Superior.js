import ObjectPrototypeFn from './ObjectPrototypeFn.js';

Object.method('superior',function(name){
	var that = this,
		method = that[name];
	return function(){
		return method.apply(that,arguments)
	}
});

export default Object.prototype.superior;