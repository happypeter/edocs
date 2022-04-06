/*
- don't overwork
  - use cleat and 5mm plywood(white paint) as main finish
    - whenever needs shelves, use 18mm plywood, or 15 OSB
  - for special purpose area(curves, waster, stain), use oil finished concrete surface
- apply another layer of cement(mixed with some 墙固，水性固化剂)
  - like this https://www.youtube.com/watch?v=3lehA6IO56w
  - if I want more smooth surface, I can sand the walls
  - 墙固 can even make sand water proof https://www.bilibili.com/video/BV17Z4y1G7ZT
  - from 抖音@大理十宿民宿东哥
    - “纯水泥加水搅拌，调到类似乳胶漆的粘稠度，用滚筒滚在墙面上”
- make the surface easy to clean
  - apply 水性地坪漆：”三青漆地坪漆水泥地面漆“ ”罩光透明清漆“， bookmarked on Douyin
    - 墙固 is like double side tape, it is sticky even after it drys.
      - NOTE: 墙固 is also called 界面剂，which is NOT 罩面漆. 
      - 抖音@大理十宿民宿东哥: 罩面漆就是透明胶，界面剂就是双面胶
  - before 罩面漆，you need to garentee the suface has been "水泥收光找平”.
- bathroom walls
  - copy 抖音@大理十宿民宿东哥 , use "柔韧性防水，加水泥的”
- make rooms bright
  - concrete does not reflect well
  - so I will nail light color plywood to the walls if necessary
  - or hang some big white background pics
*/

/*
- mostly paint to white to make rooms bright
*/

int finish() {
  roller_paint(times=3, material='cement') // to seal the little holes on the rough surface
  sand() // my goal here is not to achieve flatness, but to make it smooth enough so that the wall is comfortable enough to touch
  apply_bonding_primer() // I use 墙固，界面剂 https://www.yidoutang.com/guide-27755.html
  roller_paint_latex() // https://youtu.be/ugr3nVbIpD4?t=518
}