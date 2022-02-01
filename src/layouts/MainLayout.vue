<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
        <q-img class="image absolute-top" src="~assets/vegetables.jpg"></q-img>

        <q-toolbar-title class="text-center q-py-lg title">
          Einkaufsliste
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list></q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
// import { Plugins } from "@capacitor/core";
// const { StatusBar } = Plugins;

// StatusBar.setBackgroundColor({ color: "#005c5c" });

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
body.cordova .title {
  padding-top: 60px;
}
.image {
  height: 100%;
  opacity: 0.8;
  z-index: -1;
  filter: grayscale(0.1);
}
</style>
