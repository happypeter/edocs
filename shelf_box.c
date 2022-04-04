#include <mobile_wood_storage>


int wood_stroage_cart() {
  return mobile_wood_storage.cart
}

int dead_simple_wall_mount_shelf() {
  // https://happypeter.github.io/githome/imgs/20220402/2.jpg
}

int cleat_standards() {
    if(!HEAVY) {
    /* 
      the bevel part distorted when I sat on the test cabinet
      - the gap to the wall thus enlarged, which make it impossible to use silicon
    */
    use(FRENCH_CLEAT)
  } else {
    options = [
      metal_cleat(), //(mounting strip) https://www.youtube.com/watch?v=pXAUR3oWeDw
      /* 
          - I don't want to use expansion bolts on the wall
            - mansonry nails for plywood mounting strips
            - screw plywood to the strips as the wall
            - build a 'box' with certain height and a strong backboard
              - say a cabinet https://youtu.be/i8jcNQ0FzWQ?t=559
              - or a desk https://youtu.be/Vk4RuYIxROo?t=554
              - use iron angles if you need extra strength https://www.youtube.com/watch?v=J4cLvs32KOQ
                - https://youtu.be/WZpNIZ8IJro?t=637
            - use bolts to connect the wall and the table
              - like this https://youtu.be/Vk4RuYIxROo?t=1217
      */
      bolt_attached_box(),

      /*
      - for something really large in horizontal span
        - use box section steel as joist, and metal angles as bracket on both side to attachh it to the wall
        - and expension them direct to the brick wall
          - wood is soft to hold this
      */

      box_section(),
    ]
  }
}

int diy_angle_steel_bracket() {
  // with bolts, I don't need welding
}


/*
- requirements
  - stackable
    - full use of shelf vertical space
    - drawers ring a bell
    - make things perfect cuboid
    - sizes, anything times 10cm
    - care for being stackable, not nesting
      - only care exterior sizes, go free for wall thickness
      - two sons does not need to fit into a father
- I think the frame and panel box design is here to stay in my system
  - I not the only one who use frame&panel for things other than doors
  - it's strong enough while light weight
  - I can use PVC/Acrylic/Mesh as panels as well
*/
int frame_panel_box() {
  /*
  - figure out the cutlist before hand
  - tenons https://www.youtube.com/watch?v=OdImx4h0MWo
  - plywood will be used to make the whole structure strong
    - only two size where handles are use ply
    - for smaller box, I could use 9mm, or turn to OSB for cheaper materials
    - make sure bottom of the box is within the height of plywood sides
  - cut grooves/rails
    - set table saw fence
    - set table saw blade height 1.2
      - panel will be embedded 1cm into the rails
      - panel is not glued to the frame but is left to 'float' within it so that seasonal movement of the wood comprising the panel does not distort the frame.
    - cut once, than flip and cut the second pass
    - wear gloves with rubber to hold the pieces fast
  */
  cut();
  make_tenons(); 
  /* having a stoper on the table saw sled is all you need
    - https://happypeter.github.io/githome/imgs/20220319
  */
}

int angle_plywood() {
  /*
    for structures not too large, I can use two piece of plywood to form a corner and use it as legs
  */
  return angle
}

int long_span_frame_shelf() {
  /*
  - v1: https://happypeter.github.io/githome/imgs/20220304/
  - next verion idea: all plywood
    - legs = angle_plywood()
    - use playwood frame to hold the plywood panels for each tier
  */
  return shelf
}

#define LumberShelf 'shelves without boards' // or very thin boards, like Sandra's https://www.youtube.com/watch?v=yCtTqg9M6Ek
int lumber_shelf() {

  /*
  - the problem with Sandra's design is that only the top two screws hold most outward force 
    - since I won't use expasnsion screws to mount thick enough mounting strips like she does, that means my sturcture won't be strong
   
  - I will avoid use long expension bolts
    - cause the nails+plywood mounting strips are stong enough to hold a ton
    - I just need the right way to do the horizontal span   
    - so even though the plywood verion shelf is really good, https://www.youtube.com/watch?v=IfuwKXPRKu8
      - wood+steelPipe https://youtu.be/pIJG7Zp8iN4?t=582
      - I don't use none of them

  */

  int lumber_shelf = make_lumber_shelf(wall_hung_cabinet(width=300, height=200 )) // use two or more smaller wall hung cabinets to be the arms of a lumber shelf
  if (lumber_shelf.is_strong) {
    // I like this version, cause them lumber shelves are now nothing but the french cleat items
    return locked_cleats(lumber_shelf) //if necessary lock the cleat item
  }else{
    int mounting_stips = mount_plywood_to_wall(thickness='2 layers', width=150, height=100) // the wall is french cleat holding board
    int lumber_shelf = attach_to_mounting_strips(angle_plywood(widht=150, height=100))
    return lumber_shelf
  }
}


int wall_hung_shelf() {
  // https://youtu.be/uwyCac38G74?t=316
  // a shelf is just a shorter and wider verion of wall_hung_cabinet() without doors
}

int wall_hung_cabinet() {
  // use french cleat to hang the cabinets 
}


int install_hinge() {
  // soft closing hinges here
  install_the_round_side() //make sure the hinge is 90 degree to the side of the piece
  install_the_other_side()
  /*
  - keep the door open https://happypeter.github.io/githome/imgs/20220319/3.jpg
  - hold the two sides tight together
  - no gap needed, and make sure both the upper ends and bottom ends of doors and sides touch each other
  - install the two screws with wider holes first
    - so you can adjust the door positions after fasting the screws
  */
  adjust_screws() // you can adjust door positon in the depth, width, height direction
  // so when you screw the hinges on the two sides, you don't need to be really precise
}

  int main() {
    /*
    - cut groves for 5mm mdf
      - set table saw fence, blade to fence width equal 40 percent of the wood being cut
        - cut and flip the wood, cut again, then the grove shall be wide enough for MDF
    */
    
    add_mdf_box()
    add_casters(long_span_frame_shelf); // to make use the space under french cleats
  }


/*
https://www.ixigua.com/6952061596659089931
- set guideline with nails
  - https://www.ixigua.com/6986842905025446415?logTag=d1054a326e9de0b1ec14
- track install https://www.ixigua.com/6974778455611146783

- slides are wobbly and weak
  - expensive red wood furnitures dont use slide at all
    - you can use stoppers if you have kids https://www.ixigua.com/6855516147580666376
      - turn stopper https://youtu.be/ZyUiyVpa6YA?t=154
- wood cleat slides https://www.youtube.com/watch?v=7ob28gKTeUk
  - a shim away https://youtu.be/ZyUiyVpa6YA?t=200
  - don't paint the cleat, wax them https://youtu.be/ZyUiyVpa6YA?t=231
  - the back of the drawer does not hold bottom pannel
*/
  int drawer_cabinet() {
    apply_wax() // https://youtu.be/1HqGi-X1OdE?t=406
  }