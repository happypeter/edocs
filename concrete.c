int flat_with_ruler() {
  add_more_than_enough() // like https://www.ixigua.com/6682729471956484621
  use_plain_to_flat() // use ruler at the beginning is too tiresome
  remove_redundent_with_ruler()
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


/*
- how to get smooth surface?
  - USE RULER TO FLAT WALLS https://www.ixigua.com/6602790643943080451
  - wait for 3hr, when the concrete hardens, add just dry cement on top, smooth out
    - https://www.ixigua.com/6682729471956484621
  - wait for three hours, add more cement on top, smooth out
- 收光 smooth out road surface https://www.ixigua.com/6923831297160774151
  - wait for the concrete is solid enough then do the finishing
*/
  int smooth_finish() {
    flat_with_ruler() 
    magging() // tip the mag up https://youtu.be/365f0QV-aOs?t=346
    wait(hour=3) // concrete finishing is all about the right timing https://youtu.be/YdQBA1owRN8?t=366
    add_cement_powder // be very generous here, https://youtu.be/Q9UrR31RGVI?t=1177
    second_finishing()
  }

  int concrete_pathway() {
    dig_foundation() // get a flat soil surface, the first layer
    set_mold() // use lumber or boards, as shown https://happypeter.github.io/githome/imgs/20220718/ https://happypeter.github.io/githome/imgs/20220722 , mind the slope
    lay_wastes() // say rocks, broken bricks if you have some like in my case, second layer
    fill_gaps_with_gravel() // only if you do the lay_wasters, third layer
    mix_concrete_with_gravels() // 3 gravels 1 sand 0.5 cement
    // use a ppr pipe or long wood rod as the guideline to check if each layer is above or too close to the finish surface
    // as shown here https://happypeter.github.io/githome/imgs/20220722
    apply_gravel_concrete()
    mix_fine_cecrete() // without gravels, 3 sand 1 cement
    app_fine_cement() // fourth layer
    smooth_finish() // fifth layer
  }


