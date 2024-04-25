
const images = {
  slab: 'https://happypeter.github.io/githome/imgs/20220718/',
}

const traps = {
  enough_conrete: 'do make more than eough concrete, before you fill in the forms, the leftovers will be made into smaller bricks',
  cut_joints: 'use forms to get natrual edges, as future joints, not possible to cut a clean line on the half dry concrete, just dont do it',
}


const tools = {
  float: 'long handle, 270RMB, 拼多多， 推拉大抹子',
  trowel: '20cm long  finishing trowel, 9RMB 拼多多',
  edger: '20RMB 拼多多，水泥修边刀'
}


const form = {
  /**
   * rule of thumb, use a form for any work, yes ANY
   * 
   */
  main: {
    height: 6, //6cm, or more
    size: {
      overall: {
        lumber_thickness: 5,//cm
        width: 90,
        length: 230
      },
      block: {
        number: 2, // each form contain 2 block and a gap
        width: 80,
        length: 100,
      },
      gap: {
        width: 30,
        length: 80,
      }
    }

  }
}


let solidify_the_edges = () => {
  /**
   * use a stick to poke the edges
   */
}

let fill_in_concrete = () => {
   /**
    * use @tools.trowel to make it generally flat
    */
   even_the_surface(tool.trowel)
}

const screed = () => { 
   /**
    * flatten the surface by rubbing along the form frames
    * and make sure no pegs/stakes or any surface is higher than the form, so and it will be easy to screed https://youtu.be/3vz7s0COJV0?t=1310
    */
}

const finish = () => { 
  /** 
  use @tools.trowel hand float， tip the mag up https://youtu.be/365f0QV-aOs?t=346
  // have the trowel's one side tilted https://youtu.be/3vz7s0COJV0?t=1526
  // https://youtu.be/s1u30qLejdA?t=315 that is still early,
  // so it's generally 3hr you need to wait between pouring and final magging
  // when your finiger sink in 1/4 inch https://youtu.be/s1u30qLejdA?t=416
  // now is also the time you can walk on the slab https://youtu.be/s1u30qLejdA?t=494 
  */
}

const mix_concrete = () => { 
   // cement:sand:gravels=1:2:6
   dry_mix_cement_n_sand()
   rest(10) // take a 10min break
   add_water_mix()
   add_gravels()
}

const set_foundation = {
  /**
   * 3cm gravels, to make the concrete frost proof
   */
}

let bull_float = () => {
  /*
  - bull float works beautifully, the prerequiste is to use finish trowel to take care of some flawed spots
    - It's wise to use finishing trowel more before bull float
    - the final finishing with finish trowel is esay and even optional if I do enough work before bull float
  -  https://youtu.be/lUTkrI8FFuM?t=311
  - for small projects, use long trowel to giva a rough go
  */

}

let main_process = () => {
  set_foundation()
  set_form()
  mix_concrete()
  fill_in_concrete()
  solidify_the_edges()
  screed() 
  wait(10) // don't wait for more than 10min in dry days
  bull_float(tools.float)
  finish()
}