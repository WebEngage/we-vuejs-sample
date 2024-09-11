import { createApp } from 'vue'
import App from './App.vue'
import { Webengage, WebengageNotification, WebengagePush } from '@awesome-cordova-plugins/webengage';
import { WEAndroidFCM } from 'we-cap-android-fcm';
// import { Webengage } from '@awesome-cordova-plugins/webengage';

createApp(App).mount('#app')

const initializeWebEngage = () => {
    WebengagePush.onClick(function (deeplink, customData) {
        alert("WebEngage: Push notification clicked with deeplink: " + deeplink + " and customData: " + JSON.stringify(customData));
        // console.log("WebEngage: Push clicked with deeplink: " + deeplink + " and customData: " + JSON.stringify(customData));
    });

    WebengageNotification.onPrepared(function (inAppData) {
        alert("WebEngage: InApp Prepared Callback Received, Data: " + JSON.stringify(inAppData));
        // console.log("WebEngage: InApp Prepared Callback Received, Data: " + JSON.stringify(inAppData));
    });

    WebengageNotification.onShown(function (inAppData) {
        alert("WebEngage: In-app shown with inAppData: " + JSON.stringify(inAppData));
        // console.log("WebEngage: In-app shown with inAppData: " + JSON.stringify(inAppData));
    });

    WebengageNotification.onDismiss(function (inAppData) {
        alert("WebEngage: In-app dismissed with actionId: " + JSON.stringify(inAppData));
        // console.log("WebEngage: In-app dismissed with actionId: "+ JSON.stringify(inAppData));
    });

    WebengageNotification.onClick(function (inAppData, actionId) {
        alert('WebEngage: In-app clicked with actionId: ' + actionId + " and inAppData: " + JSON.stringify(inAppData));
        // console.log('WebEngage: In-app clicked with actionId: ' + actionId + " and inAppData: " + JSON.stringify(inAppData));
    });

    Webengage.engage(); // Initialize WebEngage

    WEAndroidFCM.updateToken(); // Initializes WebEngage Android FCM
}
document.addEventListener("deviceready", () => {
    initializeWebEngage();
});
