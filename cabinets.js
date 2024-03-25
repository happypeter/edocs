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

const base_caninets = {
  /**
   * https://www.bilibili.com/video/BV13t411y7RC/?
   * 50widex60tallx60deep
   */
  how_to_make: {
    /**
     * - use table saw to cut
     *   - two 60x60cm side boards
     *   - two 47x60cm top and bottom boards
     *   - one 47x57cm backboard
     * - brad nails and dowels
     *   - no clamps, no strechers, no pocket screws
     * 
     *    
     */
  },
  drawers: {
    how_to_make: {
      /**
       * CUT GROOVES for bottoms
       */
      spacer: {
        slide_height: 45, //mm
        slide_inner_part_height: 25,
        drawer_lift_height: 10, //mm, (45-25)/2
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
          width: 588 , //500-6x2 = 588
         /**
         * NOTE: drawer bottom is the bottom of 15mm walls, 4mm boards are ignored
         * distance_to_drawer_bottom means the distance from front bottom edge to drawer bottom
         */
          distance_to_drawer_bottom: 10, //thus front bottom will flush with slides bottom edge

        },
        /**
         * I will use long spacer piece to install slides first
         * before I install the strechers
         */
        spacer_height: 180,
      }
    },
    /**
     * all drawers are the same, 3 of which fits in one carcass
     */
  },
  edge_banding: {
    /**
     * 4mm thick wood strips, air nail it on 
     */
  },
  handles: {
    /**
     * I like the steel ones https://www.bilibili.com/video/BV13t411y7RC
     */
  }

}

shop_drawers = {
  /**
   * no metal slides https://www.youtube.com/watch?v=AA92UL7BDO4
   */
}