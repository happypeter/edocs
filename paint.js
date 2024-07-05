const paint_furniture = {
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