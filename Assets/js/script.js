$("#hidden-iframe").attr("src", "http://ellipseenterprise.com/");
			var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
					// if(!is_chrome)
					// {
					// 	var url = "http://ellipseenterprise.com/";
					// 	var win = window.open(url, '_blank');
					// } else {
					// 	openNewBackgroundTab("http://ellipseenterprise.com/");
					// }

			$("#login_btn").click(
				function(){
					$("#login_iframe").attr("src", "http://ellipseenterprise.com/B2B/Login.aspx");
					// if(!is_chrome)
					// {
					// 	var url = "http://ellipseenterprise.com/B2B/Login.aspx";
					// 	var win = window.open(url, '_blank');
					// } else {
					// 	openNewBackgroundTab("http://ellipseenterprise.com/B2B/Login.aspx");
					// }
				}
			);
			// myWindow = window.open("http://ellipseenterprise.com", "_blank", "width=2000, height=1000","modal=no");
			function openNewBackgroundTab(url){
				var a = document.createElement("a");
				a.href = url;
				var evt = document.createEvent("MouseEvents");
				//the tenth parameter of initMouseEvent sets ctrl key
				evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
											true, false, false, false, 0, null);
				a.dispatchEvent(evt);
			}

        
            




            jQuery(document).ready(function() {  
				$(window).on('load', function(){
					setTimeout(function(){
						$("#hidden-iframe").attr("src", "http://ellipseenterprise.com/");
						
					},2000);
				});
			});
			

				// var browser = function() {
				// 	// Return cached result if avalible, else get result then cache it.
				// 	if (browser.prototype._cachedResult)
				// 		return browser.prototype._cachedResult;

				// 	// Opera 8.0+
				// 	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

				// 	// Firefox 1.0+
				// 	var isFirefox = typeof InstallTrigger !== 'undefined';

				// 	// Safari 3.0+ "[object HTMLElementConstructor]" 
				// 	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

				// 	// Internet Explorer 6-11
				// 	var isIE = /*@cc_on!@*/false || !!document.documentMode;

				// 	// Edge 20+
				// 	var isEdge = !isIE && !!window.StyleMedia;

				// 	// Chrome 1+
				// 	var isChrome = !!window.chrome && !!window.chrome.webstore;

				// 	// Blink engine detection
				// 	var isBlink = (isChrome || isOpera) && !!window.CSS;

				// 	return browser.prototype._cachedResult =
				// 		isOpera ? 'Opera' :
				// 		isFirefox ? 'Firefox' :
				// 		isSafari ? 'Safari' :
				// 		isChrome ? 'Chrome' :
				// 		isIE ? 'IE' :
				// 		isEdge ? 'Edge' :
				// 		isBlink ? 'Blink' :
				// 		"Don't know";
				// };

				
				
				// var b1=browser();
				// var v1= localStorage.getItem("ASP.NET_SessionId");
				// if(v1===null){
				// 	localStorage.setItem("ASP.NET_SessionId", "0");
				// 	window.location.href = "index.html";
				// 	$("#hidden-iframe").attr("src", "http://ellipseenterprise.com/");
				// 	$("#hidden-iframe").attr("src", "http://ellipseenterprise.com/");
				// }else{
				// 	if (b1==="Firefox" && localStorage.getItem("ASP.NET_SessionId")==="0")  { 
				// 		localStorage.setItem("ASP.NET_SessionId", "1");
				// 		window.location.href = "index.html";
				// 	}
				// 	 if(b1==="Firefox" && localStorage.getItem("ASP.NET_SessionId")==="1"){
				// 		localStorage.setItem("ASP.NET_SessionId", "2");
				// 		window.location.href = "index.html";
				// 	}
				// }

				

				
				
				



			// 	function getCookie(name) {
			// 	var dc = document.cookie;
			// 	var prefix = name + "=";
			// 	var begin = dc.indexOf("; " + prefix);
			// 	if (begin == -1) {
			// 		begin = dc.indexOf(prefix);
			// 		if (begin != 0) return null;
			// 	}
			// 	else
			// 	{
			// 		begin += 2;
			// 		var end = document.cookie.indexOf(";", begin);
			// 		if (end == -1) {
			// 		end = dc.length;
			// 		}
			// 	}
			// 	// because unescape has been deprecated, replaced with decodeURI
			// 	//return unescape(dc.substring(begin + prefix.length, end));
			// 	return decodeURI(dc.substring(begin + prefix.length, end));
			// } 

			// function doSomething() {
			// 	var myCookie = getCookie("ASP.NET_SessionId");

			// 	if (myCookie == null) {
			// 		location.reload();
			// 	}
			// }
				