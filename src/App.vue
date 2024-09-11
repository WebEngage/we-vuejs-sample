<template>
  <div id="app">
    <h1>Analytics and Events</h1>
    <AnalyticsList />
    <EventsList />
    <UserOptIn />

  </div>
</template>


<script>

import { Webengage, WebengageNotification, WebengagePush } from '@awesome-cordova-plugins/webengage';
import { WEAndroidFCM } from 'we-cap-android-fcm';
import AnalyticsList from './components/AnalyticsList.vue';
import EventsList from './components/EventsList.vue';
import UserOptIn from './components/UserOptIn.vue';

export default {
  name: 'App',
  components: {
    AnalyticsList,
    EventsList,
    UserOptIn,
  },


  mounted() {
    console.log('WebEngage: App has been mounted!');
    this.initializeApp();
  },

  methods: {
    initializeApp() {

      WebengagePush.onClick(function (deeplink, customData) {
        // alert("WebEngage: Push notification clicked with deeplink: " + deeplink + " and customData: " + JSON.stringify(customData));
        console.log("WebEngage: Push clicked with deeplink: " + deeplink + " and customData: " + JSON.stringify(customData));
      });

      WebengageNotification.onPrepared(function (inAppData) {
        // alert("WebEngage: InApp Prepared Callback Received, Data: " +JSON.stringify(inAppData) );
        console.log("WebEngage: InApp Prepared Callback Received, Data: " + JSON.stringify(inAppData));
      });

      WebengageNotification.onShown(function (inAppData) {
        // alert("WebEngage: In-app shown with inAppData: " + JSON.stringify(inAppData));
        console.log("WebEngage: In-app shown with inAppData: " + JSON.stringify(inAppData));
      });

      WebengageNotification.onDismiss(function (inAppData) {
        // alert("WebEngage: In-app dismissed with actionId: " + JSON.stringify(inAppData));
        console.log("WebEngage: In-app dismissed with actionId: "+ JSON.stringify(inAppData));
      });

      WebengageNotification.onClick(function (inAppData, actionId) {
        // alert('WebEngage: In-app clicked with actionId: ' + actionId + " and inAppData: "+ JSON.stringify(inAppData) );
        console.log('WebEngage: In-app clicked with actionId: ' + actionId + " and inAppData: " + JSON.stringify(inAppData));
      });

      if (typeof Webengage !== 'undefined') {
        Webengage.engage(); // Initialize WebEngage
        console.log('WebEngage: WebEngage engaged');
      } else {
        console.error('WebEngage: WebEngage not available');
      }

      if (typeof WEAndroidFCM !== 'undefined') {
        WEAndroidFCM.updateToken();
        console.log('WebEngage: WEAndroidFCM update token called');
      } else {
        console.error('WebEngage: WEAndroidFCM not available');
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.button-container {
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
