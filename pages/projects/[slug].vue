<script setup>
const route = useRoute()
const { data: project } = await useFetch(`https://api.los-bio.ru/projects/${route.params.slug}`)
</script>

<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" alt="" v-if="project.image" />
    <div v-html="project.content" />
  </div>
</template>
