<template>
    <div class="analytics-container">
      <!-- Display greeting if user is logged in -->
      <div v-if="isLoggedIn" class="greeting">
        <h3>Hello {{ userName }}</h3>
      </div>
  
      <h2>Analytics Actions</h2>
  
      <!-- Dynamic Form for user inputs -->
      <div v-if="showInputForm" class="input-form">
        <h3>{{ selectedActionTitle }}</h3>
  
        <!-- Login Form -->
        <div v-if="selectedAction === 0" class="form-group">
          <input v-model="userId" placeholder="User ID" class="input-field" />
          <input v-model="password" type="password" placeholder="Password" class="input-field" />
          <button @click="performLogin" class="btn-primary">Login</button>
        </div>
  
        <!-- First Name -->
        <div v-else-if="selectedAction === 2" class="form-group">
          <input v-model="firstName" placeholder="First Name" class="input-field" />
          <button @click="updateFirstName" class="btn-primary">Update</button>
        </div>
  
        <!-- Other input fields go here... -->
  
      </div>
  
      <!-- List of Analytics Actions -->
      <div class="analytics-list">
        <div 
          class="analytics-item"
          v-for="item in analytics" 
          :key="item.id" 
          @click="handleAction(item.id)">
          {{ item.title }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { WebengageUser } from '@awesome-cordova-plugins/webengage';
  import { getAnalytics } from '../data/messages';
  
  export default {
    data() {
      return {
        analytics: [],
        selectedAction: null,
        selectedActionTitle: '',
        showInputForm: false,
        userId: '',
        password: '',
        firstName: '',
        userName: '',
        isLoggedIn: false
      };
    },
    mounted() {
      this.analytics = getAnalytics();
      this.checkUserStatus();
    },
    methods: {
      handleAction(id) {
        const action = this.analytics.find((item) => item.id === id);
        this.selectedAction = id;
        this.selectedActionTitle = action.title;
        if (this.selectedAction === 1) {
          this.logoutUser();
        } else {
          this.showInputForm = true;
        }
      },
      performLogin() {
        WebengageUser.login(this.userId, this.password);
        this.userName = this.userId; // assuming userId is the username
        this.isLoggedIn = true;
        this.resetForm();
      },
      logoutUser() {
        WebengageUser.logout();
        this.isLoggedIn = false;
        this.userName = '';
      },
      checkUserStatus() {
        const user = WebengageUser.getAttribute('we_email');
        if (user) {
          this.userName = user;
          this.isLoggedIn = true;
        }
      },
      resetForm() {
        this.showInputForm = false;
        this.userId = '';
        this.password = '';
        this.firstName = '';
        // Reset other fields as needed
      }
    }
  };
  </script>

<style scoped>
.analytics-container {
    margin: 20px auto;
    max-width: 600px;
    font-family: 'Roboto', sans-serif;
}

h2 {
    color: #2c3e50;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}

.input-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.input-field {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 16px;
    transition: border 0.3s ease;
}

.input-field:focus {
    border-color: #2980b9;
    outline: none;
}

.btn-primary {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #2980b9;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #3498db;
}

.analytics-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    justify-content: center;
}

.analytics-item {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

.analytics-item:hover {
    background-color: #2980b9;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>