const design = {
  /**
   * Ikea Alex drawer supported desk
   * https://ikeahackers.net/2020/03/alex-drawer-desk.html
   */
  cabinet_color: 'white', // black also looks cool, but white board is what I have now
}  
const shopping_list = {
  drawer_slides: {
    number: 6, // in pairs
    total: 173, //13x6=78, 13RMB each
    shop: 'PDD',
  }
}
const drawers = () => { 
}
const main = () => { 
   /**
    * ikea Alex: 70x36x58 height-width-depth
    * I will do: 60x30x60
    */
   cabinets();
   /**
    * I want cabinets on the wall
    * depth = 30; //cm
    * 
    */
   wall_hung_storage()
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