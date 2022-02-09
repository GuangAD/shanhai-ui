import { App } from 'vue'
import Carousel from './Carousel.vue'
import CarItem from './carouselItem.vue'
export default {
  install(app: App<Element>) {
    app.component(Carousel.name, Carousel)
    app.component(CarItem.name, CarItem)
  },
}
