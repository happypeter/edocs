/**
 * desc: the 2.4m kitchen countertop for mars
 */

import { issues } from "./githome_issues_2024"
import { paint_shopping } from "./paint"

const cost = [
  issues.oct21.mars_counter
]

const glue_boards = {
  /**
   * desc: glue boards together to get a longer or thicker top
   * 
   */

  /**
   * https://happypeter.github.io/githome/imgs/20241019/1.jpeg
   */
  cut_wood: 'make sure you have your 90degress on edges, one way to do this is use router and plywood factory corners as guide',

  /**
   * warning: a mistake I made here is apply presuree on pine wood boards, when I was trying clamp the solid wood edge to the main body
   * ended up, my pine board cracked and warped. 
   * I laid some weight on top to fix the warps https://happypeter.github.io/githome/imgs/20241019/4.jpeg
   */
  glue_and_clamp: ''

}

const tung_oil_finish = {
  /**
   * https://happypeter.github.io/githome/imgs/20241019/
   */
  clean: 'towel the top twice',
  
  /**
   * the tung oil used  paint_shopping.tungoil_goodsmell_pure
   */
  first_coat: 'be very generous on first coat, wait 15min, paint again, rag works better than brush',
  wip_off_excess: 'after',
  second_cost: 'wait for 3 days, and paint again'
}

sanding = {
  hand_saw: 'cut off excess materials here and there',
  /** */
  grinder: {
    remove_excess_material: 'make solid wood edge top flush with the board, and bevel the bottom edge of the solid wood edge',

    /**
     * https://happypeter.github.io/githome/imgs/20241019/5.jpeg
     */
    remove_glue_stain: 'mark with pensil first, and clean all the stains, I dont care scraches that grinder+60grit_sandpaper causes, other sanders just not powerful enough to remove this ',
    /**
     * warning: I tend to mix steps, adding myself a lot of extra work. e.g if I am doing the 2nd step, and soon find I need to do the 1st step again, that usually means my much more ditry and violent 1st work will damage some of the wook I done in second step
     * in this case, if I put down my grinder, that's it, I need to be confident, that I won't plug it again in later steps.
     */
    round_the_corners: 'where two wood edge joins'
  },
  plunge_router: 'do the edge profiling',
  palm_square_sander: {
    top:'give the top boards final touches',
    edge: 'remove the marks lefted by plunge router, and smoother the rounded corners top view profile',
  }
}
const steps = {

  sanding,
  tung_oil_finish,
}

export const mars_counter = {
  cost,
  steps,
}