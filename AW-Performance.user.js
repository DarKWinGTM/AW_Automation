// ==UserScript==
// @name        AW-Performance
// @version     0.150
// @match       *://all-access.wax.io/cloud-wallet/signing*
// @author      Author
// @grant       window.focus
// @grant       window.close
// @grant       unsafeWindow
// @run-at      document-start
// @downloadURL https://github.com/DarKWinGTM/AW_Automation/raw/main/AW-Performance.user.js
// @updateURL   https://github.com/DarKWinGTM/AW_Automation/raw/main/AW-Performance.user.js
// ==/UserScript==


window.close        = function (){ return }; 
unsafeWindow.close  = function (){ return }; 
self.close          = function (){ return }; 

document.head.appendChild(
    Object.assign(document.createElement('script'), {
        innerHTML : '\
window["refconfig"] = function (){\
  try{ delete window.document.referrer }catch(e){}; \
	try{ Object.defineProperty(document, "referrer", {get : function(){ return "https://play.alienworlds.io/" }}) }catch(e){}; \
  setTimeout(function(){ window["refconfig"]() }, 1000 ); \
}; window["refconfig"](); \
        '
    })
); 
