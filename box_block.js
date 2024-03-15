/**
 * Don't thing you are building a house/table/gate/bench/stair 
 * Think you are building sort-of prefabricted building blocks of these things
 * each block is a perfect box of it's own structural strength,
 * so that the house can be easliy dessambled, so that moving or remodeling are really easy
 * use temperary brace for the structural strength, and change it to sheathing or truss when it's necessary
 * 
 */

const roof = {
  /**
   * a roof that follow box block pholosophy should be like this
   * - overhang is a assesoary, cause it breaks the shape of a perfect box
   * - roof will be build with serveral roof_unit
   * - each roof_unit is a box, or in this case a square
   * - when two square join,there will be a double lumber rafter, kind of overkill, but this is accecptable
   * - sheathing pannel size should be kept in mind when building the roof_units
   *   - but don't sheath(like I did for carport v2), use brace, before you install the roof
   *   - DONT share a pannel across two roof_unit, cut the pannel to long strip(61x244, 45x180)
   *     - the benifits are really clear
   *     - easy to decide where the stretch should go, so I can do it on the ground
   *       - sharing requires the stretcher to be at a very precise position
   *         -  half times when two pannels needs to share a joist, trouch occurs
   *       - that's why I end up doing stretchers after the roof is installed
   *     - I can have the pannels pre cut for me next purchase, whole pannel is just to crazy to handle
   *   - cause pannels are much heavier than a brace lumber
   *   - installing strechter after the roof is installed is a nightmare, so now we can do it on the ground
   *   - other people also do flat roof https://www.youtube.com/watch?v=typgQNxIOWI
   * 
   */
}