<template>
  <transition
    :enter-active-class="$style['v-enter-active']"
    :enter-from-class="$style['v-enter-from']"
    :enter-to-class="$style['v-enter-to']"
    :leave-active-class="$style['v-leave-active']"
    :leave-to-class="$style['v-leave-to']"
    :leave-from-class="$style['v-leave-from']"
  >
    <div
      :class="[$style['car-item'], dir === 'next' ? $style.next : $style.prev]"
      v-show="currentIndex === index"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'CarItem',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const currentIndex = inject('currentIndex')
    const dir = inject('dir')
    return { currentIndex, dir }
  },
})
</script>

<style module lang="pcss">
#img{
  width: 700px;
  height: 700px;
}
.car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & > * {
    width: 100%;
    height: 100%;
  }
  &.v-enter-active,
  &.v-leave-active {
    transition: all 0.5s linear;
  }


  &.v-enter-from {
    &.next{
      transform: translateX(100%);
    }
    &.prev {
      transform: translateX(-100%);
    }
  }
  &.v-enter-to {
    &.next{
      transform: translateX(0);
    }
    &.prev {
      transform: translateX(0);
    }
  }
  &.v-leave-from {
    &.next{
      transform: translateX(0);
    }
    &.prev {
      transform: translateX(0);
    }
  }
  &.v-leave-to {
    &.next{
      transform: translateX(-100%);
    }
    &.prev {
      transform: translateX(100%);
    }
  }
}
</style>
