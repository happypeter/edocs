
const specs = {
  poartable: 'easy to handle and light weight',
  height: 'as a tray, we do not want this tall, but still need enough strength, so maybe 5cm',
  slidable: 'I dont want screw heads on the bottom',
}


const tray = {
  walls: {
    wood_walls: 'can be sanded, make make confortable',
  },
}

const small_tray = {
  tray,
  bottom: {
    /**
     * since the bottom need to be flat, 4mm plywood can not be installed with pan head screws,
     * if cutting grooves is too much a pain, I can consider, cut the walls 3.8cm high, that use 8mm wood strips to counter sink screws.
     * final height will still be 50mm(38+4+8)
     */
  },
  size: {
    /**
     * the size is easy to handle with one hand,
     * and will fit in many of my containers, e.g drawers, wall cabinets, ect.
     */
    width: 30, 
    height: 5, 
    depth: 50
  }
}

export const solid_bottom_tray = {
  tray,
  material: 'use 10mm for bottom, 15mm is a overkill',
  size: {
    /**
     * this size is choosen, mostly for tool_cart
     */
    width: 40, 
    height: 5, 
    depth: 60
  }

}
