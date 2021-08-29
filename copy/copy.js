class Copy {
	constructor(oldObj,newObj) {
		this.copyFn(oldObj,newObj)
		return newObj
	}
	copyFn(oldObj,newObj){
		let objIsTrue = false;
		for(let i in oldObj){
			if(Array.isArray(oldObj[i])){
				newObj[i] = [];
				this.copyFn(oldObj[i],newObj[i]);
			}else if(typeof oldObj[i] == "object"){
				newObj[i] = {};
				this.copyFn(oldObj[i],newObj[i]);
			}else{
				newObj[i] = oldObj[i]
			}
		};
		return newObj;
	}
}

export default Copy