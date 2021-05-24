// ==UserScript==
// @name            AWHelper-Auto-Approve
// @version         0.11
// @description     AWHelper-Auto-Approve
// @author          Author
// @include         *
// @grant           GM_xmlhttpRequest
// @run-at          document-end
// @downloadURL     
// @updateURL       
// ==/UserScript==

/*  Obfuscator  //
mangled 
hexadec 
//  Obfuscator  */

var dllink                  = null;
var domain                  = (window.location != window.parent.location) ? document.referrer.toString() : document.location.toString();
var dolist                  = domain.replace("http://","").replace("https://","").replace("http://www.","").replace("https://www.","").replace("www.","").split("/")[0];

if(
    domain.match('all-access.wax.io/cloud-wallet/signing')
){
	(function thiscode(){
		if(
			document.querySelector('div[class*="react-ripples"]') && 
			document.querySelector('div[class*="react-ripples"]').querySelector('button') && 
			!document.querySelector('div[class*="react-ripples"]').querySelector('button').disabled
		){
			setInterval(function(){document.querySelector('div[class*="react-ripples"]').querySelector('button').click()}, 1500);
		}else{
			setTimeout(function(){thiscode()}, 1000); 
		}; 
	})(); 
}; 
