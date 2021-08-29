import shift from '../Object/ObjectPrototypeFn.js';

Array.method('shift',function(){
	return this.splice(0,1)[0]
})