  
const shopping_list = {
  drawer_slides: {
    number: 6, // in pairs
    total: 173, //RMB
    shop: 'PDD APP YANG YE JIA ZHUANG',
  }
}
const drawers = () => { 
}
const main = () => { 
   /**
    * just two ikea style cabinets, white, with a apron to join them together
    *  depth = 60; //cm
    * ikea Alex: 70x36x58 height-width-depth
    * I will do: 70x40x60
    * the tableTop will cover 1.5 of the 2 cabinet top, to give enough space for my legs
    * 60cm wide board, 440cm for the 2 cases of the two cabinet
    */
   cabinets();
   /**
    * I want a wall hung shelf, and cabinet on the front wall
    * depth = 30; //cm
    * 
    */
   wall_hung_storage()

   /**
    * I will put boxes on shelves or in cabinet, drawers are boxes on its own
    * each box should be labeled, and ought to be home of things of same type
    */
   go_shelf_box()
}

const sizes = () => { 
      /**
     * 60 wide with one side sealed for my desk cabinets, 2 boards
     * 30 wide with one side sealed for my wall hung cabinets/shells, 2 boards
     * - drawers, 1 boards
     *   - drawer box walls height: 16cm tall, (36widex2+55depthx2)=182cm/drawer
     *     - box bottom, 30wide, 53cm/drawer
     *   - drawer facia height: 20cm tall, 40wide=40cm/drawer
     *   - for 6 drawers: { facia: 20x240, walls: 16x1092, bottom: 30x318}
     *     - switch to cutlist: 30widex2(each 244cm long), 16widex5, 20widex1
     *   - we have 30wide now, so the drawers only need 1 boards
     * - OrderList: 60宽的裁两张板，30宽的裁两张板，16宽的裁五条和剩下的一个宽条一共是一张板子，每条都是通条244长，封一侧边
     *   
     */ 
}

const seal = () => { 
  /**
   * PUR over EVA https://www.bilibili.com/video/BV15v4y1875H
   */
  /**
   * with heatgun
   *  */
  heatgun()
  cut_flush()
  hand_sand() // the cutting edges 
}