<template>
  <div class="flex gap-2 ">
    <index-by-product-info-item v-for="(item,index) in productInfoList"
                                :key="index"
                                :info-item="item"></index-by-product-info-item>
  </div>

</template>


<script lang="ts" setup>


import {ref} from "@vue/reactivity";
import type {TypeByProductInfoItem} from "../../../typing/typing";
import IndexByProductInfoItem from "./IndexByProductInfoItem.vue";
const {data: page} = await useAsyncData('index', () => queryCollection('content').first())
const productInfoList = ref<Array<TypeByProductInfoItem>>([{
  name: 'B2C 零售平台',
  title: '连锁零售、品牌专卖、渠道销售解决方案',
  des: '连锁零售、品牌专卖、渠道销售等面向消费者的线上购物平台',
  wait: false,
  link: '',
  img: page.value.section.images.product1,
}])

</script>

<style scoped>

</style>
