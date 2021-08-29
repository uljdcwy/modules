import FnAdd from '../Function/FnMethod.js';

Number.method('integer',function(){
	return Math[this < 0 ? 'ceil':'floor'](this)
});

export default Number.prototype.integer