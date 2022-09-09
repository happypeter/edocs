import { yard_building_color_theme } from "yard"


const shopping = {
  flat_sheet_metal: "拼多多 平板彩钢瓦 护墙板 0.25mm 14RMB/m2",
  flash_tape: "拼多多 窗户密封防风胶带 防水", // at hand
  PE_film: "拼多多 鱼塘防水膜 PE 100s 50RMB/20m2", // orderd
  screw15: "4mm thick, 15mm long, top dia 12mm, used with sheet_metal_screw_washer", // at hand
  screw70: "拼多多 5x70mm 18.8RMB/1kg 70mm for the base 30mm thick frame lumber for the floor", // ordered
  screw35: "10x35mm", // at hand, join 17mm OSB to frame
  screw45: "4x45mm 28RMB/1.5kg", // ordered, join 24mm thick main frame lumbers
  joist_hanger_bracket: "拼多多 床横梁托 内宽35mm 1.2RMB x 6", // ordered, https://youtu.be/WgEjjTppOp0?t=404
  corner_braces: "拼多多 ", // at hand, for the four corners of floor
  sheet_metal_screw_washer: "拼多多 彩钢瓦复合垫 8.55RMB/500", // ordered
  Shiplap: "槽口接缝板 50RMB for one ", // in hand
}


const roof = () =>{
  double_top_plate() //https://youtu.be/gKKJkQS4l8c?t=662
  cut_angles_rafter() // https://youtu.be/BLk_CAMmQPc?t=5357
  if(ROOF_IS_THICK) {
    bird_mouse() // for my shed, the roof is so thin, so I don't need this is necessary
  }
  }
  grade() // keep snow in mind, not just rain.
  // Update: give up on the sheet_metal_finish, go HomeRenovation Way, bought PE_film for the job
  sheet_metal_finish() // https://youtu.be/b4W-YeAUmnM?t=17 
  flash() // https://youtu.be/DGmLFvZ7Jg0?t=27 vs https://www.youtube.com/watch?v=UvLpM_MZB8M
  /*
  - step1: have a flash under sheet metal https://youtu.be/vvDurqjtcYY?t=1050
  - step2: trim the side https://youtu.be/vvDurqjtcYY?t=1551
  - step3: trim with another flash above sheet metal 
  */
  cut_sheet_metal() // cut sheet metal with grinder or just a knife https://youtu.be/b3JgPX5fVUo?t=3621
  bend_sheet_metal() // use roller https://youtu.be/KdMtecvnPRI?t=284 or just a knife https://youtu.be/b3JgPX5fVUo?t=3621
  
}

const shelves = () => { 
  // https://youtu.be/jDnxNPAIWTk?t=329 
}

const faces = () => {
  /*
  - walls and roofs are all faces of this cuboid object, namely the house, here
  - so I will try to use same framing/sheathing/wrapping/shingling for all of them, unless this is a reason not to do so
  - why I don't use things like sheetMetal/waterTightSheet/复合板 as the faces? they don't have any structure stength
    - even I am building a shed, I still want to hang things on the wall
  - so I will use woodframe+OSB as the basic structure for the faces
    - I will use water proof wraps on top of the OSB
      - use 大棚膜 is enough, its cheap
        - or anything, e.g. bags https://youtu.be/BzSeGJF6RhM?t=850
      - use flashing tape and nails to fasten it to OSBs
    - now use shingles for the roof, and some shingle-ish surface material for the walls
      = roof shingles https://youtu.be/d9uBHHzjDOs?t=173
      - we do have wall shingles https://youtu.be/o5suD8iZA1I?t=629
      - this shingles can be thin and not that water tight
      - just keep the sunshine awary from the wall wrap underneath
      - use wood as wall shingles https://youtu.be/9p169VHPE9s?t=566
        - https://youtu.be/i-Hl10ogJTQ?t=1964 Pine Chanel siding
        - do have gaps between each strip of the siding, otherwise the sidings may expand and end out will a bulging wall
      - we can use thin plywood as exterior wall surface https://youtu.be/b4W-YeAUmnM?t=1158
        - yes, plywood is nice 
    
    - trims
      - use shopping.flat_sheet_metal https://youtu.be/o5suD8iZA1I?t=1221
  
  */
}

// const windows = () => {
//   // use tape https://youtu.be/wPmWk9PpZDY?t=762
//   // use 亚克力玻璃 I bought on 拼多多
//   window_frame() //
//   flashing() // https://youtu.be/cVckyMUJHQI?t=50
//   // the idea is simple, you tape the top of the flashing https://youtu.be/mLGxgTAAKQg?t=2318
//   // and then do the wall shingles on top the tape
// }



const sizes = () => { 
 // front height 1.8m, back height 1.6m, deck floor to ceiling
 // 1.5(wide)x1(deep)m, put it on the south side of the gate
}


const location = () => { 
  // south side of the wall
  // make sure the gap betwween yard and shed wall is water free and airy to make it mostly dry 
}

const foundation = () => { 
  concrete_stepstone() // four stepstone to form a leveled base on top of a sloped concrete ground
  // https://youtu.be/5OOk2VxTw9I?t=198
}

const open_roofed_area = () => { 
  // extend a roof with no walls https://youtu.be/b4W-YeAUmnM?t=24 
}

const cement_storage_shed = () => { 
  // small, no windows, water tight to storage my cement
  location()
  sizes()
  foundation()
  install_osb_before_assemble() // https://youtu.be/2el0GYedDHs?t=361
  faces()
  roof() 
  use_theme(yard_building_color_theme)
  shelves()
  open_roofed_area()
}

export default cement_storage_shed

