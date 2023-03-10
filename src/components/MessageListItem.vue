<template>
  <ion-item v-if="message" @click = "handleClick(message ? message.title : '')" :detail="false" class="list-item">
    <div slot="start" :class="'dot'"></div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ message.title }}
      </h2>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { alertController, IonIcon, IonItem, IonLabel, IonNote } from '@ionic/vue';
import {Webengage, WebengageUser} from '@awesome-cordova-plugins/webengage';

defineProps({
  message: Object,
});

const isIos = () => {
  const win = window as any;
  return win && win.Ionic && win.Ionic.mode === 'ios';
};

const handleClick = async (title: string) =>  {
    console.log(title);
    switch(title) {
      case 'Perform Login':{
        const alert = await alertController.create({
          header: 'Alert',
          message: 'Enter your user name.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                console.log(input[0]);
                WebengageUser.login(String(input[0]));
              },
            },
          ],
          inputs: [
            {
              placeholder: 'UserName',
              
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Perform Logout':{
        const alert = await alertController.create({
          header: 'Logout',
          message: 'You are logged out',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler() {
                WebengageUser.logout();
              },
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set First Name':{
        const alert = await alertController.create({
          header: 'Set User Details',
          message: 'Please enter your first name.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_first_name', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Name',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set Second Name':{
        const alert = await alertController.create({
          header: 'Set User Details',
          message: 'Please enter your seond name.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_last_name', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Last Name',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set User Email':{
        const alert = await alertController.create({
          header: 'Set User Email',
          message: 'Please enter your email.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_email', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Email',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set User Hashed Email':{
        const alert = await alertController.create({
          header: 'Set Hashed Email',
          message: 'Please enter your hashed email.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_hashed_email', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Hashed Email',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set User Phone':{
        const alert = await alertController.create({
          header: 'Set Phone Number',
          message: 'Please enter your phone.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_phone', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Phone Number',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set User Hashed Phone':{
        const alert = await alertController.create({
          header: 'Set Hashed Phone Number',
          message: 'Please enter your hashed phone number.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                WebengageUser.setAttribute('we_hashed_phone', input[0]);
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Hashed Phone Number',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set User Location':{
        
        break;
      }
      case 'Set Screen Name':{
        const alert = await alertController.create({
          header: 'Set Screen Name',
          message: 'Please enter screen name.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                Webengage.screen(String(input[0]));
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Screen name',
            },
          ],
        });
        await alert.present();
        break;
      }
      case 'Set Event Name':{
        const alert = await alertController.create({
          header: 'Set Event Name',
          message: 'Please enter event name.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'OK',
              role: 'confirm',
              handler(input: any[]) {
                Webengage.track(String(input[0]));
              },
            },
          ],
          inputs: [
            {
              placeholder: 'Event name',
            },
          ],
        });
        await alert.present();
        break;
      }
    }
  }
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>
