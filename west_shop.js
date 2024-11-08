/**
 * West Shop is the wood workshop in west house
 */

import { issues } from "./githome_issues_2024"

/**
 * - ideas
 *   - mostly follow fixthisbuildthat https://www.youtube.com/watch?v=WUpTHkthp14
 *   - low shelves are not easy to access, better idea is to have base cabinet with drawers
 *   - a desk ish bench like this https://youtu.be/dEB0exfFTco?t=495

 *   - more table top spaces. you always need more of it. so my wall+base cabinet set still is the best solution
 *     - for south/north wall spaces, have tool walls between the base and wall cubbies
 *       - the idea is things should be >20cm deep
 *     - for east/west sides, I have 60 deep table, 
 *       - so that I can install the cubbies low, that I don't need tool walls
 *       - but I will still use stackable boxes to fit in the 50cm or so space between base and wall cabinets, like https://youtu.be/WUpTHkthp14?t=429
 *   - have one or more layer of lumber shelves above wall cabinets
 *   - leave corner area for clamps or stand sth tall against
 *     - like https://youtu.be/kWKqHPhTe6M?t=1
 *   - heavy tool storage, e.g circular saw, jig saw, router...
 *     - box on top of a shallow drawers https://youtu.be/qAWdzCzKT-w?t=662
 *   - small parts storage, e.g screws
 *     - I need to build holders for my small boxes
 *       - a wood version of https://youtu.be/kWKqHPhTe6M?t=221
 *   - off-cuts cart
 *     - 'anything does not fit here, don't keep' https://youtu.be/kWKqHPhTe6M?t=123
 *   - clamp corner
 *     - hang long clamps high https://youtu.be/yzESZFZ2S3s?t=383
 *   
 */

const PROJECT_NAME = 'west_shop'

const cost = [
  issues.search(PROJECT_NAME)
]

const floor_plan = {
  /**
   * don't have bench top in the cornor, it's not good idea to stand and work in front of that part of the bench https://youtu.be/yzESZFZ2S3s?t=266
   * leave that corner space open to store sth tall or very long
   */
}

const design = {
  pallate: {
    /**
     * check this japanese home: https://www.youtube.com/watch?v=dEB0exfFTco
     * by oak I mean, pine with some slight oil
     */
    oak_vs_white: 'simple and warm'
  }
}

const urgency_zones = {
  /**
   * https://www.youtube.com/watch?v=_SNiAdmA51Q
   * - things you need in urgently should be exposed in a open shelve or box
   * - things you use very often, but not urgent, should be put in a place that is easy to reach
   */
  zone1: {
    purpose: 'for most urgent things',
    location: 'table top, low shelves, top drawers below tabletop',
    screws: 'some screws, not all'
  }
}

const wall_storage = {
/*  - wall idea
 *     - french cleats vs shelves
 *       - aka, more tabletop work space vs more storage capacity
 *       - this video insipred me https://www.youtube.com/watch?v=VikIrOw3lYg
 *         - it's always a trade off, and there is always things to banlance
 *           - my current system works IMO
 *             - if base cabinet is 60cm deep, have bottom shelve 50cm above the cabinettop
 *               - there is still space, to put some 30cm_tall/20cm_deep oraginzers on cabinettop, like what I am having now for drill_station
 *               - this solution is optimized for more storage, and since the shelves are low, I can really bottom two layers without effort
 *             - if base is 40cm deep, bottom shelve will be 180cm from floor, and around 90cm above cabinet top, french cleat goes between
 *               - I won't bump my head
 */
}
