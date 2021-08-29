export default function(memo,formula){
	var recur = function(n,t){
		var result = memo[n];
		// 如果
		if(typeof result !== 'number'){
			result = formula(recur,n);
			memo[n] = result;
		}
		return result;
	}
	return recur;
}

/* 

function testf(){
	testg(testf)
	return 213
}

function testg(b){
	b()
	return 456
}
 */