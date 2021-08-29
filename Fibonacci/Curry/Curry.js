import FnMethod from '../Function/FnMethod.js'

// 
export default Function.method('curry',function(){
	// 获取slice函数
	var slice = Array.prototype.slice,
	// 将参数转换为数组
	args = slice.apply(arguments),
	that = this,
	// 
	Fn = arguments[arguments.length - 1];
	// 如果最后一个参数为函数则执行
	if(typeof Fn == 'function') Fn(that,args); 
	return function(){
		// 每次调用这个函数时返回本函数并且把函数参数存入args中
		return that.curry.apply(null,args.concat(slice.apply(arguments)))
	}
})