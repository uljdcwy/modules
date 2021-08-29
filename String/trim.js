import objMethod from '../Object/ObjectPrototypeFn.js'

String.method('trim',function(){
	return this.replace(/^\s+|\s+g/g,'');
});

export default String.prototype.trim;