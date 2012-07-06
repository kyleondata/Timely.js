function ti (t){
	var obj = t.objectId == null ? 'body' : t.objectId;
	var cssClass = t.cssClass == null ? 'timelyMessage' : t.cssClass;
	var html = "<div class='" + cssClass + "' >Your session will end in 1 min.</div>";
	
	//Function to inject the warning into
	injectMessage = function() {
		document.getElementById(obj).innerHTML = html + document.getElementById(obj).innerHTML;
	};
	
	//Function to start displayInterval
	startDisplayInterval = function() {
		injectMessage();
		setTimeout(function(){ window.location = t.logoutURL }, t.displayInterval);
	};
	
	//Funciton to start redirectInterval
	startRedirectInterval = function() {
		setTimeout(function(){ startDisplayInterval(); }, t.redirectInterval);
	};
	
	this.start = function(){ startRedirectInterval();}
	
	
};