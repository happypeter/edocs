/**
 * gonna be sth real
 * but first version will be a open shed thing, sth like polebarnRef
 * make use of my reclaimed lumber 43x83x2200 
 * 
 */

import { joinery_shopping_list, nails, pole_concrete_join } from "./joinery";
import { boards } from "./wood_shopping"
import { yard_building_color_theme } from "./yard";


const mainRef = 'youtube:KomarProject/How to Build A Shed from Start to Finish'
const polebarnRef = 'youtube: koality of life/The Woodshed that works for you Pole Barn'

const color = yard_building_color_theme;

const west_house = () => { 
   antMoistureLayer();
   roof();
}

const weed_barrier = () => { 
   /**
    * use my waste wall putty powder as weed/moisture barrier
    */
}

const addroofLater = () => { 
   /**
    * there is no need to make the walls super high
    * you can always add to the top, as long as your foundation is strong enougth
    * e.g mainRef:8m59s
    * I will start the house as a open shed, like polebarnRef
    */


}



const roof = () => { 
   sheath(boards.osb[15]);
   /**
    * rafter distance: 183.5cm
    * I will buy 5 1.22x2.44m OSB, for the rest of the sheathing
    * - will have to add a bit more support rafters though, since I won't cut the OSB to fit in the rafter layout
    *   - I will place 2 OSB boards to west and each end of the house, leaving 20cm or so gap in the middle
    *     - I will support the 20cm gap will rafters
    * - so I need, 4.2 piece of osb[15] for the rest of roof
    */

   /**
    * TODO: fasten rafters to beams
    */
   hurricane_tie(joinery_shopping_list.wood_angle_bracket);
   
   /**
    * TODO: fasten top crippled stud walls to poles
    * - add primary stud walls
    * - add screw top stud walls to the primary one
    */
   
}

/**
 * wood deck
 */

const deck_floor = () => { 
   /**
    * use one or two angle bracket in place of the joist hanger
    * nails
    */
   // nails[8] can be a option too
   use(joinery_shopping_list.wood_angle_bracket) 
   /**
    * you want to have the poles in the boundries of floor, so that you can have four flat walls later
    * cuz the stud walls will sit on the edges of the floor
    * make stud walls flush with the out facing edges of the four posts
    * TODO
    */
   wrap_the_poles()

   /**
    * I will use reclimed >3cm wood board as floor finish
    * - boards.plywood[18].price is too high
    * - I want sth durable and sandable, I don't need the floor to be perfectly flat
    * - I will build large assemble tables on top of it
    * - wood is much more water resistant than plywood
    * https://youtu.be/9bFjPbdWVpQ?si=HUXcPqP4MyoScozd
    * - make sure I can regret later on
    *   - a flat floor with OSB is easier to broom 03:26 https://www.ixigua.com/7237060457054339616?logTag=955a0b4a171d4f6a2fa4
    * - plank floor https://www.ixigua.com/7206640254202315267?logTag=3187138249e717cc0a06
    * - consider use my lumber[5x10] as floor, the gaps will be smaller and the length is right
    */
   barn_board_floor()
   
}

/**
 * consider use my black board as exterior sheathing
 */

const wall = () => { 
   
   sheath(boards.plywood.concrete_form)
   /**
    * ref: 5:19 https://www.ixigua.com/7237060457054339616?logTag=955a0b4a171d4f6a2fa4
    */
   seal_gaps_with('battens')
}
/**
 * TODO
 */

const fasten_pole = () => { 
    pole_concrete_join();
}

const plumbing = () => { 
    // TODO: beofore you finish the floor, bury a graded pvc pipe  underneath
}


/**
 * ref: https://www.ixigua.com/7266412277304295994
 */
const porch = () => { 
    
}