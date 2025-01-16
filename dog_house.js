/**
 * - goals
 *   - insulation: roof vs walls
 *   - no rain gets into the door
 */

const design = {
  /**
   * 
   * - https://www.youtube.com/watch?v=QCOtWEFA6nc
   *   - gray roof with thick edges
   *   - white walls
   *   - warm wood color trims for door and window
   * 
   */
}

const photoes = {
  /**
   * https://happypeter.github.io/githome/imgs/20250108/
   */
}

const components = {
  L1, // Level1
  L2,
}

const L1 = {
  stud, bottom_plate,
}

const L2 = {
  wall, roof
}

const L3 = {
  roof,
  body_box,
  floor,
  foundation 
}

const stud = {
  dim: {
    length: 70,
    section: {
      width: 4,
      height: 2,
    }
  }
}

const wall = {
  dim: {
    length: 70,
    width: 4,
    height: 74,
  },
  marks: [0, 23.3, 46.6, 67.9],
  spacer: {
    length: 21.3,
  },
  qty: 3, // front wall with the door will be different
}

const front_wall = {
  dim: wall.dim,  
  door: {
    spacer: {
      length: 14 ,// for the two gaps on each sides of the door 
    },
    rough_opening: {
      size: {
        width: 30,
        height: 42,
      },
    },

    parts: {
      header: {
        dim: {length: 34, section: stud.section}
      },
      jack: {
        qty: 2,
        dim: {
          length: front_wall.door.rough_opening.height,
          section: stud.section,
        }
      }
    }
  }

}
const double_top_plates = {
  long: {
    dim: {
      length: stud.dim.length + 8,
      section: stud.section
    },
    qty: 2,
  },
  short: {
    dim: {
      length: stud.dim.length,
      section: stud.section
    },
    qty: 2,
  },

}

const body_box = {
  dim: {
    length: 78,
    width: 70,
    height: wall.dim.height 
  }
}

const pannels = {
  sheath: {
    thick: 0.4,
  },
  floor: {
    thick: 1.2,
  }
}

const floor = {
  dim: {
    length: body_box.length,
    width: body_box.width,
    height: 8 + pannels.floor.thick 
  },

}

const roof = {
  parts: {
    /**
     * a flat and insulated roof below the pitched sheet metal roof
     * the benifits here is that I don't need to seal the pitched roof anymore
     */
  },
  /**
   * REF https://www.youtube.com/watch?v=h7fRanWeoUc
   * three triangles
   * bottom side 10cm longer than body_box.dim.widthß
   */
  ridge_line: 'bent sheet metal to cover the ridge',

  steps: {
    cut_rafter: {
      /**
       * cut with mitersaw for your ridge angle
       * https://youtu.be/38gxKHSJO1c?t=515
       * if your ridge angle is 30degree, then
       * you can cut the gussets of 120degree
       * or any other angle then cut to flush guesset with rafters with your saw https://youtu.be/38gxKHSJO1c?t=695
       */
    },
    guesset_insall: {
      /**
       * the rafter on either front and back wall will be a gable wall
       * so make sure the guesset will not be in the way
       */
    },
    sheathing: {
      /**
       * once you got the rafters flush with front and back walls
       * you can cut a whole sheet of pannel to make two gable walls
       * seal the attic https://youtu.be/_Ugiuyt0YmQ?t=3646
       */
    },
    finishings: {
      /** https://www.youtube.com/watch?v=_Ugiuyt0YmQ&list=PPSV&t=32s */
      /**
       * if you get any ugly edges, add trims https://youtu.be/_Ugiuyt0YmQ?t=3854
       */
    }
  }
}

const window = {
  /**
   * have this structure https://youtu.be/_Ugiuyt0YmQ?t=3378
   * and have air gap between two layers of film
   * 
   */
}

const foundation = {
  // concrete blocks, wood blocks, bricks, anything
  // just make it level and lift the floor 5cm above ground
}

const curtain = {
  /***
   * screw fastened wood scrap, holding a piece of fabric
   * https://youtu.be/QCOtWEFA6nc?t=1926
   */
}

const back_window = {
  location: 'back_wall',
  purpose: {
    winter: 'sunshine, with glass installed',
    summer: 'remove glass to get airflow for cooling and drying'
  }
}

const insulation = {
  /**
   * doing interior walls seems hard, and gap prone
   * I dont really have enough thin plywood to do that anyway
   * so I gave up on this build
   * that means we dont do rockwool either
   * but
   * we do strive for air tight
   * so I will use two layer exterior sheathing(1.2) and finishing(0.4) and have houseWrap go between
   * plus gauk going into the gaps
   */
}