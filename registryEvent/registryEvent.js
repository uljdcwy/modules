import is_array from '../Array/Is_array.js'
var eventuality = function(that) {
	// 初始化注删对象
	var registry = {};
	// 定义事件触发器
	that.fire = function(event) {
		// array 储存注册对象的所有类型  func初始化注删类型中所有的注删函数  handler 初始化手动调用方法的变量 i 运行是递增的值初始化 type 初发动事件类型如果是字符串则为本身如果为对象则为对象的type
		var array, func, handler, i, type = typeof event === 'string' ? event : event.type;
		// 如果注删对象中已注册类型
		if (registry.hasOwnProperty(type)) {
			// 循环数组为registry 类型的类型
			array = registry[type];
			// 循环array 数组
			for (i = 0; i < array.length; i += 1) {
				// 当前数组序列的值 存入handler 的变量中
				handler = array[i];
				// 设置func 为当前序列中的属性method
				func = handler.method;
				// 如果func的原型的植 为string 
				if (typeof func === 'string') {
					// 设置func 的植为当前环境对象中的属性中的func的方法否则为func本身
					func = this[func];
				};
				// 如果 handler.parameters的值 为数组
				if(is_array(handler.parameters))
				{
					// 执行func以call传入当前环境的this的值 当传入handler.parameters的值或都[event]
					func.apply(this, handler.parameters || [event]);
				}else{
					
					// 否则执行func以coll传入当前环境对象 为this  传入handler.parameters的值 为参数或者[event]
					 func.call(this, handler.parameters || [event]);
				 }
			}
		}
		// 返回this值 
		return this;
	};
	// 注删添加事件 传入三个参数 type method ,parameters
	that.on = function(type, method, parameters) {
		// 设置handler的值为对象并存入method,parameters的为传入参数的值 
		var handler = {
			method: method,
			parameters: parameters
		};
		// 如果注册过这个事件类型
		if (registry.hasOwnProperty(type)) {
			// 在注册类型数组中添加对象handler
			registry[type].push(handler);
		} else {
			// 否则初始化当前事件类型的值为handler
			registry[type] = [handler];
		}
		return this
	};
	return that;
}



export default eventuality;
/* 


var o = {};

o = eventuality(o);

o.on('click',function(){
	console.log(arguments)
},['zheng','xiya']);

o.on('click',function(){
	console.log(arguments)
},{name: "123"});

o.fire('click');
 */