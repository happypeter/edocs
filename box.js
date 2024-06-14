const philos = {
  /**
   * - the finally product, e.g a cabinet, does not need to be a perfect box all the time, it's not the point
   *   - if the table top got a overhang, it's ok, the table top is just a accessory of the carcass, or it's a box of its own right
   *   - when I put two of my 50wide cabinets together, can get a 100cm wide island, that's great, 
   *     - but if the side is ugly, put on a 1cm thick walnut board, cause users, can not tell the difference of 100cm and 101cm, 
   *     - for me, as long as the walnut board is easily token off, when I am upgrading the island, I am good with the 101 size too
   * - what I really want, is when I upgrading the furnatures, none of my previous work or material would be wasted
   *   - I want even accessories to follow certain standard e.g a drawer require some work to build, so when I take one  OSB drawer off my desk, I want it able to fit my wookshop cabinets
   *   - e.g it's OK to have overhangs for a tabletop, if ever these stand in my way, I can easily cut them off. no material wasted.
   */
  optimize_for_reusability: ''
}

const specs = {
  flat_bottom: 'no screw heads on the bottom',
  stackable: 'that is why we need flat_bottom',
  stepped_sizes: 'for big boxes, 10cm is one step, for smaller ones 5cm',
  /**
   * e.g, my wall cabinet depth is now (300+4)mm, 4 is the thickness of the backboard
   * but the backboard is just a accesory, for the cabinet is still a perfect cuboid.
   */
  perfect_sized: 'only ~1mm errors are allowed'
  /**
   * e.g a drawer failed most of the specs, here, so a drawer is a accessory for the carcass, which is a box
   */
}

export const box = {
  /**
   * I build two things: boxes vs accessories
   */
}

export const accessory = {
  /**
   * as a accessory, outline size does not matter, but it's designed for a certain size @box
   * a accessory should be easliy taken off, in time when I need to assemble seveal boxes into one bigger thing
   */
}

const tissu_box = {
  /**
   * a tissue box has to be heavy enough, otherwise it will move or lift when you pull the paper out
   * https://happypeter.github.io/githome/imgs/20240614/
   */
}