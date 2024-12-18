/**
 * Never stop evolution -- Linus Torvalds
 * but still I dont want to waste material and eariler work when upgrading or relocating my things
 * so the standards here should be followed as much as possible
 */

export const standards = {
  /**
   * aka, design guidelines
   * the extrior size matters a lot, since we need to veritcally or horizontally assemble the boxes
   * 'make things perfect cuboid'
   * 'only care exterior sizes, care for being stackable, not nesting'
   */
  sizes: {
    box: {
      step: '5n', //, for the box I want to put inside a container, make them multiples of 5, e.g 5cm, 10cm, 15cm, 20cm...
      primary_sizes: [
        '15x15x10tall', //for screws and small things
        /* the 30deep series of boxes, are aimed for @containers.primary_sizes.workhorse_cabinet
         width can be 10cm, 15, 20, height, can be 5cm, to, 25cm,
         */
        '30deep x 5nWidth x 5nheight)', 
      ]
    },
    
    containers: {
      step: '10n', //containers, like drawers, shelves, wall cabinets, multiples of 10
      primary_sizes: {
        workhorse_cabinet: '30deepx60tallx60wide', // my workhorse wall cabinets
        sixty_cubic: '60x60x60',
      }
    },
  },
  colors: {
    simple: 'by default only, black, gray, wood, white allowed'
  },
  stackable: {
    /**
     * NO.1 flat top, NO.2 follow @standards.sizes.box
     */
  }
}