/**
 *  - don't design too many special purposed/shaped shelves and boxes, try make fungible ones, cause orgnization is always on-going
 */

import { bedroom } from "./bedroom"
import { drill_station } from './drill_station'

const hierarchy = {
  stations, // e.g each station just to gave a corner with 1 or more furnitures a name, based on it's main usage, drill_station, toliet_station..
  furnitures, // e.g wall_cabinet_01, wall_cabinet_speaker,
  compartments, // e.g drawer_01, screw_drawer, upper_shelf, lower_shelf
  boxes, /*
   - boxes can be held in a tray, or a portable tool cart,
     - but trays or tool carts are not part of my organization hierarchy
   - mix similar things in a box to save space
     - a box is sth larger than 15x15x5tall, it is sth easily movable, not too be big or heavy
     - inside the box, I can have smaller bottoles or plastic boxes to hold small things, but these samller containers are not in my hieracy
   */

}
export const stations = {
  drill_station,
  laptop_station,
  sink_station,
  toliet_station
}


const drill_station = {
  base_cabinet: {
    drawer1: {
      box_30_nail: {
        nail_30: '30mm long nails'
      }
    }
  }
}

const laptop_station = {
  desk: {
    top: {
      laptop: 'my Macbook'
    }
  },
  ergo_chair: 'my 3000RMB chair',
}
