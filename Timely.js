function ti (t){
	//Interval to redirect logout
	//this.redirectInterval = t.redirectInterval == null ? 19 : t.displayInterval;
	//Interval to display warning
	//this.displayInterval = t.displayInterval == null ? 1 : t.displayInterval;
	//Object to inject into
	//this.container = t.container == null ? '' : t.container;
	//Optional Class name
	//this.class = t.class == null ? '' : t.class;
	//Logout URL
	//this.logoutURL = t.logoutURL == null ? '' : t.logoutURL;
	
	var html = "<div style='position:fixed; top: 45%; left: 45%; border: 2px solid #000;'>Your session will end in 1 min.</div>";
	
	//Function to inject the warning into
	injectMessage = function() {
		document.body.innerHTML += html;
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