<template>
  <div
    v-if="infoItem"
    class="
    cursor-pointer
    product_info_item-wrap
    rounded-[4px]
    box-shadow-002147-3
    overflow-hidden
    product_info_item-wrap px-[32px] py-[36px]  relative w-[25%] bg-[var(--ui-bg)]">
    <div class="flex justify-start items-center pb-[20px]">
      <img :src="infoItem.img" style="height: 36px;width: 36px;object-fit: cover;">
      <span class="text-17181b ml-[8px] text-[18px] font-medium leading-[18px]">{{ infoItem.name }}</span>
    </div>
    <p class="text-282D37 mb-[12px] text-[14px] font-medium leading-[14px]">{{ infoItem.title }}</p>
    <p class="text-808082 text-[14px] leading-[24px]">{{ infoItem.des }}</p>
    <div
      class="handle-warp  w-[100%]  h-[80px] bg-default/75 backdrop-blur
      absolute bottom-[-80px] flex row ws-nowrap justify-center items-center left-0 gap-[8px] flex row justify-center items-center">
      <u-button
        v-if="!infoItem.wait"
        class="cursor-pointer"
        color="primary" size="md">免费试用
      </u-button>
      <u-button
        v-if="!infoItem.wait"
        class="cursor-pointer"
        color="primary" size="md" variant="outline">查看详情
      </u-button>
      <u-button
        v-if="infoItem.wait"
        class="cursor-pointer"
        color="neutral"
        disabled size="md" variant="outline">等待上架
      </u-button>
    </div>
  </div>

</template>

<script lang="ts" setup>

import type {PropType} from "vue";
import {defineProps} from "vue";
import type {TypeByProductInfoItem} from "../../../typing/typing";

defineProps({
  infoItem: {
    type: Object as PropType<TypeByProductInfoItem>,
    require: true
  }
})

</script>

<style lang="less" scoped>
.product_info_item-wrap {
  transition: .3s ease-in-out;

  .handle-warp {
    transition: .3s ease-in-out;
  }

  &:hover {
    transform: translateY(-4px);

    .handle-warp {
      bottom: 0 !important;
    }
  }
}

</style>
