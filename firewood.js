/**
 * the firewood, aka waste wood off-cuts storage system
 */
import { issues } from "./githome_issues_2024"

const cost = [
  issues.search('firewood')
]
  
const guidelines = {
  portable: 'box should be 60cm long, but not too big to life',
  handles: 'I do need handles',
  stackable: 'yes, I also want the boxes to be stable and stackable',
}

const storage_spaces = [
/**
 * I happen to have seveal things that contains/hold 60cm deep boxes
 */
  'near south wear slab',
  'the width of my hand truck',
  'the lower storey of my work bench'
]

box = {
  demesion: {
    length: 60, // this is only demension I conctrol
    height: undefined, // they are stackable, so height can be flexable
    width: '<60', // otherwise it will be too heavy
  }
}

const shelves = {
  /**
   * I don't have long pieces, most of my firewood are small scraps, <20m, so that I just build box-ish things, e.g crates, shelves with fences. and I just throw the pieces in, no need to stack nicely
   */
  top_layer: 'same as the second',
  third_layer: 'a simple shelf',
  second_layer: 'with fence, and a door so that I can easily dump wood scraps out, think a trailer of a tractor',
  bottom_layer: 'a simple shelf'

}