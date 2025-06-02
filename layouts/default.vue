<template>
    <div class="layout-default">
      <Header />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/componentsHeader.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  .layout-default {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
  </style>