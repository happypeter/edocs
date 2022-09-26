/**
  a carport will a bit UV and rain protection
*/

import { boards, burned, hardware, lumber, treated } from "./wood_shopping"

/**
 * - Does flat roof works? Certainly
 *   - dirty things may stay there, so you need to clean it regularly
 * - benifits
 *   - a usage space, as a floor, another storage area? anything
 * 
 */
const PITCH = 'how much ever works for the level to show clear reading' //https://www.youtube.com/watch?v=02DtgOORPD4

const shopping_list = {
  brace: { product: hardware.braces["2x3"], number: 2, total_cost: 0 },
  post: { product: burned["11x11"], number: 2, total_cost: 0 },
  header: { product: treated["4x14"], number: 1, total_cost: 0},
  rafter: { product: treated["4x11"], number: 1, total_cost: 0 },
  osb:    { product: boards.osb[15], number: 2 },
  side:   { product: burned["2x14"], number: 1, total_cost: 0},
  post_flange: { product: hardware.wood_post_flange, number: 4, total_cost: 0},
  chemset: { product: hardware.chemset["12x160"], number: 16, total_cost: 0}
}

const main = () => { 
  sizes()
  foundation()
  frame()
  siding()
  roof()
  out_gate()
  charging_station()
}

const siding = () => { 
  /**
   * upper part of the wall needs to be sheathed, to provide UV protection and keep rain away 
   * - since the floor is concrete, I don't care if the floor is wet, just don't let wind blow rain directly into the room
   * */ 
}

/**
 *  copy https://www.youtube.com/watch?v=Iwnfj_8DNPs&t=62s
 */

const frame = () => { 
    /**
   * - posts are too heavy, not easy to set by one person, but why not to use stud walls, and employ all my knowledge doing shed:google?
   * - the main problem is that, since I don't do water proof for the wall
   *   - all the horizontal going lumber will hold water
   *  - if I just build everything vertical way(allways keep smaller faces face vertical direction),
   *    - this will work, but think that, without enough studs, who will support your top plate
   *    - sure you can use something like window headers(https://en.wikipedia.org/wiki/Wall_stud) to get the vertical stregth 
   *      - but now you need jack stud to hold the header boards
   *    - finally I found, I just will copying the pole_barn_structure, just adding more gaps
   *      - since I need to join all the studs to get a beam
   * 
   */
  why_not_stud_walls()

  set_posts()

  /**
   * - only 1 headers needed, because rafters only sit on east side, we have the yerd wall as support on the other side
   *   - for south and north direction, will can just use wall planks to bring lateral strengh, no vertical load here
   * 
   * note here I don't put plate on top of headers
   * - the header planks 3.4cm deep surface will be used as plate to support rafters
   * - I once thought this might not provide enought holder surface for the rafters bird mouth
   *   - but with a little test I am conviced, even the plate is 1cm deep, rafters won't fail here
   *   - the weak point would  still be the middle of the rafters
   */
  headers()

}

const foundation = () => { 
 /**
 *  - why not cast in bolts in concrete?
    - it requires a lot of precision, hard.
 * 
 */
  mount_flange(shopping_list.wood_post_flange, shopping_list.chemset)
  /**
   * - https://youtu.be/LjSsqhG1UxI?t=176
   */
  pvc_pad()
}

const sizes = () => { 
  /**
   * patio size: 290x290cm
   * my scooter 190
   * - location:
   *   - 100cm away from the gate wall, cause door is 90cm wide
   * - size of the carport:
   *   - 240cm wide
   *   - 240cm deep
   *   - height: low=160(yardwall)+39(treated wood stud wall)=199cm, high=200cm
   * 
   *  */ 
}

const roof = () => { 
  /**
   * copy most tricks from shed:google roof()
   * - alternative: https://www.houzz.com.au/photos/contemporary-shed-modern-granny-flat-or-shed-st-louis-phvw-vp~1629243
   *   - this should be easir to build, since I don't have to get the rafter ends on the same surface
   *     - because fascias will be installed on plywood
   * 
   */
}

const charging_station = () => { 
  insulate() // for winter
  heat() // keep it above 5degree I guess, for the batteries 
  // - with a sheetmetal roof https://youtu.be/NjbE05dmxvg?t=559
}

const out_gate = () => { 
  /**
   * https://www.youtube.com/watch?v=Mz-Cda9oxfc
   */
  mount_post_on_deck() 
}

export default main