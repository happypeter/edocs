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

const design = {
  /**
   * - https://www.youtube.com/watch?v=oT5zSpdP_T4
   *   - black + gray + wood
   * - https://happypeter.github.io/githome/imgs/20250120/154983161.jpeg
   * - https://happypeter.github.io/githome/imgs/20250119/
   * 
   */
}

const wall = {
  bottom_flashing: {
    /**
     * https://youtu.be/QS8UKDUAldU?t=82
     */
  },
  wrap: {
    /* it will be used to protect the metal from condensation https://www.youtube.com/watch?v=4OQ0OLQpDWU&list=PPSV */
  },
  exterior_foot_trim: {
    why: "sheet metal is easy to dent, so some protection will be nice",
    how: {
      /**
       * I have no plan to do it, but in case it is needed
       * this maybe a simple solution
       * have battens like the drainage pipes here https://happypeter.github.io/githome/imgs/20250119/
       * then nail some black wood planks as the trim/fence thing to protect the lower part of the walls
       */
    }
  }
}
const window = {
  flashing: {
    /**
     * z flash behind glass https://youtu.be/DF-MCqtnxzc?t=208
     */
  },
  trim: {
  /**
   * with metal J channel https://youtu.be/7KBB8DnsCvs?t=4429
   * https://www.youtube.com/watch?v=fMdFeDS6t6Y&list=PPSV
   * 
   */
  },
  frame: {
    /* 
      once you got a pole barn wall, you don't need stud wall to make a 
      window, just mount the frame to the girts will do
      like this https://happypeter.github.io/githome/imgs/20250122/1.jpeg
    */
  },
  layout: {
    south_side: {
      /**
       * nothing fancy, KISS https://i0.wp.com/smallhouse-design.com/wp-content/uploads/2022/07/Two-Storey-Tiny-House-Plan-3x6-Meter-Shed-Roof-Full-Detailing-5.jpg?resize=1024%2C576&ssl=1
       * https://happypeter.github.io/githome/imgs/20250119/
       */
    }
  }

}
const foundation = {
  /**
   * https://www.youtube.com/watch?v=e-_NlKJ58dc
   * - lesson learned:
   *   - setting posts on a rough ground, and expected a perfectly
   *     squared space to build on is very hard
   *   - even more stupid was that I need all joists fit in the 3 beams
   *     that sit on top of the posts
   *   - next project, I will difinite do sth different
   *     - I will first cut joist to build some \frame units based on
   *       the size of my sheathing panels
   *     - I will use attached the frames to beams
   *       - beacause 5x10 lumber should not span longer than 2m
   * 
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

const floor = {
  size: {
    width: 368, // north-south
    length: 371, // east-west
  },

  beams: {
    material: lumber.super_wide, // 3piece
    steps: {
    attach_joist_to_beams,
    // per homeRenovation, you don't need joist hangers, two nails and one screws will do better job https://youtu.be/O33OZs6a-vA?t=1470
    },
  }
}

const general_structure = {
  /**
   * lean down from the north wall, 5m at the wall, then have
   * windows half way on the roof, then lean down still, lowest goes to 2.8m,
   * https://www.tuffshed.com/introducing-newest-options/
   */

  loft: {
    /**
     * 
     */
  },
  back_concrete_wall: {
    /**
     * is it possible to connect to the back concrete wall?
     * the idea is to open a backdoor and make use of the space
     * between shed and concrete wall
     * My current concultion is there no good way to extent the shed rooff
     * all the way to the concrete wall. to form a roofed area for the space 
     * between shed and the wall. So I won't do it for now.
     * Maybe in the future, I will attached a plate on the concrete wall
     * and have a roof lean from the wall down to the shed, this means
     * - NO.1, the concrete wall was used
     * - NO.2 rain water from both the new roof, and exsiting shed roof will
     * flow at a same line, so maybe I can adda gutter along the line
     * 
     * anyway, I dont need to worry it for now.
     */
  },
  doors: {
    south: {
      /** to access the playground */
    },
    west: {
      /** connect to the roofed deck area/patio */
    },
    north: {
      /** to make use of the large area behind the shed and the green house */
    }
  }
}

const roof = {
  material: 'metal',
  facial_board: {
    attach_to_purlins: YES, // https://youtu.be/ZV9st9chII0?t=566
  }
  // like this https://happypeter.github.io/githome/imgs/20250122/2.jpeg
  // https://jp.pinterest.com/pin/370491506821876609/
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

  frame: {
    /**
     * I don't have lumber that is wide enought for the 4m span,
     * so I wil have to have a beam in the middle of the roof
     */
  },
  slope: {
    /**
     * I will have a 9/12 gable roof, which means for 12 run, 9 is the rise
     * plan: https://happypeter.github.io/githome/imgs/20250120/1494936862.jpeg
     */
    run: floor.size.width/2, // 184RMB
    rise: 138, //cm, 184 * 3/4
    sheet_metal_lenght: 280, // 230 + 50(overhange)
  }
}

const drainage = {
  /**
   * have gutter between the north side of green house
   * and the south side of the the lean to roof attached to the wall
   * and the gutter will have the east side lower, so that water will be directed to the river
   */
}
const logo = {
  /**
   * having a logo will make the house really stylish https://happypeter.github.io/githome/imgs/20250126/1672406318.jpeg
   */
}