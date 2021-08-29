var by = function(name,minor){
	return function(o,p){
		var a,b;
		if(typeof o === 'object' && typeof p === 'object' && o && p){
			a = o[name];
			b = p[name];
			if(a === b){
				return typeof minor === 'function' ? minor(o,p) : 0;
			};
			if(typeof a === typeof b){
				return a < b ? -1 : 1
			};
			
			return typeof a < typeof b ? -1 : 1;
		}else{
			return a < b ? -1 : 1
			throw{
				name: "Error",
				message: "Expected an object when sorting by " + name
			}
		}
	}
};

export default by;