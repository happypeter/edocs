/*
refs:
https://www.youtube.com/watch?v=lpxY6M0uf8s
https://youtu.be/tfwMFNyHzn8?t=228
*/

const philo = {
  /**
   * the 'box' I need to control demensions on is the drawer box, not container/carcass box
   * faceboard, carcass, handles, slides, are all accessories of 'box'es
   */
  box: 'control the dimension of each drawer box',
}

const materials = {
  plywood: 'most often used',
  OSB: 'if edge banding is done, it is good looking enough for any place',
  wood: '15mm thick pannel is not strong enough for 55cm deep large drawers',
  pine_board: {
    thickness: 15, //mm, this is the case for OSB and plywood, which I use for drawer box walls
  }
}

const plastic_box_drawers = {
  /**
 * https://youtu.be/PfWADqVdbv0?t=226
   */
}

const wood_slide = {
  default_solution: 'box_height + 2mm gaps between two wood strips'
  /**
   * a complicated wood slides: https://www.bilibili.com/video/BV1Mi4y1f7rM
   * - built with plywood https://www.bilibili.com/video/BV1sd4y1x7zo/
   * - polyurethane on slides
   */
}

const wood_handle = {
  /**
   * https://www.bilibili.com/video/BV1644y1g7vL
   * https://www.bilibili.com/video/BV1aL41177Xo/
   * - my handles
   *   - 30tallx25deepx130long
   *   - cut bevel on bottom side of the handle
   *   - install with 3 screws
   */
}


export const three_equal_sized_drawers = (carcass) => {
    /**
       * this is especially designed for 50widex60deepx600tall carcasses
    */
    const slide =  {
      height: 40, //40mm, no damper ones, the soft-close damper slides are 45mm
      inner_part_height: 21,
      length: 550,
      thickness: 12.5, //25mm for both, it's very elastic, more like 24mm
      drawer_lift_height: 10, //mm, precisely is 9.5 = (40-21)/2
    };
    drawer_box_width = carcass.opening.width - slide.thickness * 2; // 445 = 470 -25
    drawers = {
      box_size: {
        /**
         * false fronts not considered here
         */
        height: 120, //mm, this does not matter that much
        width: drawer_box_width,
        slide: {
          length: 550, //mm, slide-length
        },
        /**
         * do dry fit, it is worthwhile.
         */
        front_back_width: base_caninets.opening.width - slide.thickness - board.thickness * 2 // 415 = 470(opening)-25(slides)-30(sides)
      },
      slide,
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
         * distance_to_drawer_bottom means the distance from front bottom edge to the lower edge of 4mm drawer bottom boards
         */
          distance_to_drawer_side_bottom: slide.drawer_lift_height, // 10mm,

        },

      bottom: {
        material: '4mm plywood',
        /**
         * flat head screws to attach the bottom to the drawer walls
         */
      },
      /**
       * base_spacer is there to install drawers in the middle height, not the bottom of drawer_sides
       */
      spacers: {
        height: (opening_height + materials.board.thickness)/3 - slide_height, //155 = (600-15)/3-40, this value will be different if slide is taller, say for 50mm tall slides
        /**
         * base spacer is used to attach the slides in the middle of drawer wall, not the bottom,
         * which won't be changed due to different slide hight
         * but remember 50mm is the distance for the bottom edge of the 4mm drawer bottom
         */
        base_spacer_height: 50,
      },
    };
    return drawers;
  }

  const strip_rack = {
    /**
     * built from off cuts, material saved
     * https://happypeter.github.io/githome/imgs/20240928/
     */
    slides: {
      l_shape: 'no just the bottom needs support, the sides needed, so that when you push the drawer, the direction will go straight forward, not not get jamed',
      mark_the_tops: 'mark the slide postions, mark at top edge, not bottom edge, for more presice installations'
    },
    depth: 'keep depth of the rack, same as box depth, it is just harder to pull drawer out when it over recessed into the container'

  }