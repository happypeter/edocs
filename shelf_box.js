/**
 * - search 'amazon warehouse' or 'homedepot' to be inspired on how storage is done
 * - Go Bauhuas, everything should be a box
 *   - literally, everything, cabinets, houses, racks, sheds, beds
 *   - each components should share implementation details as much as possible
 *     - If I decide to use PE film and 7mm OSB as roof solution, then it is a standard for all roofs
 *     - if I want to do a upgrade to new solution, I will gradually upgrade all things
 *   - flat top, same size, so that they can be stackable
 *   - roof is a component with a short stand that takes care of its own sloop
 *   - portable and modular
 *     - E.g I will build small firewood storage boxes, should I ever need more firewood, I will make more, and stack the boxes into a big shelf, and use a same roof for it     
 *     - the idea is consider my githome as a system, think esthetic reasons, less tools to get more done
 * - prevent square shape to deform
 *   - use braces, sometimes it's not very eathetic, so I will try avoid this
 *   - use OSB/Plywood sheathing, only if dry, https://happypeter.github.io/githome/imgs/20230527/1.jpg
 *   - use >10cm wide wood boards, and use more than one, think how a pallet keep its form
 */

import { drill_station } from "./drill_station"
import { saw_station } from "./saw_station"


export const shelf_box = () => { 
  mount_to_wall() 
  set_colors(color_scheme) 
  cabinet_everywhere()
  workhourse_wall_hung_shelves()
  drill_station()
  grinder_sander_station()
  saw_station()
  two_cabinet_one_top()
  general_layout()
}

const table_top_options = () => { 
  /**
   *  https://youtu.be/WPDJh-NVeYM?t=193 */ 
   laminated_mdf()
}

const general_layout = () => { 
  /**
   * wall hung cabinet on top of a table cabinet https://youtu.be/WPDJh-NVeYM?t=113 */ 
}
const two_cabinet_one_top = () => { 
  /**
   * if you want a large top, build it on top of one cabinet will make the cabinet too heavy to be portable
   * so do this https://youtu.be/WPDJh-NVeYM?t=183 */ 
}

const mount_to_wall = () => { 

  /**
   * french_cleat is nice when you need to reorginize often
   * for stonger mount, use plank_cleat(), or screw_mount
   */
  
  french_cleat()
  plank_cleat() 
  screw_mount()

}

const screw_mount= () => { 
  /**
   * use 5 or ten screws to mount cabinets to the OSB baseboard
   */
  stong_backboard()
  many_screws()
   
}

const plank_cleat = () => {
  /* sure you can use french cleat to install the wall hung table https://youtu.be/7Hk6vWtbgSg?t=718 
  but there is a better way: which is stronger than french cleat
   - professionals are doing this, I will call it 'plank_cleat'
     - mansory nailer to fasten a long piece of plywood to the wall
     - screw a same size plywood on top the earlier one
     - now on the top of the plywood pieces, you get a very long and now so shallow surface, kind of a cleat, to hold things
     - make a box like table, with empty space, attach to table to the surface
     - it is like a french cleat in some way, but stonger than this https://www.youtube.com/watch?v=U6LSFgmOV4k&t=515s
*/

}



export const standards = {
  /**
   * aka, design guidelines
   * the extrior size matters a lot, since we need to veritcally or horizontally assemble the boxes
   * 'make things perfect cuboid'
   * 'only care exterior sizes, care for being stackable, not nesting'
   */
  sizes: {
    box: {
      step: '5n', //, for the box I want to put inside a container, 5cm, 10cm, 15cm, 20cm...
      primary_sizes: [
        '15x15x10tall', //for screws and small things
        /* the 30deep series of boxes, are aimed for @containers.primary_sizes.workhorse_cabinet
         width can be 10cm, 15, 20, height, can be 5cm, to, 25cm,
         */
        '30deep x 5nWidth x 5nheight)', 
      ]
    },
    
    containers: {
      step: '10n', //containers, like drawers, shelves, wall cabinets, I will use 10 as a step
      primary_sizes: {
        workhorse_cabinet: '30deepx60tallx60wide', // my workhorse wall cabinets
        sixty_cubic: '60x60x60',
      }
    },
  },
  colors: {
    simple: 'by default only, black, gray, wood, white allowed'
  },
  stackable: {
    /**
     * NO.1 flat top, NO.2 follow @standards.sizes.box
     */
  }
}

const workhorse_cabinet = {
  size: {
    deep: '30cm',
    height_width: '60cm'
  }
}

const osb_boxes = {
  /**
   * https://happypeter.github.io/githome/imgs/20240822/
   * use solid wood pannel or bottom plywood board to seal/cover the edges of OSB or faced board, if you do want to use them to build boxes
   */
}

const cabinet_everywhere = () => { 
   /**
    * - add toe kick 
    * - the billie_desk#open_cabinet will be used for everything
    *   - as table support/legs
    *     - the cabinets has 5 faees, which provide perfect upward and shear forces
    *     - if you want sth airy, build narrow cabinet, cut holes on some sides, whatever it takes
    *   - as float shelf
    *     - it is very easy and super strong
    *   - easy to install casters
    *   - easy to install tabletops
    *   - build stylish wallhung starbucks bar table
    *     - a very low cabinet with all 6 faces
    * - workhouse_cabinet cutlist: Documents/ketchup/workhorse_cabinet.sketch
    */
   use(workhorse_cabinet)
}

const workhourse_wall_hung_shelves = () => { 
  build_with(workhorse_cabinet)
  /**
   * 
   * screw it on the woodboard without the cleats
   * this is much stronger than most structures, despite the simplicity
   *   - for example, to store lumbers, instead of https://happypeter.github.io/githome/imgs/20220402/2.jpg
   *     - I can just build two very narrow boxes and nail it directly on the woodboard attached to the wall
   *  */ 
}

/*
- I think the frame and panel box design is here to stay in my system
  - I not the only one who use frame&panel for things other than doors
  - it's strong enough while light weight
  - I can use PVC/Acrylic/Mesh as panels as well
*/
const frame_panel_box = () => {
  /*
  - figure out the cutlist before hand
  - tenons https://www.youtube.com/watch?v=OdImx4h0MWo
  - plywood will be used to make the whole structure strong
    - only two size where handles are use ply
    - for smaller box, I could use 9mm, or turn to OSB for cheaper materials
    - make sure bottom of the box is within the height of plywood sides
  - cut grooves/rails
    - set table saw fence
    - set table saw blade height 1.2
      - panel will be embedded 1cm into the rails
      - panel is not glued to the frame but is left to 'float' within it so that seasonal movement of the wood comprising the panel does not distort the frame.
    - cut once, than flip and cut the second pass
    - wear gloves with rubber to hold the pieces fast
  */
  cut();
  make_tenons(); 
  /* having a stoper on the table saw sled is all you need
    - https://happypeter.github.io/githome/imgs/20220319
  */
}





const install_hinge = () => {
  // soft closing hinges here
  install_the_round_side() //make sure the hinge is 90 degree to the side of the piece
  install_the_other_side()
  /*
  - keep the door open https://happypeter.github.io/githome/imgs/20220319/3.jpg
  - hold the two sides tight together
  - no gap needed, and make sure both the upper ends and bottom ends of doors and sides touch each other
  - install the two screws with wider holes first
    - so you can adjust the door positions after fasting the screws
  */
  adjust_screws() // you can adjust door positon in the depth, width, height direction
  // so when you screw the hinges on the two sides, you don't need to be really precise
}


/*
https://www.ixigua.com/6952061596659089931
- set guideline with nails
  - https://www.ixigua.com/6986842905025446415?logTag=d1054a326e9de0b1ec14
- track install https://www.ixigua.com/6974778455611146783

- slides are wobbly and weak
  - expensive red wood furnitures dont use slide at all
    - you can use stoppers if you have kids https://www.ixigua.com/6855516147580666376
      - turn stopper https://youtu.be/ZyUiyVpa6YA?t=154
- wood cleat slides https://www.youtube.com/watch?v=7ob28gKTeUk
  - a shim away https://youtu.be/ZyUiyVpa6YA?t=200
  - don't paint the cleat, wax them https://youtu.be/ZyUiyVpa6YA?t=231
  - the back of the drawer does not hold bottom pannel
*/

const shelf_studio = () => { 
  /**
   * I like the design a lot, not the simplest one, but more modular and portable
   * since it has no big and heavy back board */ 
}