// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
	var x = true ;
	const div = document.createElement('div');
	div.classList.remove('targetClassName')
	
	if(document.body && div.childNodes ==='targetClassName'){
		return true;
	} return false ;
	

} 



  

