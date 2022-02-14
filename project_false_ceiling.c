#include <stdio.h>
char CeilingJoist[] // "主龙骨", main weight carrier
char BottomJoist[] // "副龙骨", the bottom of the whole wood frame
char WallJoist[]  // "边龙骨", Nailed to the wall
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
int install_wall_joists() {
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
  // but at least two ends of the joist will be attacted to the WallJoist, and WallJoist is on a laser gurenteed level
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
           - since you can use nails horizontally, nails go vertically does not hold anything, because brad nails are thin and slipery
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
  use BoardHelperStick and SubBottomJoistHelperStick, and use marker pen on WallJoist and CeilingJoist to guide the bottomJoist .
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
    sub_bottom_joists();
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

int main() {
  printf("Be warned! The whole false ceiling is going to take %d mm of your room height", whole_thickness() );
  set_laser();
  install_wall_joists();
  install_ceiling_joists();
  install_bottom_joists();
  insulate(mineral_wool);
  sheathing();
  return 0;
}

int sheathing() {
  /*
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
