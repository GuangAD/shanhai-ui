import { onMounted, onBeforeUnmount } from 'vue'

type voidFunction = () => void

export default function usePageVisibility(
  visible: voidFunction,
  hidden: voidFunction
): void {
  function visibilityChange() {
    if (document.visibilityState === 'visible') {
      visible()
    } else if (document.visibilityState === 'hidden') {
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
