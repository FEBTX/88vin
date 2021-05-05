var FishConfig={ACCOUNT_URL:"//codegamvip.online/api/Account/getaccountinfo",SERVER_URL:"wss://shark2.1r88.vin:9093",DOWN_ASSERT_URL:"//codegamvip.online/shark/bundle/"};if(location.href.indexOf('g88.vin')>=0)
FishConfig={ACCOUNT_URL:"//id.g88.vin/api/Account/GetAccountInfo",SERVER_URL:"wss://shark2.1r88.vin:9093",DOWN_ASSERT_URL:"//static.g88.vin/shark/bundle/"};if(location.href.indexOf('1g88.vin')>=0)
FishConfig={ACCOUNT_URL:"//id.1g88.vin/api/Account/GetAccountInfo",SERVER_URL:"wss://shark2.1r88.vin:9093",DOWN_ASSERT_URL:"//static.1g88.vin/shark/bundle/"};function GetConfig(){var data=FishConfig.ACCOUNT_URL+";"+FishConfig.SERVER_URL+";"+FishConfig.DOWN_ASSERT_URL+";"+getParameterByName('currency')+";"+getParameterByName('lang');gameInstance.SendMessage("GameManager","OnGetConfig",data);}
function GetToken(){gameInstance.SendMessage('GameManager','OnGetToken',getParameterByName('token'));}
function CloseApplication(){postMessage('onClose',1);}
var frameAction=function(e){if(e.data){if(e.data.key=='setfullscreen'){SetFullscreen(e.data.data,e.data.width,e.data.height);}}};window.addEventListener('message',frameAction,false);function postMessage(action,data){var origin;if(localStorage['referrer']==null||localStorage['referrer']==undefined){origin=document.referrer;localStorage['referrer']=origin;}
var pass_data={'key':action,'data':data,};window.parent.postMessage(pass_data,'*');}
function LoadSuccess(){console.log("load success");postMessage('onLoaded',1);}
function getParameterByName(name){name=name.replace(/[[]/,"\[").replace(/[]]/,"\]");var regex=new RegExp("[\?&]"+name+"=([^&#]*)"),results=regex.exec(location.href);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
function SetFullscreen(flag,width,height){document.getElementById('#canvas').style.width=`${width}px`
document.getElementById('#canvas').style.height=`${height}px`
var div_webGL=document.getElementsByTagName('div')[0];if(flag==1){div_webGL.classList.remove('webgl-content');document.body.style.margin=0;}else{div_webGL.classList.add('webgl-content');document.body.style.margin='8px';}}