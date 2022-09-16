import { yard_building_color_theme } from "yard"
import { forms } from "./concrete"
const ROOF_PITCH = "1:3" // https://plasticinehouse.com/shed-roof-pitch/
import { treated, hardware, water_proof, fasteners } from "./wood_shopping"

const material_list = [
  hardware.latch,
  hardware.hinge,
  water_proof.PE
]}
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
  extend() 
  total_cost(material_list)
}

const color_theme = () => { 
  // I will use whatever I have to finish the wood
  // oloy/wax oild
  // I love the natural color of everything: plywood, frame strips, door
  // maybe I will paint the door white, to make it popup, and give the whole design some cleat lines,
  // going too natural is never good looking 
}

const window = () => { 
  /*
  https://youtu.be/b4W-YeAUmnM?t=1009
   */ 
}

const design = () => { 
  // fllow this https://youtu.be/b4W-YeAUmnM?t=8
  // I will use shiplap boards, since they are stong, I may need to install nails on them 
  // roof will be balck
  // door will be light gray，浅灰
  // walls expect the shiplap area will be 刚灰
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
  - back over hange 20cm, just enough to direct the water out of the yard walls
  - front/right, 40cm, to flash the door(the door opening is too close to the right side, which was a minor mistake)
  - left 40cm, I may extend the shed on the left side soon, having a over hang to flash to lower roof https://youtu.be/ZjdkPZIE0D4?t=208

  */
  grade() // keep snow in mind, not just rain.
  cut_angles_rafter() // https://youtu.be/BLk_CAMmQPc?t=5357
  assemble() /*
   since this is small, I will asmeble the whole roof frame(maybe even sheathing) than hand lift it to install
   - If the shed is big, I will go this process https://youtu.be/qy1nK8cTEFc?t=953
   */
  bird_mouse() /*
   - assmble all the rafters, dry fit on the top of walls, mark bird_mouse position, desemble, then cut
     - this is possible, only because the roof is tiny
   for my shed, the roof is so thin, so I don't need this is necessary
   - this was a desaster, so next time I will be spending more time on the first template https://youtu.be/lqH-RhQdWEI?t=116
  */
  fasten_to_walls() // use small angle brackets, since I can not find rafter holder, make it strong for winter wind

  finish(water_proof.PE_film)
  /*
  - best part is no part, so I will use two layers of the strong film as my roof finish
   */
  /*
  Update: give up on the sheet_metal_finish, go HomeRenovation Way, bought PE_film for the job
  flash() // https://youtu.be/DGmLFvZ7Jg0?t=27 vs https://www.youtube.com/watch?v=UvLpM_MZB8M
  - step1: have a flash under sheet metal https://youtu.be/vvDurqjtcYY?t=1050
  - step2: trim the side https://youtu.be/vvDurqjtcYY?t=1551
  - step3: trim with another flash above sheet metal 

  cut_sheet_metal() // cut sheet metal with grinder or just a knife https://youtu.be/b3JgPX5fVUo?t=3621
  bend_sheet_metal() // use roller https://youtu.be/KdMtecvnPRI?t=284 or just a knife https://youtu.be/b3JgPX5fVUo?t=3621
  */
 flashing() // do I really really need this ?
 /*
 - I think I can achieve the same as here by just PE film
 - but after that of course we want beautiful fascia, than I can install a polyurithaned wood strip 
   - to cover the edge of film
 - only the front fascia needs flashing, because of the angle, water will go alone the roof into the room, if I don't have flashing
   - for the rest three sizes, just use 5cm wide 3cm thick plywood as the trim board
     - paint it black, as the PE film
   - use tall trim board for the front, the thin board can serve as flashing
 */
  
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
  - use noggings, https://youtu.be/BzSeGJF6RhM?t=515 
  */
  sheath() // https://youtu.be/2el0GYedDHs?t=361
  /*
  - drawer the slope line and cut https://youtu.be/qy1nK8cTEFc?t=1153
  - space between the pannels https://youtu.be/qy1nK8cTEFc?t=1203
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
  */

    
   wall_finish() 
  /*
  - wall wrap
    - cut film into .5m wide long pieces, tape them on the wall
    - start from the bottom
    - the piece above overlap the lower one by 30 percent
  - thin plywood
      - https://youtu.be/i-Hl10ogJTQ?t=1964 Pine Chanel siding
        - do have gaps between each strip of the shiplap siding, otherwise the sidings may expand and end out will a bulging wall
  - corner shiplap https://youtu.be/SodypzNcpoY?t=522
    */
   wall_flush()
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
  frame() 
  /* opening should leave 4mm+ gap on the four side(bottom gap 10+mm for threshhold)
  - door width 74.2, lumber for jack stud, thickness 23mm, leave 4mm on each side
    - so the opening width is 742+23x2+4x2=
    - NOTE: here maybe it's better idea to have a door installed on one side, but make sure the other side studs not getting too close, otherwise you may have trouble screwing the walls together
  */
  water_proof() 
  /* 
    -  because of the vertical gaps, even you sweep the bottom, water still go behind the door
      - it will stay there, since the floor has no grade
      - so maybe I need "拼多多 硅胶挡水条 门槛条", and have some vinyl layer("PVC 收边条 角条") between the threshold and OSB floor
    - flash?
      - I dont want to flash like this https://youtu.be/qy1nK8cTEFc?t=2207
      - I will do silicon on the top frame gap
  */
  install(hardware.hinge, hardware.latch) /* https://www.bilibili.com/video/BV1Hu411975Z */

}


// const windows = () => {
//   // use tape https://youtu.be/wPmWk9PpZDY?t=762
//   // use 亚克力玻璃 I bought on 拼多多
//   window_frame() //
//   flashing() // https://youtu.be/cVckyMUJHQI?t=50
//   // the idea is simple, you tape the top of the flashing https://youtu.be/mLGxgTAAKQg?t=2318
//   // and then do the wall shingles on top the tape
// }



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

