

import { outdoor_cart, outdoor_lumber_shelf } from "./wood_storage"

const shopping_list = [

  /** headers */
  "碳化木凉亭料 x3 4.8x13.5x400cm  85RMB 拼多多 防腐木碳化木桑拿板 shop",

  /** roof 
   * length of each rafter 160cm
   *  I will use one for each .4m gap, 12 needed
  */
  "防腐木梁x6  3.8x10.5x400cm 50RMB/one 拼多多 防腐木碳化木主副量凉亭料 防腐木碳化木桑拿板 shop",
  "OSB in hand",
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
   * 
   */
  plate()
  /**
   * the header is 4.8cm deep, maybe too narrow as a plate
   * so I will have plate for front and back wall
   * just use another face of the header plank, which is 13cm deep
   */
}