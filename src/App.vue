<template>
  <div id="app">
    <h1>Analytics and Events</h1>
    <AnalyticsList />
    <EventsList />
    <UserOptIn />

  </div>
</template>


<script>

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
  },
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
