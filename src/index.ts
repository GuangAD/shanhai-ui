import { App } from 'vue'
import Carousel from './components/carousel'
const ShaiHaiUI = {
  install(app: App<Element>) {
    Carousel.install(app)
  },
}
export { Carousel }
export * from './use/index'
export default ShaiHaiUI
