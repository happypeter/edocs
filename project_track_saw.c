/*
  the iron strips that bind four bearings together
*/
#define jointerStrip 

/*
the threaded rods that holds 2 bearings on each
*/
#define bearingRod


/*
  the distance between two rods plus some assmeble margins
*/
int jointer_strip_length = 95 

/*
long enough for all the parts it needs to go through
*/

int bearing_rod_length = 107

int bearing_rod_dia = 10 //m10 threaded rod


int make_beaing_rod() {
  /*
   now my grinder has its own stand, the cut is easy
  */
  cut();

  /*
    with the 8mm thick grind sanding plate, its so easy and even addictive
  */
  grind(); 

  /*
    waiting for my drill press to do the 10mm holes
  */
  drill(bearing_rod_dia);
}
#include <drill>

int main() {
  make_beaing_rod();
  drill.drill_iron(2);
}

struct shopping_list = [
  /*
    price: in 分
    unit: 斤 half kilo
    size: M10
    desc: for rod
  */
  bolt = {price=760, number=1}
  /*
    price: in 分
    unit: stick
    size: M10
    desc: bearing fasteners
  */
  nut = {price=1097, number=1}
  /*
    unit: stick
    size: M10
    desc: 3x30x1000 iron for the saw carrrier
  */
  thickIronStrip = {price=22, number=1}
  /*
    unit: stick
    size: M10
    desc: 2x20x1000 iron for the jointerStrip
  */
  thinIronStrip = {price=19, number=1}
  /*
  - bearing 
    - model 6200
    - inner dia 10mm, outer 30mm
    - x16
  - rect pipe
    - 20x20x1000mm, 1.2mm thick
  - angle iron
    - use bolts to bond to iron strips, no welding needed
  */
]
/*
- ref video 
  - https://www.youtube.com/watch?v=xYkUsN9Ug_M
  - https://www.youtube.com/watch?v=Tw8aKKZaU3U
  - a simplified version https://www.youtube.com/watch?v=N1-Pxik-u4U
  - https://www.youtube.com/watch?v=ho4Q-pMLG6o
  - https://www.youtube.com/watch?v=DP5WYZ32_lM
  - need a console table placed on the side of my shop to hold this saw
- track saw can be very practical https://youtu.be/yCtTqg9M6Ek?t=93
- Do I really need a track saw?
  - won't a simple circular saw guide do?
  - it is my miter saw with more range, and table saw with less noise and danger
  - a guide can not gave the accuracy needed for real projects
  - a guide is good for halfing big boards
  - the track saw is here for precise and quick cuts for boards under 1m
*/

int how_to_caliberate() {
  // you need sth long enough https://happypeter.github.io/githome/imgs/20220314/
  // https://happypeter.github.io/githome/imgs/20220314/2.jpg
}