/**
 * where to buy
 */

const shop_name = {
  north_ring_road: '北环路 凯诺公司对面，二手木材',
  jingdong_kurui: '京东:睿筑旗舰店', // serious problem: crazy transport cost 270RMB for 8 OSB boards
  huayun_wang: '华运建材城，伊林环宇王旭东',
  haiyang_second_hand: '海阳旧货市场',
  pdd_board: '拼多多 永和木业'
}

const glazings = {
  west_house_door: {
    size: '', price: '200RMB', source: shop_name.haiyang_second_hand
  },
  west_house_primary_window: {
    size: '', price: '150RMB', source: shop_name.haiyang_second_hand
  },
  fixed_window: {
    price: '60RMB', source: shop_name.haiyang_second_hand
  },
  glass: {
    price: '80RMB', source: shop_name.haiyang_second_hand
  }
}

const githome_toilet = {
  price: '120RMB', source: shop_name.haiyang_second_hand
}

shopping_list_20240729 = [
  {
    product: boards.pine.finger[8],
    total: '4x115RMB'
  },
  {
    product: boards.pine.finger[9],
    total: '2x141RMB'
  },
  {
    product: boards.pine.finger[12],
    total: '2x163RMB'
  }
]

export const shopping_list_20240721 = [
  {
    product: lumber["4x8x200"],
    details: 'x57',
    total: '5.5x57RMB'
  },
  {
    product: lumber["4x8x300"],
    details: 'x68',
    total: '11x68RMB'
  },
  {
    product: boards.pallet,
    details: '.56ton',
    totals: '1200x0.56' // 672RMB
  }
]
shopping_list_20230928 = [
  // the mid-autumn 6000 thousand purchase
  {
    product: lumber.scaffold_board,
    details: 'x20',
    total: 500 //RMB
  },
  {
    product: lumber["9x9"],
    details: 'x10, reclaimed, cracks, but I believe it works just well',
    total: 440 //44x10RMB
  },
  {
    product: lumber["5x10"],
    details: 'x138',
    total: 2484, //18x138
  }, 
  {
    product: boards.plywood.concrete_form,
    details: 'x50',
    total: 1900, //38RMBx50
  },
  {
    product: lumber['4x8'],
    details: '4RMBx91',
    total: 364
  },
  {
    product: shipping_cost,
    details: 'truck, nice labor service',
    total: 350 // a good service, from 华运运板子杨
  }
]
shopping_list_20230920 = [
  {
    product: boards.osb[15],
    details: 'x10, roof sheathing, 4.2 piece for west roof, 3.8 for carport phrase 2',
    total: 800 //100RMBx8
  },
  {
    product: boards.veneered,
    details: 'x5, for my cabinets/shelves',
    total: 650, //130RMBx5
  },
  {
    product: boards.backboard, 
    total: 100,
  }
]
/**
 * Nov 23 2022 拼多多 防腐木碳化木桑拿板 shop 
 */
const shopping_list_20220923 = [ 
  {
    product: burned["11x11"],
    details: '碳化木柱子   x6  10.5x10.5x400cm 175RMB, total: 1050RMB',
  },
  {
    product: burned["5x14"],
    details: '碳化木凉亭料 x4   4.8x13.5x400cm  85RMB, total: 340RMB',
  },
  {
    product: treated["4x11"],
    details: '防腐木凉亭料 x10  3.8x10.5x400cm  50RMB, total: 500RMB',
  },
  {
    product: burned["2x14"],
    details: '碳化木珊栏板 x20  1.9x13.5x400cm  38RMB, total: 760RMB', 
  },
  {
    product: lumber.board,
    details: '无节烘干板材 x10  1.7x8.6x400cm   36RMB, total: 360RMB',
  },
]



const shopping_list_20221006 = [
  {
    product: treated["4x11"],
    details: '防腐木凉亭料  x50  33x85x4000   39RMB, total(with discount): 1930RMB'
  },
  {
    product:  burned["5x14"],
    details: '碳化木凉亭料 x40   28x68x4000  25RMB, total: 1000RMB',
  },
]


const shopping_list_20221028 = [
  { product: boards.plywood.concrete_form,
    details: '40RMBx10 total:400RMB'},
  {
    product: treated["old5x9"],
    details: 'x100, total: 900RMB'
  }
]

export const boards = {
  pallet: {
    '1': {
      // 1200RMB/ton reclaimed wood, containing 1cm thick, 2m long boards
      // they are not in perfect shape, but look at this https://www.bilibili.com/video/BV1oZ421K7WN/
      // you don't need dead square things to build awesome
      source: shop_name.north_ring_road, price: 1200
    }
  },
  faced_pannel: {
    '15': { source: shop_name.huayun_wang, price: 130 }, 
  },
  osb: {
    /**
     * NOTE: OSBs here are pricy and intended for interior uses, if you want boards for roofing or exterior sheathing, consider boards.plywood.concrete_form
     */
    
    // '15': { source: shop_name.jingdong_kurui, price: 98 }, // deliver cost 300+100 for around 10 boards
    '15': { source: shop_name.huayun_wang, price: 100 }, // delivery cost 100 or so
    '12': { source: shop_name.huayun_wang, price: 90},
    '9':  { source: shop_name.jingdong_kurui, price: 70},
  },

  /**
   * very sandable and paintable surface, 
   * true and full sizes
   * love it
   */
  plywood : {
    /**
     * shipping cost is 290 for 10 15mm and 2 18mm sheets, so it's OK
     */
    '18': { source: shop_name.jingdong_kurui,  real_size: '1.22x2.44', price: 155 }, 
    '15': { source: shop_name.jingdong_kurui,  real_size: '1.22x2.44', price: 135 }, 
    '5':  { source: shop_name.jingdong_kurui,  real_size: '1.22x2.44', price: 60}, 
    'concrete_form': { 
                      source: "`shop_name.north_ring_road`", 
                      real_size: '10x915x1830', price: 38,
                      detail: 'smells badly if you store them in a hot room, but it is a better option than OSB for roofing, 10 times more durable getting wet, even works for 3 years with direct weather exposure, it is back breaking to life OSB, while this is much lighter, most importantly, this is 70% of the price of 1.5cm OSB. one more thing, since it is finished with paint already, guess I can use it as the exterior sheathing of my sheds',
                      }, 
  },
  pine: {
    finger: {
      '8': { source: shop_name.pdd_board,real_size: '1.22x2.44', price: 115 },
      '9': { source: shop_name.pdd_board,real_size: '1.22x2.44', price: 131 },
      '12': { source: shop_name.pdd_board,real_size: '1.22x2.44', price: 163 },
    }
  }

}

export const lumber = {
  Shiplap: 
  {real_size: '', price: '50RMB', source: '华运西门，槽口接缝板'}, 
  board:  
  {real_size: '1.7x8.6x400',  price: '36RMB', source: 'productName: 无节烘干板材1.7x8.6x400cm  pdd shopName: 防腐木桑拿板碳化木 '}, 
  scaffold_board: {
    real_size:  '4.5(3.8-5)x18(17-19)x292', price: '25RMB', source: shop_name.north_ring_road
  },
  '9x9': {
    /**
     * reclaimed with big cracks, but hey the price is good
     */
    real_size: '9x9x400', price: '44RMB', source: shop_name.north_ring_road
  },
  '5x10x400': {
    /**
     * this will be my current fav workhorse 2by4(3.8cmx8.9cm)
     */
    real_size: '(4~5)x(9.0~10)x390', price: '18RRM', source: shop_name.north_ring_road
  },
  '4x8x200': {
    /**
     * reclaimed, cheapest thing in all my products here
     */
    real_size: '(32~35)x70x(1800~2000)',
    price: '5.5RMB', // last purchase was 4
    source: shop_name.north_ring_road
  },
  '4x8x300': {
    real_size: '(32~35)x70x(2500~3000)',
    price: '11RMB', // a bit pricy, conpared to '5x10x400' ones
    source: shop_name.north_ring_road
  }
}




export const treated = {
  /**
   * reclaimed wood, so it is very cheap, around 1000RMB/m3, 
   */
  'old5x9':  {real_size: '45x85x2500',  price: '9RMB', source: '北环路，凯诺公司对面'}, 
  /**
   * I will prefer lumber['5x10'] over this now
   */
  '2by4':
  {real_size: '33x85x4000',  price: '39RMB', source: 'PDD shopName: 防腐木桑拿板碳化木'}, 
  /**
   * PDD shop price: 29RMB
   * quality very bad this time, should have bought the PDD one, and the thickness is simply not right for framing, I ended up doing a lot of end grain nailing, can not be strong
   */
  '3x9': 
  {real_size: '2.3x8.3x400',  price: '35RMB', source: '华运建材城西门门口防腐木榻榻米门市'}, 
  /**
   * 'note': 'wood is soft and cracky, but looks good and straight far away',
   */

   '3x11': 
   {real_size: '3.3x10.5x400',  price: '46RMB', source: 'PDD shopName: 防腐木桑拿板碳化木'}, 
  '3x7': 
  {real_size: '2.8x6.8x400',  price: '25RMB', source: 'PDD shopName: 防腐木桑拿板碳化木'}, 
  '7x7': 
  {real_size: '6.5x6.5x400',  price: '58RMB', source: 'PDD shopName: 防腐木桑拿板碳化木'}, 
  /**
   * same thing on PDD shop is 62RMB
   */
  '4x14': 
  {real_size: '3.8x13.2x400', price: '70RMB', source: '华运建材城西门门口防腐木榻榻米门市'}, 
  '4x11': 
  {real_size: '3.8x10.5x400', price: '50RMB', source: 'productName: 防腐木凉亭料 PDD shopName: 防腐木桑拿板碳化木3.8x10.5x400cm',},
}


export const burned = {
  /**
   * so pricy, I don't think I will buy this again, since I have the 44RMB option now.
   * 
   */
  '11x11': 
  {real_size: '10.5x10.5x400',  price: '175RMB', source: 'PDD shopName: 防腐木桑拿板碳化木  productName: 碳化木柱子10.5x10.5x400'}, 
  '5x14':
  {real_size: '4.8x13.5x402.5',  price: '85RMB', source: 'PDD shopName: 防腐木桑拿板碳化木  productName: 碳化木凉亭料4.8x13.5x400'}, 
  '2x14':
  {real_size: '1.9x13.5x400',  price: '38RMB', source: 'PDD shopName: 防腐木桑拿板碳化木  productName: 碳化木珊栏板1.9x13.5x400'}, 
}

export const fasteners = {
  screw15: '4mm thick, 15mm long, top dia 12mm, used with sheet_metal_screw_washer', 
  screw70: '拼多多 5x70mm 18.8RMB/1kg 70mm for the base 30mm thick frame lumber for the floor',
  screw35: '10x35mm', 
  screw30: 'My main workhourse drywall screw', 
  screw45: '4x45mm 28RMB/1.5kg', 
  joist_hanger_bracket: '拼多多 床横梁托 内宽35mm 1.2RMB x 6', 
  corner_braces: '拼多多 ',
  sheet_metal_screw_washer: '拼多多 彩钢瓦复合垫 8.55RMB/500',
}

export const water_proof = {
  /**
   * PE film are very UV resistant, thick ones last more than 1 year
   */
  PE_film: '拼多多 鱼塘防水膜 PE 100s 50RMB/20m2', 
  PE_film_transparent: '海阳旧货门口 .5RMB/m2',
  flash_tape: '拼多多 窗户密封防风胶带 防水', 
}

export const hardware = {
  braces: {
    '2x3': {}
  },

  /**
   * this is called sliding bolt, or locking bolt https://youtu.be/2BsSQNWBeok?t=333
   */
  sliding_bolt: { source: '拼多多 304 不锈钢插销' },
  chemset: {
    '12x160': {source: 'PDD', price: 1.8}
  },
  hinge: '京东，3寸平开合页', // ordered, 75mm long
  wood_post_flange: {
    price: 8,
    source: '拼多多，晨星不锈钢制品，防腐木固定底座，铁镀锌，1个边'
  }, 
}



export const channel_board = {
  '2x14': {'source': '华运建材城西门门口防腐木榻榻米门市', real_size: '', 'price': '56RMB/one'}, 
}


const wood_board = {
  /**
   * wood_boards are really not that much more expensive than OSB/plywood
   */
  pine_sheet: {
    '15fingers': {
      source: 'pdd: Yonghemuye, 永和木业 205RMB/1220x2440mm, plus 150RMB/5sheets, for cutting and shipping, finger-joint board', comment: '188RMB/sheet awailable on PDD too, will try next time',
      source: 'pdd: Senyumuyi, 17.5RMB/60x30cm finger-joint board', comment: 'beautiful, and 288RMB/sheet, 30% more expensive than the whole sheets',
      /**
       * NEVER buy 桐木板, too soft for anything
       */
    }
  },
  table_top: {
    /**
     * 100x30x2 will be 40RMB
     * but if I want a customize size 100x60x2, than it's 140RMB
     * I got that 102x62x3 top, for 240RMB, but that's worth it, when I need sth nice
     */
  },
  replace_plywood: {
    /**
     * what if I use 1.5thick pine to replace plywood?
     * - 100x30x1.5 is 30RMB, so if 122x244 size, that will be 298RMB
     * - 18mm plywood is 150, half the price
     * - so wood boards can not replace plywood, but solid wood can be sanded, easier to paint, and natrually beautiful
     */
  }
}