// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(test) {
	var x ;
	if (Array.isArray(test)){
		 x = "'"+test[0]+"'";
		return x ;
	}
	
}
