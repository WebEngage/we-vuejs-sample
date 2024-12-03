import { PushNotifications } from '@capacitor/push-notifications';
import { Webengage, WebengageUser } from '@awesome-cordova-plugins/webengage';

const addListeners = async () => {
    // Callbacks from @capacitor/push-notifications library
  await PushNotifications.addListener('registration', token => {
    console.info('Registration token: ', token.value);
  });

  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
  });

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', notification);
  });

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    alert("Permission Denied!")

    throw new Error('User denied permissions!');
  } else {
    alert("Permission granted")
    WebengageUser.setDevicePushOptIn(true);

  }
  await PushNotifications.register();
}

const getDeliveredNotifications = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications();
  console.log('delivered notifications', notificationList);
}
export { addListeners, registerNotifications, getDeliveredNotifications }