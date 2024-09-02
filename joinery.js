/**
 * check this for joinery terms https://www.youtube.com/watch?v=p1aQQQDXrc8
 */
export const joinery_shopping_list = {
  wall_hung_bracket: {
    source: 'PDD 加厚不锈钢角码，直角固定器，誉马骏鑫专卖店'
  },
  wood_angle_bracket: {
    source: 'PDD 小孔角码，镀锌角铁',
    size: '30 wide, 50 tall, 50 deep, 3 thick'
  },
  concrete_angle_steel: {
    source: 'PDD 热镀锌冲孔角钢',
  },
}

const screws = {
  pan_head: {
    stainless_16: {
      price: 0.05, 
      why: {
        stability: 'mostly with water proof washers, even though it is stainless, not magnetic, but still my screw driver head holds it when the angle is atound 45degree from gravity direction, I had used pockect screw for the job, but they are long and thin, hard to be kept on top of my screw driver bit',
        durable: 'its stainless, so perfect for outdoors',
        source: 'PDD 304不锈钢大扁头螺丝木牙',
        length: '16mm is the thread length, which is more verstile than any other length, I find anything shoter is harder to reach base material, longer can pierce to the other side of the base 15mm OSB base material'
      },
      zinc_16: {
        price: 0.07, 
        why: {
          stability: 'is is magnetic and the head is a bit bigger than stainless_16, so more stable to hold with my screw driver, when I work will awkward postions, this matters',
          durable: 'probably not as good as stainless, but I had a lot of them working outside for 2years, still in good shape',
          source: 'PDD 高强度自攻螺丝大扁头大头十字',
          length: 'thread length is also 16mm or so, , used as a alternative to stainless_16',
        },


      
    }
  }
}


/*
- what is joinery?
  - how to attach a piece to another
  - the process of joining wood together
  - https://youtu.be/7vZ_ZyHnOFM?t=46
- ways of joinery?
  - use screws, counter sink, with holes covered with dowels https://www.youtube.com/watch?v=AIfv7E6bpA0
  - fasteners
  - you can use intermediary wood, dowels and biscuits
  - shapes, like dovetails
  - join wood
    - watch the grain direction, because wood a just a bunch of straws https://youtu.be/lKxUQKRjoEQ?t=34
    - mortise and tenon 榫卯
    - 10 Best Butt Joint Methods  https://www.youtube.com/watch?v=B1A3aiEHIzks
      - but whenever proper, I will stick to screws, because I keep things upgradable
     
    - why pocket holes?
     - diy pocket hole jig https://www.youtube.com/watch?v=teKyntvvHy4
       - https://youtu.be/CFcSNfGbUmQ?t=466
     - butt is weak https://youtu.be/EwJI06iyI4I?t=113
     - mortise and tenon is expensiveg
     - you need to follow the direction of the grain
       - https://youtu.be/lKxUQKRjoEQ?t=168
     - don't use pocket holes to attact table top
       - https://youtu.be/lKxUQKRjoEQ?t=341
       - screws in general does not expand together with wood
         - https://youtu.be/0_BEhdEvLUo?t=896
           - so consider dowels in this case
    - dowels may replace pocket holes
      - https://youtu.be/epPHaxDCv48?t=230
*/



const make_pocket_hole = () => { 
   
}


/*
- wall hung cabinets
  - version 1: have a board nailed to the wall, then build a cabinet with strong backboard, use some 20 screws to attach the cabnet to the wall nailed board, this works, but really a redudent, wasteful solution
  - version 2: use 3-face wall hung brackets, then the cabinet can use a very thin backboard(or even no backboard at all)
*/

export const wall_hung_joinery = () => { 
   use(shopping_list.wall_hung_bracket);
}

/**
 * attach angle steel to concrete with expansion screws
 */
export const pole_concrete_join = () => {
  use(shopping_list.concrete_angle_steel)
}

export const nails = {
  '8': '8cm nail for reclaimed 4.5cm thick lumber'
}

const miter_joint = {
  /**
   * how to cut perfct 45degrees https://www.youtube.com/watch?v=TBYYefxqOBQ
   */
}

export const angle_iron_punched = {
  '5': '5mm is too much a overkill if you want to use bolts or expansion screws <6mm, 20RMB/80cm, price is good',
  'hurrcane_tie': 'I can make a tie with two angles and two strips',
}