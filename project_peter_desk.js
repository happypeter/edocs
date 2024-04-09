import { base_caninet } from "./cabinets"

const design = {
  /**
   * Ikea Alex drawer supported desk
   * https://ikeahackers.net/2020/03/alex-drawer-desk.html
   */
  cabinet_color: 'gray', // gray can be nice https://www.bilibili.com/video/BV1yD421H7M3/?t=56
}  
const shopping_list = {
  drawer_slides: {
    number: 6, // pairs
    total: 76, //13x6=78, 13RMB each
    shop: 'PDD',
  }
}


const carcass = {
  width: 40, //cm
  height: 60,
   /**
    * ikea Alex: 70x36x58 height-width-depth
    * each cabinet is: 30widex60deepx60tall,
    * with 3 drawers on each cabinets 
    */
}


const cabinets = base_cabninet(carcass)

/**
 * drawers = {
 *   NOTE: I use 14mm plywood for this project,
 * so the opening is 2cm taller than my main base cabinets,
 * but I will ignore this in order to use the plan from base_cabinets()
 * but the width of the drawers, needs to be 2mm wider
 * }
 */


const top = {
  material: 'walnut'
}

export const desk = {
  cabinets,
  top
}
