<template>
    <div class="events-container">
        <hr />
      <h2>Event Actions</h2>
      <!-- Dynamic Form for Events -->
      <div v-if="showEventForm" class="input-form">
        <h3>{{ selectedEventTitle }}</h3>
        
        <!-- Screen Name -->
        <div v-if="selectedEvent === 0" class="form-group">
          <input v-model="screenName" placeholder="Screen Name" class="input-field" />
          <button @click="updateScreenName" class="btn-primary">Update</button>
        </div>
  
        <!-- Event Name -->
        <div v-else-if="selectedEvent === 1" class="form-group">
          <input v-model="eventName" placeholder="Event Name" class="input-field" />
          <button @click="updateEventName" class="btn-primary">Update</button>
        </div>
      </div>
      <div class="events-list">
        <div 
          class="events-item" 
          v-for="item in events" 
          :key="item.id" 
          @click="handleEventAction(item.id)">
          {{ item.title }}
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  import { Webengage } from '@awesome-cordova-plugins/webengage';
  import { getEvents } from '../data/messages';
  
  export default {
    data() {
      return {
        events: [],
        selectedEvent: null,
        selectedEventTitle: '',
        showEventForm: false,
        screenName: '',
        eventName: ''
      };
    },
    mounted() {
      this.events = getEvents();
    },
    methods: {
      handleEventAction(id) {
        const event = this.events.find((item) => item.id === id);
        this.selectedEvent = id;
        this.selectedEventTitle = event.title;
        this.showEventForm = true;
      },
      updateScreenName() {
        // alert(`Screen Name updated to: ${this.screenName}`);
        Webengage.screen(this.screenName);
        this.resetEventForm();
      },
      updateEventName() {
        // alert(`Event Name updated to: ${this.eventName}`);
        Webengage.track(this.eventName);
        this.resetEventForm();
      },
      resetEventForm() {
        this.showEventForm = false;
        this.screenName = '';
        this.eventName = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .events-container {
    margin: 20px;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    color: #34495e;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .events-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .events-item {
    background-color: #ecf0f1;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .events-item:hover {
    background-color: #3498db;
    color: white;
  }
  
  .input-form {
    max-width: 400px;
    margin: 20px auto;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
  }
  
  .input-field {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
  }
  
  .btn-primary {
    padding: 10px 20px;
    background-color: #2980b9;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #1abc9c;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  