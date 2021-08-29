import FnMethod from '../Function/FnMethod.js';

Function.method('throwFn',function(TypeError,message){
	throw {
		name : TypeError,
		message: message
	}
})