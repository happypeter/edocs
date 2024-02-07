/**
 * every space is a box, each box has sons/grandsons, everything has a box as it's own home.
 * I will set up a box hierarchy
 * TODO:
 *   - I will use a lot tape-enhanced cardboard boxes
 *   - I will have more standalone shelf and wall-hung ones
 *   - french cleats are also shelves, but they are less loadable, guess I will remove some of them
 * - rules
 *   - everything has its home
 *   - every home is a box
 *   - a shelf is also a box
 *   - don't design too many special purposed/shaped shelves and boxes, try make fungible ones, cause orgnization is always on-going
 */

import { bedroom } from "./bedroom"

export const everything = {
  bedroom,
  bathroom,
}


const rooms = {
  githome: [r1, r2, r3, r4], // r1, is room1 from west
}

const nailgun_station = {
  things: {
    
  },
  location: r4, // githome room4
}

const fastener_shelf = {
  /**
   * for things: screws, bolts nuts washers, little metal parts...
   * I lover drawer organizers, but since my things vary a lot in size and weight
   * and I want some for easy access and some in back storge
   * so for now a simple shelf box system might be more versatile
   * right now I have glass jars, cardborad boxes, wood boxes,
   * I will gradually move to wood boxes, and try to unify the sizes a bit
   * and try to have a cabinet for everything, but in no hurry
   */
}