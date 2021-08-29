import objFn from '../Object/ObjectPrototypeFn.js';


String.method('split',function(s,n){
	var returnArr = [];
	var cs = '';
	var that = this;
	var regGl,sto;
	if(typeof s !== 'string'){
		sto = s.toString();
		regGl = /([img]?)$/.exec(sto);
		sto = sto.replace(/(\/)|([img]?)$/g, '');
	}else{
		sto = s;
		regGl = [];
	}
	
	var reg = new RegExp(sto , regGl[0] ? regGl[0] : 'g');
	var whileVal = true;
	var sliceIndex = 0;
	var that = this;
	
	while(whileVal ){
			whileVal = reg.exec(this);
			if( whileVal ){returnArr.push(whileVal)}
	}
	var renLen = returnArr.length;
	var testVal = returnArr[renLen-1][0];
	var lastVal = []
	var i;
	if(testVal !== this.slice((this.length - testVal.length), this.length)) {
		lastVal[0] = testVal;
		lastVal.index = this.length;
		returnArr.push(lastVal)
	}
	renLen = returnArr.length;
	for(i = 0; i < renLen; i += 1){
		var returnArrI = returnArr[i];
		returnArr[i] = this.slice(sliceIndex,returnArrI.index)
		sliceIndex = returnArrI[0].length + returnArrI.index;
	}
	returnArr.length = n || returnArr.length; 
	return returnArr
})

export default String.prototype.split