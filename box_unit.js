/**
 * a modular design, error tolerant(no trail and errors work, as long as I follow the process, a good result should follow), material tolerant
 * portable, upgradable, decoupled
 * - a boxUnit IS
 *   - the main frame of my buildings(shed/shelfBox/house)
 *   - a perfect cuboid
 *   - when you want to extend the structure, you do it on the boxUnit, not the roof/roofUnit
 *     - box roof and boxUnit shoud be designed that, when I add another boxUnit to a exisiting one, I don't need to tear off the roof
 *       - of course the hard part is not join two boxUnits, but the roofs
 * - IS NOT
 *   - the footings: footings are it's own boxes, be it concrect or wood
 *   - the roof: roof in control of it's own grade, and roofes need to be extended easily too
 *   - other accessories: curtain, doors, awning
 *   - a boxUnit Does not provide shear forces, it should make it easy to install braces or stud walls
 *  
 */

import { lumber } from "./wood_shopping"

const design = () => { 
  /**
   * a boxUnit is mostly two things, poles and beams
   * - I can use two of my 5by10 as a beam or a pole
   * - the trick is when I only need one boxUnit for a structure, the I use one long and one short 5by10.
   *   - while only the short on is holding beams, and the long one is just there to provide extra stength
   * - when I want to join it with another box, the long one will be cut short and used to hold the beam of the new boxUnit
   * - in order to make the extensibility to happen, the poles have to not holding any weight, all the vertical forces(aka, roof weight) go to the beam
   * - demensions: space I have in the yard is too complicated, so the size has to fit in to the environment
   *  */ 
  use(lumber["5x10"])
}


const roofUnit = () => { 
  /**
   * roofUnit will be a exactly same size with the boxUnit face it lies on
   * the overhangs shoule be designed as detachable accessories
   * when roof flush with the boxUnit, joining two box will be very easy
   * and with sheet metals, the joint will be effortless
   * a roof is just a stud wall with some extra feathers, say grade, weather proof
   * */ 

}

const overhanges = () => { 
   /**
    * most roofs have overhanges, but it does not have to be
    * - somethings I can cover the roof edges with flat sheet metal
    * - and only have small overhangs for windows and doors
    * - carports/sheds/houses without overhangs give a more contempary look
    * - more importantly, it's esier to extend the roof without overhangs
    */
}