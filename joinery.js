const shopping_list = {
  wall_hung_bracket: {
    source: 'PDD 加厚不锈钢角码，直角固定器，誉马骏鑫专卖店'
  },
}

/*
- screw types
  - my self-drilling screws are for metals not wood
    - it cuts threads in the materil https://youtu.be/WtS4r0SRygY?t=260
- what is joinery?
  - how to attach a piece to another
  - the process of joining wood together
  - https://youtu.be/7vZ_ZyHnOFM?t=46
- ways of joinery?
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

const wall_hung_joinery = () => { 
   use(shopping_list.wall_hung_bracket);
}

const main = () => { 
   wall_hung_joinery();
   
}

export default main;