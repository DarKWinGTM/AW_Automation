// ==UserScript==
// @name          AW_Helper_Controller
// @namespace     Violentmonkey Scripts
// @include       DISABLE-*.wax.*
// @include       DISABLE-*awhelper.*
// @include       *.alien*script.*
// @include       DISABLE-*.pusanstudio.*
// @include       DISABLE-*localhost*
// @exclude       *.bloks.*
// @exclude       *.wax.*/dashboard
// @grant         unsafeWindow
// @grant         GM_xmlhttpRequest
// @version       2.82
// @author        Thanks for YoYoisMe
// @updateURL     https://github.com/DarKWinGTM/AW_Automation/raw/main/AW_Helper_Controller_obf.user.js
// @downloadURL   https://github.com/DarKWinGTM/AW_Automation/raw/main/AW_Helper_Controller_obf.user.js
// @description   06/06/2021, 02:00:00 PM
// ==/UserScript==



try{ unsafeWindow.document.write    = function () {return} }catch(e){}; 
try{ document.write                 = function () {return} }catch(e){}; 
Object.defineProperty(document, "write", { value : function () { return } }); 

unsafeWindow._open_ = unsafeWindow.open; 
unsafeWindow._open  = function (u, n, f){
	w = unsafeWindow._open_(u, n); w.blur(); 
    return w; 
}; unsafeWindow.open = unsafeWindow._open; 

console.save = function (){return}; 

document.head.appendChild(
    (function (){
        object = Object.assign(document.createElement('meta'), {
        name        : 'referrer', 
        content     : 'no-referrer'
        }); 
        object.setAttribute('name', 'referrer'); 
        object.setAttribute('content', 'no-referrer'); 
        return object
    })()
); 
localStorage.setItem("autoLogin", 'true'); 
if(
    !localStorage.getItem("LOG")
){ localStorage.setItem("LOG", '') }; 

function searchStringInArray(StringPut, Array){
    for (var x=0; x < Array.length; x++){
    if (Array[x].match(StringPut)){
        return x;
    }}; return -1;
}; 

function RebuildURL(TICKETNAME, TICKETCHAR){
    if(
        TICKETNAME && 
        TICKETCHAR
    ){
        if(
            decodeURI(window.location.href).match(`#${TICKETNAME}`)
        ){
            window.location.href = decodeURI(window.location.href).replace("#" + TICKETNAME + ":" + TICKETCHAR, "#").replace("#,", "#");
        }else if(
            window.location.href.match("#")
        ){
            window.location.href = decodeURI(window.location.href).replace("," + TICKETNAME + ":" + TICKETCHAR, "").replace("#,", "#");
        };
        for (var x = 0; x < 5; x++){
            setTimeout(function(){
                window.location.href=decodeURI(window.location.href).replace("#,", "#")
            }, 1000 * x);
        };
    }else{
        if(
            decodeURI(window.location.href).match("#")
        ){
            window.location.href = decodeURI(window.location.href).replace("#,", "#");
        }; 
    };
}; RebuildURL('', ''); 

// MESSAGE EVENT
var eventMethod     = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer         = window[eventMethod];
var messageEvent    = eventMethod == "attachEvent" ? "onmessage" : "message";
window.addEventListener(messageEvent, function (e) {
    
    if(
        e.data[0] == 'COMMAND' && 
        e.data[1] == 'DENIE'
    ){
        for (l of document.querySelector('button')){
            if(
                (
                    l.innerText == 'Mined Now' || 
                    l.innerText == 'Mine' || 
                    l.innerText.match('TRANSECTION : ')
                ) && !l.getAttribute('disabled')
            ){
                simulateMouse(l, "mouseover");
                simulateMouse(l, "mousedown");
                simulateMouse(l, "mouseup");
                //  simulatePress(l, [9, 13], ['Tab', 'Enter']);
                simulateMouse(l, "click"); 
                //  l.click();
                break; 
            }; 
        }; 
    }else if(
        e.data[0] == 'COMMAND' && 
        e.data[1] == 'CLOSE'
    ){
        window.location.reload(true); 
    }; 

}, true); 

async function TRANSACT(DATA) {
    
    console.debug( DATA ); 
    
    DATA['repo'].innerText = `TRANSECTION : ${ DATA['nonce'] }`; 
    window['yoyoismeservermine'] = {
		'task' : {}, 
		'time' : (function (){
			setTimeout(function(){
				if(
					window['yoyoismeservermine']['work'] == ''
				){
					window.location.reload(true); 
				}
			}, 32000); 
		})(), 
		'work' : ''
	}; 
    
    try{
        window['yoyoismeservermine']['task'] = await wax.api.transact({
            actions: [{
                account     : mining_account, 
                name        : 'mine',
                authorization: [{
                    actor       : wax.userAccount,
                    permission  : 'active',
                }],
                data: {
                    miner : wax.userAccount, 
                    nonce : DATA['nonce']
                },
            }]
        }, {
            blocksBehind    : 3,
            expireSeconds   : 30
        }); 
        //  .then(result => {
        //      console.debug('result is = ', result); 
        //  }); 
    }catch(e){
        window['yoyoismeservermine']['task'] = {}; 
    }; window['yoyoismeservermine']['work'] = 'done'; console.debug( window['yoyoismeservermine'] ); 
    if(
        !window['yoyoismeservermine']['task'] || 
		!(function (t){
			try{
				Object.keys( t ); return Object.keys( t ).length
			}catch(e){return 0}
		})(window['yoyoismeservermine']['task'])
    ){
        DATA['repo'].innerText = `FAIL : ${ DATA['nonce'] }`; 
        simulateMouse(DATA['mine'], "mouseover");
        simulateMouse(DATA['mine'], "mousedown");
        simulateMouse(DATA['mine'], "mouseup");
        //  simulatePress(DATA['mine'], [9, 13], ['Tab', 'Enter']);
        simulateMouse(DATA['mine'], "click"); 
        //  DATA['mine'].click(); 
    }else{
        DATA['repo'].innerText = `DONE : ${ DATA['nonce'] }`; 
        try{
            as_login(); 
            //	as_autologin(); 
            //  console.debug(`A : ${ window['as_autologin'] }`); 
        }catch(e){
            unsafeWindow['as_login'](); 
            //	unsafeWindow['as_autologin'](); 
            //  console.debug(`B : ${ unsafeWindow['as_autologin'] }`); 
        }; 
        //  อัพขึ้นให้ใหม่แล้วนะครับ as_allMimneLTM(user, จำนวน rowทที่ต้องการ)
        (function thiscode(
            LOGS
        ){
            setTimeout(function(){
                //  console.debug( LOGS ); 
                //  console.debug( document.querySelector('div[id*="mine-last"]').innerText.replace(/\[|\]| TLM/gi, '').split(/\s|\[|\]/gi) ); 
                //  console.debug( LOGS[0] == document.querySelector('div[id*="mine-last"]').innerText.replace(/\[|\]| TLM/gi, '').split(/\s|\[|\]/gi)[0] ); 
                if (
                    LOGS[0] == document.querySelector('div[id*="mine-last"]').innerText.replace(/\[|\]| TLM/gi, '').split(/\s|\[|\]/gi)[0]
                ){
                    thiscode( LOGS ); 
                }else{
                    LOGS = document.querySelector('div[id*="mine-last"]').innerText.replace(/\[|\]| TLM/gi, '').split(/\s|\[|\]/gi)
                    LOGS[3] = {
                        'Jan' : '01',
                        'Feb' : '02',
                        'Mar' : '03',
                        'Apr' : '04',
                        'May' : '05',
                        'Jun' : '06',
                        'Jul' : '07',
                        'Aug' : '08',
                        'Sep' : '09',
                        'Oct' : '10',
                        'Nov' : '11',
                        'Dec' : '12'
                    }[ LOGS[3] ]; 
                    
                    console.debug( `${ LOGS[2] }.${ LOGS[3] }.${ LOGS[4] } ${ LOGS[5] }` ); 
                    
                    document.querySelector('#log-mine').prepend(Object.assign(document.createElement('tr'), {
                        innerHTML : `<tr><td>${ LOGS[2] }.${ LOGS[3] }.${ LOGS[4] } ${ LOGS[5] } (MINE SERVER +)</td><td><font color='#8DC63F'>${ LOGS[0] }</font></td></tr>`
                    })); 
                }; 
            }, 1000); 
        })( document.querySelector('div[id*="mine-last"]').innerText.replace(/\[|\]| TLM/gi, '').split(/\s|\[|\]/gi) ); 
    }; 
}; 





document.body.appendChild(
    Object.assign(document.createElement('script'), {
        innerHTML : '\
try{ window.document.write          = function () {return} }catch(e){}; \
try{ document.write                 = function () {return} }catch(e){}; \
Object.defineProperty(document, "write", { value : function () {return}}); \
window["SETCOOKIE"] = function (cname, cvalue, exdays) {\
    var d               = new Date();\
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));\
    var expires         = "expires=" + d.toUTCString();\
    self.document.cookie     = cname + "=" + cvalue + ";" + expires + ";path=/"; \
    return cvalue\
}; \
window["GETCOOKIE"] = function (cname) {\
    var name            = cname + "=";\
    var decodedCookie   = decodeURIComponent(self.document.cookie);\
    var ca              = decodedCookie.split(";");\
    for(var i = 0; i < ca.length; i++) {\
        var c = ca[i];\
        while (c.charAt(0) == " ") {\
            c = c.substring(1);\
        }; \
        if (c.indexOf(name) == 0) {\
            return c.substring(name.length, c.length);\
        }; \
    }; return "";\
}; \
        '
    })
); 

function simulatePress(element, keycode, codekey){
    for(i = 0; i <= keycode.length; i++){
        var keyboardEvent = new KeyboardEvent('keydown', {
            code: codekey[i], 
            key: codekey[i], 
            keyCode: keycode[i], 
            which: keycode[i], 
            bubbles: !0, 
            composed: !0, 
            cancelable: !0, 
        }); 
        Object.defineProperty(keyboardEvent, keycode[i], {
            get:function(){
                return this.charCodeVal;
            }
        }); 
        keyboardEvent.charCodeVal = keycode[i];
        element.focus();
        element.dispatchEvent(keyboardEvent);
        
        var keyboardEvent = new KeyboardEvent('keypress', {
            code        : codekey[i], 
            key         : codekey[i], 
            keyCode     : keycode[i], 
            which       : keycode[i], 
            bubbles     : !0, 
            composed    : !0, 
            cancelable  : !0, 
        }); 
        Object.defineProperty(keyboardEvent, keycode[i], {
            get:function(){
                return this.charCodeVal;
            }
        }); 
        keyboardEvent.charCodeVal = keycode[i];
        element.focus();
        element.dispatchEvent(keyboardEvent);
        
        if(i == keycode.length){
            element.click();
        };
    };
}; 
function simulateMouse(node, eventType) {
    try{
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }catch(e){}; 
}; 

if(
    top == self && 
    window.location.href.match(/awhelper.|localhost|103.253.73.169|203.159.92.5|203.159.95.7|45.91.133.12/gi)
){
	unsafeWindow['controllers'] = false; 
}else{
	unsafeWindow['controllers'] = true; 
}; 
	
if (
    window.location.href.match(/CLOSETHISTAB|wallet.wax.io\/dashboard/gi)
){
    setInterval(function(){
        window.close(); 
    }, 3000); 
}else if(
    top == self && 
    window.location.href.match(/awhelper.|mine.alien(.*)script.|localhost|103.253.73.169|203.159.92.5|203.159.95.7|45.91.133.12/gi)
){
	
	window['dalayCpu'] 		= '20'; 
	unsafeWindow.dalayCpu 	= '20'; 
	window['dalayLogin'] 	= '5'; 
	unsafeWindow.dalayLogin = '5'; 
	
    (async function (DATA){
		for(x of [
			/*!	'https://api.waxsweden.org', 	// [API] Default 	!*/
			'https://wax.greymass.com', 	// [API] Server-01
			'https://wax.pink.gg', 			// [API] Server-02
			'https://wax.eosn.io', 			// [API] Server-03
			'https://www.eosphere.io', 		// [API] Server-04
			'https://wax.cryptolions.io' 	// [API] Server-05
		]){
			GM_xmlhttpRequest({
				method      : 'GET', 
				url         : x, 
				timeout     : 4000, 
				onload      : function(res) {
					if(
						res.status == 200 || (
							res.status == 301 && res.finalUrl.match(/chain.wax.io|wax.cryptolions.io/gi)
						) || (
							res.status == 403 && res.finalUrl.match(/.onion|api.waxsweden.org/gi)
						) || (
							res.status == 404 && res.finalUrl.match(/wax.cryptolions.io|wax.dapplica.io/gi)
						) || (
							res.status == 503 && res.finalUrl.match('www.eosphere.io')
						)
					){
						DATA['acc'].push( `${res.finalUrl.split('/')[0]}//${res.finalUrl.split('/')[2]}` ); 
					}
				}
			})
		}; 
        setTimeout(function(){
			DATA['get'] = ([
				/*!	'https://api.waxsweden.org_[API] Default', 	!*/
				'https://wax.greymass.com_[API] Server-01', 
				'https://wax.pink.gg_[API] Server-02', 
				'https://wax.eosn.io_[API] Server-03', 
				'https://www.eosphere.io_[API] Server-04', 
				'https://wax.cryptolions.io_[API] Server-05'
			].toString().match(
				RegExp(`${ DATA['acc'][ Math.floor(Math.random() * DATA['acc'].length) ] }_(.*?)(,|$)`, 'gi')
			) || ['https://wax.cryptolions.io_[API] Server-05'])[0].split(/_|,/gi); 
			
			document.querySelector('select[id*="select-server"]').value = DATA['get'][1]; 
			document.querySelector('select[id*="select-server"]').setAttribute('value', DATA['get'][1]); 
			$('.select-server').trigger('change'); 
			document.querySelector('select[id*="select-server"]').dispatchEvent(new Event('change'));
			
        }, 5000); 
		for(x of [
			/*! 'https://api.waxsweden.org',    !*/
			'https://waxapi.ledgerwise.io', 
			'https://api.wax.alohaeos.com', 
			'https://wax.greymass.com', 
			'https://chain.wax.io', 
			'https://wax.dapplica.io', 
			'http://waxswedenex56rp5.onion'
		]){
			GM_xmlhttpRequest({
				method      : 'GET', 
				url         : x, 
				timeout     : 4000, 
				onload      : function(res) {
					if(
						res.status == 200 || (
							res.status == 301 && res.finalUrl.match(/chain.wax.io|wax.cryptolions.io/gi)
						) || (
							res.status == 403 && res.finalUrl.match(/.onion|api.waxsweden.org/gi)
						) || (
							res.status == 404 && res.finalUrl.match(/wax.cryptolions.io|wax.dapplica.io/gi)
						) || (
							res.status == 503 && res.finalUrl.match('www.eosphere.io')
						)
					){
						DATA['api'].push( `${res.finalUrl.split('/')[0]}//${res.finalUrl.split('/')[2]}` ); 
					}
				}
			})
		}; 
        setTimeout(function(){
            try{
				
                //  https://stackoverflow.com/questions/18524652/how-to-use-javascript-object-defineproperty
				
                DATA['set'] = (function (){
                    if(
						DATA['api'].includes('http://waxswedenex56rp5.onion')
					){
                        return 'http://waxswedenex56rp5.onion'; 
                    }else{
                        return DATA['api'][ Math.floor(Math.random() * DATA['api'].length) ]; 
                    }; 
                })(); 
                Object.defineProperty(unsafeWindow.wax.rpc, 'endpoint', {
                    value           : DATA['set'],
                    writable        : false,
                    enumerable      : true,
                    configurable    : false
                }); 
				
            }catch(e){
                window.location.reload(true); 
            }; console.debug( DATA ); 
        }, 20000); 
        
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve({
                    'status' : true, 
                    'wallet' : DATA, 
                    'server' : DATA['set'], 
                    'logacc' : DATA['acc'], 
                    'logget' : DATA['get']
                }); 
            }, 21500); 
        });
        
    })({
        'ele' : '', 
        'wax' : '', 
        'api' : [], 
        'acc' : [], 
        'set' : '', 
        'get' : [], 
    }).then(result => {
        
        (function thiscode(s){
            setTimeout(function(){
                Object.defineProperty(unsafeWindow.wax.rpc, 'endpoint', {
                    value           : s['server'],
                    writable        : false,
                    enumerable      : true,
                    configurable    : false
                }); thiscode(s); 
            }, 1000); 
        })(result); 
		
		if (
			unsafeWindow['controllers']
		){
			(function thiscode(s){
				
				setTimeout(function(){
					if(
						s['logacc'].length <= 0
					){
						window.location.reload(true); 
					}else{
						GM_xmlhttpRequest({
							method      : 'GET', 
							url         : s['logget'][0], 
							timeout     : 10000, 
							onload      : function(res) {
								
								s['logget'] = ([
									/*!	'https://api.waxsweden.org_[API] Default', 	!*/
									'https://wax.greymass.com_[API] Server-01', 
									'https://wax.pink.gg_[API] Server-02', 
									'https://wax.eosn.io_[API] Server-03', 
									'https://www.eosphere.io_[API] Server-04', 
									'https://wax.cryptolions.io_[API] Server-05'
								].toString().match(
									RegExp(`${ s['logacc'][ Math.floor(Math.random() * s['logacc'].length) ] }_(.*?)(,|$)`, 'gi')
								) || ['https://wax.cryptolions.io_[API] Server-05'])[0].split(/_|,/gi); 
						
								console.debug( s['logget'] ); 
								console.debug( s['logacc'] ); 
								
								document.querySelector('select[id*="select-server"]').value = s['logget'][1]; 
								document.querySelector('select[id*="select-server"]').setAttribute('value', s['logget'][1]); 
								$('.select-server').trigger('change'); 
								document.querySelector('select[id*="select-server"]').dispatchEvent(new Event('change')); 
								
								if(
									!(
										res.status == 200 || (
											res.status == 301 && res.finalUrl.match(/chain.wax.io|wax.cryptolions.io/gi)
										) || (
											res.status == 403 && res.finalUrl.match(/.onion|api.waxsweden.org/gi)
										) || (
											res.status == 404 && res.finalUrl.match(/wax.cryptolions.io|wax.dapplica.io/gi)
										) || (
											res.status == 503 && res.finalUrl.match('www.eosphere.io')
										)
									)
								){
									
									s['logacc'] = s['logacc'].filter(function(x){
										if(x != s['logget'][1]){
											return x
										}; 
									}); 
									
								}; 
							}, 
							ontimeout: function(out){
								
								s['logget'] = ([
									/*!	'https://api.waxsweden.org_[API] Default', 	!*/
									'https://wax.greymass.com_[API] Server-01', 
									'https://wax.pink.gg_[API] Server-02', 
									'https://wax.eosn.io_[API] Server-03', 
									'https://www.eosphere.io_[API] Server-04', 
									'https://wax.cryptolions.io_[API] Server-05'
								].toString().match(
									RegExp(`${ s['logacc'][ Math.floor(Math.random() * s['logacc'].length) ] }_(.*?)(,|$)`, 'gi')
								) || ['https://wax.cryptolions.io_[API] Server-05'])[0].split(/_|,/gi)[1]; 
						
								console.debug( s['logget'] ); 
								console.debug( s['logacc'] ); 
								
								document.querySelector('select[id*="select-server"]').value = s['logget'][1]; 
								document.querySelector('select[id*="select-server"]').setAttribute('value', s['logget'][1]); 
								$('.select-server').trigger('change'); 
								document.querySelector('select[id*="select-server"]').dispatchEvent(new Event('change')); 
								
								s['logacc'] = s['logacc'].filter(function(x){
									if(x != s['logget'][1]){
										return x
									}; 
								}); 
								
							}, 
							onerror: function(err){
								
								s['logget'] = ([
									/*!	'https://api.waxsweden.org_[API] Default', 	!*/
									'https://wax.greymass.com_[API] Server-01', 
									'https://wax.pink.gg_[API] Server-02', 
									'https://wax.eosn.io_[API] Server-03', 
									'https://www.eosphere.io_[API] Server-04', 
									'https://wax.cryptolions.io_[API] Server-05'
								].toString().match(
									RegExp(`${ s['logacc'][ Math.floor(Math.random() * s['logacc'].length) ] }_(.*?)(,|$)`, 'gi')
								) || ['https://wax.cryptolions.io_[API] Server-05'])[0].split(/_|,/gi)[1]; 
								
								console.debug( s['logget'] ); 
								console.debug( s['logacc'] ); 
								
								document.querySelector('select[id*="select-server"]').value = s['logget'][1]; 
								document.querySelector('select[id*="select-server"]').setAttribute('value', s['logget'][1]); 
								$('.select-server').trigger('change'); 
								document.querySelector('select[id*="select-server"]').dispatchEvent(new Event('change')); 
								
								s['logacc'] = s['logacc'].filter(function(x){
									if(x != s['logget'][1]){
										return x
									}; 
								}); 
								
							}
						}); 
					}; 
					
					setTimeout(function(){
						thiscode(s); 
					}, 10000); 
					
				}, 20000); 
				
			})(result); 
			
			//  setTimeout(function(){
			//      try{
			//          as_autologin(); 
			//          console.debug(`A : ${ window['server_login'] }`); 
			//      }catch(e){
			//          unsafeWindow['server_login'](); 
			//          console.debug(`B : ${ unsafeWindow['server_login'] }`); 
			//      }; 
			//  }, 10000); 
		
			document.querySelector('#log-mine').addEventListener( 'DOMNodeInserted', function ( event ) {
				localStorage.setItem( `LOG`, document.querySelector('#log-mine').innerHTML ); 
			}, false); 
			
			mineserver = {
				'host' : [
					{
						'address' : 'https://api-mine-alien-script.herokuapp.com/mine', 
						'methods' : 'POST', 
						'payload' : '', 
						'headers' : {
							"accept" 						: "application/json, text/plain, */*",
							"accept-language" 				: "en-US,en;q=0.9",
							"access-control-allow-origin" 	: "*",
							"cache-control" 				: "no-cache",
							"content-type" 					: "application/json",
							"pragma" 						: "no-cache",
							"sec-fetch-dest" 				: "empty",
							"sec-fetch-mode" 				: "cors",
							"sec-fetch-site" 				: "cross-site",
							"sec-gpc" 						: "1"
							//	,
							//	"x-forwarded-for": "98.251.232.247"
						}
					}, {
						'address' : 'https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=' +  unsafeWindow.wax.userAccount,
						'methods' : 'GET', 
						'payload' : '', 
						'headers' : {}
					}, {
						'address' : 'https://server-mine-b7clrv20.an.gateway.dev/server_mine_vip?wallet=' +  unsafeWindow.wax.userAccount,
						'methods' : 'GET', 
						'payload' : '', 
						'headers' : {}
					}
					//	{
					//		'address' : 'http://jesthaiza.thddns.net:8855/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {}
					//	}, 
					//	{
					//		'address' : 'http://jesthaiza.thddns.net:8856/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {}
					//	}
					//	{
					//		'address' : 'http://103.253.73.169:7890/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {
					//			"Connection"        : "keep-alive", 
					//			"User-Agent"        : "Mozilla/5.0 (Windows NT 10.0; Win64", 
					//			"Content-Type"      : "application/json", 
					//			"Accept"            : "*/*", 
					//			"Origin"            : "http://103.253.73.169:7890/mine", 
					//			"Referer"           : "https://alienworlds.io/", 
					//			"Accept-Language"   : "en-US,en;q=0.9"
					//		}
					//	}, {
					//		'address' : 'http://203.159.95.7:7777/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {
					//			"Connection"        : "keep-alive", 
					//			"User-Agent"        : "Mozilla/5.0 Windows NT 10.0; Win64", 
					//			"Content-Type"      : "application/json", 
					//			"Accept"            : "*/*", 
					//			"Origin"            : "http://203.159.95.7:7777/mine", 
					//			"Referer"           : "https://alienworlds.io/", 
					//			"Accept-Language"   : "en-US,en;q=0.9"
					//		}
					//	}, {
					//		'address' : 'http://45.91.133.12:55333/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {
					//			"Connection"        : "keep-alive", 
					//			"User-Agent"        : "Mozilla/5.0 Windows NT 10.0; Win64", 
					//			"Content-Type"      : "application/json", 
					//			"Accept"            : "*/*", 
					//			"Origin"            : "http://45.91.133.12:55333/mine", 
					//			"Referer"           : "https://alienworlds.io/", 
					//			"Accept-Language"   : "en-US,en;q=0.9"
					//		}
					//	}, {
					//		'address' : 'http://45.91.133.12:55333/mine', 
					//		'methods' : 'POST', 
					//		'payload' : '', 
					//		'headers' : {
					//			"Connection"        : "keep-alive", 
					//			"User-Agent"        : "Mozilla/5.0 Windows NT 10.0; Win64", 
					//			"Content-Type"      : "application/json", 
					//			"Accept"            : "*/*", 
					//			"Origin"            : "http://45.91.133.12:55333/mine", 
					//			"Referer"           : "https://alienworlds.io/", 
					//			"Accept-Language"   : "en-US,en;q=0.9"
					//		}
					//	}, 
				], 
				'mine' : {}
			}; mineserver['mine'] = mineserver['host'][ Math.floor(Math.random() * mineserver['host'].length) ]; 
			
			(async function (DIFF){
				DIFF['B-DIFF'] = await getBagDifficulty(wax.userAccount);
				DIFF['L-DIFF'] = await getLandDifficulty(wax.userAccount);
				return new Promise(function(resolve, reject) {
					DIFF['RESULT'] = (function (x){
						if(typeof x == 'number'){return x}else{return 0}
					})( DIFF['B-DIFF'] ) + (function (x){
						if(typeof x == 'number'){return x}else{return 0}
					})( DIFF['L-DIFF'] ); 
					resolve(DIFF); 
				});
			})({'B-DIFF' : 0, 'L-DIFF' : 0, 'RESULT' : 0}).then(diff => {
				window['difficulty']        = diff['RESULT']; 
				unsafeWindow['difficulty']  = diff['RESULT']; 
			}); 
			
			setInterval(function(){
				GM_xmlhttpRequest({
					method      : 'GET', 
					url         : result['server'], 
					timeout     : 15000, 
					onload      : function(res) {
						if(
							res.status == 200 || (
								res.status == 301 && res.finalUrl.match(/chain.wax.io|wax.cryptolions.io/gi)
							) || (
								res.status == 403 && res.finalUrl.match(/.onion|api.waxsweden.org/gi)
							) || (
								res.status == 404 && res.finalUrl.match(/wax.cryptolions.io|wax.dapplica.io/gi)
							) || (
								res.status == 503 && res.finalUrl.match('www.eosphere.io')
							)
						){
							console.debug(`API WORKING FINE ${ res.status }`); 
						}else{
							if ( Math.floor(Math.random() * 100) >= 50 ){
								window.location.reload(); 
							}; 
						}
					}, 
					ontimeout: function(out){
						console.debug( out ); 
						if ( Math.floor(Math.random() * 100) >= 50 ){
							window.location.reload(); 
						}; 
					}, 
					onerror: function(err){
						console.debug( err ); 
						if ( Math.floor(Math.random() * 100) >= 50 ){
							window.location.reload(); 
						}; 
					}
				})
			}, 120000); 
			(function thiscode(){
				setTimeout(function(){
					
					if(
						localStorage.getItem( `LOG` )
					){
						document.querySelector('#log-mine').innerHTML = localStorage.getItem( `LOG` );
					}; 
					
					if(
						//	(function (){
						//		for (w of document.querySelectorAll('button')){
						//			try{
						//				if(
						//					w.innerText.match(
						//						'h2drw.wam|2iyck.wam|uxuu.wam|f1uu.wam|g1ve.wam|uxve.wam|zxve.wam|ppvu.wam|.xwe.wam|4twe.wam|h1we.wam|ndwe.wam|kxxe.wam|ptxe.wam|sdxe.wam|x1xe.wam|oudd4.wam|oadd4.wam|nydd4.wam|qedd4.wam|n2dd4.wam|a3jts.wam|bmdd4.wam|1s.se.wam|tk1ce.wam|vsgce.wam|vkhce.wam|j.ice.wam|qcise.wam|pcjse.wam|3gkse.wam|vomce.wam|b4nse.wam|1gqse.wam|.jwse.wam|i2hci.wam|seksi.wam|4mksi.wam|2n.ci.wam|gz.si.wam|ff.si.wam|h1rde.wam|x1vte.wam|5i1de.wam|.v1si.wam|rb2si.wam|f33ci.wam|cm2te.wam|v23te.wam|ti5te.wam|yb3si.wam|lr4ci.wam|3b4si.wam|4b5ci.wam|1z5si.wam|4vaci.wam|evasi.wam|hjbci.wam|hvbsi.wam|2rcci.wam|wvcci.wam|xzcsi.wam|l3dci.wam|4rdsi.wam|tndsi.wam|greci.wam|wneci.wam|qjesi.wam|2rfsi.wam|tnfsi.wam|zjgci.wam|qjgsi.wam|g3hci.wam|dnhsi.wam|hmmsk.wam|yynsk.wam|2yosk.wam|depck.wam|tepsk.wam|babde.wam|jyqsk.wam|zurck.wam|l2sck.wam|oessk.wam|jetck.wam|jetsk.wam|f2uck.wam|s2vsk.wam|faxck.wam|2iyck.wam|gbock.wam|wbosk.wam|.rpsk.wam|obqck.wam|x3qsk.wam|djrsk.wam|ybsck.wam|wacte.wam|caqde.wam|d5wti.wam|txwti.wam|a1xdi.wam|ri.di.wam|hnxdi.wam|a3xti.wam|14fdm.wam|x4fdm.wam|.a1dm.wam|vxebm.wam|3pgbm.wam|cxgrm.wam|ytlbm.wam|rw2ca.wam|5w3ca.wam|gk3sa.wam|denrk.wam|erys4.wam|bbzc4.wam|.bzs4.wam|pbzs4.wam|qbzs4.wam|qjzs4.wam|qzzs4.wam|ozzs4.wam|epjcq.wam|3o.ss.wam|pk4cs.wam|kuhcs.wam|ryhcs.wam|kahss.wam|nqhss.wam|sehss.wam|wuat4.wam|2ibd4.wam|qict4.wam|tact4.wam|xyct4.wam|yict4.wam|2add4.wam|5edd4.wam|pn4ea.wam|pr4ea.wam|pz4ea.wam|rv4ea.wam|sr4ea.wam|tb4ea.wam|ur4ea.wam|wn4ea.wam|ajoua.wam|anoua.wam|b3oua.wam|c3oua.wam|qfoua.wam|rboua.wam|sroua.wam|tjoua.wam|uroua.wam|vboua.wam|nkyby.wam|lgtc4.wam|wwuby.wam|j4as4.wam|p4zry.wam|kxhtq.wam|blldq.wam|jhjtq.wam|n3vs4.wam|uirci.wam|yalsi.wam|44yss.wam|v2oci.wam|wnosq.wam|iusce.wam|jeudo.wam|2itdo.wam|zvcdu.wam|crdtu.wam|n5gss.wam|mlqsi.wam|fdess.wam|35fss.wam|pjetu.wam|.prdk.wam|i5wdk.wam|pp2sq.wam|oo5tm.wam|yw5dm.wam|5satm.wam|x11ti.wam|wuod2.wam|jykt2.wam|4cwdi.wam|nu5da.wam|pg1dc.wam|ibmd2.wam|b3et2.wam|ozrd2.wam|1usta.wam|xeht2.wam|jeft2.wam|anqta.wam|3x.ti.wam|j1zta.wam|powtc.wam|px.dc.wam|pczti.wam|2l1ti.wam|2t.ec.wam|e1.se.wam|ct2ce.wam|n53ce.wam|2wyse.wam|3cxce.wam|3lito.wam|e34do.wam|lfcdo.wam|ejfdo.wam|h.hdq.wam|usktq.wam|zk4c.wam|ts5s.wam|goas.wam|o4bc.wam|jobs.wam|ph5s.wam|4hac.wam|cxhs.wam|wits.wam|sy.s2.wam|.22c2.wam|123s2.wam|k24s2.wam|wm5s2.wam|3uas2.wam|ruas2.wam|m2cc2.wam|xecc2.wam|xidc2.wam|keds2.wam|qegs2.wam|z2gs2.wam|pijc2.wam|cykc2.wam|hkxc4.wam|x.xc4.wam|yxsse.wam|yxtce.wam|mi4se.wam|b3qce.wam|ofqse.wam|ra3ck.wam|5e4sk.wam|fuask.wam|.qbck.wam|35acm.wam|.ijck.wam|enrco.wam|lbxsq.wam|fjwcq.wam|jzycq.wam|5c.cs.wam|os.ss.wam|5o2cs.wam|jk4cs.wam|vo4ss.wam|1w5ss.wam|esacs.wam|p.css.wam|wgdcs.wam|uklcs.wam|i.rss.wam|xg5d2.wam|ekat2.wam|h.cd2.wam|ogct2.wam|g.dd2.wam|vodt2.wam|p4ed2.wam|iwet2.wam|hxxd2.wam|w5xt2.wam|2dyt2.wam|5a1t2.wam|qy2d2.wam|aloto.wam|rxoto.wam|gavds.wam|xevds.wam|gyvts.wam|wuwts.wam|uywts.wam|cmxds.wam|kxmuc.wam|rpxuc.wam|t4ou2.wam|scru2.wam|v4se2.wam|14te2.wam|uste2.wam|uctu2.wam|1guu2.wam|24vu2.wam|d.we2.wam|oowu2.wam|cute2.wam|puxe2.wam|qize2.wam|gz1u2.wam|3r4u2.wam|efcu2.wam|1bge2.wam|nzhe2.wam|eviu2.wam|.rke2.wam|quxec.wam|3yxuc.wam|laxuc.wam|.myuc.wam|jiyuc.wam|pz1uc.wam|fv2ec.wam|jn2uc.wam|vf2uc.wam|fb3uc.wam|e.1ue.wam|4c2ee.wam|..2ue.wam|z43ue.wam|gs4ee.wam|v.ree.wam|owrue.wam|y.rue.wam|iwsee.wam|w.see.wam|pxnue.wam|ghoee.wam|zloee.wam|vloue.wam|blpee.wam|ityue.wam|d5zee.wam|y1zee.wam|mtzue.wam|4m.ee.wam|js1sq.wam|mnnec.wam|.jnuc.wam|.wbcs.wam|nsacs.wam|lvnuc.wam|h3oec.wam|wvoec.wam|ijpec.wam|ys5cs.wam|evldm.wam|crotm.wam|unytm.wam|4p1tq.wam|wfpec.wam|spetq.wam|dthdq.wam|25ltq.wam|jhodq.wam|il.tq.wam|2wqe4.wam|1squ4.wam|oove4.wam|gswu4.wam|olle4.wam|ezquc.wam|unquc.wam|yfrec.wam|34.ee.wam|ic.ee.wam|ikjue.wam|54mee.wam|ccnee.wam|2goee.wam|cooue.wam|wcpee.wam|pkpue.wam|hwqee.wam|.oque.wam|k4que.wam|i5vue.wam|rxvue.wam|.twee.wam|j1wee.wam|opwee.wam|sy5ee.wam|oi5ue.wam|bmaee.wam|vaaee.wam|2qaue.wam|4cudc.wam|cmhd2.wam|d.sdc.wam|acqdc.wam|pctdc.wam|cuqdm.wam|pgutc.wam|bcvtc.wam|11.tc.wam|ft2dc.wam|5.wtc.wam|xcytc.wam|mgztc.wam|px2dy.wam|sl2dy.wam|dfmdy.wam|jvlty.wam|lzmdy.wam|nnmdy.wam|wjmdy.wam|xzmdy.wam|xbmdy.wam|53yue.wam|o4.ug.wam|bg1eg.wam|eg1eg.wam|k.1eg.wam|sk1eg.wam|ws1eg.wam|1o1ug.wam|cw1ug.wam|ic1ug.wam|no1ug.wam|vk1ug.wam|2o2eg.wam|jk2eg.wam|v.2eg.wam'
						//					)
						//				){
						//					//	try{
						//					//		result['wallet']['wax'] = unsafeWindow.wax.userAccount; 
						//					//	}catch(e){
						//					//		result['wallet']['wax'] = w.innerText; 
						//					//	}; 
						//					return w.innerText
						//				}; 
						//			}catch(e){}; 
						//		}; return ''
						//	})() && 
						document.querySelector('h5[id*="nextMine"]') && 
						document.querySelector('h5[id*="nextMine"]').querySelector('font') && 
						document.querySelector('h5[id*="nextMine"]').querySelector('font').innerText.match(/Ready Mined/gi) && ((
							document.querySelector('div[class*="progress-bar "]') && 
							document.querySelector('div[class*="progress-bar "]').innerText.match(/\d{1,3}%/gi).length >= 1 && 
							document.querySelector('#setMax_cpu') && 
							document.querySelector('#setMax_cpu').getAttribute('value') && 
							Number(
								(window['totalCPU'] || unsafeWindow['totalCPU'])
							) < Number(
								unsafeWindow["GETCOOKIE"]('__set_cpu') || document.querySelector('#setMax_cpu').getAttribute('value')
							)
						) || (
							document.querySelector('div[class*="progress-bar "]') && 
							document.querySelector('div[class*="progress-bar "]').innerText.match(/\d{1,3}%/gi).length >= 1 && 
							document.querySelector('#setMax_cpu') && 
							document.querySelector('#setMax_cpu').getAttribute('value') && 
							Number(
								(window['totalCPU'] || unsafeWindow['totalCPU'])
							) >= Number(
								unsafeWindow["GETCOOKIE"]('__set_cpu') || document.querySelector('#setMax_cpu').getAttribute('value')
							) && Math.floor(Math.random() * 700) >= 690
						))
					){
						
						(function thiscode( repo, mine ){
							
							//  site = mineserver; //   {"miner":"h2drw.wam","nonce":"7e18dc5960c383f5"}
							//  !('{"miner":"h2drw.wam","nonce":"7e18dc5960c383f5"}'.match(/\w{14,16}/gi) || [''])[0]
						
							repo.innerText = 'CHECK MINING SERVER'; 
							
							lastMineTx(mining_account, account, eos_rpc).then(tx => {
								
								if(
									mineserver['mine']['address'].match(/103.253.73.169|203.159.92.5|203.159.95.7|45.91.133.12/gi)
								){
									mineserver['mine']['payload'] = `{"mining_account":"m.federation","account":"${wax.userAccount}","difficulty":${ window['difficulty'] },"last_mine_tx":"${tx}"}`
								}; 
								if(
									mineserver['mine']['address'].match(/jesthaiza.thddns|herokuapp/gi)
								){
									mineserver['mine']['payload'] = `{\"account\":\"${ wax.userAccount }\",\"transaction_id\":\"${ tx }\",\"difficulty\":${ window['difficulty'] }}`
								}; console.debug( tx ); console.debug( mineserver['mine']['payload'] ); console.debug( mineserver['mine']['address'] ); 
								
								GM_xmlhttpRequest({
									method      : mineserver['mine']['methods'], 
									url         : mineserver['mine']['address'], 
									timeout     : 16000, 
									data        : mineserver['mine']['payload'], 
									headers     : mineserver['mine']['headers'], 
									onload      : function(res){
										
										if(
											res.status == 200 && 
											(res.responseText.match(/\w{14,16}/gi) || [''])[0]
										){
											
											repo.innerText = 'CHECKED MINE SERVER'; 
											
											TRANSACT( {
												'nonce'     : (res.responseText.match(/\w{14,16}/gi) || [''])[0], 
												'repo'      : repo, 
												'mine'      : mine
											} ); 
											
										}else{
											repo.innerText = 'MINING SERVER DOWN'; 
											simulateMouse( mine, "mouseover");
											simulateMouse( mine, "mousedown");
											simulateMouse( mine, "mouseup");
											//  simulatePress( mine, [9, 13], ['Tab', 'Enter']);
											simulateMouse( mine, "click"); 
											//  mine.click(); 
											mineserver['mine'] = mineserver['host'][ Math.floor(Math.random() * mineserver['host'].length) ]; 
										}; 
										
									}, 
									ontimeout: function(out){
										repo.innerText = 'MINING SERVER DOWN'; 
										simulateMouse( mine, "mouseover");
										simulateMouse( mine, "mousedown");
										simulateMouse( mine, "mouseup");
										//  simulatePress( mine, [9, 13], ['Tab', 'Enter']);
										simulateMouse( mine, "click"); 
										//  mine.click(); 
										mineserver['mine'] = mineserver['host'][ Math.floor(Math.random() * mineserver['host'].length) ]; 
									}, 
									onerror: function(err){
										repo.innerText = 'MINING SERVER DOWN'; 
										simulateMouse( mine, "mouseover");
										simulateMouse( mine, "mousedown");
										simulateMouse( mine, "mouseup");
										//  simulatePress( mine, [9, 13], ['Tab', 'Enter']);
										simulateMouse( mine, "click"); 
										//  mine.click(); 
										mineserver['mine'] = mineserver['host'][ Math.floor(Math.random() * mineserver['host'].length) ]; 
									}
								}); 
							}).catch(er => {
								
								try{
									console.debug( er ); 
								}catch(e){}; 
								
								repo.innerText = 'LAST MINE TX ERROR'; 
								simulateMouse( mine, "mouseover");
								simulateMouse( mine, "mousedown");
								simulateMouse( mine, "mouseup");
								//  simulatePress( mine, [9, 13], ['Tab', 'Enter']);
								simulateMouse( mine, "click"); 
								//  mine.click(); 
								//	mineserver['mine'] = mineserver['host'][ Math.floor(Math.random() * mineserver['host'].length) ]; 
							}); 
						})(
							document.querySelector('h5[id*="nextMine"]').querySelector('font'), 
							document.querySelector('div[id*="m-mine"]').querySelector('button')
						); thiscode(); 
					}else{ thiscode() }; 
					
				}, 5000); 
			})(); 
		}; 
    }); 
    
    (function thiscode(){
        setTimeout(function(){ 
            if(
                document.querySelector('label[for*="cl-mine"]') && 
                document.querySelector('label[for*="cl-mine"]').innerText == 'Mined Auto [ON]'
            ){
                document.querySelector('label[for*="cl-mine"]').click();
            }; thiscode(); 
			try{
				document.querySelector('#setMax_cpu').value = unsafeWindow["GETCOOKIE"]('__set_cpu'); 
			}catch(e){}; 
			try{
				document.querySelector('#setMax_cpu').setAttribute('value', unsafeWindow["GETCOOKIE"]('__set_cpu')); 
			}catch(e){}; 
        }, 2000); 
    })(); 
	
    //	setTimeout(function(){ window.location.reload(true) }, 1740000); 
	
}; 
