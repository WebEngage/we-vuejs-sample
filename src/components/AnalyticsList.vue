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
          <button @click="updateFirstName" class="btn-primary">Update First Name</button>
        </div>
  
        <!-- Last Name -->
        <div v-else-if="selectedAction === 3" class="form-group">
          <input v-model="lastName" placeholder="Last Name" class="input-field" />
          <button @click="updateLastName" class="btn-primary">Update Last Name</button>
        </div>
  
        <!-- Email -->
        <div v-else-if="selectedAction === 4" class="form-group">
          <input v-model="email" placeholder="Email" class="input-field" />
          <button @click="updateEmail" class="btn-primary">Update Email</button>
        </div>
  
        <!-- Hashed Email -->
        <div v-else-if="selectedAction === 5" class="form-group">
          <input v-model="hashedEmail" placeholder="Hashed Email" class="input-field" />
          <button @click="updateHashedEmail" class="btn-primary">Update Hashed Email</button>
        </div>
  
        <!-- Phone Number -->
        <div v-else-if="selectedAction === 6" class="form-group">
          <input v-model="phone" placeholder="Phone Number" class="input-field" />
          <button @click="updatePhone" class="btn-primary">Update Phone</button>
        </div>
  
        <!-- Hashed Phone Number -->
        <div v-else-if="selectedAction === 7" class="form-group">
          <input v-model="hashedPhone" placeholder="Hashed Phone" class="input-field" />
          <button @click="updateHashedPhone" class="btn-primary">Update Hashed Phone</button>
        </div>

  
        <!-- Birthdate -->
        <div v-else-if="selectedAction === 9" class="form-group">
          <input v-model="birthdate" placeholder="Birthdate (YYYY-MM-DD)" class="input-field" />
          <button @click="updateBirthdate" class="btn-primary">Update Birthdate</button>
        </div>
  
        <!-- Gender -->
        <div v-else-if="selectedAction === 10" class="form-group">
          <input v-model="gender" placeholder="Gender" class="input-field" />
          <button @click="updateGender" class="btn-primary">Update Gender</button>
        </div>
  
        <!-- Company -->
        <div v-else-if="selectedAction === 11" class="form-group">
          <input v-model="company" placeholder="Company" class="input-field" />
          <button @click="updateCompany" class="btn-primary">Update Company</button>
        </div>
      </div>
  
      <!-- List of Analytics Actions -->
      <div class="analytics-list">
        <div
          class="analytics-item"
          v-for="item in analytics"
          :key="item.id"
          @click="handleAction(item.id)"
        >
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
        lastName: '',
        email: '',
        hashedEmail: '',
        phone: '',
        hashedPhone: '',
        location: '',
        birthdate: '',
        gender: '',
        company: '',
        userName: '',
        isLoggedIn: false,
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
        this.showInputForm = true;
      },
      performLogin() {
        WebengageUser.login(this.userId, this.password);
        this.userName = this.userId; // assuming userId is the username
        this.isLoggedIn = true;
        this.resetForm();
      },
      updateFirstName() {
        WebengageUser.setAttribute('we_first_name', this.firstName);
        this.resetForm();
      },
      updateLastName() {
        WebengageUser.setAttribute('we_last_name', this.lastName);
        this.resetForm();
      },
      updateEmail() {
        WebengageUser.setAttribute('we_email', this.email);
        this.resetForm();
      },
      updateHashedEmail() {
        WebengageUser.setAttribute('we_hashed_email', this.hashedEmail);
        this.resetForm();
      },
      updatePhone() {
        WebengageUser.setAttribute('we_phone', this.phone);
        this.resetForm();
      },
      updateHashedPhone() {
        WebengageUser.setAttribute('we_hashed_phone', this.hashedPhone);
        this.resetForm();
      },
      updateBirthdate() {
        WebengageUser.setAttribute('we_birth_date', this.birthdate);
        this.resetForm();
      },
      updateGender() {
        WebengageUser.setAttribute('we_gender', this.gender);
        this.resetForm();
      },
      updateCompany() {
        WebengageUser.setAttribute('we_company', this.company);
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
        this.lastName = '';
        this.email = '';
        this.hashedEmail = '';
        this.phone = '';
        this.hashedPhone = '';
        this.birthdate = '';
        this.gender = '';
        this.company = '';
      },
    },
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