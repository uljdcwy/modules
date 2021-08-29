function formatTime(date){
	var date = date || new Date();
	if(/GMT\+/.test(date.toString()) && typeof date === 'object'){
		date = date.getFullYear() + "-" +
		addZore((date.getMonth()) + 1 ) + "-" +
		addZore(date.getDate()) + " \t\t " +
		addZore(date.getHours()) + ":" +
		addZore(date.getMinutes()) + ":" + addZore(date.getSeconds()) + '\t\t 中国时间'
		return date;
	}else{
		return "格式错误"
	}
};

function addZore(time){
	time = time.toString().length > 1 ? time : "0" + time
	return time;
}

export default formatTime;