/**
 * if you want to explain your structural ideas to people, sketchup design is a big bonus 
 * https://www.youtube.com/watch?v=McF8McA6sds
 */
const main = () => { 
  setup_app() 
  basics()
  draw_foundation()
  post_header()
}



const setup_app = () => { 
 /**
 * Sketchup Make works perfectly on my Macbook Pro with no charge
 */

}

const basics = () => { 
  /*
  - M-arrowKeys to move along certain axis
    - https://help.sketchup.com/en/sketchup/moving-entities-around
  - Space to select, left to right, right to left
  - R to draw a rectangle
  - H to pan
  - O to orbit
  - P to push
  - T to tape mesaure
  - L to draw a Line
  - Shift-Z to zoom extents
    - Zoom window is not that useful
    - if you want to check a perticular area
    - Z then click the area and then zoom in and out
    - this is a better way than Zoom Window
  - Space to select
  */ 
}

const draw_cubiod = (x, y, z) => { 
   /**
    * R to draw square
    * e.g type "240cm, 240cm" for dimensions
    */
   square(x, y)
   /**
    * then use pull tool to make it a cubiod
    */
   push(z)
}

const draw_foundation = () => { 
   /**
    * inside slab
    */
   draw_cubiod(2400, 2400, 100)
   /**
    * wall
    */
   draw_cubiod(200, 2400, 1700)

   /**
    * snap together,
    * M to select Move tool, and pick THE CORNER of the wall
    */
   snap()
   /**
    * out gate slab
    */
  draw_cubiod(2400, 2400, 200)
  /**
   * - make the footing block a component, before you snap it to other objects
   *   - to make it easier to select in the future
   */
  make_component(draw_footing(170, 170, 80))


  /**
   * copy footing, and set the distance 1340 along y axis
   * - hold corner of a component, it will Move along axis as you want
   *   - I need to set distance to 1340+170=1510
   */

  two_footings(1340)

  /**
   * move the two footings 2m from the wall
   * T and click to set a guide first
   */

  move_from_wall(2000)

}

const post_header = () => { 
  /**
   *  */ 
}

const wall_header = () => { 
  /**
   * 105x1800x38 plate
   * 105x38x351 crippled stud
   * 38x240x132 header
   * - to snap header to the notch of the crippled stud
   *   - M to use move mode, selecting a point as handle
   *   - then drag to find the snap anchor on the destiney object
   *     - a anchor could be a middle point, a face, or a line
   *  */ 
}