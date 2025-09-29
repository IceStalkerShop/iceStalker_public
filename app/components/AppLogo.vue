<template>
  <img
    :src="page.section.images.logo"
    style="width: 120px !important;height: 120px !important;"
  >

</template>
<script setup lang="ts">
const {data: page} = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}
</script>
