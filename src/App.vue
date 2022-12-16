<script setup>
import SignUp from './pages/SignUp.vue';
import CustomHeader from './components/layouts/CustomHeader.vue'
</script>

<template>
  <div class="w-full h-screen bg-nav-background">
    <custom-header />
    <main>
      <sign-up/>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
