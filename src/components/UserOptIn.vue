<template>
    <div class="optin-container">
        <hr />

      <IonHeader>
        <IonToolbar>
          <h2>User OptIns</h2>
        </IonToolbar>
      </IonHeader>
  
      <IonContent>
        <IonList>
          <IonItem v-for="(value, type) in userOptInList" :key="type" class="optin-item">
            <IonLabel class="optin-label">{{ type.charAt(0).toUpperCase() + type.slice(1) }}</IonLabel>
            <input
              type="checkbox"
              v-model="userOptInList[type]"
              @change="handleNotificationChange(type)"
              class="custom-checkbox"
            />
          </IonItem>
        </IonList>
      </IonContent>
    </div>
  </template>
  
  <script>
import { WebengageUser } from '@awesome-cordova-plugins/webengage';

  export default {
    data() {
      return {
        userOptInList: {
          push: true,
          sms: true,
          email: true,
          in_app: true,
          whatsapp: true,
          viber: true
        }
      };
    },
    methods: {
      handleNotificationChange(type) {
        // console.log(`${type} notification opt-in changed to:`, this.userOptInList[type]);
        WebengageUser.setUserOptIn(type, this.userOptInList[type]);
      }
    }
  };
  </script>
  
  <style scoped>
  .optin-container {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
  }
  
  ion-header {
    margin-bottom: 20px;
  }
  
  ion-title {
    font-size: 26px;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
  }
  
  ion-list {
    padding: 0;
  }
  
  .optin-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: #f7f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s;
  }
  
  .optin-item:hover {
    background-color: #e1e8ec;
  }
  
  .optin-label {
    font-size: 18px;
    font-weight: 500;
    color: #34495e;
  }
  
  .custom-checkbox {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    accent-color: #2980b9;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .custom-checkbox:checked {
    transform: scale(1.2);
  }
  
  .custom-checkbox:focus {
    outline: 2px solid #3498db;
  }
  
  @media (max-width: 768px) {
    .optin-container {
      padding: 15px;
      margin: 15px;
    }
  
    ion-title {
      font-size: 22px;
    }
  
    .optin-item {
      padding: 10px;
      margin: 8px 0;
    }
  
    .optin-label {
      font-size: 16px;
    }
  
    .custom-checkbox {
      width: 22px;
      height: 22px;
    }
  }
  </style>
  