<template>
  <div>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav class="flex">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
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
.flex {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./pages/HomePage.vue";
</script>
