function ti (t){
	var countDownTimer = t.displayInterval / 1000;
	var obj = t.objectId == null ? 'body' : t.objectId;
	var cssClass = t.cssClass == null ? 'timelyMessage' : t.cssClass;
	var pingUrl = t.pingUrl;
	var html = "<div class='" + cssClass + "' >Your session will end in <span id='ti_RemainingTime'></span> <a href='' onClick='sendPing();'>Click to stay logged in.</a></div>";
	
	//Function to inject the warning into
	injectMessage = function() {
		document.getElementById(obj).innerHTML = html + document.getElementById(obj).innerHTML;
	};
	
	//Function to start displayInterval
	startDisplayInterval = function() {
		injectMessage();
		document.getElementById('ti_RemainingTime').innerHTML = countDownTimer;
		setInterval(function(){
			document.getElementById('ti_RemainingTime').innerHTML = countDownTimer;
			countDownTimer--;
		}, 1000);
		setTimeout(function(){ window.location = t.logoutURL }, t.displayInterval);
	};
	
	//Funciton to start redirectInterval
	startRedirectInterval = function() {
		setTimeout(function(){ startDisplayInterval(); }, t.redirectInterval);
	};
	
	//Function for sending the keep alive request
	sendPing = function() {
		try
		{
			countDownTimer = t.displayInterVal / 1000;
			startRedirectInterval();
			var ajaxReq = new XMLHttpRequest();
			ajaxReq.open("GET", pingUrl, true);
			ajaxReq.send();
		}
		catch(err)
		{
			//If an error occurs just logout. IE: the ping url does not exist.
			window.location = t.logoutURL;
		}
	};
	
	this.start = function(){ startRedirectInterval();}
	
	
};