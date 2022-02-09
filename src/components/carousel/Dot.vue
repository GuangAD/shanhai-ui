<template>
  <div :class="$style['dot-wrapper']">
    <div :class="$style['dot-item']" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        :class="$style['dot-lk']"
        :style="{
          backgroundColor: item - 1 === currentIndex ? activeDotColor : '#fff',
        }"
        @click="click(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, defineProps, defineEmits } from 'vue'
export default defineComponent({
  name: 'CarDot',
})
</script>
<script setup lang="ts">
defineProps({
  itemLen: {
    type: Number,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
  activeDotColor: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['dotClick'])

function click(index: number) {
  emit('dotClick', index)
}
</script>

<style module lang="pcss">
.dot-wrapper {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-style: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: rgba(255, 255, 255 0.3);

  & .dot-item {
    display: inline-block;
    margin: 3px;
  }

  & .dot-item .dot-lk {
    display: block;
    padding-top: 8px;
    width: 8px;
    height: 0;
    border-radius: 50%;
  }
}
</style>
