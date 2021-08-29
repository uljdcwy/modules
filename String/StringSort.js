/*
	做一个字母排序API
*/

class StringSort {
	constructor(arg) {
		// 判断 this指向是否是本对象防止函数链调用
	    console.log(this.constructor == StringSort);
		// 把参数传递到本对象的作用域
		this.arrStr = arg;
		// 调用排序函数
		this.sortFn();
		// 新建对象返回排序后的值
		return this.arrStr
	}
	sortFn(){
		// 判断机器是大端法还是小端法
		//获取数组长度
		let len = this.arrStr.length;
		//设置是否调用再次排序
		let enterSortFn = false;
		//初始化当前比较值
		let current = null;
		// 初始化下一个比较值
		let next = null;
		while(len){
			// 设置当比较值 
			current = this.arrStr[len - 1];
			// 设置下一个比较值
			next = this.arrStr[len - 2];
			// 如果当前比较值小于下一个比较则交换他们的位置并使递归调用函数成立
			if(current < next) {
				this.arrStr[len - 1] = next;
				this.arrStr[len - 2] = current;
				enterSortFn = true
			}
			len --
		}
		if(enterSortFn) this.sortFn()
	}
}

export default StringSort