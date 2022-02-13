#include <stdio.h>
char CeilingJoist[] // "主龙骨", main weight carrier
char BottomJoist[] // "副龙骨", the bottom of the whole wood frame
char WallJoist[]  // "边龙骨", Nailed to the wall
char VericalBar[] // "吊筋"
char primaryBottomJoist[]; // those who need to bear two rows of screws, so the width needs to be 32mm
char subBottomJoist[]; // only for one row of screws
int shop_width = 260; //cm
int shop_length = 420; //cm
int strip_width = 32; //mm. the only strips I used to build the frame of my false ceiling
int strip_height = 20; //mm. the only strips I used to build the frame of my false ceiling
int insulation_thick = 100; //mm, space for rockwool
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
  hammer_one_nail(); //on one side, and tile the Ink line to it
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
  guideline_with_string(); // use string set guideline 2:27 https://haokan.baidu.com/v?pd=wisenatural&vid=17796962704418533188
  int bar_length = whole_thickness() - plywood_thick - strip_height; // procision required here, does trust the caculation() two much, use laser if necessary
  cut_vertical_bar(bar_length); // two for each holding point
  install_bars_and_joist(F30); //bars on each side of the ceilingJoist, bottom joist to the bottom of the two bars,
  // the trick here is you need to install joist and bars together, using guideline and lasers as guide
  // use F30 only
  enhance_the_structure(F50); // use F50 nails. Add two side strips(alone the bottom joist)
  /* 
    - the strip_height(which is 20mm) face of the strip will face ground, 
       - and the side strip bottom is 8mm above the bottom of bottom joist
         - in order to give more contact area to the bars
         - note here, only vertical area counts as contact area
           - since you can use nails horizontally, nails go vertically does not hold anything, because brad nails are thin and slipery
           - a good frame structure also need to aviod rotation, cause when rotation happens, the angel between force and nails change, the nails can easily be pulled out
       - the weakest part of one holding point, is the joint with least contact area
         - verticalBarToEnhanceStrip joint
           - contact area is 2x2x4=16sqmm
         - verticalBarToCeilingJoist
           - contact area 2x3.2x2=12sqmm
         - bottomJoistToEnhanceStrips
           - (3.2-2)xWholeJoistLength will is very big
           - note here a bottom joist and the verticalbar also has 2x3.2x2 horizontal contacct area
             - but this does not count, since nails go in parellel with gravity
         - all look great
  */
  if(YOU_WANT_KNOW_WHY) {
    // in case you want to know why primary bottom joist are designed this way
    check_how_to_well_connect_plywoods_for_ceiling()
  }
}

int sub_bottom_joists() {
  /*
    the bottom joist only need to narrow side of strip face downward
    so the whole structure is simple and strong.
  */
}


int main() {
  printf("Be warned! The whole false ceiling is going to take %d mm of your room height", whole_thickness() );
  set_laser();
  install_wall_joists();
  // do the primary joist first, because they are of differnt shape of sub ones
  // and their positions require precise measurements
  primary_bottom_joists(); 
  // sub ones does not need to measure too careful
  sub_bottom_joists();
  insulate(mineral_wool);
  /*
    - ordered on PDD: 249RMB, 1.2x40m, 10cm thickness
    - acoustic capability is great, sound away https://youtu.be/GbmEXMf005Y?t=130
      - Rock wool is also a type of mineral wool
  */
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
