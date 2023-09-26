const time_spent = {
  side_walk: { hr: 5, date: 20221116 }
}

export const yard_building_color_theme = {
  // I will go the black+wood theme for most the buildings
  // https://www.youtube.com/watch?v=b4W-YeAUmnM&t=654s
  // this is a natural color theme
  burned: "not black, burned color", // https://youtu.be/J4quKHOxucY?t=113
  // "black magic" https://youtu.be/b4W-YeAUmnM?t=1214
  snow: "white is OK, since winter has snow",
  wood: "natural wood color",
}

const guidelines = {
  clear_lines: "keep most things to its natural color, use transparent finish is OK, but going too natural meaning everything mixed together, so have strong contrast of two material color, or if the plywood and door are both shitty similar wood color, just paint the door white, the yard need clear lines",
  wood_in_center: "wood color only in the frame of pure colors",
  no_slope: "for concrete work or anything, use stairs to get different levels",
  nothing_but_boxes: "go "
}

const drainage = () => { 
  /**
   * https://www.thisoldhouse.com/lawns/reviews/yard-grading
   * "The best case scenario is a lawn that gently slopes away from your home’s foundation." 
   * https://happypeter.github.io/githome/imgs/20221029/
   * */ 
  water_flow()
  
  /**
   * - the workshop base and the space in the south of the workshop will be high
   *   - then I can use up the soil now stand in the way
   * - the east and west of the workshop will be low as two_rainage_lines
   * - for all the workshop base and space around it
   *   - I may or may not do concrete slab on top of it
   *   - now I just want to design the grade
   *     - the workshop base is as high as the footing allow
   *       - add rocks on top of the soil
   *     - the space in the south will be as high as the current two path slabs allow
   *       - that include soil+sand+rocks layer
   *     - the two_drainage_lines will be left lower
   *       - I will put rocks on them, but make it possible to  build concrete slabs on top of it one day
   */
  grade()
}

const well_pit = () => { 
  /* I want to build a patio to cover the pit 
   part of the pit will be covered by unmovable slab
   - make the lid on high end of the patio pitch, so that not much water will flow into the pit through the edge gaps
     - and make the edge of the opening a bit high
     - I saw a  electric checkpoint was just less than 1cm higher than the ground, with a metal lid 
   leaving a small enough pid lid, that I can lift up when needed
   build the lid with concrete, install a handle to life up
   - make the bottom of pit covered with gravels, so that rain water can sink in
     - if underground water come out? I need a build a water proof concrete pit for the pressure tank 

  */
}
const out_gate_plumbing = () => { 
   // check  https://happypeter.github.io/githome/imgs/20220928/
}