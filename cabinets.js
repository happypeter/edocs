/**
 * the workshop should be upper cabinets plus on-caster workbenches that maxmize the storage capbility with drawers
 * - one heavy tool say miter saw, or drill price take the bench top as its home, https://www.bilibili.com/video/BV13K421t7oh/?t=3m
 * - OSB was used by smart people to build cabinets 
 *   - OSB rocks https://www.bilibili.com/video/BV1pN4y1z7Yj
 */

import { three_equal_sized_drawers } from "./project_drawers"
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
   * 60x60x30deep is the default size for my wall hungs
   * panel thickness 15mm
   */
}

const base_caninets = {
  /**
   * https://www.bilibili.com/video/BV13t411y7RC/?
   * 50widex60tallx60deep
   */
  opening: {
    width: 470, //mm
  },
  carcass: {
    openning: {
      width: 470, //mm
    },
    cut_list: {

      /**
       *   - use table saw to cut
       *   - two 60tallx58.5wide sides
       *   - 47widex58.5deep top and bottom boards
       *   - one 50x60cm backboard
       */
    },
    joinery: {
      /**
       * brad nails and dowels
       */
    }
  },
  drawer: three_equal_sized_drawers(carcass),

  edge_banding: {
    /**
     * 10mm thick wood strips, air nail it on 
     */
  },
  stretchers: {
    position: 'top edge of the top drawer false front'
  },
}

const drawer_unit = {
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
