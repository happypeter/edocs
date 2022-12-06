import { boards, treated } from './wood_shopping';
/**
 * - divide the design into two parts: left and right
 *   - left one: window area
 *   - right one: door area
 *   - USB OSB board to spearator
 * 
 * - OSB sheathing
 *   - bottom one as a wall trim to make it safe when mop the floor
 *   - upper one as seprator of windows
 *   - two OSB boards will be same width & height
 *   - top OSB will be 20cm(or so) high, just to make top windows look more stylish
 *   - the upper and bottom  windows will aslo be of ssame size
 *   - that way, the left part of the way will be a perfect zebra look
 * - use wood strips to fasten two layers of PE film
 * 
 * 
 * - gap between OSB and floor
 *   - have mopping in mind
 * 
 * - door
 *   - mostly PE film with a frame https://www.pinterest.co.uk/pin/358247345344492007/
 *   - black rim and handle https://www.pinterest.es/pin/387802217914133868/
 *   - size: same as other doors, since they are proofed for sofa and mat 
 * 
 */



const sizes = { 
   opening: { width: 1760, height: 2485 },
   door: { width: 850, height: 2050 },  
}
const time_spent = {
  design_frame: { hr: 2, date: 20221126 },
  install: { hr: 6, date: 20221129 },
  second_layer_film: { hr: 2, date: 20221203 },
  door: { hr: 3, date: 20221204 },
  fix_door: { hr: 4, date: 20221206 },
}


export const billie_partition_wall = () => { 
  frame()
  cleats() 
}

const cleats = () => { 
  cut(material = boards.plywood.concrete_form, width=85) 
  /**
   *  85 is the width of frame lumber, aka treated['2by4']
   * */ 
}

const frame = () => { 
  use(treated['2by4']) 

}