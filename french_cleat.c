#include <bit_holder>
#define HOLDER 'a cleat item'

/*
  - glass jars https://www.ixigua.com/7011304413516333604
    - litte drawer version https://youtu.be/_JeBHyRscRQ?t=367
*/
#define ARM // where the jar top will be mount
#define armStrip // two armStrips glued together form a ARM

int glass_jar_screw_holder() {
  struct cut_list = [
    {
      armStrip: {
        material: 'plywood',
        width: 100,
        thickness: 17,
        length: 435,
        count: 10
      }
    }, 
  ]

  /*
    - the workflow will aim material saving and less cuts
    - e.g same width strips can be cut at the same time with table saw
      - if the strip is not too wide, use mitersaw to get the final sizes
  */
  report_cut_workflow(cut_list);
  
}

int build_the_cleats() {
  if(INSULATION_NEEDED) {
    layers_plywood_as_baseboard(2)
    fasterner = '50mm Masonry Nail'
  } else {
    layers_plywood_as_baseboard(1)
    fasterner = '38mm Masonry Nail'
  }
  install_OSB(thickness='15mm', fasteners='50mm nails and mainly screws')

  /*
  - I use 18mm thick plywood as cleats
  - first cut 100mm wide strips
  - then cut to 59mm cleats with 45degree bevel
  */

  cut_the_cleats()
  install_cleats(fasteners='50 mansonry nails and mainly')
}

int main() {
  build_the_cleats();
  add_bit_holder();
  glass_jar_screw_holder();
} 



/*
  - for light weight things you don't want a cleat, use screws https://youtu.be/8En-OTfePys?t=251
  - lock it
    - https://youtu.be/N2USF9mTqxs?t=287
    - each holder must be heavy enough, OR maybe you need a lock https://youtu.be/M5NnFkpUXmY?t=587
  - general structure
    - https://www.ixigua.com/7004643375223833096
  - holders
    - painted wood holder
      - https://youtu.be/E4mmexZm934?t=62
    - tmp thing holder/ single sloped stick
      - https://youtu.be/E4mmexZm934?t=471
      - shelf any length https://www.youtube.com/watch?v=SQWjVoO560w
    - misc catchup https://youtu.be/4fKBZ-H9StM?t=483
      - only workingSpace need some unclear way to push things
        - in storage space, everything should have its own home
    - clamp
      - A: https://youtu.be/l_vlA0crb4c?t=326
      - C: https://youtu.be/l_vlA0crb4c?t=318
      - F: https://youtu.be/l_vlA0crb4c?t=305
      - it is very esay to hold clamps, but there are things to watch out
        - NO.1 spacing, when you take one, there others won't fell
        - NO.2 
    
    - pliers
      - best: https://youtu.be/S9PTFizoA64?t=4
        - https://youtu.be/8En-OTfePys?t=88
      - https://youtu.be/53Upi0GUwVw?t=277
    - wrench
      - https://youtu.be/S9PTFizoA64?t=4
    - [tape holder](tape_holder.c)
    - ruler holder
      - https://youtu.be/Z5OVXyD1p5E?t=382
      - https://youtu.be/IsSWJjA4uN4?t=383
      - https://youtu.be/bF2eQIsmBWc?t=343
   - measuring tape https://youtu.be/ojS7DOClCAQ?t=631
      - wood blocks https://youtu.be/IsSWJjA4uN4?t=175
      - https://youtu.be/kLpmInMdQpw?t=956
    - nailer
      - current: https://youtu.be/IsSWJjA4uN4?t=213
        - esay to pick up
      - improvement: this save a lot of space https://youtu.be/4fKBZ-H9StM?t=525
    - pen 
      - https://youtu.be/TjdtAZpsXCk?t=130
    - chisel holder
      - https://youtu.be/ojS7DOClCAQ?t=93
      - I only need one chisel now
    - paper towel holder
      - https://youtu.be/ojS7DOClCAQ?t=151
    - wet saw tile cutter
      - I actually bought a "木工套餐“ woodwork toolkit, so it is OK to use it cut wood then
      - maybe I will build tracks for it
    - grinder
      - things with long cord should not go to the cleat
    - router
      - https://youtu.be/aC8oFt7nG-M?t=381
      - https://youtu.be/gxT1rQgr7Hw?t=672
      - round edge https://youtu.be/wd16ZC_evTE?t=1323
      - a jig for rabbet joint https://youtu.be/KCpYIpqoMU4?t=204
    - jigsaw
      - https://youtu.be/-LK9o4TesMI?t=325
      - for board ripping https://youtu.be/6lPsHZw3ZO4?list=RDCMUCV8DNubYAsQjUZWAIeFwwPg&t=14
      - cut a notch https://youtu.be/9R-gxG9FCMc?t=240
    - screw driver holder, https://youtu.be/53Upi0GUwVw?t=292
      - 80mm thick wood needed
    - rubber hammer
      - https://youtu.be/TjdtAZpsXCk?t=573
    - drill 
      - https://www.ixigua.com/6974625115858272772
        - you do want the gap between the holding boards for each drill larger than the reverse/forward switches
          - https://happypeter.github.io/githome/imgs/20220316/1.jpg
      - drill+bits+charging https://youtu.be/kLpmInMdQpw?t=1068
        - It's always better to keep things more modular, unless there is a reason not to do so.
          - So I will keep a standalone bits holder
    - Reciprocating saw holder 
      - if I don't use it often, hide it
      - https://youtu.be/4fKBZ-H9StM?t=373

*/