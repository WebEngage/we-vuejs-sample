<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Buttons for Login, Logout, User Event, and User Profile -->
    <div class="button-container">
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
      <button @click="userEvent">User Event</button>
      <button @click="userProfile">User Profile</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Webengage, WebengageUser } from '@awesome-cordova-plugins/webengage';
import { WEAndroidFCM } from 'we-cap-android-fcm';

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  mounted() {
    console.log('WebEngage: App has been mounted!');
    this.initializeApp();
  },

  methods: {
    initializeApp() {
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

    login() {
      // Add login logic here
      console.log('WebEngage: Login clicked');
      WebengageUser.login("Akshay");
    },

    logout() {
      // Add logout logic here
      console.log('WebEngage: Logout clicked');
      WebengageUser.logout();

    },

    userEvent() {
      // Add user event handling logic here
      console.log('WebEngage:  Event clicked');
      Webengage.track("Dummy");
    },

    userProfile() {
      // Add user profile logic here
      console.log('WebEngage: User Profile clicked')
      WebengageUser.setAttribute('we_email', 'john@doe.com');
    }
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
