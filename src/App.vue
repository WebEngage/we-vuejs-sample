<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Webengage } from '@awesome-cordova-plugins/webengage';


export default {
  name: 'App',
  components: {
    HelloWorld
  },

  // Lifecycle hook called after the component is inserted into the DOM
  mounted() {
    console.log('App has been mounted!');
    this.initializeApp();
  },

  methods: {
    // This method is called after the app is mounted
    initializeApp() {

      if (typeof Webengage !== 'undefined') {
        Webengage.engage(); // Initialize WebEngage
        console.log('WebEngage engaged');
      } else {
        console.error('WebEngage not available');
      }

      // if (typeof WEAndroidFCM !== 'undefined') {
      //   WEAndroidFCM.updateToken();
      //   console.log('WEAndroidFCM update token called');
      // } else {
      //   console.error('WEAndroidFCM not available');
      // }
      // You can add more setup logic here, such as API calls or other setup tasks
      // Example: this.fetchInitialData();
    },

    // Example method for fetching initial data or setting up app-wide services
    fetchInitialData() {
      // Simulate fetching data or setting up app configurations
      console.log('Fetching initial data...');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>