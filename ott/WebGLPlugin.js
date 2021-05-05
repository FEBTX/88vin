var TourConfig = {
    ASSET_BUNDLE_URL: "//codegamvip.online/ott/bundle/",
    GET_ACCOUNT_URL: "//codegamvip.online/api/Account/getaccountinfo",
    REGISTER_TOUR_URL: "//o1.codegamvip.online/api/OTTAPI/Register",
    TOUR_HUB_URL: "https://o1.g88.vin",
    SERVER_API_URL: "//codegamvip.online",
    TOUR_CHAT_HUB_URL: "https://chat.gabivesole.info/chatHub",
    GET_ACCOUNT_TICKET_URL: "//codegamvip.online",
    PORTAL_ID: "1"
};
function GetConfig() {
    var data = TourConfig.ASSET_BUNDLE_URL + ";" + TourConfig.GET_ACCOUNT_URL + ";" + TourConfig.REGISTER_TOUR_URL + ";" + TourConfig.TOUR_HUB_URL + ";" + TourConfig.SERVER_API_URL + ";" + TourConfig.TOUR_CHAT_HUB_URL + ";" + TourConfig.GET_ACCOUNT_TICKET_URL + ";" + getParameterByName('currency') + ";" + TourConfig.PORTAL_ID + ";" + getParameterByName('lang');
    gameInstance.SendMessage("GameManager", "OnGetConfig", data);
}
function GetToken() {
    gameInstance.SendMessage('GameManager', 'OnGetToken', getParameterByName('token'));
}
function CloseApplication() {
    postMessage('onClose', 1);
}
var frameAction = function(e) {
    if (e.data) {
        if (e.data.key == 'setfullscreen') {
            SetFullscreen(e.data.data, e.data.width, e.data.height);
        }
    }
};
window.addEventListener('message', frameAction, false);
function postMessage(action, data) {
    var origin;
    if (localStorage['referrer'] == null || localStorage['referrer'] == undefined) {
        origin = document.referrer;
        localStorage['referrer'] = origin;
    }
    var pass_data = {
        'key': action,
        'data': data,
    };
    window.parent.postMessage(pass_data, '*');
}
function LoadSuccess() {
    console.log("load success");
    postMessage('onLoaded', 1);
}
function getParameterByName(name) {
    name = name.replace(/[[]/, "\[").replace(/[]]/, "\]");
    var regex = new RegExp("[\?&]" + name + "=([^&#]*)")
      , results = regex.exec(location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function SetFullscreen(flag, width, height) {
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    gameInstance.SetFullscreen(flag);
}
