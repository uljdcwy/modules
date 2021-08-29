import ObjFn from '../Object/ObjectPrototypeFn.js';

Array.method('push',function(){
	// 在此处用Array.prototype.slice.apply(arguments)是为了返回形参的副本，以免引用
	// splice 函数当传入数组时以第一个值 作为切割位置 第二个值 作为切割 长度，后面的值 以新值添加到第二个值 后面
	var ts = [this.length,0].concat(Array.prototype.slice.apply(arguments));
	this.splice.apply(this,
		[this.length,0].
			concat(Array.prototype.slice.apply(arguments)));
	return this.length
});

export default Array.prototype.push;