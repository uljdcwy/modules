import FnMethod from './FnMethod.js';

Function.method('inherits',function(Parent){;
	this.prototype = new Parent();;
	return this
});

export default Function.prototype.inherits