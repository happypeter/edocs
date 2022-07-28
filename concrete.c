


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


/*
- how to get smooth surface?
  - USE RULER TO FLAT WALLS https://www.ixigua.com/6602790643943080451
  - wait for 3hr, when the concrete hardens, add just dry cement on top, smooth out
    - https://www.ixigua.com/6682729471956484621
  - wait for three hours, add more cement on top, smooth out
- 收光 smooth out road surface https://www.ixigua.com/6923831297160774151
  - wait for the concrete is solid enough then do the finishing
*/
  int finish_pathway() {
    flat_with_screed()  // https://youtu.be/lUTkrI8FFuM?t=241
    // go sawing motion https://youtu.be/aWtn-GyFuiU?t=288
    wait() // timing https://www.youtube.com/watch?v=s1u30qLejdA
           // do joiner early than edging https://youtu.be/6SFo4zYwvT4?t=272
           // finger sink in 1/2 inch
    cut_joiner() // 3inch/8cm deep, every 5feet/152cm https://youtu.be/uX4hi-R7Dyc?t=273
                 // https://youtu.be/6SFo4zYwvT4?t=290
    wait() // when you finger sink in 1/4 inch, it is the right time for edger https://youtu.be/6SFo4zYwvT4?t=59
    edger() // https://youtu.be/lUTkrI8FFuM?t=435
    wait() // magging comes later than edging https://youtu.be/6SFo4zYwvT4?t=472
    magging() // tip the mag up https://youtu.be/365f0QV-aOs?t=346
              // use a mag float https://youtu.be/6SFo4zYwvT4?t=463
              // you don't even need a finishing trowel for pathway
              // 21.11 Celsius sunny day, it took from 8:30am to 10:20am to start the magging
              // https://youtu.be/s1u30qLejdA?t=315 that is still early,
              // so it's generally 3hr you need to wait between pouring and final magging
              // when your finiger sink in 1/4 inch https://youtu.be/s1u30qLejdA?t=416
              // now is also the time you can walk on the slab https://youtu.be/s1u30qLejdA?t=494
    broom_finish() // to make less slippery, https://youtu.be/lUTkrI8FFuM?t=460
  }

  int concrete_pathway() {
    dig_foundation() // get a flat soil surface, the first layer
    if(TOO_MUST_WASTE) {
      lay_wastes() // say rocks, broken bricks if you have some like in my case, second layer
      fill_gaps_with_gravel() 
      // the goal here is to have enough depth for the slab itself, never rely too much on the foundation for the strength
    }
    set_from() // use lumber or boards, as shown https://happypeter.github.io/githome/imgs/20220718/ https://happypeter.github.io/githome/imgs/20220722 , mind the slope
               // for home pathway, 4inch thickness is enough https://youtu.be/I1iO08e4Rgw?t=146
    mix_concrete() // 3 gravels 1 sand 0.5 cement
    // use the cart https://youtu.be/h7tIjBEPiPU?t=347
    // make it fluid so that the gravels will sink  https://youtu.be/lUTkrI8FFuM?t=224
    // and it will bleed water https://youtu.be/s1u30qLejdA?t=136
    finish_pathway() 
  }


