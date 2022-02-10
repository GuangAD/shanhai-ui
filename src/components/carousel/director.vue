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
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CarDir',
  props: {
    dir: {
      type: String,
      required: true,
    },
  },
  emits: ['dirClick'],
  setup(props, { emit }) {
    function dirClick(dir: string) {
      emit('dirClick', dir)
    }
    return { dirClick }
  },
})
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
