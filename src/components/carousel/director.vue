<template>
  <div :class="[$style.director, $style['dir-next']]" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div
    :class="[$style.director, $style['dir-prev']]"
    v-else-if="dir === 'prev'"
  >
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue'
export default defineComponent({
  name: 'CarDir',
})
</script>
<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */

defineProps({
  dir: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['dirClick'])

function dirClick(dir: string) {
  emit('dirClick', dir)
}
</script>
<style module lang="pcss">
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  & a {
    color: #fff;
    text-decoration: none;
  }
  &.dir-next {
    right: 0;
  }
  &.dir-prev {
    left: 0;
  }
}
</style>
