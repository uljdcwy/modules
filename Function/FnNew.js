import FnMethod from './FnMethod.js'

Function.method('FnNew',function(){
	var that = Object.create(this.prototype);
	var other = this.apply(this,arguments);
	return (typeof other === 'object' && other) || that;
});
export default Function.prototype.FnNew