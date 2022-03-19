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

/*
- this lady stolen my design 
    - https://www.youtube.com/watch?v=yCtTqg9M6Ek
      - her plan https://sawdustgirl.com/building-garage-shelves/
      - for lumber https://www.youtube.com/watch?v=iy8h4OZMK98
      - you can use plywood as hanger https://youtu.be/UDC5_oPpxPU?t=89
      - plan for track saw tracks https://www.youtube.com/watch?v=d4FOeyElB3s
    - a similar one https://www.youtube.com/watch?v=ZmZMyqbDSDY

*/
  int sandra_shelf() {
  }
  /*
  - my goal hear is to use french cleat to do anything
    - so just because some design is very good https://www.youtube.com/watch?v=IfuwKXPRKu8
      - if it's usecases are very limited, I won't use them
   - as tested, for brick walls, use masonry nails give the cleats enough strength
     - no expansion screws needed
  - I love frech cleat since it make things so portable
    - If I use the nails modestly, even the cleats themself are very removable and resuable
  */

}

int diy_angle_steel_bracket() {
  // with bolts, I don't need welding
}

/*
- basic shelf structure https://youtu.be/edh0SjQReDw?t=7
- mobile shelves with casters, can work well with my wall hung ones
  - for clamps https://youtu.be/meEYwk6Olik?t=37
  - for wood scraps , see mobile_wood_storage.c
- use 28x68 treated wood as cleat
  - NOTE: next version I can going to use glued ply wood, as show here https://www.youtube.com/watch?v=IfuwKXPRKu8
    - treat wood is way too soft for the job
  - arm length 450, short end edge length 30, large end 120
    - plywood cut
    - lumber cut 
  - holding span
    - 1500, so it is OK for 2m lumbers
    - arm number: 3
  - cleat length, upright support
    - 50+120+220+120 = 560 //50 for extra support strength
    - vertical space needed
      - 220+120+220+120 = 680 

- wall hung shelf to hold lumber
  - adjustable one https://youtu.be/GXHyias2C6w?t=320
  - https://happypeter.github.io/githome/imgs/20220216/
    - lesson learned from the failure of version One
      - don't use nails close to the edge of the wood, split!
      - don't let grain direction to carry main load, split!
    - what can be improved for version Two
      - the small triangle can be just a strip with 45degree ends
      - the part of the wall-hung board above the big triangle should be longer, to avoid split.
      - thicker wall-hung board, so that I can use screws to fasten the plywood triangle to the board. when the shelf carry load, the download force will be turned into horizontal force away from the wall, and the 90degree angle of the big triangle area(both the triangle and wall-hung board)will be under great pressure. As tested, when I hanged my body, the nails in the wall hung board tried to go away from the wall, but they need to shear the wood fibers, before they fail. So even though the  the board are very thin and soft, it did not break. But If in the next verion I use screw(thicker than nails) and thicker board, it will be much harder to shear the board, the shelf will be much more sturdy.
      - the lower part of the big triangle does don't carry a lot of burden, so should be shorter.

  
  - a elelgant hide all design https://www.youtube.com/watch?v=6clJWTTRWTE
  - todo
  - try this basic box with rab·bet joint https://www.youtube.com/watch?v=8vFGrNjT4P4
- requirements
  - stackable
    - full use of shelf vertical space
    - drawers ring a bell
    - make things perfect cuboid
    - sizes, anything times 10cm
    - care for being stackable, not nesting
      - only care exterior sizes, go free for wall thickness
      - two sons does not need to fit into a father
  - free style
    - a box could be a drawers, a crate, or anthing
- lumber shelf
  - MY DESIGN
    - use my 83x8x8 lumber and 25mm steel pipe
      - use 3 pipes on each lumber, each at 13cm, 43cm, 73cm from the top
      - each lumber is 50cm away from the next, so the shelf would be 2m long
      - 2m long 3 layer shelf
  - wood+steelPipe https://youtu.be/pIJG7Zp8iN4?t=582
    - 3inch deep into the wood
  - lumber storage should be far from your bench
  - small offcuts storage shelf
    - best: a crate
      - how to build a crate https://www.youtube.com/watch?v=OaN8cFByOeg
      - future https://youtu.be/kWKqHPhTe6M?t=126

   
- big things go to crates
  - https://www.youtube.com/watch?v=OaN8cFByOeg
  - e.g when I want to put away my nailers, I can use a crate, and nest small boxes in it for nails and other small parts. 
- small things build with 18cm plywood(as frame) plus mdf or thin 8cm plywood (as walls)
- first project should be a box for my grinder accessories


- lumbers go high
  - https://youtu.be/kWKqHPhTe6M?t=155
- small drawers for small parts that does not go to my cleat system
  - https://youtu.be/kWKqHPhTe6M?t=213
  */

/*
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

/*
  - this shelf design https://happypeter.github.io/githome/imgs/20220304/
    - it is ajustable, I can change the height of each tier easily
    - I can add casts to it, or hang it on the wall use franch cleats
      - like this https://youtu.be/uwyCac38G74?t=316
  - but treated wood and ceiling strips are too soft for shelves
    - even I added some triangle enhancement, it is still loose and shaky
    - would love to turn to a full plywood version structure

*/
int simple_shelf() {

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
  }