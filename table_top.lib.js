const stain = () => { 
  /***
   * sand all glue off, otherwise don't paint or stain at all,  check  https://happypeter.github.io/githome/imgs/20241010/3.jpeg
   * tried to use hand, and orbital sanders, did not work, had to use grinder
   * even this makes the surface not flat.
   *  */ 
  sanding()

  /**
   * people say use linseed oil as primer, then wait for 24hrs for it to dry before you stain
   * I did not wait, maybe that's the reason it did not work well, still blotchy result
   * even it is a bit better than the one(on the right, https://happypeter.github.io/githome/imgs/20241010/2.jpeg) with out any priming
   */
  prime()

  /**
   * I used this to get walnut color https://happypeter.github.io/githome/imgs/20241010/4.jpeg
   * color looks great 
   */
  apply_stain()


  /**
   * use a roller to quicked apply the PU(with generous solvent added), don't worry the furs off the roller or the milky look the the newly applied paint 
   * https://happypeter.github.io/githome/imgs/20241201/13.jpeg
   * everything will be clear when the PU is cured
   */
  ployurethane()


}
const edge = {
  // use glue and brad nails to install the edge band
    // if you are in a hurry use screws as clamps, hide the screws with dowels/wood plugs
    // if you use clamps, dont give too much clamping force, unless you want the board cup on you
    // turned out use different color edge banding  is not a problem https://happypeter.github.io/githome/imgs/20241201/12.jpeg
    // the result can be more beautiful
    
}
const glue_plywood_pine = {
  // don't try to get the edges flush, you will fail anyway
  // just save time, and cut with circular saw, when the glue is dry
  // tablesaw does not work for sth with this size and weight
// use clamps to squeeze two board tight, and use screws to hold them in place
// the 3-cross-4-along way to do clamping https://happypeter.github.io/githome/imgs/20241201/8.jpeg
} 

export const laminated_pine_plywood = {
   /**
    * quick and strong table top 
    */
  steps: {
    pre_drill, // drill holes before apply glue, helps to align two sheets better https://www.youtube.com/watch?v=3nTX-VwE_PM
    glue_plywood_pine, // use clamps to squeeze two board tight, and use screws to hold them in place
    edge, 
    putty, // seal the gaps between edge band and the top
    paint, // pu or oil or wax or nothing
  }
}

const laminated_mdf = { 
  /**
   *  https://youtu.be/WPDJh-NVeYM?t=193 */ 
  
}


export const table_top = {
  
}