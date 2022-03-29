/*
Brad Nail 30
*/
#define F30
#define T50 // Brad Nail 50mm
#define ST38 '38 钢钉' // steel nails used by concrete nailers
#define E30 'expansion screws 30mm' //6mm hole dia
#define E80 'expansion screw 80mm' //plastic anchor dia 7.4mm
#define Tile8 'Tile Drill Bit 8mm, PDD: 三角瓷砖霸王钻'
#define HandDrill 'light weight drills'
#define HammerDrill '电锤'
#define WedgeAnchor 'wedge anchors(PDD: 强力加长车修壁虎，电梯专用螺栓) M8x80'
#define PlasticAnchor 'expasion screws, 8mm hole size'

/*
- one common case to use expansion screws are nail 15~40 thick wood to the wall
  - in this case my E30 won't work
*/

int nail_wood_to_wall(screw=E80) {
  /*
    use my 8mm tile drill bits on my HandDrill,
    drill wood and wall at same time
    plug your plastic anchor in the hole
    use screw to drive the anchor deep in the wall
    as shown here https://www.youtube.com/watch?v=qHzFig-3Drs
  */
  drill_hole(bit=Tile8, drill=HandDrill)
}

/*
  whenever possible
*/
int lightweight_wallhung(screw=E30){

} 

/*
- shelf cleat
- false ceiling frame screws which bear downward force
*/
int heavyduty_concrete(screw=WedgeAnchor) {
  // TODO, still needs to test my WedgeAnchor
}

/*
use short/stong/bigHead screws, like https://youtu.be/ssx-R_BzK9I?t=81
*/

int attach_casters() {
  // use 4.8x16 screw to attach to a board
  // use 4.8x50 for heavy duty ones
  // PDD: 华司头燕尾钉
}

int attach_to_loose_bricks() {
  /*
    - when it is not possible to make a strong and well shaped hole on a wall
      - plastic anchors works much better than metal ones
      - e.g hanging my beaker pannel box  https://happypeter.github.io/githome/imgs/20220327/5.jpg
  */
  use(PlasticAnchor)
}

/*
- DIY https://youtu.be/7Hk6vWtbgSg?t=566
*/
int pocket_holes() {

}