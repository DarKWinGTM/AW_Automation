// ==UserScript==
// @name            AW-Auto-Approve
// @version         0.157
// @include         *.wax.io/
// @include         *.wax.io/cloud-wallet/login*
// @include         *.wax.io/cloud-wallet/signing*
// @exclude         *.bloks.*
// @exclude       	*.wax.*/dashboard
// @grant           window.close
// @grant           window.focus
// @grant           GM_xmlhttpRequest
// @run-at          document-end
// @downloadURL     https://github.com/DarKWinGTM/AW_Automation/raw/main/AW-Auto-Approve.user.js
// @updateURL       https://github.com/DarKWinGTM/AW_Automation/raw/main/AW-Auto-Approve.user.js
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
            !document.querySelector('div[class*="react-ripples"]').querySelector('button').disabled && ((
				document.querySelector('div[class*="action-details-title"]') && 
				document.querySelector('div[class*="action-details-title"]').innerText && 
				document.querySelector('div[class*="action-details-title"]').innerText.match(
					'm.federation keyboard_arrow_rightkeyboard_arrow_right mine'
				)
			) || (
				document.querySelector('div[class*="simple-action-details"]') && 
				document.querySelector('div[class*="simple-action-details"]').innerText && 
				document.querySelector('div[class*="simple-action-details"]').innerText.match(
					/m.federation > mine\nshow details/gi
				)
			)) && !document.querySelector('button[class*="waa-login-button"]')
        ){
            for (var i = 0; i < 6; i++){
                setTimeout(function(){
                    document.querySelector('div[class*="react-ripples"]').querySelector('button').click(); 
                }, (1000 * i) ); 
            }; window.focus(); 
        }else{
            setTimeout(function(){thiscode()}, 500); 
        }; 
    })(); 
    setTimeout(function(){
        try{
            document.querySelector('div[class*="react-ripples"]').parentElement.querySelectorAll('button')[1].click(); 
        }catch(e){}; 
    }, 60000); setTimeout(function(){ window.close() }, 1000000); 
}; 
if(
    domain.match('all-access.wax.io/cloud-wallet/login') 
){
    (function thiscode(){
		setTimeout(function(){
			if(
				document.querySelector('button[class*="waa-login-button"]')
			){
				setTimeout(function(){
					document.querySelector('button[class*="waa-login-button"]').click(); 
				}, 4000 ); 
				//	for(var i = 0; i < 3; i++) {
				//		setTimeout(function(){
				//		}, (2500 * i) ); 
				//	}; 
			}else if(
				document.querySelector('div[class*="react-ripples"]') && 
				document.querySelector('div[class*="react-ripples"]').querySelector('button')
			){
				setTimeout(function(){
					document.querySelector('div[class*="react-ripples"]').querySelector('button').click(); 
				}, 4000 ); 
				//	for(var i = 0; i < 3; i++) {
				//		setTimeout(function(){
				//		}, (2500 * i) ); 
				//	}; 
			}else{
				thiscode(); 
			}; 
		}, 5000); 
    })(); setTimeout(function(){ window.close() }, 1000000); 
}; 
if(
    domain == 'https://all-access.wax.io/'
){
    (function thiscode(){
		setTimeout(function(){
			if(
				document.querySelector('button[id="google-social-btn"]')
			){
				for(var i = 0; i < 10; i++) {
					setTimeout(function(){
						document.querySelector('button[id="google-social-btn"]').click(); 
					}, (2500 * i) ); 
				}; 
			}else{ thiscode() }; 
		}, 5000); 
    })(); 
}; 


setInterval(function(){
    if(
        document.querySelector('div[id*="cf-error-details"]')
    ){
        window.opener.postMessage([
            'COMMAND', 
            'CLOSE', 
            'ERROR : BLOCKED BY CLOUDFLARE 1020'
        ], '*'); setTimeout(function(){ window.close() }, 5000); 
    }; 
}, 5000); 
//	setInterval(function(){
//		if(
//			document.querySelector('div[class*="react-ripples"]') && 
//	        document.querySelector('div[class*="react-ripples"]').querySelector('button')
//		){
//			window.opener.postMessage([
//				'COMMAND', 
//				'CLOSE', 
//				'ERROR : LOGIN NOT LOAD'
//			], '*'); setTimeout(function(){ window.close() }, 5000); 
//		}; 
//	}, 180000); 
