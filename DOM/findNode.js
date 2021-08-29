// 定义
var walk_the_DOM = function walk(node,func){
	func(node);
	node = node.firstChild;
	while(node){
		walk(node,func);
		node = node.nextSibling;
	}
};

var getElementsByAttribute = function(attr,value,initNode){
	var results = [];
	var initNode = initNode ||　document.body;
	walk_the_DOM(initNode,function(node){
		var actual = node.nodeType === 1 && node.getAttribute(attr);
		if(typeof actual === 'string' && 
		(actual === value || typeof value !== 'string')){
			results.push(node);
		}
	});
	return results;
}

export default getElementsByAttribute