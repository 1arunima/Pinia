<script setup>
import Counterr from './components/Counterr.vue';


import { RouterLink,RouterView } from 'vue-router';

</script>

<template>
 <!-- <Counterr/> -->
<RouterLink to="/">Home</RouterLink>
<RouterLink to="/cart">Cart</RouterLink>

<RouterView/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
