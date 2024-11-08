
/**
 * I love Timber Frame Bench https://www.youtube.com/watch?v=fg5qjed7u-k
 * - goodbye braces
 *   - lap joint is the way to go https://www.youtube.com/watch?v=gM3oCXcyxoA
 * 
 * side notes:
 * - I am not building a bench, I am building a box, anything should be a perfect cubiod box
 * - perfect box can be easily extended in anyway
 * - don't go too fancy, just stay with the old plan
 *   - fancier plans also needs more precisions on how flat or straight my lumber is
 *   - in other words, more work. and not necessary
 */

import { issues } from "./githome_issues_2024"

/**
 * the best height of your workbench depends on what work you want to carry out on top,
 * the rule is the more detailed your work is, the higher it should be. vice versa.
 * for example, if you want to do dove tails or wash dishes, maybe 90 is best. but if you do
 * assembly, maybe 70 is good, by default, I will use 80cm.
 */
const Height = 80 // cm, when I need to mostly stand


const assmebly_table = {
  welled_top: {
    /**
     * a well to put my tools in https://guideofgreece.com/
     */
  },
  size: {
    // demensions: 150widex70deepx80tall 
    // overhang: 5cm
    // anything smaller does not work as well
  },
  dogs: {
    /**
     * maybe
     */
  },
  location: 'assmebly_room', // currently the kitchen room
  /**
   * polyurethined surface to keep wood glue easy to remove
   * very flat: does not have to be very smooth, but need to be flat, OSB board will be used
   * casters: NO. I do need to move it, but not too heavy dragging.
   */
}

const outfeed_table = {
  /**
   * this goes to my dust_room
   * 
   */
}

export const yard_bench = () => { 


  /**
   * - follow this one hr workbench plan https://www.youtube.com/watch?v=PMJ4Lob5Q4I
   *   - also almost like this https://theweekendwoodworker.com/wp-content/uploads/Basic-Mobile-Workbench.pdf
   */
  precise_cut()


  /*
  - install the short strechers first, use speech square to keep the top flush with leg top
  - https://happypeter.github.io/githome/imgs/20221013/
  */
  keep_flush()

  /**
   * - now install the lower short stretcher
   * - measure and drawer a line 10cm from the bottom of the leg
   * - nail the stretcher, and measure the diagonal to check squre
   *   - since I use waste wood, the square does not work
   * - since I did precise cuts, so as long as the squre is true, I can have confidence that the legs will plumb once assembled
   * - now nailgun more nails to keep the square, and then couter sink the screws
   */

  lower_stretcher()

  /**
   * do the same to another two legs
   */

  the_other_side()


  /**
   * do the same to long stretcher
   */

  install_long_stretcher()

  /**
   * brace on top and sides for shear strength
   * https://youtu.be/Px2JZs4Q2v4?t=372
   * - note: parallel stretchers does not keep your structure strong
   *   - no matter how many you add, see my broken stool?
   * - you either need a sheet of wood board, or you need triangles
   */

  brace()
  
  /**
   * - top like this https://www.youtube.com/watch?v=Px2JZs4Q2v4
   *   - four long pieces are good https://www.youtube.com/watch?v=65lsaxzK-KY
   * gaps are for the rain, not wood expansion https://youtu.be/S_uUqaNujC8?t=188
   * - handle wood expansion
   *   - 
   * */ 

  top_and_siding()
  nailing()
  over_hang(front='50mm', left="0", right="200mm", back="10mm")
  /**
   * TODO: this will serve as my miter saw bench, so I also need a same hight small table in order to set up stoppers when I cut long studs
   * two layer shelf like 
   */

  side_table()

  shelf_layer()
  clampable()

}




const get_tight_fit = () => { 
  /**
   * how to get a tight fir: do multi-pass to cut the slot, you don't need a sled to do the job,
   * https://happypeter.github.io/githome/imgs/20240825/
   * knock off the material
   * then use table saw to flat the notch surface,
   * design the notch 1 or 2 cm smaller than the strecher, then fine adjust tablesaw to remove material from the ends of strechers, until u reach a tight fit. in other words, design the size and postion of the opening/slot, and cut them, then try to fit in the strecher, measure-mark-cut does not work. */ 
}

const small_slab_bench = {

  top: {
    /**
     * use power plane to plane the surface 
     * use a ruler/straight wood pieces to check flat
     */
    c_channel: {
      /** currently no */
    },
    mount: {
      /**
       * keep wood expansion in mind,
       * I will do just one brackets in the middle of the side of wood expansion
       * on the long_side/grain_direction that wood does not move, I will use more brackets
       */
    }
  },
  aprons: {
    /**
     * cause the top is self-supportive,
     * so you don't really need the aprons for the suppot purpose, check this design with no front strecher https://www.youtube.com/watch?app=desktop&v=UlElSbqD3jc
     * but still you need it to mount the top and keep the base itself in shape
     * for heavy duty benches, you need wideWide rails https://youtu.be/UlElSbqD3jc?t=72
     * glue may fail due to the heavyness, then use bolts instead https://youtu.be/UlElSbqD3jc?t=164
     * the front and strechers will be mounted to the legs fron inside, so that I get more clamping spaces on the front side of the bench top
     */
  },
  costs: [
    issues.aug31.polish_slab_bench,
    issues.sep3.slab_bench_base,
    issues.sep4.slab_bench_base_day2,
  ],
  height: Height, //80cm
  slab: { 
    thick: 80,
    length: 1200,
    depth: 585,
  },
  legs: {
    length: 720, // height - slab_thick
  },
  strechers: {
    bolts: {
      /**
       * if you already cut the notches and strechers locked in them, nails and glue will do the job
       * if you rely on bolts, then no point for the half-lap notches.
       */
    },
    long: { // front/back
      length: 1000,
    },
    side: {
      length: 550, // rough size
    }
  }
}

const elm_bench = {
  top: {
    deptch: 545,
    long: 1095,
    thick: 52,
  }
}

const glue_layers_boards = () => { 
  /**
   * glues make layers slide, so pre drill https://youtu.be/UlElSbqD3jc?t=438,
   * take the screws out once the glue dries.
   */
   
}

const mdf_bench =  {
  ref: 'https://youtu.be/UlElSbqD3jc?t=437',
  costs: [
    issues.aug28.move_mdf_bench
  ],
  vise: { 
    /**
     * vise with dogs https://youtu.be/UlElSbqD3jc?t=682
     * install https://youtu.be/UlElSbqD3jc?t=634
     *  */ 
  },
  /**
   * use mdf as top, or have plywood on top of mdf:
   * 
   * https://www.youtube.com/watch?v=P7EOAJIQJ2A
   * - 5 feathers for a workbench: no.1 be heavy no.2 
   *   - solid wood slab top requires planner usage, too hard
   */
  base: {
    pitfall: {
      flush: 'make sure top face of your top strechers level with or higher than the leg top face, otherwise they can not touch the bottom of table top which needs their support'
    },
    /**
     * use glue, and half laps, no braces
     * follow the two principles, the design is obvious
     * since I am using 45x90mm cross section lumber, aka, it's too thick to use many of the designs on the web
     * so the current design is valuable IMO, mostly like this one https://www.instructables.com/DIY-Heavy-Duty-Workbench/
     * 
     */

    /**
     * for enough shear strength, make sure the fit is tight,
     * and you hammer in the pieces to the dados
     */
    fit: get_tight_fit(),
    leg: {
    }
  }
}



/*

- April workbench https://www.youtube.com/watch?v=x9XIrfiNyUA
- Youtube: Ben Tardif/a ultimate modular workbench
- basic workbench plan https://theweekendwoodworker.com/wp-content/uploads/Basic-Mobile-Workbench.pdf
- todo
  - upside down everything, the 10in1
    - https://www.youtube.com/watch?v=k1wMsF75k_w
## Work bench
- my plan
  - thinking of using this top board for my bench
    - https://youtu.be/UlElSbqD3jc?t=604
    - the board with extend outside the box, so it is clampable
    - you can drill dogholes and add tail vise to it
  - benchtop clamp
    - this is alailable cheap on PDD https://youtu.be/yGgNvV1_3hQ?t=1274
  - own a 75x190cm workbench is nothing portable
    - it is actully a feature, not a bug, since you never want your bench move and bump while you work
      - this size also make ripping 120x240board easy
    - but still you can make it mudular by making parts easily attachable
  - try to make it clampable
    - at least part of the bench https://youtu.be/UlElSbqD3jc?t=961
    - I need clamps like this, so that I can use my planer https://youtu.be/VWgGZ4Osg1U?t=126

- my bench top
  - the tail part, which I want it thick, area 74x66cm
  - glue up two layer of plywood, than stain it, and drill dogholes
    - https://www.youtube.com/watch?v=E9Mcwxqkuuo
    - or https://youtu.be/53PrmkFpdI0?t=1698
- secure/fasten workpiece
  - best solution:
    - dogholes + wood vise https://youtu.be/mHIe9VSikbA?t=516
      - install at front corner is better https://youtu.be/UlElSbqD3jc?t=618
        - since I can use hand saw here
  - fasten a sheet to sand, with dog holes
    - https://youtu.be/l1TN9z2kicI?t=326

*/


const drawers = () => { 
  /**
   * YOU DONT NEED SCREWS april_drawer https://youtu.be/rmXWZ5PuDjI?t=339
   * wood runners https://youtu.be/UlElSbqD3jc?t=1000
   * nothing at all https://www.bilibili.com/video/BV1db411U7z2/
   * - April's workbench drawers https://youtu.be/x9XIrfiNyUA?t=687
   *  */ 
}

const crate_worktable = {
  costs: [
    issues.sep2.crate_worktable_done,
  ]
  /**
   * designed for the kitchen to host crates
   * pitfalls: for a >1.2m structures, don't use material <25mm thick, no matter how generous the width goes.
   */
}

const clampable = () => { 
  /**
   * foureyes love this https://youtu.be/SZGykd0ipkQ?t=258
   *  */ 
}

const shelf_layer = () => { 
  /**
   * foureyes https://youtu.be/SZGykd0ipkQ?t=333
   *  */ 
}

const side_table = () => { 
  

  /**
   * the side table will also serve as a rolling tool cart
   * make sure you have enough install surface for casters
   * if you don't, install strethers at the bottom of the leg
   */
  cut_legs()

  /**
   * a bit lower than main work surface https://youtu.be/SZGykd0ipkQ?t=357
    * does not get in the way of T slot jigs of table saw
   *  */ 
   hingable_height()

   
}

const tall_apron = () => { 
  /**
   * should have used tall aprons for my yard_bench
   * then I did not need the braces 
   * https://youtu.be/SZGykd0ipkQ?t=357
   * or you can use drawers as aprons https://happypeter.github.io/githome/imgs/20221028/
   *  */ 
}

const heavy_top = () => { 
  /**
   * the heavier the more steady 
   * look people even use mdf for the weight https://youtu.be/UlElSbqD3jc?t=550 */ 
}

const over_hang = () => { 
/*
- overhange on the edges
  - pros
    - easy to clamp board on top of bench
  - cons
    - can not pound things on the edges, not sturdy enough 
    - lose your ability to do leg vise https://youtu.be/8ZmHBquTDX8?t=829
  - so I will have(in the future) front 50mm(for clamps), left 0(pounding), right 200mm(for vise or sth)
*/
  return true
}


const home_table_saw = () => { 
  /**
   * https://youtu.be/zuiBTSAbxp8?t=51
   *  */ 
}

const hingable_height = () => { 
  /**
   * a height that stay level with my miter saw 
   * OR two dog holes and a shelf layer to hold a plugable height block*/ 
}

const portable = () => { 
  /**
   * future idea: a morivian workbench https://youtu.be/8ZmHBquTDX8?t=269
   * curent solution: use screws rather than glue
   * 
   *  */ 
}

const decise_height = () => { 
  /**
   * no perfect height, even for one person, for different tasks you want differnt height
   * https://youtu.be/8ZmHBquTDX8?t=905
   *  */ 
}

const nailing = () => { 
  /**
   * hide all screw holes
   * holes do cause roting https://youtu.be/Uno40oCUkBw?t=110
   * bradnailing the top planks then flip the table to install pocket screws
   * - https://happypeter.github.io/githome/imgs/20221015/
   *  */ 
}

const sawhorse = () => { 
  /**
   * - when I need them?
   *   - sanding the 3m lumbera
   * - ref designs
   *   - April https://www.ixigua.com/6811715673497010699?logTag=9db9e3edb6a3e4766152
   *   - my childhood way 板凳 https://www.ixigua.com/6820785363007570440?logTag=418f4841bf22b7451ff3
   *     - lightweight ans strong, but hard to build and hard to tear apart and reuse the wood
   *   - with middle gap for saws https://www.ixigua.com/6611237294340833796
   * - my design
   *   - stay cubiods, even this means the result will be heavy
   *  */ 
}


