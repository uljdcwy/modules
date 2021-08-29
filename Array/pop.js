import ObjFn from '../Object/ObjectPrototypeFn.js';
Array.method('pop',function(){
	return this.splice(this.length-1, 1);
});
console.log(Array.prototype.pop,123)

export default Array.prototype.pop;