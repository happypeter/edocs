import { accessory, box } from "./box"
import { big_tray } from "./trays"


const specs = {
  usecase: 'carry wood or tools',
  when_to_use: 'on casters, move things around',
  have_home: 'even they are designed to move around, but still they needs a place that is not in the way'
}

const versions = {
  version1: 'https://happypeter.github.io/githome/imgs/20240402/',
  version2: 'with still pipes, TODO'
}

const size = {
  height: 80, //10cm casters included
  width_depth: 'uncontrolled'
  /**
   * a tray is a @box, the legs are just @accessory
   */
}

const build = () => {
  /**
   * I will consider the cart is a temporay structure to allow  3 big_trays
   */
  use(big_tray)
}

const husky_style_cart = {
  /**
   * i am tempted to build sth simlar https://happypeter.github.io/githome/imgs/20240401/
   * with my steel pipes
   * but I think, I will still build the frame for 2 or 3 same size trays as version1, to maximize the reusablity of things
   */
}