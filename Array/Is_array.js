// 判断参数是否为数组
export default function(value){
	return Object.prototype.toString.apply(value) === '[object Array]';
}