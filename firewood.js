

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

box: {
  demesion: {
    length: 60, // this is only demension I conctrol
    height: undefined, // they are stackable, so height can be flexable
    width: '<60', // otherwise it will be too heavy
  }
}
