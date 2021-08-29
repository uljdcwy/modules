export default function(obj){
	var o = new Object();
	// 深考贝对象
	new Copy(obj,o);
	// 
	for(let i in obj){
		let fnName = "get"+i[0].toUpperCase() + i.substr(1);
		o[fnName] = function(){
			return obj[i]
		}
	}
	return o;
}