<template>
  <div class="layout-default">
    <client-only>
      <Header />
    </client-only>

    <main>
      <NuxtPage />
    </main>

    <client-only>
      <Footer />
    </client-only>
  </div>
</template>

<script setup>
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
</script>

<style scoped>
.layout-default {
  min-height: 100vh;
  width: 1440px;
}
main {
  flex: 1;
}
</style>


