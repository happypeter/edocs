
import { modular_roof } from "./box_block"

const inspirations = {
  /**
   * https://www.archdaily.com/877608/box-house-ming-architects
   */
}



const roof = () => { 
  /**
   * 
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

const second_storey = {
  /**
   * 
   */
}

const build_steps = () => { 
  /**
   * first get a leveled foundation, be it footings on soil, or concrete slabs
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