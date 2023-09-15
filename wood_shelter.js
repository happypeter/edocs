import { expansion } from "./fasteners"

const time_spent = {
  water_barrier: {hr: 2, date: 20221106}
}

export const wood_shelter = () => { 
  set_poles()
  roofing()
  add_girts()
  bend_front_roof()
  lumber_shelf()
}

const roofing = () => { 
  /**
   * rough roof size 5mx1.8m
   * gonna have the black sheet metal roof https://youtu.be/b4W-YeAUmnM?t=8
   */
  /**
   * for overhanges on the two sides, I need headers to support the added roof parts with lots of noggings
   * this way I may not even need braces to support the overhang
   * like https://youtu.be/BLk_CAMmQPc?t=6913
  * one top of the joint, cover with sheathing, this will be strong as hell
   */


  /**
   * OSB_gap x 2 + OSB_depthx3 = rafter_length + fasica_thickness x 2 
   * 8+1806 = 1780+34
   */
  const OSB_depth = 602
  const rafter_length = 1780 //in mmm
  const fasica_thickness = 17
  const OSB_gap = 4

  /**
   * - there are two ways you can get 4 side overhang 
   *   - NO.1 make the beam/header longer than the poles
   *     - https://truemancave.com/wp-content/uploads/2018/05/how-to-build-a-lean-to-shed.jpg
   *     - https://happypeter.github.io/githome/imgs/20221105/overhang-header.jpg
   *   - NO.2 if you can not make the header longer for some reason, you need to make a roof a bit more complicated 
   *     - https://truemancave.com/wp-content/uploads/2018/05/how-to-build-a-lean-to-shed.jpg
   *     - https://happypeter.github.io/githome/imgs/20221105/overhang.jpg
   *   
   * 
   */
  overhang() 
}

const flange_diy = () => { 
  /**
   * with metal board and angle steel
   */
  welding()

  /**
   * with use dia 6mm expansion screws
   */

  bore_holes(dia=8)
}

const set_poles = () => { 
  flange_diy() 

  
  /**
   * this screws a good fit for poles https://happypeter.github.io/githome/imgs/20221025/
   * - use my hammer drill with 10mm dia bits(pre drill with 6mm for more precision)
   */
   use_fasterner( expansion["10x8"])


   /**
    * put your beam in place to find out your post postions,
    * put a short post there to decide the flange postion
    * as shown here https://happypeter.github.io/githome/imgs/20221026
    * mark the flange postion with markers
    * mark 2 hole postions(for one posts, we need two flange, which take 4 screws to install)
    * drill one hole, put the flange, adjust the postion a bit, if you missed your orign mark for first hole
    * install one flange, then put on the short post and mark the posion of anthoer flange
    * now go to anther pole postion, do all above again
    */
   decide_flange_postion()

   /**
    * use level to get rough vertility, and install two poles loosely
    */
   loosely_screw_poles()

   /**
    * now install the front beam
    * because, the pole flange location was decided by this very beam,
    * so I can confidently install the two ends of the beam to the tops of two poles
    * even the poles are not perfectly vertical 
    */
   install_front_beam()

   /**
    * now check the front-view verticality of the too poles
    * and use tmp braces to pretain this 
    * https://happypeter.github.io/githome/imgs/20221031/
    */
   install_braces()


   /**
    * now that we have the front beam and poles in postion
    * we can use this as reference to install back poles and beams
    * make sure the 4 ends stay on the ver·tex of a true rectangle
    * how? with eye judgement, a bit error is nothigns
    * the key is just to keep all the poles vertical
    */
   install_back_beam()


   /**
    * do the verticality check and brace the two sides of the structure
    * like shown here https://happypeter.github.io/githome/imgs/20221031/7.jpg
    */
   brace_the_sides()

   /**
    * now the poles are vertical in both front-view and side view
    * we can finally tighten the flange screws
    * and the strucure is mostly done by now.
    */
   tighten_flange_screws()

}

const bend_front_roof = () => { 
  /**
   * https://www.pinterest.jp/pin/492651646740938775/
   */
   
}

const add_girts = () => { 
  /**
   * a typical 'pole barn construction' 
   * use girts as sheeting rails*/ 
}

export const outdoor_cart = () => { 
   /**
    * a bigger version of my cart
    */
}


export const cart = () => { 
   
}

export const windowSideShelf = () => { 
   /**
    *   - 3 tiers
    - bottom tier, 30cm, for short lumber/strips
      - the board for this tier is plywood, 17x120x35
    - middle tier, 45+cm, for two boxes
      - one for trash
      - other for small cut-offs
      - each box is 20cm tall
        - make box shallow, and tier high, so that I can toss wood in
      - use ceiling strips for the frame, and 50 mdf as board
      - top tier, use 17x120x35 plywood
        - top is flat, as a tabletop
  - total height 85cm, workbech height, a bit taller than my windowsill

    */
}


/*
- top of the shelf will be a flat workspace for tmp storage of anything
  - https://youtu.be/_0H71D7dSDQ?t=712
  - no angles version https://www.youtube.com/watch?v=vYu9pn3r5NM
  - when I work, I don't really have time to put all cut-offs away
    - so I need a shallow, tmp storage
- wood storage general plan
  - most lumbers/cut-off needs to stay outside
    - since main workshop is small
  - but I still need a place for 
    - trash
    - working-on pieces
    - litte scrap, I want to keep
- do u want a cart? or boxes on a shelf?
  - being on a shelf is nice, since it makes the floor easy to clean
    - but will I left the floor empty?
      - 100% not, because agin my space is limited
      - it's very likely I will put some boxes on the floor under the shelf
        - if the boxes have no casters, that's means to floor is hard to clean 
        - if I want casters, why not build a shelf on casters?
          - so that is a cart!
- so I want a cart, above the cart, I can still do shelves, for lumber or anything
- for future useful cut-offs, you stack them, not bury them in trash
*/

/*
- most common one
  - three parts
    - front: vertical dividers
    - back: angle part for laying big sheets
    - middle: a shelf
  - steve Ramsey https://www.youtube.com/watch?v=nZtIEFa3Ofk
  - Shop Nation https://www.youtube.com/watch?v=CFcSNfGbUmQ
*/

export const lumber_shelf = () => { 
   /**
    * outdoor use, for 4m long wood
    */
}

