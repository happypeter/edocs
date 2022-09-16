const breakers = {
  source: "京东，公牛，空开，漏电保护器",
  capcity: "c40"
}

const fix_power_outage = () => {
  // fix it, when it is a leakage protector switch off problem
  press_test_button() /*
   the orange button on the top, it is for testing if the breaker still works
   so by design, it should have no effect on fixing power outage problem. But however pressing
   this button made a difference for me today, maybe it accidentally fixed some mechanical stuck in the leakage protector 

  */
 press_down_blue_button() // this is a MUST
 switch_on()
}

const wrap_cables = () => { 
  overlap_tape() // https://www.bilibili.com/video/BV1Jy4y1n7ep/ 
  wrap_T_shape_joint() // https://www.bilibili.com/video/BV1Jy4y1n7ep/
}

const join_cables = () => { 
  two_solid_wire() // https://www.bilibili.com/video/BV1dy4y1t7sb 
  stranded_to_solid() // 
  T_joint_stranded_to_solid() // https://www.bilibili.com/video/BV1294y1f7yX
  3_solid() // https://www.bilibili.com/video/BV1dy4y1t7sb
}