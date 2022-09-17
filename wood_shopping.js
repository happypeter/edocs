export const fasteners = {
  screw15: "4mm thick, 15mm long, top dia 12mm, used with sheet_metal_screw_washer", 
  screw70: "拼多多 5x70mm 18.8RMB/1kg 70mm for the base 30mm thick frame lumber for the floor",
  screw35: "10x35mm", 
  screw30: "My main workhourse drywall screw", 
  screw45: "4x45mm 28RMB/1.5kg", 
  joist_hanger_bracket: "拼多多 床横梁托 内宽35mm 1.2RMB x 6", 
  corner_braces: "拼多多 ",
  sheet_metal_screw_washer: "拼多多 彩钢瓦复合垫 8.55RMB/500",
}

export const water_proof = {
  PE_film: "拼多多 鱼塘防水膜 PE 100s 50RMB/20m2", // orderd
  flash_tape: "拼多多 窗户密封防风胶带 防水", // at hand
}

export const hardware = {
  latch: "拼多多 304 不锈钢插销", // ordered 
  hinge: "京东，3寸平开合页", // ordered, 75mm long
}


export const paint = {
  outdoor_oil_xinletian: "防腐木油，拼多多 鑫乐天官方旗舰店，8.8RMB/500g",
  /**
   * this is cheap
   */
  wax_oil_sanqing: "水性木蜡油，品牌：三清漆，颜色：栗壳",
  /**
   * I will use this as stain
   * but I believe it also offers a basic level of stain and water protection
   * mostly for indoor use
   * unless I will give polyurethane on top
   */
  paint_royal: "水性木器漆，品牌：皇室智漆 白色 35RMB/2kg",
  /**
   * I painted Billie's desk support with this, the result was OK
   * but I found it not really adheisive to plywood
   * I will abandon this one
   */
  paint_yuese: "水性通用漆，15.9RMB/kg, 拼多多，越色基础建材旗舰店",
  /**
   * water-based, I will keep it for indoor usage, this is not expensive
   */
  water_mixed_paint: "水性调和漆 立邦 保得丽 160RMB/3kg 伊林环宇王xx",
  /**
   * since it is water-based, I won't use it outdoors, even it is permitted on the package
   * Internet told 调和漆是室内用的, varnish is for outdoor use
   */
  water_based_resin: "拼多多 好百年家居装饰店 %80树脂 水性 透明 22.8RMB/kg",
  /**
   * hopefully this will be strong as polyurethane, this is very cheap
   */
  acrylic_jueyou: "京东 亿家美家装，掘优水性地板透明，家居门窗，丙烯酸树脂，NOTE: this is not strong as polyurethane 78RMB/kg",
  /**
   * - indoor use
   * - just a cheaper polyurethane with thinner film
   * - can be a good choice when you want a less plasticy feel
   */
  ployurethane_jueyou: "京东 亿家美家装，掘优水性地板透明，地板，NOTE: this is strong polyurethane 59RMB/400g, 138RMB/kg",
  /**
   * - strong and good
   * - too expensive
   */
  ployurethane_guxiang: "京东 古象685聚氨酯漆 透明清面漆 105RMB/1.25kg",
  /***
   * cheaper ployurethane
   */
alkyd_enamls_changjiang: "和平大街 灯塔油漆专卖 长江金装100 醇酸面漆 70RMB/3kg, 拼多多 59RMB, NOTE: really cheap and strong compareed to others",
  alkyd_enamls_beacon: "和平大街 灯塔油漆专卖 灯塔 醇酸磁漆 树脂含量 15%-45% 30RMB/800g 黑色 理论用量 120g/m2",
  /**
   * 磁漆 enaml 就是带颜色的清漆
  */
  alkyd_varnish_beacon_40: "oil based ployurethane 和平大街 灯塔油漆专卖 灯塔 醇酸清漆 树脂含量 45%-55% 40RMB/700g",
  /**
   * 
   * 清漆就是 varnish 
   * 带醇酸字样的基本就是 oil-based 是有“耐候性”的, for outdoor usecases
   */
  alkyd_varnish_becacon_30: "oil based ployurethane 和平大街 灯塔油漆专卖 灯塔 醇酸清漆 树脂含量 45%-55% 30RMB/700g, NOTE: this just cheaper",

  
/* SO, what to use?
   * - if you want to protect it from sunshine(UV) and water and scratch
   *   - outdoor: alkyd varnish/paint, "varnish is less strong than ployurethane, but it offers better UV protection"
   *     - if you want to paint your deck, this is what you want
   *   - indoor: water-based polyurethane
   *     - your floor and tables
   *   - indoor: wax oil
   *     - to keep the real wood feeling surface
*/

}

export const plywood = {
  "18mm": {"source": "京东：睿筑旗舰店",  "real-size": "1.22x2.44", "price": "155RMB/sheet", "note": "solid 18mm thickness, with 10 plies, and smooth sandable surface"}, // 华运建材城，伊林环宇 has sth similar, 17mm thick, suface not sandable, 145RMB/sheet
  "5mm": {"source": "京东：睿筑旗舰店",  "real-size": "1.22x2.44", "price": "60RMB/sheet", "note": "smooth sandable surface"} 
}

export const treated = {
  "3x9": {"source": "华运建材城西门门口防腐木榻榻米门市", "real-size": "2.3x8.3x400", "price": "35RMB/one", "note": "quality very bad this time, should have bought the PDD one, and the thickness is simply not right for framing, I ended up doing a lot of end grain nailing, can not be strong"}, 
  "3x7": {"source": "PDD shopName: 防腐木桑拿板碳化木", "real-size": "2.8x6.8x400", "price": "24RMB/one", "note": "wood is soft and cracky, but looks good and straight far away"}, 
  "7x7": {"source": "PDD shopName: 防腐木桑拿板碳化木", "real-size": "6.5x6.5x400", "price": "58RMB/one", "note": "never bought yet"}, 
  "3.8x8.5": {"source": "PDD shopName: 防腐木桑拿板碳化木", "real-size": "NAxNAx300", "price": "32RMB/one", "note": "close to US 2by4 demension"}, 
  "4x14": {"source": "华运建材城西门门口防腐木榻榻米门市", "real-size": "3.8x13.2x400", "price": "70RMB/one"}, 
}

export const lumber = {
  Shiplap: "槽口接缝板 50RMB for one ", 
}

export const channel_board = {
  "2x14": {"source": "华运建材城西门门口防腐木榻榻米门市", "real-size": "", "price": "56RMB/one"}, 
}
/* 
      - OSB:
        - 15mm 98RMB
          - this is low Enviroment standard product, same thing in 伊林环宇 is 110RMB, still much more expensive
            - high Evn standard from 伊林环宇 is 145RMB, insane!
        - 9mm 70RMB 
          - price in 伊林环宇 is 80RMB
      - transportation fee: 70RMB
        - paid 70RMB more for home delivery truck, 
        - 50RMB for moving the boards
  

- white pine wood strip 20x30
  - 华运建材城，伊林环宇
    - 4strips/pack 23RMB
    - 32x20x2382 5.75RMB  3772RMB/m3

  - Osong OSB 欧松板
    - 华运建材城，伊林环宇  
    - 15mmx1.2mx2.4m 115RMB
 
 
- interior lumber
  - The US https://www.youtube.com/watch?v=2kjOoZ3lRTs
    - 2by4 x 25 + 4by4 x 2= 101USD 
    - 2by4 is 1.5x3.5inch, 3.8x8.9cm
  - PDD 凯森板材 interior Pine
    - 25x145x4000 86RMB 5931RMB/m3
    - 32x130x4000 90RMB 5409RMB/m3
    - comment: Beautiful color and texture, good smell, a bit soft
  - PDD shopName: 防腐木桑拿板碳化木
    - interior pine 83x17x4000 24RMB 4252RMB/m3 
      - 72RMB/sqm(take 17as thickness) this actually more expensive than plywood
        - I want to build thick benchtop with this
          - 24RMB, you get a 8.3cm thickness, 6.8x100 , 352RMB/sqm
            - my elm board is 360RMB for 5x110x55cm(0.605sqm), 600RMB/sqm
      - x 10
    - 免漆直板（松木）12x80x4000 24RMB 6250RMB/m3
    - 83x17x4000 24RMB 4252RMB/m3 , take 17 as thickness, 72RMB/sqm
    - 83x12x4000 20RMB 5020RMB/m3
    - 81x8x4000 16RMB 6172RMB/m3
    - 45x68x4000 60RMB 4900/m3
    - 27x145x4000 65RMB 4150/m3 (cheapest option)


  - Note
    - it is more expensive than treated ones, because they are dried
    - so for complex structures, I will go to this, not treated lumber
    - but for simple things, like bench legs, or shelf, I will use treated lumber

- 碳化木
  - 8x85x4000 14RMB 
    - 5147RMB/m3
  - 24x105x4000 36RMB
    - 3571RMB/m3
- 桑拿板
  - 8x83x4000 14RMB
    - 5271RMB/m3


-  15cm OSB (Osong board) or Plywood
    - you can make furniture with OSB https://youtu.be/fkVfX2hUlc8?t=3099
    - you can sand it https://youtu.be/fkVfX2hUlc8?t=3700
    - https://www.lubanyuan.cn/cailiao/renzaoban/1385.html
      - OSB is better insulation and more sound absorbant 
    - https://www.youtube.com/watch?v=zCPlL9UQGT4
      - Plywood is far more strudy
      - https://youtu.be/d9uBHHzjDOs?t=117
        - OSB has more shear strength
        - OSB holds nails and screws well
*/