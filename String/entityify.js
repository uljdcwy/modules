import objFn from '../Object/ObjectPrototypeFn.js';
String.method('entityify',function(){
	var character = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;'
	}
	return function(){
		return this.replace(/[<>&"]/g,function(c,regVal){
			return character[c]
		})
	}
}());

export default String.prototype.entityify