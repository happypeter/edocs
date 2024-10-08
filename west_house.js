/**
 * I will name this house iron_cave
 * gonna be sth real
 * but first version will be a open shed thing, sth like polebarnRef
 * make use of my reclaimed lumber 43x83x2200 
 * 
 */

import { issues } from "./githome_issues_2024";
import { joinery_shopping_list, nails, pole_concrete_join } from "./joinery";
import { boards } from "./wood_shopping"
import { yard_building_color_theme } from "./yard";


const mainRef = 'youtube:KomarProject/How to Build A Shed from Start to Finish'
const polebarnRef = 'youtube: koality of life/The Woodshed that works for you Pole Barn'

const color = yard_building_color_theme;

const costs = [
   issues.aug28.west_house_siding,
   floor_data.costs,
   issues.sep13.west_house_interior,
   issues.sep14.west_house_interior,
   issues.sep15.west_house_floor,
   issues.sep16.west_house_floor,
   issues.sep17.west_house_wire,
]


const parts = {
   dust_room: {
     saws: 'for cutters, plainers, sanders...',
     in_palce_wood_storge: 'I will spare a wall, get a storage card, floating shelf',
   },
   assemble_room: 'very nice to have a seperate room for assembly, so that I can run away from the dust',
   main_storage: 'a place that keeps moisture and sunshine away, for lumber and sheet goods',
   todo: 'more structures, most with roofs, some with walls, will be build east and west to the main house'
  /**
   * I will have 6 or 8 2m tall box structures, that make the west house area it's own gated complex
   * thing. I can get gate, roofed area, second storeys, based on these 6 building block boxes.
   */
}

const photos = {
   stage1: 'https://happypeter.github.io/githome/imgs/20230928/',
   stage2: 'https://happypeter.github.io/githome/imgs/20240310/'
}

const design = {
   colors: {
      /**
       * ref https://happypeter.github.io/githome/imgs/20240215/
       */
      gray: 'for everthing',
      wood: 'some exposed wood',
      white: 'for the windows and doors',
      black: 'maybe for the east door'
   }
}
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
 * wood deck floor
 */


const flooring = () => { 
   const db = { 
      plank_flooring: {
         costs: [
            issues.sep11.west_house_floor,
            issues.sep12.west_house_floor
         ],
         /**
          * cut cracky ends first, if the inside is too moldy, the piece will be abandoned
          * clean both sides, roughly sand one side and paint this side once plank are installed
          */
         fastener: {
            /**
             * use screws
             */
         }
      }
   }
    
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


   barn_board_floor()
}

const barn_board_floor = () => {
   /**
    * I will use reclimed >3cm wood board as floor finish
    * - I want sth durable and sandable, I don't need the floor to be perfectly flat
    * https://youtu.be/9bFjPbdWVpQ?si=HUXcPqP4MyoScozd
    * - plank floor https://www.ixigua.com/7206640254202315267?logTag=3187138249e717cc0a06
    */

   /**
    * this people https://www.youtube.com/watch?v=9bFjPbdWVpQ
    * use dry sheathing, but I dont have that
    */
   lay_mositure_barrier('coats of latax paint')


   install_planks()

   /**
    * it is nice to aviod water drips go below the painted floor surface
    * but it's more work, and supposingly shop should be dry, so skip
    */
   // putty_gaps()

   /**
    * PU paint is expensive, and I have latex left over, so...
    * the rusty look the planks are beautiful, but shop would be filled with all rusty things, so MAYBE white color for floor is a bonus
    */
   latex_paint()
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
   interior_wall_finsh() // white paint the OSB https://www.bilibili.com/video/BV1pN4y1z7Yj/?t=1h23s&vd_source=f456a53ba52f091d339a7b2fcae45b02
}

const exterior_wall = () => { 
  corner_wrap('bent_metal_panel') // https://www.bilibili.com/video/BV1pN4y1z7Yj/?t=1h8m20s
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

/**
 * spary form before nails https://www.bilibili.com/video/BV1uY4y1K7Ck/
 */
const glazings = () => { 
    
}