/**
  - a carport will a bit UV and rain protection
    - for me it's scooter shelter
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
  design()
  foundation()
  frame()
  siding()
  roof()
  out_gate()
  charging_station()
}

/**
 * - since my shed:google is light woodcolor with black frames
 *   - I want to have white frame with burned wood plank as the theme of the carport
 * 
 */
const design = () => { 
   
}
const siding = () => { 
  /**
   * upper part of the wall needs to be sheathed, to provide UV protection and keep rain away 
   * - since the floor is concrete, I don't care if the floor is wet, just don't let wind blow rain directly into the room
   * */ 


  /**
   * https://youtu.be/Cyj7f_RZtUA?t=575
   * the goal is bring in more air and less rain
   */
  leave_top_open()
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


  /**
   * - althought I have a plan with numbers, but in reality errors are inevitable
   *   - so a right install process is important
   *   - first set_posts()
   *   - measure the distance of the two exterior sides of the two posts
   *   - use this distance to determin wall header stud wall size
   *   - the out most two studs needs to stay on the same surface of the posts
   *   - in order to install shear force walls
   * 
   */
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
   * 
   * - to span 14feet(427cm) https://youtu.be/fWDzmfYztRY?t=455
   *   - code requires 2by10(5x25)
   */
  headers()


  /**
   * - just install long planks to the posts does not work, the boards are top narrow
   *   - there are only squares, no triangle, so still wobbly
   * - but I don't really like triangles, I want squares for everywhere
   * - I will add on west and north sides, real shear wall, that I can use as shelves
   *   - 
   * 
   */
  shear_wall()

}

const foundation = () => { 
 /**
 *  - cast in flange
 *    - build a out standing footing block to hold the posts
 *      - make sure the size is generous, to be strong, say 5cm more space on each sides
 *        - in my case, the post is 10.5x10.5cm, the footing is 26x26cm
 *      - be generous on the height of the footings, to hold the flanges tight
 *        - 10cm at least
 *      - pre drilled 10x20cm iron plank, cast in concrete
 *        - cast screws in is actully much harder
 *        - just use a long wood plank as guide, to make sure the two iron planks on differnent footings are on same face
        - I am very confident the bottom of post will be mostly very dry
 * 
 */
  mount_flange(shopping_list.wood_post_flange, shopping_list.chemset)
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
   * - https://www.houzz.com.au/photos/contemporary-shed-modern-granny-flat-or-shed-st-louis-phvw-vp~1629243
   *   - compaired to my shed:google roof(), this has real support for the two rafters on each side
   *     - so the roof is simply much stronger
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