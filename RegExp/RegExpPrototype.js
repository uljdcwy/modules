import objFn from '../Object/ObjectPrototypeFn.js'

RegExp.method('testFn',function(regFn,value,cb){
	var slice = Array.prototype.slice;
	var args = slice.apply(value);
	this.value = this[regFn](value);
	var that = this;
	cb && cb(this.value);
	return this;
})

RegExp.method('test',function(string){
	return this.exec(string !== null);
})


// 正则详解  [^<>]+ 匹配非<> 的内容一个以上 | 或者 <(\/?)([A-Za-z]+)([<>]*)> 匹配<紧跟着匹配/ 0个或一个
// 紧接着匹配非<>的肉容*不限制匹配以>结属
// 小技巧使用for或都while循环时可以使匹配字符串匹配完成后停止循环
// 在JS引擎中会将for与正则的引擎一起放入队列中当正则队列执行完成时立即执行for或while队列
// [^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g
/* 
var text = "<html><body bgcolor=linen><p>This is <b>blod</b>!</p></body></html>";

var a,i;
console.log(RegExpPrototype.regArr.tags.exec(text))
for(;a = RegExpPrototype.regArr.tags.exec(text);){
	console.log(1)
	console.log(a)
} 
// 当正则每循环一次之后再调用正则时会从上一次匹配之后开始匹配
*/


RegExp.prototype.regArr = {
	url: /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i,
	tags: /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g,
}

RegExp.method('CurryTest',function(){
	var slice = Array.prototype.slice;
	var args = slice.apply(arguments);
	var that = this;
	var popL = args[args.length - 1];
	if(typeof popL === 'function') popL(args);
	return function(){
		return that.testFn.apply(that,args.concat(slice.apply(arguments)));
	}
});
export default RegExp.prototype;
 
/* import testGET from './RegExp/RegExp_testFn.js'


var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?([^#]*)?(?:#(.*))?$/i;
var result = parse_url.testFn('exec',"http://www.ora.com:80/goodparts?q#fragment");
console.log(result);

var names = ['url','scheme','slash','host','port','path','query','hash'];

var blanks = ' ';
var i;
for(i = 0; i < names.length; i += 1){
	console.log(names[i] + ':' + blanks.substring(names[i].anchor()), result.value[i])
};

console.log(parse_number.test(123.123)) */