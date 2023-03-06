<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Hi ..</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Hi</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ActionItem v-for="action in actions" :key="action.id" :action="action" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import ActionItem from '@/components/ActionItem.vue';
import { getActions, Action } from '@/data/actions';
import { ref } from 'vue';

const actions = ref<Action[]>(getActions());

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

</script>
