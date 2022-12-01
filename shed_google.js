/**
 * I will call this shed:google
 */

import { yard_building_color_theme } from "yard"
import { forms } from "./concrete"

/**
 * 25mm for each meter https://youtu.be/8rTpFzTUdFg?t=1044
 */
const ROOF_PITCH = "1:3" // https://plasticinehouse.com/shed-roof-pitch/

import { treated, hardware, water_proof, fasteners } from "./wood_shopping"

const WORK_HORSE = treated["3.8x8.5"]

const material_list = [
  hardware.latch,
  hardware.hinge,
  water_proof.PE
]


const shed = () => { 
  // small, no windows, water tight to storage my cement
  location()
  sizes(ROOF_PITCH)
  design() 
  foundation()
  walls()
  roof() 
  color_theme(yard_building_color_theme)
  shelves()
  ventilation()
  windows()
  extend() 
  total_cost(material_list)
}

const plumb = () => { 

  laser_level() 
  /**
   * or plumbbob
   * as long as you have more than 2degree error, you will have trouble installing the door
   * In my case, the frame was done perfectly, but I did not pay attention when I install the back OSBs
   *  */ 
}

const color_theme = () => { 
  // I will use whatever I have to finish the wood
  // oloy/wax oild
  // I love the natural color of everything: plywood, frame strips, door
  // maybe I will paint the door white, to make it popup, and give the whole design some cleat lines,
  // going too natural is never good looking 
}


const design = () => { 
  // fllow this https://youtu.be/b4W-YeAUmnM?t=8
  // roof will be balck, fascia too
  // walls will be wood color + silverGrayMixBlack(1:4)
  // doors will be silverGray, door fascias too
  // windows white
}



const roof = () =>{
  use_wood(treated["3x7"]) // since it's thicker, thus easier to sit on top of the wall
  double_top_plate() /* 
  https://youtu.be/gKKJkQS4l8c?t=662 join butt wall and through wall https://youtu.be/PKlSDZ0XBI4?t=135
  - you don't need double plates for side walls, just front and back
    - because there is no loads on the sides
    - https://youtu.be/BLk_CAMmQPc?t=7043
  */
  sizes()
  /*
  - back overhang 20cm, just enough to direct the water out of the yard walls
    - you can attach overhang later https://youtu.be/8rTpFzTUdFg?t=1069
  - front/right, 40cm, to flash the door(the door opening is too close to the right side, which was a minor mistake)
  - left 40cm, I may extend the shed on the left side soon, having a over hang to flash to lower roof https://youtu.be/ZjdkPZIE0D4?t=208

  */
  grade() // keep snow in mind, not just rain.
  cut_angles_rafter() // https://youtu.be/BLk_CAMmQPc?t=5357
  assemble() /*
   since this is small, I will asmeble the whole roof frame(maybe even sheathing) than hand lift it to install
   - If the shed is big, I will go this process https://youtu.be/qy1nK8cTEFc?t=953
   */
  bird_mouth() /*
   - assmble all the rafters, dry fit on the top of walls, mark bird_mouse position, desemble, then cut
     - this is possible, only because the roof is tiny
   for my shed, the roof is so thin, so I don't need this is necessary
   - this was a desaster, so next time I will be spending more time on the first template https://youtu.be/lqH-RhQdWEI?t=116
   - when you hava a slight pitch, you don't need bird mouth and you don't do braket or hurricane ties, just toe nailing https://youtu.be/8rTpFzTUdFg?t=1114
   - brid mouth and side overhangs https://www.youtube.com/watch?v=Y_RChmd6YHA
  */
  fasten_to_walls() 
  /**
  - I used small angle brackets, since I can not find rafter holder, make it strong for winter wind
  - toe-nailing the rafters to the plates is also strong and common
   */ 

  finish(water_proof.PE_film)
  /*
  Update: give up on the sheet_metal_finish, go HomeRenovation Way, bought PE_film for the job
  flash() // https://youtu.be/DGmLFvZ7Jg0?t=27 vs https://www.youtube.com/watch?v=UvLpM_MZB8M
  - step1: have a flash under sheet metal https://youtu.be/vvDurqjtcYY?t=1050
  - step2: trim the side https://youtu.be/vvDurqjtcYY?t=1551
  - step3: trim with another flash above sheet metal 

  */
  flashing() // do I really really need this ?
 /*
 = https://www.youtube.com/watch?v=t0wwu-jlY2M
 - I think I can achieve the same as here by just PE film
 - but after that of course we want beautiful fascia, than I can install a polyurithaned wood strip 
   - to cover the edge of film
 - only the front fascia needs flashing, because of the angle, water will go alone the roof into the room, if I don't have flashing
   - for the rest three sizes, just use 5cm wide 3cm thick plywood as the trim board
     - paint it black, as the PE film
   - use tall trim board for the front, the thin board can serve as flashing
 */

 shingles() 
 /**
  * shingles are easier than sheet metal
  * - seal top edge https://youtu.be/sxrhUEOY-u0?t=506
  * - asphalt shingles last much longer than sheet metals
  * 
  */

  
  /**
   * you don't need pin in the battens https://youtu.be/6wHmefqyB1k?t=1522
   */
  softit()
}

const shelves = () => { 
  // https://youtu.be/jDnxNPAIWTk?t=329 
  // MAYBE I need a nailer, https://youtu.be/PKlSDZ0XBI4?t=387
}

/*
- I will try to use similar process(framing/sheathing/wrapping/shingling) for walls and roof, after all they are all but faces of a cuboid  exposed to weather

- why I don't use things like sheetMetal/waterTightSheet/复合板 as the faces? they don't have any structure stength
  - even I am building a shed, I still want to hang things on the wall
- I will use thin plywood as exterior wall/roof shingles https://youtu.be/b4W-YeAUmnM?t=1158
 
*/

const walls = () => { 
  wall_frame(treated["3x9"], fasteners.screw45) /*
  - miter saw, not skilsaw, thin frame lumber is light enough to handle, at same time they needs more presicion
  - when installing the studs, have the size of your sheathing in mind.
  - use nailguns to fasten the studs first, then goto screws  https://youtu.be/nXjUerQh444?t=263
  - use noggings, https://youtu.be/BzSeGJF6RhM?t=515 
  - mark on the plates at the same time for stud locations https://youtu.be/nXjUerQh444?t=420
  - crown all the lumbers to the same side https://youtu.be/nXjUerQh444?t=431
  */
 
  /**
   * first decide a distance between two studs, than mark the plate and OSB before you nail them https://youtu.be/8rTpFzTUdFg?t=320
   */
 nailing()
  if(plumb()) {
    /**
     * - https://www.youtube.com/watch?v=dlJKyQ7q9Tk
     *   - ends must hit studs
     *   - butt joint at the corners
     *   - windows: hold in place, dont nail, mark and cut
     *   - stagger seams
     * - use chalk line to mark nail positions
     */
    sheath() // https://youtu.be/2el0GYedDHs?t=361
  }
  /*
  - drawer the slope line and cut https://youtu.be/qy1nK8cTEFc?t=1153
  - space between the pannels https://youtu.be/qy1nK8cTEFc?t=1203
    - 1/8-1/4 inch https://youtu.be/SAvBd5ss1xk?t=50  https://youtu.be/Y3KRiygprRs?t=79
  - avoid horizontal joint 
    - water will go into the gaps
  - leave OSB for the attic triangle area https://youtu.be/BLk_CAMmQPc?t=3835
  - install_osb_before_assemble
  - OSB cover the foundation too https://youtu.be/5sN2KxpwEVI?t=55
    - and use silion here https://youtu.be/41iQI-VXW-A?t=115
      - if your OSB sheathing is at the same level of foundation, you need a lot of silicon to seal the gap between to wall and foundation, and the gap between the OSB and wall frame
    - https://youtu.be/BLk_CAMmQPc?t=3523
    - https://youtu.be/Z9CZQLVAu1I?t=299
  - later, use wall wrap and tape to cover the bottom edge of wall OSBs, and then have finishing board/rainScreen above the wall wrap.
    - use flashing tape and nails to fasten it to OSBs
    - use 大棚膜 is enough, its cheap
      - or anything, e.g. bags https://youtu.be/BzSeGJF6RhM?t=850
  - will OSB sheathing cover double plates?
    - NO, leave room for the bird mouth https://youtu.be/ULgbsxyZVCQ?t=584
    - but you dont want your wall OSB go too low either, since if you do want to add a bottom sheathing(aka. softit) for the roof, you want the wall goes into the roof
      - like this https://youtu.be/kTPrEjCcX2k?t=1026
        - another way to do softit https://youtu.be/qy1nK8cTEFc?t=2952
  */
  water_proof_OSB() // ployurethane the bottom https://youtu.be/CPZ8VBopVFo?t=589 before wall wrap

  /**
   * it is not intended to be water proof, but water diversion
   * a little damp is allowed
   * https://youtu.be/SS1x9ZaouQs?t=655
   * it is not vapor barrier either https://youtu.be/SS1x9ZaouQs?t=783
   * preventing rain or other forms of moisture from getting into the wall assembly while allowing water vapor to pass to the exterior. 
   * prevent water in, let vapor out
   * don't make it too air tight
   * - steps
   *   - cut PE film piece that is 1m high
   *   - use stapler gun and water-proof tape, start from the bottom
   *   - get another piece film, go 50cm higher
   *   - repeat till you reach the top, then you get a overlaied water diversion layer
   */
  wall_wrap() 


  short_walls() /* 
  side wall go the full 1m depth
  front and backwall give roomm to side walls at the ends
  3 side 1.6m short walls */
  front_wall() 
  /*
    - have your door place in mind https://youtu.be/Z9CZQLVAu1I?t=443
    - have jack studs https://youtu.be/BLk_CAMmQPc?t=10205
  */
  install_walls()
  /*
  - smaller walls first is a good idea https://youtu.be/Z9CZQLVAu1I?t=256
  - clamp together https://youtu.be/Z9CZQLVAu1I?t=266
  - OSB and wrap cover the foundation a bit https://youtu.be/8rTpFzTUdFg?t=546
  - OSB extends to the joining wall https://youtu.be/8rTpFzTUdFg?t=759
  */

    
   siding() 
  /*
  - no horizontal seams https://youtu.be/UZ_S618-0Z4?t=52
  - wall wrap
    - cut film into .5m wide long pieces, tape them on the wall
    - start from the bottom
    - the piece above overlap the lower one by 30 percent
  - thin plywood
      - https://youtu.be/i-Hl10ogJTQ?t=1964 Pine Chanel siding
        - do have gaps between each strip of the shiplap siding, otherwise the sidings may expand and end out will a bulging wall
  - corner shiplap https://youtu.be/SodypzNcpoY?t=522
  - gap sealing battens, table saw to cut treated wood into strips
    - this is call "board and batten siding" https://www.jameshardie.com/blog/guide-to-board-and-batten-siding
      - batten screws should not constrain the boards movement https://youtu.be/jtYVJvffQYY?t=603
    - don't use fasling ceiling strips, not smooth enough
  - shiplap
    - large gaps needed https://youtu.be/lfqq4R4jp6M?t=231
    - mind overlays for the flow of water
    - I embedded a 4mm plywood to the bottom of all my shilap pannels
    - I also covered the top of the set of shiplaps
    
    */
   wall_flash()
   /**
    * bottom of the wall, is same as the bottom of front fascia, both needs flashing
    * so just make the 3mm plywood a bit longer than the wall sheathing OSB
    */
}

const ventilation = () => { 
  /*
  https://youtu.be/aREO6-XvOZA?t=124
  - for better smell https://youtu.be/qy1nK8cTEFc?t=3363
   */ 
}

const door = () => { 
  // sand to get the real wood color and then ployurethane the door https://youtu.be/BLk_CAMmQPc?t=10558 
  // I will have a threshold to make the door more water tight
  // to make the door pop up, I will stain it to dark metal-ish color
  // the hardware use black
  const thickness = 40 // mm, the door 
  frame_180() 
  /*
  - make sure your door, flush with its fascias, which in turn rise from the wall 
    - this way, your door can open 180degree
      - e.g https://youtu.be/o1PayLsEg3A?t=2418 https://youtu.be/2BsSQNWBeok?t=381
    - some room doors can only open 120degree or so, for indoor corner usage, this is OK
      - but if you have this design outdoors, wind could blow your door, can pry all hinges out
  - opening should leave 4mm+ gap on the four side(bottom gap 10+mm for threshhold)
  - door width 74.2, lumber for jack stud, thickness 23mm, leave 4mm on each side
    - so the opening width is 742+23x2+4x2=
    - NOTE: here maybe it's better idea to have a door installed on one side first, and another side when the door is installed, but make sure the other side studs not getting too close, otherwise you may have trouble screwing the walls together
  - the frame or fascia stud is actually attached to the jack and kind studs later
    - by that I mean, the bottom of the frame is outside the main house cubiod
      - e.g. https://youtu.be/o1PayLsEg3A?t=2429
    - this is expecially important for me, since my frame was lean to one side, and the opening is not a square anymore

  */
  water_proof() 
  /* 
    -  because of the vertical gaps, even you sweep the bottom, water still go behind the door
      - it will stay there, since the floor has no grade
      - so maybe I need "拼多多 硅胶挡水条 门槛条", and have some vinyl layer("PVC 收边条 角条") between the threshold and OSB floor
    - flash?
      - I dont want to flash like this https://youtu.be/qy1nK8cTEFc?t=2207
      - not that hard to bent sheet metal https://youtu.be/Q8v58AM2reY?t=36
      - I will do silicon on the top frame gap
  */
  install(hardware.hinge, hardware.bolt) 
  /**
   * Pitfall: wood is soft, so when install the hinge, life the door a bit higher than you want it to be finally
   * even I installed the full Mortise hinge, but I did not do mortise, everything seemed to be really forgiving
   * https://www.bilibili.com/video/BV1Hu411975Z
   * https://youtu.be/BLk_CAMmQPc?t=10866
   * Middle of cilindar 
   * a Ramsey latch like this https://youtu.be/2BsSQNWBeok?t=350
   * - hinge outside
   *   - for a shed, maybe this is the best way to install a hinge https://youtu.be/VGOiUiP6u-o?t=231
   *   - and the installation should be as easy as this https://youtu.be/n-4-X0eaNiI?t=574
   * - use 50mm small head screw
   *   - treated wood is very soft
   * */
  design_concern()
  /**
   * - most door fascia is in the color of the house, not the door
   *   - so I will paint my fasica's black
   *   - the other part of the front wall the same
   *   - since the door is already in differnt color and full of details
   *   - so I just won't other part as simple as possible
   */

}


const windows = () => {
  // use tape https://youtu.be/wPmWk9PpZDY?t=762
  // use 亚克力玻璃 I bought on 拼多多
  window_frame() //
  flashing() // https://youtu.be/cVckyMUJHQI?t=50
  // the idea is simple, you tape the top of the flashing https://youtu.be/mLGxgTAAKQg?t=2318
  // and then do the wall shingles on top the tape
  /**
 * cut pc glass https://youtu.be/b4W-YeAUmnM?t=984
 */
}



const sizes = () => { 
/* 
 - given my 1:3 ROOF_PITCH, the front frame should be 30cm taller than the back
    - front height 1.9m, back height 1.6m, deck floor to ceiling
 - 1.5(wide)x1(deep)m, put it on the south side of the gate
*/ 
}


const location = () => { 
  // south side of the wall
  // make sure the gap betwween yard and shed wall is water free and airy to make it mostly dry 
}

const foundation = () => { 
  concrete_block(forms["30x40"]) // four stepstone to form a leveled base on top of a sloped concrete ground
  // of course, I need to build 4 forms and set the one the same level first
  // https://youtu.be/5OOk2VxTw9I?t=198
  // concrete cuboid should flush with floor edge, so that no rain waster will stay on the concrete https://youtu.be/Z00berTW5hc?t=251
  install_OSB(shopping.screw30) 
  /*
  - use nailer
  - cut extra OSB https://youtu.be/OmNr7vBD61c?t=557
    - try to make the line clear and precise https://youtu.be/BLk_CAMmQPc?t=3131
      - since there is no fence you can rely on
    - ajust your blade depth https://youtu.be/BLk_CAMmQPc?t=3154
     - https://youtu.be/BLk_CAMmQPc?t=3131
  - use small head screws, large head will stand in the way
  */
 paint_OSB() /*
  - NO.1 protect the edge and bottom https://youtu.be/Z00berTW5hc?t=296
  - NO.2 allow enough air flow https://www.youtube.com/watch?v=aREO6-XvOZA
  - to keep moisture safe https://youtu.be/Z9CZQLVAu1I?t=175
  */
}

const extend = () => { 
  // do it like this https://youtu.be/ZjdkPZIE0D4?t=208
  // extend a roof with no walls https://youtu.be/b4W-YeAUmnM?t=24 
  // https://youtu.be/6_MOv78V5Qg?t=41

}




export default shed

