/**
 * my first build on the compus
 * Goals:
 * - a roofed area, mostly wind-tight
 *   - bird blocking still needed
 * - large windows, open in summer, film-sealed in winter
 *   - so no insulation needed for the building
 * - maxmize portability
 *   - the walls and roofs will be build large
 *     - I don't chase to standarize wall/roof units 
 *     - but being large means we can still reuse the beams/joists when the house is remodeled in someway
 *     - no bench or wall canbinets will be bound to the house sturcutures
 *     - benches needs to have simple and standarized design
 */

import { lumber } from "./wood_shopping"

const cost = {
  20250109: {
    cost: 0, // RMB, 
    material: none,
    labor: 8, // set the poles
    // we got digger for free, but you may spent another 200here
  },
  20250110: {
    cost: 80, // RMB, 
    material: lumber.old10x10,
    labor: 8, 
  },
  20250112: {
    cost: 105, // 35x3 RMB, 
    material: lumber.super_wide, // 3 used
    labor: 5, // my time and help from one guy
  },
  20250113: {
    cost: 0, 
    // installed floor joists and cleats and one plywood pannel
    // the cost will be calqulated when the whole subfloor is done
    labor: 5,
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
}
const foundation = {
  /**
   * https://www.youtube.com/watch?v=e-_NlKJ58dc
   */
  size: {
    sides: {
      south: 346, //cm
      north: 341, // 5cm difference here
      east: 371,
      west: 371, // 0 error, cool
    },
    area:  12.6,//sqm, 340x370
  },
  steps: {
    set_poles,
    floor_beams,
    floor_sheathing, // stagger the joints https://youtu.be/O33OZs6a-vA?t=2095
  }
}

const set_poles = {
  steps: {
    /**
     * should have gone with this https://www.youtube.com/watch?v=O33OZs6a-vA
     */
    /**
     * the steps are generally this
     * - don't worry about the plump and level for beams and poles
     * - cause the first step will be focused on checking true
     * - doing triangle is not really easy,
     * - cause if you have to burie all posts before you do that
     * - but if something goes wrong, you can not change the positions anymore
     * - so what I do is setting one poles a time, and check direction and postion, and then bury it firmly
     * - check square and do the second post, then bury this one firmly before you do the next
     * - once I got the square, now work on check plump for all posts
     * 
     */
    flat_ground, // slope will be kept, just make the land generatly flat, so that I am able to set poles
    first_pole: {
      /**
       * this is a easy one, just bury it at one corner of the space you got
       * precision is not needed, expect, the south face of the 10x10 post needs to algin with the south side of my square space
       * 
       */
    },
    second_pole: {
      /**
       * also easy, make sure the south faces are inline with each other
       * this can easily be done by screwing a temperatory beam
       * 
       */
    },
    third_pole: {
      /**
       * use 3-4-5 rule to check square 
       */
    },
    fourth_pole: {
      /** this is a hard one
       * don't  just check two 90 degree,
       * also check if the sides that oppsite to each other
       * are of the same length,
       * I did not do that on waldorf_goose project,
       * that why my such edge of my foundation is 5cm shorter than the north
       */
    }
  }
}

const floor_beams = {
  material: lumber.super_wide, // 3piece
  steps: {
    attach_joist_to_beams,
    // per homeRenovation, you don't need joist hangers, two nails and one screws will do better job https://youtu.be/O33OZs6a-vA?t=1470

  }
}

const general_structure = {
  /**
   * lean down from the north wall, 5m at the wall, then have
   * windows half way on the roof, then lean down still, lowest goes to 2.8m,
   * https://www.tuffshed.com/introducing-newest-options/
   */
}

const roof = {
  material: 'metal',
  edge_banding: 'white board', // https://jp.pinterest.com/pin/370491506821876609/
  /**
   * I don't like the exposed sheet metal edge, too sharp
   * so, I will go this for the front(higer) vs left/right side https://jp.pinterest.com/pin/467107792606037292/
   * - the points are:
   *   - facial board needs to be painted or oiled
   *   - metal edge will be recessed or hide behind
   * - and for the back(lower) side of the roof, a facial below the sharp edge
   *   - like this https://youtu.be/gzPTO1NaP2U?t=53
   * - so from the ground, the front/left/right sides, the sharp edges are mostly hidden
   */
}

const drainage = {
  /**
   * have gutter between the north side of green house
   * and the south side of the the lean to roof attached to the wall
   * and the gutter will have the east side lower, so that water will be directed to the river
   */
}