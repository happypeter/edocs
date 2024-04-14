/**
 * the workshop should be upper cabinets plus on-caster workbenches that maxmize the storage capbility with drawers
 * - one heavy tool say miter saw, or drill price take the bench top as its home, https://www.bilibili.com/video/BV13K421t7oh/?t=3m
 * - OSB was used by smart people to build cabinets 
 *   - OSB rocks https://www.bilibili.com/video/BV1pN4y1z7Yj
 */

import { accessory, box } from "./box"
import { three_equal_sized_drawers } from "./drawers"
import { design_guidelines } from './githome_design_guidelines'
import { ideas } from "./shop_organization"

const guidelines = {
  /**
   * note: guide lines is sort of the final form, while my work is always work in progress
   * so it's a problem when it's a problem, knowing where to head does not mean we need to do it in one go
   */
  general_height: ideas.same_level_tops, //90cm for standing worktable, 70 for sitting
  colors: design_guidelines.rule_of_one_color,
}

const wall_cabinets = {
  /**
   * this is many main or default wall cabinet size
   */
  material: '15mm faced board',
  size: '60x60x30deep'
 /**
  * a wall cabinet is a @box, the back board 4mm is a @accessory
  */
}


const default_cabinet_carcass =  {
  openning: {
    width: 470, //mm
  },
  cut_list: {
    /**
     *   - use table saw to cut
     *   - two 60tallx60wide sides
     *   - 47widex60deep bottom boards
     *   - use strechers ont front/back/top of the carcass
     *   - use 4mm backboard as a accessory if necessary
     */
  },
}


export const base_caninet = (carcass)=> {
  /**
   * https://www.bilibili.com/video/BV13t411y7RC/?
   * 50widex60tallx60deep
   */
  result = {
    carcass,
    drawer: three_equal_sized_drawers(carcass),
    enhancements: {
      edge_banding: {
        OSB: '10mm thick wood strips, air nail it on ',
        plywood: 'none'
      },
      stretchers: {
        position: 'bottom edge of the upper drawer false front'
      },
    }
  }
  return result
}



const default_base_cabinet = base_cabinet(default_cabinet_carcass)

const flat_drawer_unit = {
  /**
   * for 90cm tall stand worktable, I need this to get the right height
   */
  size: {
    /**
     *  90 - 60 - 10 - 3 - 1.5 = 15.5
     */
    height:  standtable.design_height - cabinet.carcass.height - caster.height - table_top.height - bottom_plate.height,
    install: 'mount to the table top before install its own bottom, lastly the two 60cm cabinets r installed'
  }
}
