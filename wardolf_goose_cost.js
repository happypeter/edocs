/**
 * 
 */

import { boards, lumber } from "./wood_shopping";

const cost = {
  20250117: {
    cost: 334, // 34x8 + 11x2 + 40
    material: {
      pannel: boards.plywood.concrete_form, // 8 sheets used
      plates: [
        lumber["3m_5x10"], // 2 used
        lumber.old10x10, //1 used 
      ]

    },
    labor: 6, // been a long day, 2hrs was spend on doing the tmp shelves
    // https://happypeter.github.io/githome/imgs/20250115/
  }, 
  20250116: {
    cost: 0, // installed part of the sub floor pannels, cost will be noted when all is done
    material: {
    },
    labor: 6, // been a long day, 2hrs was spend on doing the tmp shelves
    // https://happypeter.github.io/githome/imgs/20250115/
  }, 
  20250114: {
    cost: 210, // 56+11x14
    material: {
      // 14 piece of 
      joists: lumber["3m_5x10"], // 14 piece
      plates: lumber["2.5m_3.5x7.5"] // 8piece
    },
    labor: 5,
  },

  20250113: {
    cost: 0, 
    // installed floor joists and cleats and one plywood pannel
    // the cost will be calqulated when the whole subfloor is done
    labor: 5,
  },

   
  20250112: {
    cost: 105, // 35x3 RMB, 
    material: lumber.super_wide, // 3 used
    labor: 5, // my time and help from one guy
  },

  20250110: {
    cost: 80, // RMB, 
    material: lumber.old10x10,
    labor: 8, 
  },
  20250109: {
    cost: 0, // RMB, 
    material: none,
    labor: 8, // set the poles
    // we got digger for free, but you may spent another 200here
  },

}