Object.prototype.method = function(name,fn){
	if(!this.prototype[name]){
		this.prototype[name] = fn;
	}
};

// 设置一维数组的长度与值
Object.prototype.dim = function(ArrLength,initial){
	var a = [],i;
	for(i = 0; i < ArrLength; i += 1){
		a[i] = initial;
	};
	return a;
};

// 第一个参数是二级数组中第一维的大小，第二个参数是第二维的大小 第三个参数是默认的值 inittial 
Object.prototype.matrix = function(m,n,initial){
	var a,i,j,mat = [];
	for(i = 0; i < m; i += 1){
		a = [];
		for(j = 0;j < n;j += 1){
			a[j] = initial;
		};
		mat[i] = a;
	};
	return mat;
};

// 设置二维数组值 ， J 是第数组中的第几个，V是设置的值 
Object.prototype.identity = function(n,v){
	var j,i,mat = Array.matrix(n,n,0);
	for(i = 0; i < n; i += 1){
		for(j = 0; j < n; j += 1){
			mat[i][j] = v || 1
		}
	};
	return mat;
}

export default Object.prototype;