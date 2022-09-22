

import { outdoor_cart, outdoor_lumber_shelf } from "./wood_storage"

const shopping_list = [

  /** headers */
  "碳化木凉亭料 x3 4.8x13.5x400cm  85RMB 拼多多 防腐木碳化木桑拿板 shop",

  /** roof 
   * length of each rafter
   *  I will use one for each .4m gap
  */
  "防腐木梁  3.8x10.5x400cm 50RMB/one 拼多多 防腐木碳化木主副量凉亭料 防腐木碳化木桑拿板 shop",
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