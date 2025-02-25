/**
 * 
 */

import { boards, lumber } from "./wood_shopping";

const cost = {
  20250225: {
    cost: 0, 
    material: [
      // TOOL storagE shed, roofing
    ],
    labor: 6, 
  }, 
  20250224: {
    cost: 0, 
    material: [
      // building TOOL storagE shed
    ],
    labor: 6, 
  }, 
  20250223: {
    cost: 0, 
    material: [
      // building TOOL storagE shed
    ],
    labor: 6, 
  }, 
  20250222: {
    cost: 157, 
    material: [
      lumber["3m_4x8"], // qty: 14, 9.5x14=133
      // plywood 4sqm, 24RMB
    ],
    labor: 7, 
  }, 
  20250216: {
    cost: 0, 
    material: [
      // cost recorded in future
    ],
    labor: 6, 
  }, 
  202502013: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 4, 
  }, 
  202502012: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 4, 
  }, 
  202502011: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 6, 
  }, 
  202502010: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 5, 
  }, 
  202502009: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 7, 
  }, 
  202502008: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 7, 
  }, 
  202502007: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 7, 
  }, 
  202502006: {
    cost: 0, 
    material: [
      // building lumber storage rack shed
    ],
    labor: 6, 
  }, 
  20250205: {
    cost: 220, //11RMB x 20 
    material: [
      lumber["3m_5x10"], // 20 for the last 3 days of work, joists and things for the second floor
    ],
    labor: 6, 
  }, 
  20250203: {
    cost: 0, 
    material: [
      // lumber["3m_5x10"], joists and things for the second floor, cost will be totaled later
    ],
    labor: 6, 
  }, 
  20250202: {
    cost: 0, 
    material: [
      // lumber["3m_5x10"], joists and things for the second floor, cost will be totaled later
    ],
    labor: 6, 
  }, 
  20250201: {
    cost: 0, 
    material: [
      // done all 4 benches
    ],
    labor: 7, 
  }, 
  20250130: {
    cost: 0, 
    material: [
      // SECOND & THIRD WORKBENCH BUILDING, assembling the top frame
    ],
    labor: 4, 
  }, 
  20250129: {
    cost: 0, 
    material: [
      // SECOND & THIRD WORKBENCH BUILDING, cutting all wood parts
    ],
    labor: 6, 
  }, 
  20250128: {
    cost: 0, 
    material: [

      // SECOND & THIRD WORKBENCH BUILDING
    ],
    labor: 6, 
  }, 
  20250127: {
    cost: 0, 
    material: [

      // CLEAN SNOW, FIRST WORKBENCH BUILDING
    ],
    labor: 7, 
  }, 
  20250126: {
    cost: 0, 
    material: [
      // remove nails for pallet board, building two sawhorses, and one table
      // but nothing added to the goose builing, the the cost does not count in
    ],
    labor: 7, 
  }, 
  20250125: {
    cost: 0, 
    material: [
      // check wood_shopping.js search goose
    ],
    labor: 6, 
  }, 
  20250124: {
    cost: 92, 
    material: [
      lumber.super_wide, // 35,
      lumber["3m_5x10"], //qty: 3, 11RMB x 3
      lumber["new_4x8"], //qty: 2, 17RMB x 2
    ],
    labor: 4, 
  }, 
  20250123: {
    cost: 336, 
    material: [
      lumber.old10x10,   // qty: 4, 40RMB x 4
      lumber["3m_5x10"], //qty: 16, 11RMB x 16
    ],
    labor: 5, 
  }, 
  20250122: {
    cost: 0, 
    material: [
      lumber.old10x10,
    ],
    labor: 5, 
  }, 
  20250121: {
    cost: 0, 
    material: [
      lumber.old10x10, // start to set poles, cost will be count when this step is done
    ],
    labor: 5, 
  }, 
  20250117: {
    cost: 0, 
    material: [
      lumber["3m_4x8"], // just cleaned and removed nails
    ],
    labor: 4, 
  }, 
  20250116: {
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
  20250115: {
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
      plates: lumber["2.5m_4x8"] // 8piece
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