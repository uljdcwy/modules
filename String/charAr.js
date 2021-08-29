import objFn from '../Object/ObjectPrototypeFn.js';

String.method('charAt',function(pos){
	return this.slice(pos,pos+1)
});

export default String.prototype.charAt