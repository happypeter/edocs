import french_clean from "french_clean"
import workshop_plan from "workshop_plan"
const shopping_list = [
  polyurethane: "清漆" // 清漆 is resin, expoxy, polyurethane, they are all resin  https://www.youtube.com/watch?v=kTxr4Z4mwj0 , so they are going to be very strong
  // if you do desk/table tight ploy is the only option, since its very water resistant, https://youtu.be/WqB8eSkh_TE?t=1393
  // even on walnut table top, you should use polyurethane https://youtu.be/mthlxoMhmGQ?t=420
]
const nail_solid_board = () => { 
  // solid  wood tends to expand and shink, so when you nail a board to sth, nail in the middle of the grines
}
/*
- a Plan
  - Master Cutlist/MaterialList https://www.youtube.com/watch?v=Lzm621Lp1oA
  - 'test the structure integrity'
- Goto .c files
  - make sth works, don't just learn
    - each .c files is about a workflow to solve one or more problems
      - say, cut_big.c, NOT circular_saw.c
  - go to specific numbers, don't rely on so-called experience
  - go to match avoid radmon ships at all cost
    - even though the curves for the holders are sweet https://youtu.be/S9PTFizoA64?t=29
      - I don't use them if I they are not easily fit into a math formula
        - even it fits into a simple formula, it can not be cut by power tools, I will try to aviod it. I won't goto grinders all the time
        - Some times, simple angles with flat surfaces can do the job just fine

  - take notes as comments of each function or variable value
  - if it is not documented and measureed, it can not be managed
  - if it is not managed, how can u do iterations on the design
- software
  - use plain text, use markdown and C grammers
    - I can also build libs and import them into big projects
      - say `#include <lap_joint.h>`
      - each component could be function, you pass new parameters to it, you get the result suit for your current project
        - no matter to hold lumber or pencils, a shelf support is a shelf support, just different sizes
    - I will limit my furnitures to only simple shapes, I will avoid anything hard to depict with numbers.
      - design like a mechanical engineer, not artist
    - I know when the structure is really complicated, having a sketchup model really helps to grasp the whole idea quickly, but I believe with text and some youtube videos, I am good for now.

- tricks
  - how you get a level benchtop
    - you really need a chop saw for precise cuts
    - you do need a level surface to assemble everything https://youtu.be/eiT9wmb_wK4?t=133
    - legs upright
      - use a level ruler to make sure the legs are vertical https://youtu.be/eiT9wmb_wK4?t=148
      - use ruler https://youtu.be/jAEykXezb6I?t=272
    
- design guideline
  - for frequent tools, frech cleat
  - otherwise, go to my old shelf-box-system


 
- grinder
  - people do use steel wool to clean wood https://youtu.be/NM6HWN5tFxQ?t=259
  - to a chop saw https://www.ixigua.com/6860774411868307971
    - https://www.ixigua.com/6778778149560779267
    - https://www.ixigua.com/679278137055798938
  - to a circular saw
    - https://www.ixigua.com/6995787129284461059
    - DONT use wood blade on one hand https://www.ixigua.com/7030034085242208782
      - cause you have on control when kickback happens
  - a lot of heads https://www.youtube.com/watch?v=Z4_grBC-U80
  - it needs a handle https://youtu.be/FmgDFa-jO_E?t=611
  - you can use masonary blade for metal https://youtu.be/ZOFrzLpBqf4?t=98
  - mind the direction of the blade, when installing
- circular saw
  - cut whole sheet of ply wood
    - with a tracksaw and insulation foam board https://youtu.be/_0H71D7dSDQ?t=219
  - to a [track saw](project_track_saw.md) https://www.youtube.com/watch?v=xYkUsN9Ug_M
    - https://www.youtube.com/watch?v=5g5pvVXwClg
    - with DIY track https://www.ixigua.com/6765128379713716740?id=6734510358418948622&logTag=f6d45626a84809ad012f
    - with DIY track https://www.youtube.com/watch?v=Tw8aKKZaU3U

  - how to use https://youtu.be/ZOFrzLpBqf4?t=325
  - cut notches https://www.youtube.com/watch?v=JFdHBLSc12E
  - cut in the middle of large board https://youtu.be/ILVCdEOhYBc?t=71
  - super simple guide https://www.ixigua.com/7018549039889121800
    - with clamp track https://www.youtube.com/watch?v=KpFUkt424G4
    - easy to clamp version https://www.youtube.com/watch?v=HLsNYd5FmoY
    - with handle and aluminum edges https://www.youtube.com/watch?v=myH1byN0uUk
    - to a track saw https://www.youtube.com/watch?v=H0BZLbW1lvQ
  - kickback
    - away from line of fire https://www.ixigua.com/6947393410823094814
  - home brew 裁板神器 
    - https://www.ixigua.com/6951271248978510350
- workingSpace
  - a small  Mobile Workbench & Rolling cart, which follows me whereever I am
    - https://www.youtube.com/watch?v=aC8oFt7nG-M
  - it is a checkout version of my frech cleat, holding tools I use for just this project
 must be heavy enough, OR maybe you need a lock https://youtu.be/M5NnFkpUXmY?t=587
    
- shelf box system(for put aways)
  - wood storage
    - https://youtu.be/pIJG7Zp8iN4?t=725
    - https://www.youtube.com/watch?v=nZtIEFa3Ofk
    - https://www.youtube.com/watch?v=jzdZte3UZuo
  - heavy power tools with cord
    - e.g router, jig, oscillating, power drills
    - put in a shallow box low on a shelf board
    - may or may not put a accessory box of its own next to it.




## saws
- table saw
  - see table-saw.md
  - home made small one https://www.ixigua.com/6902383401379037700?id=6815396543114248708&logTag=060fa4892aad0186d6e1
- miter saw, aka chop saw
  - I need a clamp, for stoppers https://www.youtube.com/watch?v=ciJM6Uzw1C8
  - home made small one https://www.ixigua.com/6902383401379037700?id=6819982649264701964&logTag=93f53d98df55f9b96eff
  - cut small things https://youtu.be/k1wMsF75k_w?t=1937
  - https://youtu.be/RPUgrhnJVbU?t=279
    - easy the blade gently into the wood and relase the power triger and let the saw come to a complete stop before rising it back up
  - this extensible table is a MUST https://www.ixigua.com/6948656386586706436
  - use T track to add measuring https://youtu.be/BYwPhh0jjwA?t=782
  - the fence https://youtu.be/mHJEpsFg17U?t=36
- jigsaw 曲线锯
  - Dekay: jigsaw table, https://www.ixigua.com/6968276109037142532

- square
  - square and F clamp https://youtu.be/KqKZh90cvg8?t=35

## Drill
- if I want another drill, https://www.ixigua.com/7030765281689469478?logTag=f6dbb554361ced604ca8
- router out of a drill https://www.youtube.com/watch?v=TPyGjoT0CJc
- [drill_price](drill_prißce.md)
  - best: very simple and cheap one https://www.ixigua.com/6771779510745432589?logTag=86b94777be3ea9738b48
  - home made portable drill press https://www.youtube.com/watch?v=iu8Np0JfCCc
    - https://www.ixigua.com/6776506946183758343?logTag=4537775b6c7df564ffbd
    - https://www.ixigua.com/6801434241583284739?logTag=edc8e15790daa75fa8f7
  - with PDD double track https://www.ixigua.com/6962089357553599013?logTag=fe651fabe5af442f8630
  - with drill press, lots of cool things are possible https://www.youtube.com/watch?v=uz13I6PF8Ew&t=206s
  - without drill press, you can not make this bearing structure https://www.ixigua.com/7011304413516333604
- mini drill with milling cutter https://youtu.be/7ix0qdSyLNI?t=414
- horizontal install with wood https://youtu.be/uz13I6PF8Ew?t=36
  - this one easier https://youtu.be/fi-CmIeht24?t=8
    - https://youtu.be/0QJgzb9RYVE?t=812
- verital install
  - https://youtu.be/fi-CmIeht24?t=127
- mini drill grinder
  - this also very powerful https://www.youtube.com/watch?v=ByFg1dOc1sA

## other tools
- homemade Ruler Marking Gauge
  - https://www.youtube.com/watch?v=Wfx4im67Q7Y
- lighting
  - shadeless light https://youtu.be/3rdtuuFbcqM?t=61

## Cool stuff
- hand tools https://www.ixigua.com/6957771654256656910
- joint https://www.bilibili.com/video/BV1Pi4y197Xs
- magnetic clamp https://youtu.be/UN6Ej60DM0U?t=367
- threaded insert screw https://www.youtube.com/watch?v=wifYMPWB1IE
- sink bolt into wood to make a knob https://youtu.be/iHDvAKmVlNo?t=241
  - use vise https://youtu.be/KqKZh90cvg8?t=296
- build a knob
  - https://youtu.be/CStLQkg3GLQ?t=600
- consider this A clamp, if my current one fails
  - https://youtu.be/N2USF9mTqxs?t=21
- wood scriber https://www.youtube.com/watch?v=wSlVD0P3mmE
- sanding block https://www.youtube.com/watch?v=Ueo3gpW8_F4
- curved shapes, like this grinder holder
  - certain grinder plate is needed https://youtu.be/k1wMsF75k_w?t=361
    - https://youtu.be/k1wMsF75k_w?t=510
    - https://youtu.be/k1wMsF75k_w?t=738

- grinder wood cuting
    - cutting wheel either side face out is OK https://www.ixigua.com/6927206154862854656 (check comments)
    - use 3 teeth blade https://youtu.be/0Xn8t1OHmyk?t=76
    - grinder rotated in different direction compared to circular saw
      - aka "grinders cut on the 'pull'" https://youtu.be/0Xn8t1OHmyk?t=162
      - when I pushed the grinder forward, it tends to fly away from me
        - for grinding, it is actully a nice feature, cause when kickbacks happen, the machine won't fly towards people https://www.ixigua.com/7044447906153103911?logTag=8c044b8b249020c3b9c1
    - if I want grinder rotation in same direction with circular saw, rotate the guard 180 degree
- how to use routers
  - https://youtu.be/gxT1rQgr7Hw?t=625
  - https://youtu.be/iT7N0iffLd8?t=106
  - DIY router table https://www.youtube.com/watch?v=sxQPuQV1Oak
- double glass window https://www.youtube.com/watch?v=4kOU0P7J5lk
- glue types
  - https://youtu.be/Ycq_qwfk62s?t=90
  - acrylic
  - Silicone
  - Adhensive

## nailer
  - air compressor
    - a cabinet for it https://www.youtube.com/watch?v=SZGykd0ipkQ
    - use screw driver to open the plastic container, then use wrench to change the pressure setting. 130pa is good for my ST38 and T50 and all. But not that good for ST50
  - make sure to pull the safty valve from time to time, not it sets to be triggered at 130 or so.
    - it is not that much pressure inside
      - cola bottle version: https://www.ixigua.com/6449931719012254222
    - https://www.ixigua.com/7037402822262194726?logTag=eaccc86683baac0d0cfd
    - how to use the red button on top https://youtu.be/eJo3JMkv3JE?t=359
    - what is a air-intaker  https://youtu.be/eJo3JMkv3JE?t=382
    - when it is ready https://youtu.be/eJo3JMkv3JE?t=397
    - can you plug and unplug with pressure in tank https://youtu.be/eJo3JMkv3JE?t=428
    - why you may need a bigger tank https://youtu.be/eJo3JMkv3JE?t=446
    - how to handle leakage https://youtu.be/ck-iOvFGWdw?t=511
      - https://www.ixigua.com/6741629179424408067
    - the drain, and drain it everyday https://youtu.be/ck-iOvFGWdw?t=530
    - change air filter every 500hrs https://youtu.be/oqimm0E6x0U?t=261
    - change pressure https://youtu.be/oqimm0E6x0U?t=403
      - https://www.ixigua.com/6764330041347146243?logTag=4fe8fd45a2d46156bb6e
      - https://www.ixigua.com/6798407334830801411
    - 安全阀 Pressure Relief Valve
      - 安全阀在系统中起安全保护作用。当系统压力超过规定值时，安全阀打开，将系统中的一部分气体排入大气，使系统压力不超过允许值，从而保证系统不因压力过高而发生事故。安全阀又称溢流阀
      - https://www.ixigua.com/6764330041347146243
      - replace a valve https://www.youtube.com/watch?v=PB6s7ssoIHg
      - basics https://www.youtube.com/watch?v=Isc08DU6WTE
      - my job is to make sure the value is not blocked by dragging from time to time
        - https://youtu.be/oqimm0E6x0U?t=597
      - http://www.chanun.com.cn/articles/kyjylr.html
  - workshop
    - I will have several cabinet with wheels and drawers put against the wall. Top of the cabinet will be used as table.
    - my vaccum will sit in a cabinet, close to the floor, or above the cabinet table top. Anyway, it will be placed in the northeast corner, so plan ahead.
  - cut big boards
    - holding https://youtu.be/1zk3Lm3_avI?t=151
  - finish MDF https://www.youtube.com/watch?v=NxQ2oyarkds
  - miter with table saw fence https://youtu.be/TjdtAZpsXCk?t=147
  - laser
    - laser stand https://youtu.be/LuHthQanFVg?t=533
    - for lower use cases: I remodel my Chrimas Tree
    - for fasle ceiling, I masonry nail a wood strip
  - install table top to the stand https://youtu.be/0V4j8qhYrpQ?t=986

    */


const paints = {
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
  if(out_door?) {
    // use color paint is best https://youtu.be/WqB8eSkh_TE?t=70
    // or use oil-based polyurethane https://youtu.be/WqB8eSkh_TE?t=240
  } else {
    stain() // and then use trasparent paint
  }
   
   prime(soft_roller, brush) // https://youtu.be/JAJt8Tsn5yQ?t=232 , don't just use brush, too slow
   paint() // keep it thin
   wait() // till the first code dry
   paint()
   wait()
   sand() // onlyy sand the second coat, https://youtu.be/JAJt8Tsn5yQ?t=366
  if(paint_corlor != WHITE && water_exposed) {
    top_coat(paints.polyurethane) // polyurethane,  wipe it on https://youtu.be/JAJt8Tsn5yQ?t=400
    // note: Oil-based polyurethane imparts a slight amber tone to the wood, so it’s probably not what you want over a pure-white painted finish. but some still do cause white or light-colored surfaces to yellow after drying or become slightly cloudy over darker finishes such as milk paint.
  }

  
  }