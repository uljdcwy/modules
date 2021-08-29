import ObjFn from '../Object/ObjectPrototypeFn.js'

Array.method('splice',function(start,deleteCount){
	var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0,
		len = this.length,
		new_len,
		result = [],
		shift_count;
		start = start || 0;
		if(start < 0){
			start += len;
		};
		// 当开始值 大于数组长度时开始值 为数组长度这是为了防止传用未定义下标导制的错误
		start = max(min(start,len),0);
		//  使用min函数的是为了防止未传入删除数 如果未传入删除数则删除数为 数组长度减start的值 
		deleteCount = max(min(typeof deleteCount === 'number' ? deleteCount : len,len - start),0);
		// 用新插入的长度减去删除的长度
		delta = insertCount - deleteCount;
		// 用数组的长度加上 插入长度减去删除的长度
		new_len = len + delta;
		
		// 循环如果k小于删除数则让返回数组添加删除值 
		while(k < deleteCount){
			element = this[start + k];
			if(element !== undefined){
				result[k] = element;
			};
			k += 1;
		};
		// 数组长度减去开始长度减去删除长度
		shift_count = len- start - deleteCount;
		// 如果插入长度小于删除长度
		if(delta < 0){
			// 以开始长度加上插入长度 长出最终原数组的长度
			k = start + insertCount;
			while(shift_count){
				// 当delta 小说0是k - delta 相当于 -- 也就是k + delta
				//console.log(k - delta,k,delta)
				// 此时未用到delete操作符
				this[k] = this[k - delta];
				console.log(this[k])
				k += 1;
				shift_count-= 1;
			};
			// 通过设置数组的长度来达到与delete操作符同样的效果
			this.length = new_len;
		}else if(delta > 0){
			k = 1;
			while(shift_count){
				// 以最终长度减k设置植 
				this[new_len - k] = this[len-k];
				k += 1;
				shift_count -= 1;
			}
			this.length = new_len;
		}
		// 添加新的参数加入数组之中
		for(k = 0; k < insertCount; k += 1){
			this[start + k] = arguments[k + 2];
		};
		return result;
});

export default Array.prototype.splice