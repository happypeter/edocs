/**
 * ref: pole barn with pitched roof https://www.youtube.com/watch?v=yKoJTLy9DW8
 */
import { modular_roof } from "./box_block"
import { issues } from "./githome_issues_2024"
import { lumber } from "./wood_shopping"


const costs = [
  issues.aug31.box_house_roofing,
  issues.sep4.box_house_stairs,
  issues.sep7.siding_box_house,
  issues.sep9.box_house,
  issues,sep10.box_house,
]

const inspirations = {
  /**
   * https://www.archdaily.com/877608/box-house-ming-architects
   */
  design: {
    /**
     * yes, sheet metal and wood planks works well together for siding and roofing, warm+modern, clean+rusty
     * but, to make the final look to be slick, the genral rule is
     * - one thing metal, one thing wood, don't use wood and metal on one thing
     *   - one 'thing' does not need to be a whole thing, can also be a functional part
     *     - following the rule 'design is not just how it looks, but how it works'
     *   - e.g south wall is one thing, east wall is another
     *   - whole house is one thing, the porch or balcolny is another
     *   - https://www.buildwithrise.com/stories/aluminum-steel-metal-siding
     *   - visual clutter and functional clutter are avoid this way
     * - door/window frame
     *   - black not white, black makes wood color warmer, white reduce the warmth
     *   - black frame on sheet metal also cooler than white frames
     *   - if you search 'sheet metal wood plank siding', you almost see no white frames
     * - interior
     *   - 
     * 
     */
    interior: {
      colors: {
        /**
         * use white boards, don't use my black plywood
         */
      }
    }

  }
}

const outdoor_structural_blocks = {
  /**
   * Unless I have to do otherwise, I build with only the resusable lego-ish blocks
   */
  beams: {
    /**
     * the idea is for very good and strong lumber, I try not to cut them short
     * if the span is only 2m, use thin material instead
     */
    length: '>3.6m'
  },
  blocks: [
    frame_unit,

  ]

}


const roof = () => { 
  /**
   * - follow this: https://www.youtube.com/watch?v=mwMdfF1RGyE
   *   - in case VPN sucks https://happypeter.github.io/githome/imgs/20240728/
   *   - key points
    *   - use as many braces, no shame
    *   - no plywood sheathing, just crossed lumbers
    *   - you still go to the top to install sheet metal
    *     - sheet metal overhang 5cm
   */
  use(modular_roof)
}

const box_unit = {
  /**
   * four pillars
   * stud walls to provide sun screen and shear force
   * there is no need to have concrete floor
   * soil is good for now, and wood_deck/concrete_slabs later
   * 
   * beams for all the four sides, so joists can extend to any direction
   * the end of the over hang can be 20cm, or 2m long, supported by, NO.1 nothing, NO.2 two pillars, NO.3 another box_unit
   */
}

const frame_unit = {
  modules: {
    workhorse: {
      dementions: {
        height: 180,
        width: 90,
        thickness: [9.5, 7],
        mateiral: [lumber["4x8x200"], lumber["5x10x400"]],
      },
      /**
       * I will use a brace, and later change to some sheath if necessary
       */
      between_studs: 'no',
    },
    roof_unit: {
      /**
       * this is largely depends on the size of the building,
       * so the length is hard to control, but I still want to control the width of it.
       * if I do decide use frame_unit to build the roof from time to time.
       * mostly I won't.
       */
    }
  }
}

const second_storey = {

  /**
   * why NOT pole barn?
   * A: thought of pole bar for a moment, the biggest benifit being you get two tall poles in front, and two low poles in the back, so you naturally get the base of a lean to roof, and it is strong. but turned out if you want sheathing and, pole bar does not save a lot of work. on the other hand, if you build stud walls, you can easliy do moust of the work on the ground, so, I will still do the box-on-box approch. more moudular, less bindings. have dead simple boxes, and join them with accessories.
   */

  /**
   * - https://www.bilibili.com/video/BV1BS421X7ca/
   * - no overhang for the roof of the first
   *   - so that the second floor will get a solid base
   *   - make it hurrcane proof
   * - stud walls will be used
   *   - lower part of the walls will be sheathed, to prevent rain goes to the floor
   *   - start with bracing for shear force, later maybe partially changed to plywood if I want to hang things on the wall
   *   - height = sheet_metal_height
   * - airy and sun/rain proof
   *   - think it as a lumber storage place
   *   - rain proof
   *     - at least part of the space will be complete rain drop free, so that I can keep wood board there
   *       - I will allow some rain drop at the doorway
   *     - lower part of the walls will be sheathed will sheet metal
   *       - so that no rain will drop on the floor
   *   - solid wood board will be used for floor
   *   - how to keep airy
   *     - have the roof size generous, then upper 10 percent wall can be left unsheathed
   *     - there will be no windows, but two doorways without doors
   *       - they will be the main way that bring the light and air movement
   *       
   *     

   */
}



const build_steps = () => { 
  /**
   * more detailed:  https://happypeter.github.io/githome/imgs/20240523/
   */
  /**
   * first get a leveled foundation, be it footings on soil, or concrete slabs
   * if you were to build on soil, follow:
   * - build the footings
   * - dig pits on site
   * - sit footings in, use guide lines and level to check levels
   * - pure some concrete arount the footings
   * - img https://happypeter.github.io/githome/imgs/20240523/7.jpeg
   *  */ 
  leveled_foundation()

  /**
   * - now I am convinced, cutting the wood to do a simplified cross_lap_joint is the way to go:
   *   - NO.1 it's not too hard
   *   - NO.2 beams requires solid support
   * - https://happypeter.github.io/githome/imgs/20240519/8.jpeg
   *   - the leftover part is more than strong enough
   */
  cut_motise()
  /**
   * - now build two two_post_unit with the steps:
   *   - the units are literally front and back walls
   *   - nail the beams to the posts with one nail for each joinery for now
   *   - big wood work square to check the perpendicularity of beam and post
   *   - add bracing
   *   - more nails on the joineries
   *   - end results are https://happypeter.github.io/githome/imgs/20240519/9.jpeg
   */
  two_post_unit()


  add_shear_walls()

}

const wall = {
  layers: 'plastic film below, wood planks',
  windowish: 'use OSB/sheetMetal in the middle of a wood planks siding, , rich/warm color OSB with paint, look great on a rusty wood background, metal sheets used to cut cost, when wood planks already provide enough shear strength',
  /**
   * 
   */
}

const wall_top_awning = {
  /**
   * https://happypeter.github.io/githome/imgs/20240825/
   * to invite enough sunshine and airflow, I removed the cover metal on top of the brick wall, and replaced with awning instead
   */
}