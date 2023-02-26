<template>
  <navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
    
  </main>
</template>

<script setup>
import navbar from './Navbar.vue'
</script>

