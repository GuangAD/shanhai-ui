import { onMounted, onBeforeUnmount } from 'vue'

type voidFunction = () => void

export default function usePageVisibility(
  visible: voidFunction,
  hidden: voidFunction
) {
  function visibilityChange() {
    if (document.visibilityState === 'visible') {
      visible()
    } else if (document.visibilityState === 'hidden') {
      console.log('hidden')
      hidden()
    }
  }
  onMounted(() => {
    window.addEventListener('visibilitychange', visibilityChange)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('visibilitychange', visibilityChange)
  })
}
