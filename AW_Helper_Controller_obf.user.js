// ==UserScript==
// @name          AW_Helper_Controller
// @namespace     Violentmonkey Scripts
// @include       *.wax.*
// @include       *awhelper.*
// @include       *localhost*
// @grant         unsafeWindow
// @grant         GM_xmlhttpRequest
// @version       2.0
// @author        -
// @updateURL     https://github.com/DarKWinGTM/AW_Automation/raw/main/AW_Helper_Controller_obf.user.js
// @downloadURL   https://github.com/DarKWinGTM/AW_Automation/raw/main/AW_Helper_Controller_obf.user.js
// @description   5/26/2021, 02:00:00 PM
// ==/UserScript==

var _0x4e66=['2VnBfcc','noreferrer','1zaVzgL','171587CBUTrc','CHECKED\x20MINE\x20SERVER','TRANSECTION\x20:\x20','appendChild','Tab','herokuapp.com','yoyoismeservermine','6NHURew','div[id=\x22root\x22]','https://','180751nwguWr','650926YClRxB','2tVLjAV','window[\x27SETCOOKIE\x27](\x27ControlRange\x27,\x20this.value,\x201);\x20document.getElementById(\x27formControlRange\x27).parentElement.querySelector(\x27span\x27).innerText\x20=\x20`${this.value}%`;','MINING\x20SERVER\x20DOWN','then','querySelectorAll','keydown','reload','formControlRange','querySelector','transact','random','location','https://all-access.wax.io/cloud-wallet/login/#CLOSETHISTAB','width','setAttribute','dispatchEvent','finalUrl','http://waxswedenex56rp5.onion','split','getElementById','.onion','length','document','close','keypress','style','href','Enter','endpoint','header','MouseEvents','keys','atomichub.io','focus','push','charCodeVal','156189JOxFxM','110405zyeVtr','step','_blank','assign','children','Mining','apipublicserver','responseText','write','removeAttribute','remove','createEvent','defineProperty','341687ZvZYCn','floor','img[src*=\x22atomichub.io\x22]','debug','mousedown','CPU\x20LIMITE\x20:\x20','innerText','element','&size=370','initEvent','rpc','div[role*=\x22progressbar\x22]','CHECKING\x20MINING\x20SERVER','body','ele','script','click','window[\x22SETCOOKIE\x22]\x20=\x20function\x20(cname,\x20cvalue,\x20exdays)\x20{\x09var\x20d\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20=\x20new\x20Date();\x09d.setTime(d.getTime()\x20+\x20(exdays\x20*\x2024\x20*\x2060\x20*\x2060\x20*\x201000));\x09var\x20expires\x20\x20\x20\x20\x20\x20\x20\x20\x20=\x20\x22expires=\x22\x20+\x20d.toUTCString();\x09self.document.cookie\x20\x20\x20\x20\x20=\x20cname\x20+\x20\x22=\x22\x20+\x20cvalue\x20+\x20\x22;\x22\x20+\x20expires\x20+\x20\x22;path=/\x22;\x20\x09return\x20cvalue};\x20window[\x22GETCOOKIE\x22]\x20=\x20function\x20(cname)\x20{\x09var\x20name\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20=\x20cname\x20+\x20\x22=\x22;\x09var\x20decodedCookie\x20\x20\x20=\x20decodeURIComponent(self.document.cookie);\x09var\x20ca\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20=\x20decodedCookie.split(\x22;\x22);\x09for(var\x20i\x20=\x200;\x20i\x20<\x20ca.length;\x20i++)\x20{\x09\x09var\x20c\x20=\x20ca[i];\x09\x09while\x20(c.charAt(0)\x20==\x20\x22\x20\x22)\x20{\x09\x09\x09c\x20=\x20c.substring(1);\x09\x09};\x20\x09\x09if\x20(c.indexOf(name)\x20==\x200)\x20{\x09\x09\x09return\x20c.substring(name.length,\x20c.length);\x09\x09};\x20\x09};\x20return\x20\x22\x22;};\x20\x09\x09','userAccount','getAttribute','588892RobJZa','ControlRange','mouseover','createElement','button','mouseup','https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=h2drw.wam','mine','CLAIM\x20FAIL\x20:\x20','src','status','wax','GETCOOKIE','awhelper','https://secret-ocean-49799.herokuapp.com/https://resizer.atomichub.io/images/v1/preview?ipfs=','match','nonce','oninput','h2drw.wam|2iyck.wam|uxuu.wam|f1uu.wam|g1ve.wam|uxve.wam|zxve.wam|ppvu.wam|.xwe.wam|4twe.wam|h1we.wam|ndwe.wam|kxxe.wam|ptxe.wam|sdxe.wam|x1xe.wam|oudd4.wam|oadd4.wam|nydd4.wam|qedd4.wam|n2dd4.wam|a3jts.wam|bmdd4.wam|1s.se.wam|tk1ce.wam|vsgce.wam|vkhce.wam|j.ice.wam|qcise.wam|pcjse.wam|3gkse.wam|vomce.wam|b4nse.wam|1gqse.wam|.jwse.wam|i2hci.wam|seksi.wam|4mksi.wam|2n.ci.wam|gz.si.wam|ff.si.wam|h1rde.wam|x1vte.wam|5i1de.wam|.v1si.wam|rb2si.wam|f33ci.wam|cm2te.wam|v23te.wam|ti5te.wam|yb3si.wam|lr4ci.wam|3b4si.wam|4b5ci.wam|1z5si.wam|4vaci.wam|evasi.wam|hjbci.wam|hvbsi.wam|2rcci.wam|wvcci.wam|xzcsi.wam|l3dci.wam|4rdsi.wam|tndsi.wam|greci.wam|wneci.wam|qjesi.wam|2rfsi.wam|tnfsi.wam|zjgci.wam|qjgsi.wam|g3hci.wam|dnhsi.wam|hmmsk.wam|yynsk.wam|2yosk.wam|depck.wam|tepsk.wam|babde.wam|jyqsk.wam|zurck.wam|l2sck.wam|oessk.wam|jetck.wam|jetsk.wam|f2uck.wam|s2vsk.wam|faxck.wam|2iyck.wam|gbock.wam|wbosk.wam|.rpsk.wam|obqck.wam|x3qsk.wam|djrsk.wam|ybsck.wam|wacte.wam|caqde.wam|d5wti.wam|txwti.wam|a1xdi.wam|ri.di.wam|hnxdi.wam|a3xti.wam|14fdm.wam|x4fdm.wam|.a1dm.wam|vxebm.wam|3pgbm.wam|cxgrm.wam|ytlbm.wam|rw2ca.wam|5w3ca.wam|gk3sa.wam|denrk.wam|erys4.wam|bbzc4.wam|.bzs4.wam|pbzs4.wam|qbzs4.wam|qjzs4.wam|qzzs4.wam|ozzs4.wam|epjcq.wam|3o.ss.wam|pk4cs.wam|kuhcs.wam|ryhcs.wam|kahss.wam|nqhss.wam|sehss.wam|wuat4.wam|2ibd4.wam|qict4.wam|tact4.wam|xyct4.wam|yict4.wam|2add4.wam|5edd4.wam|pn4ea.wam|pr4ea.wam|pz4ea.wam|rv4ea.wam|sr4ea.wam|tb4ea.wam|ur4ea.wam|wn4ea.wam|ajoua.wam|anoua.wam|b3oua.wam|c3oua.wam|qfoua.wam|rboua.wam|sroua.wam|tjoua.wam|uroua.wam|vboua.wam|nkyby.wam|lgtc4.wam|wwuby.wam|j4as4.wam|p4zry.wam|kxhtq.wam|blldq.wam|jhjtq.wam|n3vs4.wam|uirci.wam|yalsi.wam|44yss.wam|v2oci.wam|wnosq.wam|iusce.wam|jeudo.wam|2itdo.wam|zvcdu.wam|crdtu.wam|n5gss.wam|mlqsi.wam|fdess.wam|35fss.wam|pjetu.wam|.prdk.wam|i5wdk.wam|pp2sq.wam|oo5tm.wam|yw5dm.wam|5satm.wam|x11ti.wam|wuod2.wam|jykt2.wam|4cwdi.wam|nu5da.wam|pg1dc.wam|ibmd2.wam|b3et2.wam|ozrd2.wam|1usta.wam|xeht2.wam|jeft2.wam|anqta.wam|3x.ti.wam|j1zta.wam|powtc.wam|px.dc.wam|pczti.wam|2l1ti.wam|2t.ec.wam','api','GET'];var _0x205017=_0x56ae;(function(_0x18e89f,_0x17fc52){var _0x16e612=_0x56ae;while(!![]){try{var _0x25fd20=-parseInt(_0x16e612(0xae))*parseInt(_0x16e612(0xb9))+-parseInt(_0x16e612(0xbb))*-parseInt(_0x16e612(0xed))+parseInt(_0x16e612(0x97))+-parseInt(_0x16e612(0xdf))+parseInt(_0x16e612(0xaf))+parseInt(_0x16e612(0xe0))*parseInt(_0x16e612(0xb6))+-parseInt(_0x16e612(0xac))*parseInt(_0x16e612(0xba));if(_0x25fd20===_0x17fc52)break;else _0x18e89f['push'](_0x18e89f['shift']());}catch(_0x252395){_0x18e89f['push'](_0x18e89f['shift']());}}}(_0x4e66,0x72223),unsafeWindow[_0x205017(0xd1)][_0x205017(0xe8)]=function(){return;},document[_0x205017(0xe8)]=function(){return;},Object[_0x205017(0xec)](document,'write',{'value':function(){return;}}),window[_0x205017(0xd8)]=function(){var _0x171bb5=_0x205017;document[_0x171bb5(0xfa)]['appendChild'](Object['assign'](document['createElement']('a'),{'target':_0x171bb5(0xe2),'href':_0x171bb5(0xc7),'rel':_0x171bb5(0xad)}))[_0x171bb5(0xfd)](),document[_0x171bb5(0xfa)][_0x171bb5(0xb2)](Object[_0x171bb5(0xe3)](document[_0x171bb5(0x9a)]('a'),{'target':'_blank','href':'https://all-access.wax.io/cloud-wallet/signing/#CLOSETHISTAB','rel':_0x171bb5(0xad)}))[_0x171bb5(0xfd)]();});async function TRANSACT(_0x2b484b){var _0x4797cf=_0x205017;console['debug'](_0x2b484b),_0x2b484b[_0x4797cf(0xf4)][_0x4797cf(0xf3)]=_0x4797cf(0xb1)+_0x2b484b[_0x4797cf(0xa7)],window[_0x4797cf(0xd8)]();try{window[_0x4797cf(0xb5)]=await wax[_0x4797cf(0xaa)][_0x4797cf(0xc4)]({'actions':[{'account':mining_account,'name':_0x4797cf(0x9e),'authorization':[{'actor':wax[_0x4797cf(0x95)],'permission':'active'}],'data':{'miner':wax[_0x4797cf(0x95)],'nonce':_0x2b484b[_0x4797cf(0xa7)]}}]},{'blocksBehind':0x3,'expireSeconds':0x1e});}catch(_0x44b2d0){window[_0x4797cf(0xb5)]={};};console['debug'](window[_0x4797cf(0xb5)]);!Object[_0x4797cf(0xda)](window['yoyoismeservermine'])['length']?(_0x2b484b['element']['innerText']=_0x4797cf(0x9f)+window[_0x4797cf(0xb5)],window[_0x4797cf(0xd8)](),simulateMouse(_0x2b484b[_0x4797cf(0xf4)],_0x4797cf(0x99)),simulateMouse(_0x2b484b[_0x4797cf(0xf4)],'mousedown'),simulateMouse(_0x2b484b[_0x4797cf(0xf4)],_0x4797cf(0x9c)),simulatePress(_0x2b484b['element'],[0x9,0xd],[_0x4797cf(0xb3),_0x4797cf(0xd6)]),simulateMouse(_0x2b484b[_0x4797cf(0xf4)],_0x4797cf(0xfd)),_0x2b484b[_0x4797cf(0xf4)]['click']()):(_0x2b484b[_0x4797cf(0xf4)][_0x4797cf(0xf3)]='CLAIM\x20DONE\x20:\x20'+_0x2b484b[_0x4797cf(0xa7)],setTimeout(function(){window['location']['reload']();},0x2710));;}function _0x56ae(_0x4926c8,_0x4eae8d){_0x4926c8=_0x4926c8-0x95;var _0x4e665b=_0x4e66[_0x4926c8];return _0x4e665b;}document['body'][_0x205017(0xb2)](Object[_0x205017(0xe3)](document[_0x205017(0x9a)](_0x205017(0xfc)),{'innerHTML':_0x205017(0xfe)})),window['awhelper']=function(_0x4438b2){var _0x47af0d=_0x205017;if(!_0x4438b2[_0x47af0d(0xd0)]){for(l of document['querySelectorAll'](_0x47af0d(0x9b))){l[_0x47af0d(0xf3)]==_0x47af0d(0xe5)&&(_0x4438b2[_0x47af0d(0xdd)](l),setTimeout(function(){var _0x2292d2=_0x47af0d;for(e of document['querySelectorAll'](_0x2292d2(0x9b))){e[_0x2292d2(0xf3)]=='Mining'?window[_0x2292d2(0xc6)][_0x2292d2(0xc1)]():window[_0x2292d2(0xa4)]([]);;};},0x493e0));;};setTimeout(function(){window['awhelper'](_0x4438b2);},0x2710);}else setTimeout(function(){window['awhelper'](_0x4438b2);},0x2710);;};function simulateMouse(_0x2139f9,_0x1cea5a){var _0x34f6e5=_0x205017;try{var _0x5dc129=document[_0x34f6e5(0xeb)](_0x34f6e5(0xd9));_0x5dc129[_0x34f6e5(0xf6)](_0x1cea5a,!![],!![]),_0x2139f9[_0x34f6e5(0xca)](_0x5dc129);}catch(_0x457aca){};};function simulatePress(_0x51c206,_0x25e2d4,_0x4ba0c9){var _0x924a21=_0x205017;for(i=0x0;i<=_0x25e2d4[_0x924a21(0xd0)];i++){var _0x192d26=new KeyboardEvent(_0x924a21(0xc0),{'code':_0x4ba0c9[i],'key':_0x4ba0c9[i],'keyCode':_0x25e2d4[i],'which':_0x25e2d4[i],'bubbles':!0x0,'composed':!0x0,'cancelable':!0x0});Object[_0x924a21(0xec)](_0x192d26,_0x25e2d4[i],{'get':function(){var _0x2659be=_0x924a21;return this[_0x2659be(0xde)];}}),_0x192d26[_0x924a21(0xde)]=_0x25e2d4[i],_0x51c206[_0x924a21(0xdc)](),_0x51c206[_0x924a21(0xca)](_0x192d26);var _0x192d26=new KeyboardEvent(_0x924a21(0xd3),{'code':_0x4ba0c9[i],'key':_0x4ba0c9[i],'keyCode':_0x25e2d4[i],'which':_0x25e2d4[i],'bubbles':!0x0,'composed':!0x0,'cancelable':!0x0});Object[_0x924a21(0xec)](_0x192d26,_0x25e2d4[i],{'get':function(){var _0x1209ef=_0x924a21;return this[_0x1209ef(0xde)];}}),_0x192d26[_0x924a21(0xde)]=_0x25e2d4[i],_0x51c206[_0x924a21(0xdc)](),_0x51c206[_0x924a21(0xca)](_0x192d26);i==_0x25e2d4['length']&&_0x51c206[_0x924a21(0xfd)]();;};};window[_0x205017(0xe6)]=function(_0x2fb85a,_0x3963a9){for(x of[]){GM_xmlhttpRequest({'method':'GET','url':x,'timeout':0xbb8,'onload':function(_0x32dbd1){var _0x6ec349=_0x56ae;_0x32dbd1[_0x6ec349(0xa1)]==0xc8&&_0x2fb85a[_0x6ec349(0xdd)](_0x6ec349(0xb8)+_0x32dbd1[_0x6ec349(0xcb)][_0x6ec349(0xcd)]('/')[0x2]);}});};setTimeout(function(){_0x3963a9(_0x2fb85a);},0xdac);};if(window[_0x205017(0xc6)]['href'][_0x205017(0xa6)](/CLOSETHISTAB|wallet.wax.io\/dashboard/gi))setInterval(function(){var _0x3e6928=_0x205017;window[_0x3e6928(0xd2)]();},0xbb8);else{if(top==self&&window['location'][_0x205017(0xd5)][_0x205017(0xa6)](/awhelper.|localhost/gi)){(async function(_0x1954f2){var _0x3a66b4=_0x205017;return GM_xmlhttpRequest({'method':_0x3a66b4(0xab),'url':_0x3a66b4(0xcc),'timeout':0x1388,'onload':function(_0x9f157e){var _0x3bf504=_0x3a66b4;_0x9f157e[_0x3bf504(0xa1)]==0xc8||_0x9f157e[_0x3bf504(0xa1)]==0x193&&_0x9f157e[_0x3bf504(0xcb)]['match'](_0x3bf504(0xcf))?_0x1954f2['api']=[_0x3bf504(0xcc)]:window[_0x3bf504(0xe6)]([],function(_0x12b47e){_0x1954f2['api']=_0x12b47e;});;},'ontimeout':function(_0x4237b4){var _0x4e79be=_0x3a66b4;window[_0x4e79be(0xe6)]([],function(_0x260b21){var _0x11acdb=_0x4e79be;_0x1954f2[_0x11acdb(0xaa)]=_0x260b21;});},'onerror':function(_0x3d2f47){var _0x1d3e3c=_0x3a66b4;window[_0x1d3e3c(0xe6)]([],function(_0x10c1af){var _0x5ba08d=_0x1d3e3c;_0x1954f2[_0x5ba08d(0xaa)]=_0x10c1af;});}}),setTimeout(function(){var _0xc95d1b=_0x3a66b4;for(l of document['querySelectorAll']('button')){if(l[_0xc95d1b(0xf3)]=='Log\x20in'){_0x1954f2[_0xc95d1b(0xfb)]=l;try{unsafeWindow[_0xc95d1b(0xa2)]['rpc'][_0xc95d1b(0xd7)]=function(){var _0x55ce37=_0xc95d1b;return!_0x1954f2[_0x55ce37(0xaa)][_0x55ce37(0xd0)]?_0x55ce37(0xcc):_0x1954f2[_0x55ce37(0xaa)][Math[_0x55ce37(0xee)](Math[_0x55ce37(0xc5)]()*_0x1954f2[_0x55ce37(0xaa)][_0x55ce37(0xd0)])];;}();}catch(_0x1c0736){wax['rpc'][_0xc95d1b(0xd7)]=function(){var _0x3f188d=_0xc95d1b;return!_0x1954f2[_0x3f188d(0xaa)]['length']?'http://waxswedenex56rp5.onion':_0x1954f2[_0x3f188d(0xaa)][Math['floor'](Math[_0x3f188d(0xc5)]()*_0x1954f2['api'][_0x3f188d(0xd0)])];;}();};(function(_0x5913c4){setTimeout(function(){var _0xb9899b=_0x56ae;_0x5913c4[_0xb9899b(0xfd)]();},0x1f4);}(l));};};},0x1f40),new Promise(function(_0xef49d5,_0x2b6989){setTimeout(function(){var _0x345555=_0x56ae;console[_0x345555(0xf0)](_0x1954f2['api']),_0xef49d5({'status':!![],'wallet':_0x1954f2});},0x2ee0);});}({'ele':'','wax':'','api':[]})[_0x205017(0xbe)](_0x9b6f90=>{setInterval(function(){var _0x1ff3c6=_0x56ae;GM_xmlhttpRequest({'method':_0x1ff3c6(0xab),'url':function(){var _0x2a09ab=_0x1ff3c6;return unsafeWindow[_0x2a09ab(0xa2)][_0x2a09ab(0xf7)][_0x2a09ab(0xd7)]||wax[_0x2a09ab(0xf7)][_0x2a09ab(0xd7)];}(),'timeout':0x7148,'onload':function(_0x608a0){var _0xd66ef3=_0x1ff3c6;if(_0x608a0[_0xd66ef3(0xa1)]==0xc8||_0x608a0[_0xd66ef3(0xa1)]==0x193&&_0x608a0[_0xd66ef3(0xcb)][_0xd66ef3(0xa6)](_0xd66ef3(0xcf)))console[_0xd66ef3(0xf0)]('API\x20WORKING\x20FINE\x20'+_0x608a0[_0xd66ef3(0xa1)]);else{Math[_0xd66ef3(0xee)](Math[_0xd66ef3(0xc5)]()*0x64)>=0x32&&window[_0xd66ef3(0xc6)][_0xd66ef3(0xc1)]();;}},'ontimeout':function(_0x40996e){var _0x28f396=_0x1ff3c6;console[_0x28f396(0xf0)](_0x40996e);Math[_0x28f396(0xee)](Math['random']()*0x64)>=0x32&&window['location'][_0x28f396(0xc1)]();;},'onerror':function(_0x20bcb8){var _0x578207=_0x1ff3c6;console[_0x578207(0xf0)](_0x20bcb8);Math['floor'](Math[_0x578207(0xc5)]()*0x64)>=0x32&&window[_0x578207(0xc6)][_0x578207(0xc1)]();;}});},0xea60),setInterval(function(){var _0x4fa5f9=_0x56ae;WAX=wax;if(function(){var _0x486cdb=_0x56ae;for(w of document[_0x486cdb(0xbf)](_0x486cdb(0x9b))){try{if(w[_0x486cdb(0xf3)]['match'](_0x486cdb(0xa9))){try{_0x9b6f90['wallet']['wax']=window[_0x486cdb(0xa2)]['userAccount'];}catch(_0x303830){_0x9b6f90['wallet'][_0x486cdb(0xa2)]=w[_0x486cdb(0xf3)];};return w[_0x486cdb(0xf3)];};}catch(_0x313cd9){};};return'';}()&&(document[_0x4fa5f9(0xc3)](_0x4fa5f9(0xf8))&&document['querySelector'](_0x4fa5f9(0xf8))[_0x4fa5f9(0xd4)]&&document[_0x4fa5f9(0xc3)](_0x4fa5f9(0xf8))[_0x4fa5f9(0xd4)][_0x4fa5f9(0xc8)]&&Number(document[_0x4fa5f9(0xc3)](_0x4fa5f9(0xf8))['style'][_0x4fa5f9(0xc8)][_0x4fa5f9(0xcd)]('%')[0x0])<Number(unsafeWindow[_0x4fa5f9(0xa3)](_0x4fa5f9(0x98))||'90'))){for(l of document['querySelectorAll']('button')){if(l[_0x4fa5f9(0xf3)]=='Mine'&&!l[_0x4fa5f9(0x96)]('disabled')){l[_0x4fa5f9(0xf3)]=_0x4fa5f9(0xf9),function _0xb97a62(_0x2b0e03){var _0x4bdf4=_0x4fa5f9;GM_xmlhttpRequest({'method':_0x4bdf4(0xab),'url':_0x4bdf4(0x9d),'timeout':0x3e80,'onload':function(_0x6eacc7){var _0x56b563=_0x4bdf4;_0x6eacc7['status']==0xc8?(l[_0x56b563(0xf3)]=_0x56b563(0xb0),TRANSACT({'nonce':_0x6eacc7[_0x56b563(0xe7)],'element':_0x2b0e03})):(_0x2b0e03[_0x56b563(0xf3)]=_0x56b563(0xbd),simulateMouse(_0x2b0e03,_0x56b563(0x99)),simulateMouse(_0x2b0e03,'mousedown'),simulateMouse(_0x2b0e03,'mouseup'),simulatePress(_0x2b0e03,[0x9,0xd],['Tab',_0x56b563(0xd6)]),simulateMouse(_0x2b0e03,_0x56b563(0xfd)),_0x2b0e03[_0x56b563(0xfd)](),window['header']());;},'ontimeout':function(_0x333a68){var _0xad19cb=_0x4bdf4;_0x2b0e03[_0xad19cb(0xf3)]=_0xad19cb(0xbd),simulateMouse(_0x2b0e03,_0xad19cb(0x99)),simulateMouse(_0x2b0e03,_0xad19cb(0xf1)),simulateMouse(_0x2b0e03,_0xad19cb(0x9c)),simulatePress(_0x2b0e03,[0x9,0xd],['Tab',_0xad19cb(0xd6)]),simulateMouse(_0x2b0e03,_0xad19cb(0xfd)),_0x2b0e03[_0xad19cb(0xfd)](),window[_0xad19cb(0xd8)]();},'onerror':function(_0x9664b1){var _0x4cb2fb=_0x4bdf4;_0x2b0e03[_0x4cb2fb(0xf3)]=_0x4cb2fb(0xbd),simulateMouse(_0x2b0e03,_0x4cb2fb(0x99)),simulateMouse(_0x2b0e03,_0x4cb2fb(0xf1)),simulateMouse(_0x2b0e03,_0x4cb2fb(0x9c)),simulatePress(_0x2b0e03,[0x9,0xd],['Tab',_0x4cb2fb(0xd6)]),simulateMouse(_0x2b0e03,'click'),_0x2b0e03[_0x4cb2fb(0xfd)](),window[_0x4cb2fb(0xd8)]();}});}(l);break;};};};},0x1388);}),window[_0x205017(0xa4)]([]),setInterval(function(){var _0x1f456e=_0x205017;for(i of document[_0x1f456e(0xbf)](_0x1f456e(0xef))){i[_0x1f456e(0x96)](_0x1f456e(0xa0))[_0x1f456e(0xa6)](_0x1f456e(0xdb))&&!i[_0x1f456e(0x96)]('src')[_0x1f456e(0xa6)](_0x1f456e(0xb4))&&i[_0x1f456e(0xc9)](_0x1f456e(0xa0),_0x1f456e(0xa5)+i[_0x1f456e(0x96)]('code')+_0x1f456e(0xf5));};},0x3e8));try{document[_0x205017(0xce)](_0x205017(0xc2))[_0x205017(0xc9)](_0x205017(0xe1),'1');}catch(_0x15cda4){};try{document[_0x205017(0xce)](_0x205017(0xc2))[_0x205017(0xc9)](_0x205017(0xa8),_0x205017(0xbc));}catch(_0x5bcb7e){};try{document[_0x205017(0xce)](_0x205017(0xc2))[_0x205017(0xe9)]('disabled');}catch(_0x401e1a){};setInterval(function(){var _0x41885b=_0x205017;console[_0x41885b(0xf0)](_0x41885b(0xf2)+(unsafeWindow['GETCOOKIE'](_0x41885b(0x98))||'90')+'\x20%');document['querySelector'](_0x41885b(0xb7))&&!document[_0x41885b(0xc3)]('div[id=\x22root\x22]')[_0x41885b(0xe4)]['length']&&(document[_0x41885b(0xc3)]('div[id=\x22root\x22]')[_0x41885b(0xea)](),window['location']['reload'](!![]));;},0xbb8),window['header']();}};
