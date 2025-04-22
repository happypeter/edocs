/**
 NOTE: Project Carport will evolve into Project eastWing
  - a carport will a bit UV and rain protection
    - for me it's scooter shelter
  - planing a version 2
    - gonna double the roof size
    - increase the height for at least 30cm
  - modular design
    - to extend the roof, all you need is brackets on a exsiting rafter 08:26 https://www.ixigua.com/7237060457054339616?logTag=955a0b4a171d4f6a2fa4
    - or you can use brackets on the poles of exsiting structure
    - it's nice to sit the new rafter on top of old poles, but most times it means you need to tear away the roof, too much trouble
    - and in my case, I don't want all roofs on the same level anyway, the middle part should be taller, and north and soutch part should be lower
*/

import { sliding_door } from "./door.lib"
import { boards, burned, hardware, lumber, treated } from "./wood_shopping"
import { yard_building_color_theme } from "./yard"


const PITCH = 'how much ever works for the level to show clear reading' //https://www.youtube.com/watch?v=02DtgOORPD4
const colors = {
 /**
  use yard_building_color_theme
  trick is, just use the rich_wooden colored planks for everything, later when adding accessories, say
  a wall-attached sheving, a awing, windows... or anything, use black/dark_gray. use big area color, not lines
  say, don't use contrast color lines for corner protection strips.
   */
}

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

const build_parts_on_ground = () => { 
   /**
    * use my sheathing pannels to get perfectly squared stud wall partials is a good idea
    * - The two supporting point rule 
    *   - if I have more than two wall partials that hold one same beam/truss, make only two the right height, all the rest partical walls shall be build 3 or 4 cm shorter than the right height, because people builds have errors, hard to build three or more wall particals, and have the top of all at the exact same level
    */
}


const front_door = sliding_door

const main = () => { 
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
}

/**
 *  copy https://www.youtube.com/watch?v=Iwnfj_8DNPs&t=62s
 */

const frame = () => { 
  


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


}

const foundation = () => { 
  studs_sit_on_bricks()
}

const sizes  = { 
  roof: '240x390'
}

const roof = () => { 
  /**
   * - https://www.houzz.com.au/photos/contemporary-shed-modern-granny-flat-or-shed-st-louis-phvw-vp~1629243
   * 
   */
  /**
   * NOTE: I DON'T need a plywood layer on top of the rafters, some wood strips will hold my sheet metal just well
   * ref: 2:15 and 8:33 https://www.ixigua.com/7237060457054339616?logTag=955a0b4a171d4f6a2fa4
   */
  roof_sheathing()
  
  /**
 * - Does flat roof works? Certainly
 *   - dirty things may stay there, so you need to clean it regularly
 * - benifits
 *   - a usage space, as a floor, another storage area? anything
 * 
 */
  I_want_level_roof()
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

/**
 * I will try to use reclaimed boards for the foor.
 * if I can prevent the bottom getting rain water
 */
const floor = () => { 
   
}

