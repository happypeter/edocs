import { accessory, box } from "./box"
import { big_tray } from "./trays"


const specs = {
  usecase: 'carry wood or tools',
  when_to_use: 'on casters, move things around'
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

