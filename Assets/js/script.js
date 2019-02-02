$("#hidden-iframe").attr("src", "http://ellipseenterprise.com/");
			var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

			$("#login_btn").click(
				function(){
					$("#login_iframe").attr("src", "http://ellipseenterprise.com/B2B/Login.aspx");
				}
			);
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
			

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navigation-bar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
//////////////////
// Include Html //
//////////////////



function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

