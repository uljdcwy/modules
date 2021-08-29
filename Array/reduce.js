import Object_addFn from '../Object/ObjectPrototypeFn.js';

// 二级地址调吸血
Array.method('reduce',function(f,value){
	var i;
	for(i = 0; i < this.length;i += 1){
		// value 的值 为f函数的值 存在此函数的生命周期内的内存中 
		value = f(this[i], value);
	}
	return value
});

export default Array.prototype.reduce;