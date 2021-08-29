import ObjFn from '../Object/ObjectPrototypeFn.js';

Array.method('unshift',function(){
	this.splice.apply(this,[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length
})