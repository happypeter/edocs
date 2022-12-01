/*
- wallnut is not really hard
  - https://youtu.be/3Ddtd810KoY?t=70
- oak is much harder
*/

const main = () => { 
  layered_square_support
  /**
   * don't use pocket holes, mind the wood movement https://www.youtube.com/watch?v=HNfqnJH5YEA
   */
  attach_legs()  
}
const shopping = {
  board: "1400x750x27, red_oak, 960RMB, 淘宝, 云峰板业"
}

const red_pine = {
  hardness: 1630
}

const red_oak = {
  hardness: 1290 // not only a more durable surface, give you lots of structual strength too https://youtu.be/2mWLJFlDB_4?t=641
}

const walnut = {
  hardness: 1010
}

const us_cherry = {
  hardness: 950
}

const desktop = {
  thickness: 3
}

const choose_top = () => { if(desktop.thickness > 3 && desktop.has_drawers?) {
    throw "board too thick and no drawers" // this makes the top too high, which means Billie needs to higher the chair, which in turn will make her feet leave ground and squeeze the thighs
    // https://youtu.be/Ree1CWifQTg?t=129
    // armrest going under the top https://youtu.be/8LwCcha_ATY?t=24
  }
}

const leg = () => { 
  paint_white() // given that the top is light color https://youtu.be/IUM-2cvJYHY?t=332 
}

const decide_chair_height = () => {
  // base on your mouse/keyboard, not the height of your legs https://youtu.be/Ree1CWifQTg?t=91
}

const hold_your_palm = () => {
  // https://youtu.be/Ree1CWifQTg?t=169
  // use thin keyboard https://youtu.be/IUM-2cvJYHY?t=264
}

const perfect_top_depth = () => {
    return 750 //mm
  // 80 meaning you will have too much space behind the monitor, waste of space
}


const top_thickness = () => { 
   //27mm is the best thickness, it is the default size from the 淘宝 merchant
   // if the board is too thick, you will need to set your armrest too low, or your armrest can not go under the table
}

const desk_height = () => {
  // Ikea Alex is 693mm(without rubber feet), whick is about the good height for legs
  // so the desk height would be 690(leg)+2(rubber feet)+27(top) = 719mm
  // https://youtu.be/zO6I9v5XR6E?t=99 https://www.omnicalculator.com/everyday-life/desk-height   
  // if the top is too high, then Billie has to make the chair table, and then her feet leave ground
  // this calculator gave me 62cm https://youtu.be/zO6I9v5XR6E?t=84
  triple_90_rule() // https://youtu.be/_Yv_Dp5P-ro?t=253
}
// no standing https://youtu.be/Ree1CWifQTg?t=189


const monitor_position = () => { 
  // https://youtu.be/IUM-2cvJYHY?t=235 
  see_top_rule() // eyes on the same level of the top of the screen https://youtu.be/_Yv_Dp5P-ro?t=525
  finger_tip_rule() // https://youtu.be/riD8Xt8r1MQ?t=90
  // monitor_height 122cm https://www.omnicalculator.com/everyday-life/desk-height
}


const cabinet = () => { 
  /*
    I will use two cabinets to support the tabletop
  */
 open_cabinet() // two storey inside, covered by one door, this is just the simplest sulotion, I amy go to something fancier later
 paint_white() // to match the light oak topp
 touch_the_wall() // like this https://www.youtube.com/watch?v=LTxQOCYyvXY , otherwise very hard to clean
 right_seat_depth(70)// this also means the cabinet needs to be deep, I will make it 70cm(top is 75cm), 
 setHeight(68) // 68cm, close to Ikea Alex 69cm
 setWidth(36) // follow ALex 
 /*
 - checklist
   - NOTE: when you don't have a tracksaw, you can not do really precise cut, it's better to have a order to cut, the idea is to make sure the cut is based on your earlier sucessful cut of related boards
     - and when you cut with circular saw, try to be general, cause it is easy to remove some mm with table saw, the idea is never rely on the cicular saw cut as final cut
   - check width of all realated boards
     - Step1: top strip vs back vs seperator board should have same WIDTH(346mm)
     - Step2: bottom board should be 34mm(make it 36mm) wider than back and seperator, so the width should be 346+35=382mm
   - check height
    - Step1: backboard vs side boards should have same height
  - check depth
    - Step1: Bottom vs two sides, should have same depth
    - Step2: seperator should be 1.7cm(make it 1.8cm) less deeper than top vs bottom board
    - Step3: top strip can be any depth greater than 70
  - all done
 */

}


/*
HOWTO: find the best chair
  1. esthetic, only black and silver color allowed, white also sucks, chair should give place to the desktop setup
  2. seat pan depth, good leg support, seat height and depth adjustable https://youtu.be/MgRE2PFnfNw?t=54  https://youtu.be/8LwCcha_ATY?t=2
  3. stain-resistant, wipeable, no light color cushion, 
  4. ajustable headrest
  5. back height adjustable, for shoulder support
  6. armrest, preferably 3d adjustable https://youtu.be/BCHr4NDTLO8?t=575 , and don't stand in the way when I stay very close to the desk https://youtu.be/MgRE2PFnfNw?t=124
  7. non-slippery seat, https://youtu.be/BCHr4NDTLO8?t=317
  8. enable sitting reclined https://youtu.be/cdFNKkQ03V8?t=136
  9. lumbar support 
  10. Footrest, yes, even the bed is just in the same room
  11. 6D armrest, for cellphone holding postions, check 西昊 Doro C300

- 西昊 M57
  - Billie's chair
  - pros
    - default seat depth works for me
  - cons
    - lumbar support I wish be stronger, and veritical adjustable
    - more adjustable headrest
    - armrest too far from each other, I wish them inward more adjustable
    - seat depth is not adjustable
    - laying down angle not enough 126degree  https://item.jd.com/100020773190.html
    
- 西昊 Doro C300
  - seat pad ajustable
  - phone mode
    - 6D armrest, support cellphone holding positions https://www.bilibili.com/video/BV19Y411K7A6?
    - the lumbar support follows inclined position
  - headrest more ajustable https://www.bilibili.com/video/BV19Y411K7A6
  - armrest inverd adjustable https://item.jd.com/100039450816.html
  - laying down angle 138degree
  - 48cm lowest seat position? too high for me? M57 is 43.5cm
    - comments shows this chair is for smaller people
    - because the seat pad is 15cm thick, while M57 8cm thick, that means Doro is actully much lower, that is (48-15)-(43.5-8) = -2.5cm at knee position
  - better support for 骶骨
    - is 骶骨 support really important?
      - https://www.bilibili.com/video/BV12g411K7rB/ Miller has design for 骶骨 sacral bone
  - armrest low postion is 65cm, my desk legs are 66cm tall
  - cons
    - lumber support mesh too loose https://www.bilibili.com/video/BV19Y411K7A6?
- 保友金豪
  - people love this https://www.youtube.com/watch?v=j7xS5qaM2eQ
    - https://www.bilibili.com/video/BV1Ma4y1v7m9
*/


const lean_behind = () => { 
  // https://youtu.be/IUM-2cvJYHY?t=176 
  return 110 // degree https://youtu.be/_Yv_Dp5P-ro?t=213
}

const right_seat_depth = () => { 
   smaller_chair() // https://youtu.be/riD8Xt8r1MQ?t=15
}

const hide_wires = () => { 
  have_channel() // as back apron 
}



const layered_square_support = () => { 
  // two layer square
  /*
  - the only measure that really matters is the height
    - cabnet height is 659mm
  - cutList
    - inner vertical x 2
      - 659-17x4 - 1 = 590
    - outer vertical x 2 
      - 659 - 17 x 2 = 625
    - inner horizontal x 2
      - 688-17x2 =654
    - outer horizontal x 2
      - 688 
  */ 

  glue() // use nails to hold the position, and then clmap the glue out of the gaps
  // make sure clean the excessive glue before dry
  // as shown here  https://happypeter.github.io/githome/imgs/20220909/1.jpg
  sand() // use grinder first, then go to sander
  paint() // with white paint
}

export const color_scheme = [
  /**
   * legs/frames black or white
   * top, wood
   */
  'black', 
  'white',
  'wood'
]