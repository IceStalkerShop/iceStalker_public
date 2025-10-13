<template>
  <div style="position: relative;">
    <UCarousel
      v-slot="{ item,index }"
      v-model:items="carouselList"
      :autoplay="true"
      :start-index="carouselIndex"
      fade
      loop
      style="width:100%;height: 100%"
      @select="(args) => {

        carouselIndex = args


      }">
      <template>
        <div style="width:100%;height: 100%;position: relative;">
          <img :src="item.img" style="height: 560px;width: 100%;object-fit: cover;top: 0;z-index: 1">
          <div
            style="width: 1180px;min-width: 1180px;top: 0;left: 50%;transform: translateX(-50%);height: 100%;background: transparent;z-index: 2;position:absolute;box-sizing: border-box;padding-top: 162px">
            <span class="font-bold text-5xl text-black block">{{ item.title }}</span>
            <span
              v-if="item.des"
              class="font-normal text-xl block text-gray-500">{{ item.des }}</span>

            <div class="mt-20">
              <UButton color="primary" size="lg" class="cursor-pointer">查看详情</UButton>
            </div>
          </div>
        </div>
      </template>
    </UCarousel>

    <!--dots 下标-->
    <div v-if="carouselList.length>1" class="dots-list">
      <div v-for="(item,index) in carouselList"
           :key="index"
           :class="{
              'dots-item-active':index===carouselIndex
           }" class="dots-item mr-2 cursor-pointer"
           @click="onHandleByDots(index)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "@vue/reactivity";

const carouselIndex = ref(0);
const {data: page} = await useAsyncData('index', () => queryCollection('content').first())
const carouselList = ref<Array<{ title: string, des?: string, img: string }>>([{
  title: 'fff',
  des: 'xxxx',
  img: page.value.section.images.indexByCarousel1,
  viewUrl: '',
  demonstrationUrl: ''
},
  {
    title: 'ddd',
    des: 'xxxx',
    img: page.value.section.images.indexByCarousel2,
    viewUrl: '',
    demonstrationUrl: ''
  }])


const onHandleByDots = (index: number) => {
  carouselIndex.value = index;
}


</script>

<style lang="less" scoped>
.dots-list {
  width: 1180px;
  min-width: 1180px;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  .dots-item {
    width: 44px;
    height: 4px;
    background: rgba(0, 11, 23, .1);
  }

  .dots-item-active {
    background: var(--color-primary) !important;
  }
}


</style>
