Function.prototype.method = function(name,fn){
	if(!this.prototype[name]){
		this.prototype[name] = fn;
	}
	return this
}

export default Function.prototype.method;