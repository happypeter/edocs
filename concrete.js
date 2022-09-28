export const forms = {
  "30x40": "use polyurethaned 20x30mm wood strips, 40cm long two, 26cm long two, screw together, the exterior size is 30x40cm"
}


/*
- Pitfalls
  - don't try to put yourself in a place that you have to apply more than 2cm thickness, just not possible without multi days dry and apply again cycle.
  - before you try to make surface smooth, make sure you get the surfaces as flat as possible

- concrete flower pot is easy https://www.ixigua.com/7029232302513193505
  - or mold with sand https://www.ixigua.com/6866945306760577539?
  - https://www.ixigua.com/7036357030226952741?

- wall https://www.ixigua.com/6910163216739860996
  - https://www.ixigua.com/6850749091119366660
  - apply first, then use ruler to remove protruding cement to get flat surface
  
## Concrete

- repair floor https://www.ixigua.com/6999130854740263455
- corners https://www.ixigua.com/6566939658561782286
  - how to use 靠尺, 
  - https://www.ixigua.com/6549050234725466638
*/

const tools = [
  'float', // with long handle, 270RMB, 拼多多， 推拉大抹子
  'cart', // 460RMB 拼多多，水泥斗车
  'trowel', // 9RMB 拼多多
  'edger', // 20RMB 拼多多，水泥修边刀
]

/*
- how to get smooth surface?
  - USE RULER TO FLAT WALLS https://www.ixigua.com/6602790643943080451
  - wait for 3hr, when the concrete hardens, add just dry cement on top, smooth out
    - https://www.ixigua.com/6682729471956484621
  - wait for three hours, add more cement on top, smooth out
- 收光 smooth out road surface https://www.ixigua.com/6923831297160774151
  - wait for the concrete is solid enough then do the finishing
*/
let finish = () => {
    push() // with my finish_trowel to make the edges solid
    flat_with_screed()  // https://youtu.be/lUTkrI8FFuM?t=241
    // go sawing motion https://youtu.be/aWtn-GyFuiU?t=288
    bull_float() 
    /*
    - bull float works beautifully, the prerequiste is to use finish trowel to take care of some flawed spots
      - It's wise to use finishing trowel more before bull float
      - the final finishing with finish trowel is esay and even optional if I do enough work before bull float
    -  https://youtu.be/lUTkrI8FFuM?t=311
    - for small projects, use long trowel to giva a rough go
    */
    wait() // 20min, if you want to cut jointer, do it very early
           // finger sink in 1/2 inch
          // timing https://www.youtube.com/watch?v=s1u30qLejdA
           // do joiner early than edging https://youtu.be/6SFo4zYwvT4?t=272
           
    cut_joiner() 
    /* joiner tool is like 300RMB on Pinduoduo
    so I will just use trowel and edger for the job, of course, I will do it more than once
    try to make the line very straight, otherwise this gets ugly quickly 

       3inch/8cm deep, every 5feet/152cm https://youtu.be/uX4hi-R7Dyc?t=273
      https://youtu.be/6SFo4zYwvT4?t=290
      the tool on Pingduoduo is 300RMB thing, so maybe I can do it with masonry saw, when dry
    */
    wait() 
    /* 
    - when you finger sink in 1/4 inch, it is the right time for edger https://youtu.be/6SFo4zYwvT4?t=59
    - 30min on a sunny day, 1hr when cloudy
    */
    cut_joiner_2nd_time() 
    edger() // https://youtu.be/lUTkrI8FFuM?t=435
    wait() /*
     magging comes later than edging https://youtu.be/6SFo4zYwvT4?t=472
     - 1hr on a sunny day, 2hr when cloudy
       - timing: "bearly press the surface" https://youtu.be/9qGxbKBVxU0?t=164
    */
    finish_trowel() // hand float， tip the mag up https://youtu.be/365f0QV-aOs?t=346
              // have the trowel's one side tilted https://youtu.be/3vz7s0COJV0?t=1526
              // https://youtu.be/s1u30qLejdA?t=315 that is still early,
              // so it's generally 3hr you need to wait between pouring and final magging
              // when your finiger sink in 1/4 inch https://youtu.be/s1u30qLejdA?t=416
              // now is also the time you can walk on the slab https://youtu.be/s1u30qLejdA?t=494


    /**
     * https://youtu.be/lUTkrI8FFuM?t=460
     * - but any brom with soft enough bristle will do
     */
    broom_finish('horse_hair_broom')  
  }

let set_form = () => {
  if(NO_REBAR) {
    dont_oversize() // or cut joiners every 1.5 meters
    return
  }

  square_the_form() // 3-4-5 rule, Pythagorean Theorem https://youtu.be/3vz7s0COJV0?t=659
  // and make sure no pegs/stakes or any surface is higher than the form, so and it will be easy to screed https://youtu.be/3vz7s0COJV0?t=1310

  /**
   * it's good idea to build the form first with good lumber, before you put it on the site and get right slope
   * - when I used random wood, some twisted, to keep wood square, and then do the slope at the same time,
   * there was a lot of back-and-forth work, it could be very time consuming
   */
  sloping() // set a proper grade, I use bricks for now https://youtu.be/7j6W2uhfDcQ?t=585
}
let set_base = () => {
    dig_foundation() // get a flat soil surface, the first layer

    // don't add dirt right before your pouring, cause they shrink/compact down quickly and end up with a hollow base
    flat_the_base() // you really want the base to be as flat as possible https://youtu.be/3vz7s0COJV0?t=392
                    // so that your slab will be in good shape and strong 

}

let slab = () => {
  set_base()
  set_form() // use lumber or boards, as shown https://happypeter.github.io/githome/imgs/20220718/ https://happypeter.github.io/githome/imgs/20220722 , mind the slope
              // for home pathway, 4inch thickness is enough https://youtu.be/I1iO08e4Rgw?t=146
  mix_concrete() // 3 gravels 1 sand 0.5 cement
  // use the cart https://youtu.be/h7tIjBEPiPU?t=347
  // make it fluid so that the gravels will sink  https://youtu.be/lUTkrI8FFuM?t=224
  // and it will bleed water https://youtu.be/s1u30qLejdA?t=136
  finish() 
  spary() // when it gets harden https://youtu.be/3vz7s0COJV0?t=1597
}


wall_surface() {
  // Bibi 老三的梦想 墙面抹灰 https://www.bilibili.com/video/BV1jD4y1d7xG
  wet_the_wall() // spill water
  bottom_up() // use trowel to hold concrete, apply it bottom up
  left_to_right() // 
}

const paver = () => { 
  /**
   * with forms, you get beautiful results
   * paver and patio https://www.youtube.com/watch?v=paoY_Xu-KSI */ 
}

const wall_form = () => { 
  /**
   * this is easier than a brick wall
   * https://www.youtube.com/shorts/7JiYr9CjZO0 */ 

}

export default slab