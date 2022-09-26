

import { outdoor_cart, outdoor_lumber_shelf } from "./wood_storage"

const shopping_list = [

  /** poles */
  "碳化木柱子x2 10.5x10.5x400cm 160RMB/one ，拼多多 防腐木碳化木桑拿板 shop", 

  /** headers */
  "碳化木凉亭料 x3 4.8x13.5x400cm  85RMB 拼多多 防腐木碳化木桑拿板 shop",
  /** roof 
   * length of each rafter 160cm
   *  I will use one for each .4m gap, 12 needed
  */
   "防腐木梁x6  3.8x10.5x400cm 50RMB/one 拼多多 防腐木碳化木主副量凉亭料 防腐木碳化木桑拿板 shop",
   "OSB in hand",
   
  /** walls siding 
  */
  "碳化木珊栏板x10 1.7x10.5x400cm  27.5RMB/one 拼多多 防腐木碳化木桑拿板 shop ", // compared to treated wood, they don't curl easily


]

const main = () => { 
  pole_barn_shed()
  outdoor_lumber_shelf()
  outdoor_cart()
}


const pole_barn_shed= () => { 
  // copy everything in carport, have a shed first
}

const frame = () => { 
  /**
   * the brick wall is 180cm tall
   * 14cm thick
   * it works perfectly as the backwall of the shed
   *  */ 
  set_header()
  /**
   * - even my 4.8x13.5cm plank may hold the span of 4m
   *   - my bed use 1.8x9cm to hold 2m span
   * - but I still want a middle post for the front wall
   * - front wall
   *   - header's top face, which is 4.8cm deep will serve as plate for roof
   */
  backwall_plate()
  /**
   * backwall not leveled, so I will apple some concrete first
   * than fasten a header plank as the plate 
   */
}