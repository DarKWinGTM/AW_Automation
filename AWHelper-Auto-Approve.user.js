// ==UserScript==
// @name            AWHelper-Auto-Approve
// @version         0.130
// @description     AWHelper-Auto-Approve
// @author          Author
// @include         *
// @grant           GM_xmlhttpRequest
// @run-at          document-end
// @downloadURL     https://github.com/DarKWinGTM/AW_Automation/raw/main/AWHelper-Auto-Approve.user.js
// @updateURL       https://github.com/DarKWinGTM/AW_Automation/raw/main/AWHelper-Auto-Approve.user.js
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
            for(var i = 0; i < 10; i++) {
                setTimeout(function(){
                    document.querySelector('div[class*="react-ripples"]').querySelector('button').click()
                }, (1250 * i) ); 
            }; 
        }else{
            setTimeout(function(){thiscode()}, 1000); 
        }; 
    })(); 
    setInterval(function(){
        if(
            document.querySelector('div[id*="cf-error-details"]')
        ){
            window.opener.postMessage([
                'COMMAND', 
                'CLOSE', 
                'ERROR : BLOCKED BY CLOUDFLARE 1020'
            ], '*'); window.close(); 
        }; 
    }, 5000); 
    setInterval(function(){
        try{
            document.querySelector('div[class*="react-ripples"]').parentElement.querySelectorAll('button')[1].click(); 
        }catch(e){}; 
        setTimeout(function(){ window.close() }, 5000); 
    }, 40000); 
}; 
if(
    domain.match('all-access.wax.io/cloud-wallet/login')
){
    (function thiscode(){
        if(
            document.querySelector('div[class*="react-ripples"]') && 
            document.querySelector('div[class*="react-ripples"]').querySelector('button') && 
            !document.querySelector('div[class*="react-ripples"]').querySelector('button').disabled
        ){
            for(var i = 0; i < 10; i++) {
                setTimeout(function(){
                    document.querySelector('div[class*="react-ripples"]').querySelector('button').click()
                }, (1250 * i) ); 
            }; 
        }else{
            setTimeout(function(){thiscode()}, 1000); 
        }; 
    })(); 
    setInterval(function(){
        if(
            document.querySelector('div[id*="cf-error-details"]')
        ){
            window.opener.postMessage([
                'COMMAND', 
                'CLOSE', 
                'ERROR : BLOCKED BY CLOUDFLARE 1020'
            ], '*'); window.close(); 
        }; 
    }, 5000); 
}; 
