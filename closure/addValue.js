var myObject = (function(){
	var value = 0;
	return {
		increment: function(inc){
			value += typeof inc === 'number' ? inc : 1;
			return this;
		},
		getValue: function(){
			return value;
		}
	}
}());

export default myObject;