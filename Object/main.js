import Superior from './Object/Superior.js'

var constructor = function(spec,my){
	var that;
	my = my || {};
	
	that = {};
	var methodical = function(){};
	that.methodical = methodical;
	that.name = "zheng";
	return that;
};

var mammal = function(spec){
	var that = {};
	that.get_name = function(){
		console.log( that.says())
		return spec.name;
	};
	that.says = function(){
		return spec.saying || ''
	};
	
	return that;
};

var cat = function(spec){
	spec.saying = spec.saying || 'meow';
	var that = mammal(spec);
	that.purr = function(n){
		var i,s = '';
		for(i = 0; i < n; i += 1){
			if(s){
				s += '_';
			}
			s += 'r'
		}
		return s
	};
	that.get_name = function(){
		return that.says() + " " + spec.name + " " + that.says()
	};
	return that;
};

var coolcat = function(spec){
	var that = cat(spec),
		super_get_name = that.superior('get_name');
	that.get_name = function(n){
		return 'like ' + super_get_name() + " baby";
	};
	return that;
};
var mycoolCat = coolcat({name: 'Bix'});
console.log(mycoolCat);
var name = mycoolCat.get_name();
console.log(name);