var quo = function(status){
	return {
		get_status: function(){
			return status;
		}
	}
};

export default quo;