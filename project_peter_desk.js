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


const desk_top_storage = {
  size: {
    height: 15, // enough height, for my mac power adaptor, sitting on top of the power extension
    depth: 25, // I have enough space on the upper right corner of my desk
    width: 40, // I will stack things on top, other stackable boxes, or my priinter
  },
  cut_list: {
    sides: {
      number: 2,
      width: 22, //cm 25-3
      height: 15,
      material: 'faced board',
    },
    bottom: {
      number: 1,
      width: 37, //40-3
      depth: 22, //25-3
      material: 'OSB or faced'
    },
    front_back: {
      number: 2,
      width: 40,
      height: 15,
    },
    top: {
      number: 1,
      width: 40,
      depth: 25,
    }
  },
  feathers: {
    sleek_look: 'use pocket screws, try to have a perfect front and side view, bottom board will be hidden',
    openings: 'a power in nortch in the back, and a outlet hole on left and right side, which also function as handles',
    heavey: '15mm faced board will be used, cause I may drag the cords a bit from time to time',
  }
}