/**
 * the workshop should be upper cabinets plus on-caster workbenches that maxmize the storage capbility with drawers
 * - one heavy tool say miter saw, or drill price take the bench top as its home, https://www.bilibili.com/video/BV13K421t7oh/?t=3m
 */
const wall_cabinets = {
  /**
   * 60x60x30deep is the default size for my wall hungs
   * panel thickness 15mm
   */
}

const board = {
  thickness: 15 //mm OSB and wood 
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
  drawer: {
    box_size: {
      /**
       * false fronts not considered here
       */
      height: 120, //mm, this does not matter that much
      width: front_back_width + board.thickness * 2 , //445mm
      slide: {
        length: 550, //mm, slide-length
      },
      /**
       * do dry fit, it is worthwhile.
       */
      front_back_width: base_caninets.opening.width - slide.thickness - board.thickness * 2 // 415 = 470(opening)-25(slides)-30(sides)
    },
    how_to_make: {
      /**
       * CUT GROOVES for bottoms for big drawers only
       * https://www.bilibili.com/video/BV1UR4y1K7Ti/
       * - BUG fixes:
       *   - having bottom 4mm plywood extend over the wall edges may stand in the way of slide movement
       *   - the fix can be install the slides not at the bottom of the drawer walls
       * 
       */

      slide: {
        height: 40, //mm, the soft-close damper slides are 45mm
        inner_part_height: 21,
        length: 550,
        thickness: 25, //mm, it's very elastic, more like 24mm
        drawer_lift_height: 10, //mm, precisely is 9.5 = (40-21)/2
      },
      spacer: {
        gap: 6, //mm, that's the gap between each drawer front, also the gap from carcass top and bottom to front edges
        front: {
           /* the idea is because it's a floor furniture
           * so the front does not need to cover the bottom,
           * the front bottom edge will flush with slides bottom, which is
           * also the bottom of the strecher seperated 180mm tall space for
           * each drawer
           * however we don't want to see a gap at the top of each drawer, so front willl cover 9cm of the 15cm thick strechers(or carcass top)
           * so the front height
           * will be 180+(15-6)=189mm, 6 is the 'gap'
           */
          height: 189, 
          width: 488 , //500-6x2 = 488
         /**
         * NOTE: 
         * distance_to_drawer_bottom means the distance from front bottom edge to drawer bottom
         */
          distance_to_drawer_side_bottom: slide.drawer_lift_height, // 10mm

        },

        bottom: {
          /**
           * I will have a suspended bottom
           * 
           */
          groove: {
            depth: 6, //mm, I will make it 6.5 or so for easy install
          },
          pannel: {
            width: drawer.box_size.front_back_width + goove.depth * 2, // 427mm = 415 + 2
            length: drawer.box_size.depth, //550mm
          },
        },
        /**
         * I will use long spacer piece to install slides first
         * before I install the strechers
         * spacer_height = (opening_height + 1boardthick)/3 - slide_height
         * (600-15)/3-40=155
         * base_spacer is there to install drawers in the middle height, not the bottom of drawer_sides
         */
        spacers: {
          height: 155,
          base_spacer_height: 50,
        },
      }
    },
    /**
     * all drawers are the same, 3 of which fits in one carcass
     */
  },

  edge_banding: {
    /**
     * 10mm thick wood strips, air nail it on 
     */
  },
  stretchers: {
    position: 'top edge of the top drawer false front'
  },
  handles: {
    /**
     * I like the steel ones https://www.bilibili.com/video/BV13t411y7RC
     */
  }

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

const shop_drawers = {
  /**
   * no metal slides https://www.youtube.com/watch?v=AA92UL7BDO4
   */
}