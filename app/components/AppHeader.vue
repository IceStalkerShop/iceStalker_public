<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo/>
      </NuxtLink>
    </template>

    <template #default>
      <div style="width: 500px;display: flex;align-items: center">
        <UNavigationMenu
          :items="menuItemsByIndex"
          class="hidden lg:block"
        />

        <UNavigationMenu
          :items="menuItemsByProduct"
          class="hidden lg:block"
        />
      </div>
    </template>

    <template #right>
      <UColorModeButton/>
    </template>

    <template #body>
      <UNavigationMenu
        :items="menuItemsByIndex"
        orientation="vertical"
        class="-mx-2.5"
      />

    </template>
  </UHeader>
</template>


<script setup lang="ts">
import {useRoute} from "nuxt/app";

const route = useRoute();

const menuItemsByIndex = computed(() => [
  {
    label: '首页',
    to: '/',
    // active: route.path.startsWith('/')
    active: false,
  }
])

const menuItemsByProduct = computed(() => [
  {
    label: '产品',
    to: '/',
    active: false
  }
])

</script>

