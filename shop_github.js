/**
 * - 3x4m
 * - face souce, cause I want most sunlight
 */

const time_spent = {
  footings: { hr:10, date: 20221022 }, // mutidays works
  pe_film:  { hr:1, date: 20221107 }
}



const gutter = () => { 
  /**
   * roof water will go north
   * I don't want the water go to neighbor's yard, or go to the foundation */ 
}


const design = () => { 
  /**
   * https://youtu.be/M0EI-FO7DuA?t=7
   *  */ 
}

const extensible = () => { 
  /**
   * maybe I'll build a roofed patio
   * or, a west wing which make's the shop a L shape building
   * or even a east wing to make a C */ 
}

const foundation = () => { 
  /**
   * if it is lower than the south part of the yard
   * no matter what you lay on top, it will be wet 
   */
  make_it_high() 
  footings()
  grave_base()
  /**
   * do I need this https://youtu.be/X8ISS6eSFBI?t=113
   */
  weed_barrier() 
  floor()
}

const floor = () => { 
  /**
   * https://youtu.be/hkDSkDblZ1I?t=241
   */
  joist_hanger_structure() 


  /**
   * https://youtu.be/hkDSkDblZ1I?t=322
   */
  double_joist_rim()
}

const footings = () => { 
  /**
   * have six footings 
   * a simpler version to do the footings https://happypeter.github.io/githome/imgs/20221020/7.jpg
   * */ 

  level_vs_square()

  /**
   * https://www.youtube.com/watch?v=MCa_87Dkw1M
   * dig below the frost line
   * - tip: When water freezes, its volume rises by 9%. It can move the footings
   * - todo: I am not so sure this is so necessary since I aleady have 10cm gravels as base
   */
  below_frost_line(number="60cm")

  /**
   * https://youtu.be/MCa_87Dkw1M?t=72
   */
  gravels(thickness="10cm")

  /**
   * - make it 10cm above ground
   * - building a full length strong form is quite necessary
    * - when buried it should never moves, thus you can confidently remove the string lines for easier concrete work
   */
  footing_form(size="40cmx40cmx60cm", material="battens vs 9mm OSB")
}



   

const level_vs_square = () => { 


  /**
   * graph here: https://happypeter.github.io/githome/imgs/20221020/8.jpg
   * https://www.youtube.com/watch?v=3YAC8YXQS2M
   * - string_line https://youtu.be/bjPR8M6GUS0?t=349
   *   - floor rim size: 4(cut ends) x2.9(to give extra space)
   *   - use nailsto bind string on https://youtu.be/bjPR8M6GUS0?t=354
   *   - use nails on batter boards is a much better way to set string lines https://www.youtube.com/watch?v=bjPR8M6GUS0
   */

   /*   - cut perfect stake point, so that it won't move while you set them in
          - https://youtu.be/bjPR8M6GUS0?t=144
        - make the stakes nice and strong, very frustrating when you bind the string lines, and the stake moves!!!
        - light color, so that your marker works
   */
  
    stakes(dia=">3cm", height=">50cm", color="light")

  /**
   * - don't let stake stay in the way of diging 
   *   - https://youtu.be/3YAC8YXQS2M?t=77
   *   - https://youtu.be/bjPR8M6GUS0?t=623
   */
  stake_outside_rim()
  /**
   * - set up one line took these professonals a whole morning https://www.youtube.com/watch?v=bjPR8M6GUS0
   *   - it is important since it will act as a reference for other lines
   * 
   */
  /**
   * - decide the position of the first stake
   *   - note here there are two stakes at each corner of the building
   *     - so that stakes stay out of the pit I am going to dig
   *   - 160cm from the house, and 60cm from the yard wall
   *     - 160cm is a random number, not the final ditance from the house to the shop
   * - once the stake is set, it will be the ref point for anything comes later
   */
  ref_point()

  /**
   * - next step is to find next point to form a ref line
   * -  the line needs to be parallel to the house
   *   - so 160cm to the house
   * - 290cm to the ref point
   *   - 290cm is the real demention(width) of shop
   */
  ref_line()

  /**
   * - now find a point3 to form a right angle at ref point
   *   - point3 to refPoint 4.3m(real shop lenth 4m), of couse 4.4 or bigger also works
   *   - line(point3, refPoint) should most be parallel to the yard wall, but we don't rely on this to find it
   *   - instead, we use 3-4-5 rule to get the right angle at refPoint, and now we can locate point3
   * 
   */
  right_angle()

  /**
   * same logic, we find point4, so the line(point3, point4) is perpendicular to line(point3, refPoint)
   * and line(point3, point4) is 2.9m long
   */
  second_right_angle()

  /**
   * - now line(point4, point2) should be 4.3m 
   *   - otherwise, you failed, do it again
   */

  connect(point4, point2)


  /**
   * with the eariler step, we string lined the real width of the shop, nut not the length
   * now get mark the length is very easy, just set another 4 stakes
   * form two lines that parallel with line(refPonint, point2) and line(point3, point4)
   * and the distance of the two lines are real shop length 4m
   * now we get four cross point of string lines, these are
   * where the wood structure corners are
   * now I can mark the pit position then remove the strings and start to dig
   */
  decide_length()

  /**
   * use laser https://youtu.be/bjPR8M6GUS0?t=259
   * - https://happypeter.github.io/githome/imgs/20221021/
   * - use a big board to help you find the line, when sunshine is strong
   * - marker the laser postions
   */

  level()

}