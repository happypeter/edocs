/**
a carport will a bit UV and rain protection
 */

import { hardware, treated } from "./wood_shopping"

const PITCH = "2:12" // https://youtu.be/1_JhhlFFyEE?t=229
const shopping_list = [
  hardware.bolt,
  hardware.flange,
  braces,
  /** poles 
   * I have 6 poles, 1.8mx3+2.1mx3, so I need 3 4m long ones
  */
  "碳化木柱子x3 10.5x10.5x400cm 160RMB/one ，拼多多 防腐木碳化木桑拿板 shop", // I will cut each into 2.1+1.9m two pieces
  /**
   * headers
   */
  "防腐木treated[4x14] x3 in hand",
  
  /** walls siding 
   * total_wall_surface = 1.8x2+2.4x(1.7+2.1)= 13m2 
   * I will need to cover 1/3, so that is 4m2
   * each board give me 0.4m2, so I need 10 
  */
  "碳化木珊栏板x10 1.7x10.5x400cm  27.5RMB/one 拼多多 防腐木碳化木桑拿板 shop ", // compared to treated wood, they don't curl easily

  /** roof 
   * rafters are hypotenuse of (1.8 0.3), that is 1.82m, plus 18cm overhange, that is 2m for each
   * I will use one for each .4m gap, so I need 6 rafters, each 2m long
  */
  "防腐木梁 x3  3.8x10.5x400cm 50RMB/one 拼多多 防腐木碳化木主副量凉亭料 防腐木碳化木桑拿板 shop",
  "OSB in hand"
]

const main = () => { 
  sizes()
  foundation()
  frame()
  siding()
  roof()
  charging_station()
}

const siding = () => { 
  /**
   * upper part of the wall needs to be sheathed, to provide UV protection and keep rain away 
   * - since the floor is concrete, I don't care if the floor is wet, just don't let wind blow rain directly into the room
   * */ 
}

const frame = () => { 
  // copy https://www.youtube.com/watch?v=Iwnfj_8DNPs&t=62s
  why_not_stud_walls()
  /**
   * - posts are too heavy, not easy to set by one person, but why not to use stud walls, and employ all my knowledge doing shed:google?
   * - the main problem is that, since I don't do water proof for the wall
   *   - all the horizontal going lumber will hold water
   *  - if I just build everything vertical way(allways keep smaller faces face vertical direction),
   *    - this will work, but think that, without enough studs, who will support your top plate
   *    - sure you can use something like window headers(https://en.wikipedia.org/wiki/Wall_stud) to get the vertical stregth 
   *      - but now you need jack stud to hold the header boards
   *    - finally I found, I just will copying the pole_barn_structure, just adding more gaps
   *      - since I need to join all the studs to get a beam
   * 
   */
  keep_east_side_higher()
  pole_barn_sturcture()
   /*
    - follow the design here, if the pole is 8cmx8cm, and I buy 3x8cm studs, than I am free to attach the stud walls anywhere on the pole and header beased - structure
    - six posts
      - 2.4m is too big a span for my 8cmx8cm posts
    since I have the shear walls, so I don't need super thick columns
   */
  set_posts()
  /**
   * you need to build a structure if you are on your own https://youtu.be/vnLEh8QnRO4?t=126
   * 
   */
  headers()
  /**
   * note here I don't put plate on top of headers
   * - the header planks 3.4cm deep surface will be used as plate to support rafters
   * - I once thought this might not provide enought holder surface for the rafters bird mouth
   *   - but with a little test I am conviced, even the plate is 1cm deep, rafters won't fail here
   *   - the weak point would  still be the middle of the rafters
   */
}

const foundation = () => { 
   /**
    * concrete blocks
    * wood flanges very pricy, I will pre burry steel board in
    */
}

const sizes = () => { 
  /**
   * 290x290cm
   * my scooter 190
   * - location:
   *   - 100cm away from the gate wall, cause door is 90cm wide
   * - size of the carport:
   *   - 180cm wide
   *   - 240cm deep
   *   - height: 170cm(low wall), 210cm(high wall, per PITCH)
   * 
   *  */ 
}

const keep_east_side_higher = () => { 
  /**
   * sth like https://timberframehq.com/shop/12x16-shed-roof-plan/
   * - make east side higher, has several benifits than south higher
   *  - less sun shine inviting
   *  - rafter lengh from 240+, to 180+, much stronger roof with easier work
   *  - the north neighbor will see a smaller profile of the shed
   *  */ 
}


const roof = () => { 
  /**
   * copy everything from shed:google roof()
   * 
   */
}

const charging_station = () => { 
  insulate() // for winter
  heat() // keep it above 5degree I guess, for the batteries 
  // - with a sheetmetal roof https://youtu.be/NjbE05dmxvg?t=559
}

export default main