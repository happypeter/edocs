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