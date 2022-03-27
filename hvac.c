/*

- 空气能 is nice and cheap https://www.ixigua.com/7034431111501447716
- floor heating is good
  - it is most energy efficient way to do heating, not sure
  - with it, I don't need to worry about insulation for floor

*/


/*
- fresh air
  - use pipes to connect all the room, open vent on every ceiling, only have one one vent connected to outside, considering having HRV at the vent, https://youtu.be/secB3R0sIYU?t=338`
*/
int ventilate_rooms() {
  open_holes_on_ceilings(); 
  
  /*
   - hot air from room go stright to exterior, NOT attic
   - now it's not possible to install the pipes in attic
     - I can do it next to water pipe, and hide them together, like typical central airconditioning style vent
       - https://image.shutterstock.com/image-photo/ceiling-mounted-cassette-type-air-600w-1751487554.jpg
  */
  pipe_connect_exterior(); // room ventilation is not attic ventilations
  
  
}