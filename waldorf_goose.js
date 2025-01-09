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
    cost: 80, // RMB, 
    material: lumber.old10x10["2nd_purchase"]
  }
}
const foundation = {
  /**
   * https://www.youtube.com/watch?v=e-_NlKJ58dc
   */
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
   * so, I will go this https://jp.pinterest.com/pin/467107792606037292/
   * - the points are:
   *   - facial board needs to be painted or oiled
   *   - metal edge will be recessed or hide behind
   */
}

const drainage = {
  /**
   * have gutter between the north side of green house
   * and the south side of the the lean to roof attached to the wall
   * and the gutter will have the east side lower, so that water will be directed to the river
   */
}