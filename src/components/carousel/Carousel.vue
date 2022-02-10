<template>
  <div
    :class="$style.carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div :class="$style.inner">
      <slot></slot>
      <car-dot
        v-if="hasDot"
        :active-dot-color="activeDotColor"
        :item-len="len"
        :current-index="currentIndex"
        @dot-click="dotClick"
      ></car-dot>
      <car-dir dir="prev" @dir-click="dirClick"></car-dir>
      <car-dir dir="next" @dir-click="dirClick"></car-dir>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  useSlots,
} from 'vue'
import CarDot from './Dot.vue'
import CarDir from './director.vue'
import { usePageVisibility } from '../../use/index'
export default defineComponent({
  name: 'Carousel',
  props: {
    autoplay: {
      type: Boolean,
      defalut: true,
    },
    duration: {
      type: Number,
      defalut: 3000,
    },
    initial: {
      type: Number,
      defalut: 0,
    },
    hasDot: {
      type: Boolean,
      defalut: true,
    },
    hasDirector: {
      type: Boolean,
      defalut: true,
    },
    activeDotColor: {
      type: String,
      default: '#ff5000',
    },
  },
  components: {
    CarDot,
    CarDir,
  },
  setup(props) {
    const currentIndex = ref<number>(props.initial as number)
    const dirR = ref('next')
    provide(
      'currentIndex',
      computed(() => currentIndex.value)
    )
    provide(
      'dir',
      computed(() => dirR.value)
    )
    let timer: number | null = null
    function autoPaly() {
      if (timer) return
      timer = setInterval(() => {
        move('next')
      }, props.duration)
    }
    const len = ref(0)
    function move(dir: string) {
      switch (dir) {
        case 'next':
          dirR.value = 'next'
          currentIndex.value += 1
          if (currentIndex.value === len.value) currentIndex.value = 0
          break
        case 'prev':
          dirR.value = 'prev'
          currentIndex.value -= 1
          if (currentIndex.value === -1) currentIndex.value = len.value - 1
          break
        default:
          break
      }
    }
    function stopPaly() {
      if (timer) clearInterval(timer)
      timer = null
    }
    onMounted(() => {
      len.value = useSlots().default!()[0].children!.length as number
      autoPaly()
    })
    onBeforeUnmount(() => {
      stopPaly()
    })
    function dotClick(index: number) {
      if (index < currentIndex.value) {
        dirR.value = 'prev'
      } else {
        dirR.value = 'next'
      }
      currentIndex.value = index
    }

    function dirClick(dir: string) {
      move(dir)
    }

    function mouseEnter() {
      stopPaly()
    }
    function mouseLeave() {
      autoPaly()
    }
    usePageVisibility(autoPaly, stopPaly)

    return {
      len,
      currentIndex,
      dotClick,
      dirClick,
      mouseEnter,
      mouseLeave,
    }
  },
})
</script>

<style module lang="pcss">
.carousel {
  width: 100%;
  height: 100%;
  & .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
