/*
- v2 idea:
  - CeilingJoist, RimJoist as v1
  - do all suspensionBars, make sure the lower ends are all on the same level
  - build bottom layer frame on the ground
    - do precise cut according to the sheathing board size
    - start from one side of the RimJoist rim
      - install the same size bottom frames first
      - the last frames appoching the other side of the Rimjost, use special size to take up the space left
        - just as I did for the boards
  - no need to use laser level, when installing the bottomFrames
  - all the strips of the bottomFrames have the narrow side of the strip facing ground
    - when two bottomFrames joint each other, nail them together
    - since the joints are also where the board will join
    - two strips nailed together will give enough space to nail two rows of screws
      - since two frames are nailed together, so the boards will be on the same surface when they meet

*/

#include <stdio.h>
char CeilingJoist[] // "主龙骨", main load bearers
char BottomJoist[] // "副龙骨", the bottom of the whole wood frame
char RimJoist[]  // "边龙骨", Nailed to the wall, as cleat 
char crossPoint[] // where BottomJoist cross CeilingJoist, suspensionBar here
char suspensionBar[] // "吊筋", or hanger, https://www.researchgate.net/figure/a-Typical-suspended-ceiling-components-13-b-Typical-back-bracing-options-10_fig1_299169069
char primaryBottomJoist[]; // those who need to bear two rows of screws, so the width needs to be 32mm
char subBottomJoist[]; // only for one row of screws
int shop_width = 2654; //mm
int shop_length = 4200; //mm
int strip_width = 32; //mm. the only strips I used to build the frame of my false ceiling
int strip_height = 20; //mm. the only strips I used to build the frame of my false ceiling
int strip_length = 2382; //mm
int insulation_thick = 104; //mm, space for rockwool
int plywood_thick = 17; //mm, sheathing
int plywood_width = 1225; //mm
int plywood_length = 2440; //mm
int gap_between_plywood = 3; //mm, for sealant
int hammer_driver_pin = 6 // PDD: 美式击芯膨胀 6*60 (6mm exterior dia, 6cm length), every 50cm
int wedge_anchor = 8 // use sleeve anchor（PDD: 螺栓） or wedge anchors(PDD: 强力加长车修壁虎，电梯专用螺栓) M8x80


// the whole height of the false ceiling
int whole_thickness() {
  return insulation_thick + strip_width + plywood_thick;
}

/*
   - make sure you hang the level, one the opposite side of where you want to get started
    - otherwise, the bottom joist you installed will block the laser for the next one
*/
int set_laser() {
  return whole_thickness(); //laser target the lowest level of the project
}

/*
  the nails worked well on the brick walls, so I end up adding only a few expansion screws to the side frame parts
*/
int install_rim_joists() {
  printf("the bottom of wall joists touch the laser level")
  nail_T38() // Masonry Nailer T38 nail every 10cm 
  nail_masonry_anchors(hammer_driver_pin) // every 50cm
  return 0;
}

/* 
  use 墨斗(Japanese Ink Line) to mark the path for ceiling joist
  no need to have more than enough ceiling joists, installing anchors is no easy task
  instead make sure they well fastened. Stonger bottom joists will conpensate the strength of frame
  and give the boards enough support to avoid distortion.
*/

int install_ceiling_joists() {
  measure_each_side();
  hammer_one_nail(); //on one side, and tile the Chinese Inkline to it
  mark(); // go to the other side of the room, mark the ink line
  nail_T38(); // just to for the temporay holding to make the later nailing easier, the nails do not work for concrete
  nail_masonry_anchors(wedge_anchor); // one per meter
  nail_masonry_anchors(hammer_driver_pin); // 2 for each anchor gap
}

/*
  each primary joist needs to hold 2 plywoods
  measure carefully, do not use measuring tape, use a woodstrip of length plywood_width
*/
int primary_bottom_joists() {
  // the strip_width face needs to face ground, because two rows of screws will be used here
  install_joists(F30); // the lesson I learned, is to install the joist first, use tmp holders, to nail and connect the strips till you finish one whole joist
  // the wood strips always twist in some why so don't expect the whole joist follow the laser
  // but at least two ends of the joist will be attacted to the RimJoist, and RimJoist is on a laser gurenteed level
  cut_suspension_bar(bar_length); // two for each holding point
  int bar_length = whole_thickness() - plywood_thick - strip_height; // do not trust the caculation() two much, always rely on laser, roof not always level.
  install_bars(F30); //for each CrossPoint, nail two bars on each side of the CeilingJoist, then bottomJoists to the bottom of the two bars,
  // use F30 brad nail, this is the good time to adjust the joist height to fully kiss the laser
  enhance_the_structure(F50); // use F50 nails. Add two side strips(alone the bottom joist)
  /* 
    - the strip_height(which is 20mm) face of the strip will face ground, 
       - and the side strip bottom is 8mm above the bottom of bottom joist
         - in order to give more contact area to the bars
         - note here, only vertical area counts as contact area
           - even a thin nail has a ton of shear strenght, so right way is to  use them 90degree to the load, nails go vertically does not hold anything, because brad nails are thin and slipery
           - a good frame structure also need to aviod rotation, cause when rotation happens, the angel between force and nails change, the nails can easily be pulled out
       - the weakest part of one holding point, is the joint with least contact area
         - suspensionBarToEnhanceStrip joint
           - contact area is 2x2x4=16sqmm
         - suspensionBarToCeilingJoist
           - contact area 2x3.2x2=12sqmm
         - bottomJoistToEnhanceStrips
           - (3.2-2)xWholeJoistLength will is very big
           - note here a bottom joist and the suspensionbar also has 2x3.2x2 horizontal contacct area
             - but this does not count, since nails go in parellel with gravity
         - all look great
  */
  if(YOU_WANT_KNOW_WHY) {
    // in case you want to know why primary bottom joist are designed this way
    check_how_to_well_connect_plywoods_for_ceiling()
  }
}

int sub_bottom_joists() {
  install_joists(F30);
  int bar_length = whole_thickness() - plywood_thick 
  install_bars(F30); //for each CrossPoint, nail two bars on the SAME side of the CeilingJoist, then bottomJoists to the gap between the two bars,
  // use F30 brad nail, this is the good time to adjust the joist height to fully kiss the laser
  enhance_the_structure(F50); 
  /*
    the bottom joist only need to narrow side of strip face downward
    so the whole structure is simple and strong.
  */
}

/*
  my shop is narrow, so no Chinese Inkline is needed for the BottomJoist.
  use BoardHelperStick and SubBottomJoistHelperStick, and use marker pen on RimJoist and CeilingJoist to guide the bottomJoist .
*/
int measure_and_mark() {
  int BoardHelperStick = plywood_width;
  int nextPrimaryBottomJoistPosition = plywood_width + gap_between_plywood //3M gap for sealant
  // install subBottomJoist in the middle of two primary ones
  int SubBottomJoistHelperStick = plywood_width/2 - 15 - 2 - strip_height/2;

}

int install_bottom_joists() {
  measure_and_mark();
  while(more_space_left) {
    // started from the wall joist, the first joist is 60mm away, and it is a subBottomJoist
    // then the next one is a primaryBottomJoist
    sub_bottom_joists(toe_nailing);
    primary_bottom_joists(); 
  }
}

/*
  - ordered on PDD: 249RMB, 1.2x40m, 10cm thickness
  - acoustic capability is great, sound away https://youtu.be/GbmEXMf005Y?t=130
    - Rock wool is also a type of mineral wool
*/
int insulate() {
  return 0;
}
/*
- toe nailing is a classic way to make a T joint
  - https://youtu.be/EwJI06iyI4I?t=274
- when I need to joint
*/

int toe_nailing() {
  /* nail together bottom joist to the RimJoist */
}

int finish() {
  apply_vax_oil(times=3, gap='1hr')
}

int sealing() {
  /* 
    - use air conditioning hole sealant 'PDD: 空调堵洞密封胶泥’ for Dia 30mm cord holes
      - https://happypeter.github.io/githome/imgs/20220302/
    - use wood filler if there is some holes
      - https://happypeter.github.io/githome/imgs/20220302/
    - buy a caulking gun https://youtu.be/wZhGA-zrN_U?t=539
    - use a screw to seal the sealant https://youtu.be/wZhGA-zrN_U?t=662
  */
  /* Silicone (玻璃胶 glass sealant) for board gaps
    - how to silicone? https://www.youtube.com/watch?v=N7mC2DQVl-w
      - fingers and towel https://youtu.be/N7mC2DQVl-w?t=253
      - big gaps https://youtu.be/oq0juhNqGss?t=355
      - in many cases, tiny V groove works https://youtu.be/V561eO_QGYA?t=296
      - stead pace/pressure https://youtu.be/45I81kHIKQg?t=248
        - even you did good job by applying just enough silicone
          - you still need to flatten it with finger
      - profiling tool https://www.youtube.com/watch?v=_DI4hfHM_Hg
        - why cut 90degree big hole
        - https://youtu.be/rnD_LCzcLH4?t=507
          - use profiler more than once
            - use soap water AFTER the first go
              - the first go ganrentees the gaps between silicone and the surface
                are closed, otherwise the soap water goes into the gaps
          - clean the stains https://youtu.be/rnD_LCzcLH4?t=628

  */
}

int trim() {
  // use wood strips as ceiling crown molding
  // crown is essentially a 45defree cut wood strip https://youtu.be/9m5UuT5Z4eE?t=126
  // sealant https://youtu.be/dZHFNnbLG8g?t=364
  /* I painted 32x20 wood strip white as the crown, the result is nice https://happypeter.github.io/githome/imgs/20220302
     - next time use 17x17 plywood strip, about this size https://youtu.be/20a63CnjA7A?t=187
  */
}

int wiring() {
  // when open holes for the wires, make them close to the wall
  // otherwise, you need a really thick box to contain the joint
  // like seen here https://happypeter.github.io/githome/imgs/20220302/
}

int main() {
  printf("Be warned! The whole false ceiling is going to take %d mm of your room height", whole_thickness() );
  set_laser();
  // maybe I don't need the wood frame, will furring strips do for me https://youtu.be/20a63CnjA7A?t=29
  install_rim_joists();
  install_ceiling_joists();
  install_bottom_joists();
  insulate(mineral_wool);
  wiring();
  sheathing();
  finish();
  sealing();
  trim();
  return 0;
}

int sheathing() {

  use_nails_as_spacers() // https://youtu.be/XMziwBDduVs?t=382

  /* use proper sealant to glue it */
  apply_vapor_barrier() // https://youtu.be/fJ2v6wD8mho?t=114

  /*
    add two anchors first, so that the board can stay close 
    to the install position without me holding it.
    - like https://happypeter.github.io/githome/imgs/20220226/
      - make sure the two anchors are both not two small or narrow
        - so in the picture the one made with strips is a bad example
          - when I adjusted the board poision, it lost the board.
      - use one 70mm screw
    Then start to use nails to one of the two corners that are
    next to the wall or the eariler installed board,
    then nail the other corner, this a easy way to make sure
      - 1. gap at each joint of two boards(or first board with walls) are kept the same from
    end to end.
      - 2. boards are properly aligned
  */
  install_boards()
  /*
    - a drywall lifter https://youtu.be/20Ku6flDaBk?t=206
    - I will use 17mm plywood, with good enough finish
    - handle the wall side ends by a wood strip https://youtu.be/20a63CnjA7A?t=188
  */

}
 

 & check_how_to_well_connect_plywoods_for_ceiling() {
  char why_wide_side_vertical[] = """
  - how to well connect two plywood, to avoid futher crack or distortion of the ceiling
    - if any of the plywood's corner stay without mounting, your plan failed
    - being smooth is more important than being flat
      - that means even the surface twisted in some why, it won't crash
    - when two plywoods mounted next to each other
      - each plywood has one side adjacent to the other plywood
      - if two sides are on same surface. e.g attached to same wood strip, the result will be good
      - and if two adjacent corners(each from one plywood)was mounted to the same surface, it is also OK
       - other than this, if two adjacent corners are each mounted to a frame joist, crack will happen soon or later
  """
  char why_side_enhance_strips[] = """
    - this makes even the middle part of the joist very strong
      - as tested, any point of the joist can hold my body
  """
  return why_wide_side_vertical + why_side_enhance_strips;
 }
