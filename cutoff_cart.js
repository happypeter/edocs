
export const cutoff_cart = () => {
  // copy https://youtu.be/CFcSNfGbUmQ?t=807
  // have a=1.04cm b=9.94cm, then the angle is 6degree
  get_6_degrees(); 

  /*
   - since this is a WIP, I won't cut dados on the backboard to keep its resuability
   - I dont need the shelves to be very wide for two reasons
     - keep the cart slim, should I get the cart out of its room
     - these shelves are not intended for wood blocks, but long strips
  */
  shelves();

  skirts();
  /*
  - make sure the front and back skirts extended downward to the bottom frames
    - https://youtu.be/CFcSNfGbUmQ?t=807
    - to get a more sturdy structure
  */
}