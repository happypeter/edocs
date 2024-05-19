

const ideas = {
  grid_plan: 'yard will be dvided into many squares with labels',
  grade: 'each square is a leveled, grade free, area, only joineries has grade',

  /**
   * https://happypeter.github.io/githome/imgs/20240403/
   */
  next_versioin_water_hose: 'current one is too heavy, next version will be yellow color and thin, and extentable with PVC pipes'
}

const vege_garden = {
  north_east_corner: {
    id: 0, //may be referred as block0
    position: {
      south_north: 'from north wall to garage wall',
      east_west: 'from yard wall to garden',
    },
    /**
     * close to neibor's house, will be a storage area with low roofs
     */
  },
  garage: {
    id: 1,
    main_use: 'typical garage, for veicle, also with storge',
  },
  gate_way: {
    id: 3,
  },
  south_east_corner: {
    main_use: 'this should be a better place for my scooter storage, south side means sunshine can be kept away easier'
  }, 
}

const out_gate = {
  north_storage: {
    id: 21,
    main_use: 'store sand/gravels'
  }
}

const storage_areas = [
  /**
   * I will have places for sand/gravels/lumbers/boards, alone the main pathway where trucks can go on
   */
  out_gate.north_storage,
]



const grid = {
  /**
   * from east to west
   */
  out_gate,
  vege_garden,
  main_house,
  west_house,
  out_east_gate,
}



const time_spent = {
  side_walk: { hr: 5, date: 20221116 }
}

export const yard_building_color_theme = {
  // I will go the black+wood theme for most the buildings
  // https://www.youtube.com/watch?v=b4W-YeAUmnM&t=654s
  // this is a natural color theme
  burned: "not black, burned color, as my square poles for my carport", // https://youtu.be/J4quKHOxucY?t=113
  // "black magic" https://youtu.be/b4W-YeAUmnM?t=1214
  snow: "white is OK, since winter has snow",
  reclimed_wood: "pale gray color, see my carport",
  black: 'black and gray', // 
  OSB_color: "rich yellow"// my carport is a example
}

const guidelines = {
  clear_lines: "keep most things to its natural color, use transparent finish is OK, but going too natural meaning everything mixed together, so have strong contrast of two material color, or if the plywood and door are both shitty similar wood color, just paint the door white, the yard need clear lines",
  wood_in_center: "wood color only in the frame of pure colors",
  no_slope: "for concrete work or anything, use stairs to get different levels",
  nothing_but_boxes: "go "
}



const undground_power_cord = {
  /**
   * the only underground power line goes along side with the water line to the south wall https://happypeter.github.io/githome/imgs/20240412/
   */
}
