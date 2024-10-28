
const paint_furniture = {
  // types test https://www.bilibili.com/video/BV1P94y1Q7TE/
  //https://www.bilibili.com/video/BV1Z24y177nS
}
const paint_wood = {
  /**
   * this is a failed test, the paint is too oily and smelly
   * stain color is OK
   */
  walnut_color: 'https://happypeter.github.io/githome/imgs/20240614/4.jpeg',
  /**
   * to paint nothing can be a option,
   * any finishing will change the warm feel of the wood surface
   * and the lighter color of raw wood, can be more elegent than the oily result after painting
   */
  nothing: 'or just some wax',
  /**
   * if you want to change color but keep the feel, use no paint but sealers
   */
  sealer: 'just sealer and wax',
  /**
   * https://www.bilibili.com/video/BV1ZB421B7pF
   */
  beewax: '3 coats',
  wax_oil: 'for most usage, mostly dry place',
  pu: 'when I really need water resistance'
}

const paints = {
  /**
   * As long as have a yard, meaning I dont care the smile, oil based paint
   * is always preferred over water-based.
   */
  polyurethane: { // Polycrylic is not as durable as polyurethane and is meant to be used only on interior surfaces such as cabinets, furniture, and trim.  It shouldn’t be used in exterior applications or on surfaces that are subject to lots of wear, such as floors, or that are exposed to water.
    source:"京东 掘优地板防滑清漆，聚氨酯木器漆 ",
    price: 138 //RMB/kg
  } 
};

let prepare_surface = () => {
  if(super_rough_surface) {
    start_with_grinder() // go from P60 to P300
  }
  use_sander() // now use sander with P300 or so sand paper
}

  const paint = () => {
    /*
- Painting
  - when painting wood, a second coat is recommended. Professional people even do 2 primer + 2 paint
  - cover surface around painting area with masking tape 美纹纸
  - for broken white wall, use spray paint
  */
   prepare_surface() 
   apply_wood_filler()
   sand_filler(sanding_sponge) //https://youtu.be/JAJt8Tsn5yQ?t=150
   dust_off(wer_cloth)
   /*
   stain does not protect your wood, just color it https://www.youtube.com/watch?v=vfeAxUfoEdE
   */
  if(out_door) {
    // use color paint is best https://youtu.be/WqB8eSkh_TE?t=70
    // or use oil-based polyurethane https://youtu.be/WqB8eSkh_TE?t=240
  } else {
    stain()
  }
   
   prime(soft_roller, brush) // https://youtu.be/JAJt8Tsn5yQ?t=232 , don't just use brush, too slow
   paint() // keep it thin
   wait() // till the first code dry
   paint()
   wait()
   sand() // only sand the second coat, https://youtu.be/JAJt8Tsn5yQ?t=366
  if(paint_corlor != WHITE && water_exposed) {
    top_coat(paints.polyurethane) // polyurethane,  wipe it on https://youtu.be/JAJt8Tsn5yQ?t=400
    // note: Oil-based polyurethane imparts a slight amber tone to the wood, so it’s probably not what you want over a pure-white painted finish. but some still do cause white or light-colored surfaces to yellow after drying or become slightly cloudy over darker finishes such as milk paint.
  }

  
  }

export const paint_shopping = {
  tungoil_goodsmell_pure: {
    source: 'pdd:耐致油漆涂料',
    name: '纯天然桐油',
  },
  outdoor_oil_xinletian: '防腐木油，拼多多 鑫乐天官方旗舰店，8.8RMB/500g',
  /**
   * this is cheap
   */
  wax_oil_sanqing: '水性木蜡油，品牌：三清漆，颜色：栗壳',
  /**
   * I will use this as stain
   * but I believe it also offers a basic level of stain and water protection
   * mostly for indoor use
   * unless I will give polyurethane on top
   */
  paint_royal: '水性木器漆，品牌：皇室智漆 白色 35RMB/2kg',
  /**
   * I painted Billie's desk support with this, the result was OK
   * but I found it not really adheisive to plywood
   * I will abandon this one
   */
  paint_yuese: '水性通用漆，15.9RMB/kg, 拼多多，越色基础建材旗舰店',
  /**
   * water-based, I will keep it for indoor usage, this is not expensive
   */
  water_mixed_paint: '水性调和漆 立邦 保得丽 160RMB/3kg 伊林环宇王xx',
  /**
   * since it is water-based, I won't use it outdoors, even it is permitted on the package
   * Internet told 调和漆是室内用的, varnish is for outdoor use
   */
  water_based_resin: '拼多多 好百年家居装饰店 %80树脂 水性 透明 22.8RMB/kg',
  /**
   * hopefully this will be strong as polyurethane, this is very cheap
   */
  acrylic_jueyou: '京东 亿家美家装，掘优水性地板透明，家居门窗，丙烯酸树脂，NOTE: this is not strong as polyurethane 78RMB/kg',
  /**
   * - indoor use
   * - just a cheaper polyurethane with thinner film
   * - can be a good choice when you want a less plasticy feel
   */
  ployurethane_jueyou: '京东 亿家美家装，掘优水性地板透明，地板，NOTE: this is strong polyurethane 59RMB/400g, 138RMB/kg',
  /**
   * - strong and good
   * - too expensive
   */
  ployurethane_guxiang: '京东 古象685聚氨酯漆 透明清面漆 105RMB/1.25kg',
  /***
   * cheaper ployurethane
   */
alkyd_enamls_changjiang: '和平大街 灯塔油漆专卖 长江金装100 醇酸面漆 70RMB/3kg, 拼多多 59RMB, NOTE: really cheap and strong compareed to others',
  alkyd_enamls_beacon: '和平大街 灯塔油漆专卖 灯塔 醇酸磁漆 树脂含量 15%-45% 30RMB/800g 黑色 理论用量 120g/m2',
  /**
   * 磁漆 enaml 就是带颜色的清漆
  */
  alkyd_varnish_beacon_40: 'oil based ployurethane 和平大街 灯塔油漆专卖 灯塔 醇酸清漆 树脂含量 45%-55% 40RMB/700g',
  /**
   * 
   * 清漆就是 varnish 
   * 带醇酸字样的基本就是 oil-based 是有“耐候性”的, for outdoor usecases
   */
  alkyd_varnish_becacon_30: 'oil based ployurethane 和平大街 灯塔油漆专卖 灯塔 醇酸清漆 树脂含量 45%-55% 30RMB/700g, NOTE: this just cheaper',

  
/* SO, what to use
    - if you want to protect it from sunshine(UV) and water and scratch
      - outdoor: alkyd varnish/paint, 'varnish is less strong than ployurethane, but it offers better UV protection'
        - if you want to paint your deck, this is what you want
      - indoor: water-based polyurethane
        - your floor and tables
      - indoor: wax oil
        - to keep the real wood feeling surface
*/
}

const natrual_oils = {
  tung: {
    /**
     * more durable than linseed https://youtu.be/bsjnRcmC840?t=104
     * people said it's much more water resistant than wax also https://www.youtube.com/watch?v=2CZ7OiobUQY
     * require repaint every a few month
     * less prone to mold than linseed  https://www.youtube.com/watch?v=aklfthQN-q8
     */
  },
  linseed: {
    raw_vs_boiled: {
      /**
       * boiled linseed have much shorter drying time, couple of days rather then weeks https://youtu.be/aklfthQN-q8?t=88
       */
    },
    /**
     * raw vs boiled https://www.youtube.com/watch?v=F8lQKKjk9-U
     * not strong enough for outside https://youtu.be/F8lQKKjk9-U?t=146
     */
    with_wax: {
      /**
       * - how to do boiled linseed and paste wax https://www.youtube.com/watch?v=jbaQC8N096Y
       *   - sand carefully
       *   - apply oil, rag the excess awasy 15min later
       *   - wax it, the next day
       * 
       */

    }
  }
}