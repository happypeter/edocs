/**
 * use a 1222x2444 OSB as the backboard, and 3~5mm more than 400mm deep
 * why whole OSB?
 *  - cutting a whole board is not easy
 * spaceer for everything
 * devide 1222 width into two parts, one 1/3, the other 2/3, alternating the sides, so the shelves get better support
 * mount to wall? yes, it's too tall
 */

const cut = () => { 
  /**
   * the top and bottom should be as 1222 long
   * but all the five shelves go between should be cut 32mm shorter
   *  */ 
}

const spacer = () => { 
   /**
    * mainSpacer is of the height from lower shelf top to higher one's bottom
    * and the shelf will be 6 equal height space
      - given that the bottom storey should be there to contain the errors
    */
   const mainSpacerHeight = 389;  // (2444-16*7)/6 board is 15 thick, 1 extra mm for installation error
   const sideSpacerLength = 389; //(1222-32)/3 - 8  such a coinsidence!
}

