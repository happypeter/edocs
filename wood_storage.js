export const outdoor_cart = () => { 
   /**
    * a bigger version of my cart
    */
}


export const cart = () => { 
   
}

export const windowSideShelf = () => { 
   /**
    *   - 3 tiers
    - bottom tier, 30cm, for short lumber/strips
      - the board for this tier is plywood, 17x120x35
    - middle tier, 45+cm, for two boxes
      - one for trash
      - other for small cut-offs
      - each box is 20cm tall
        - make box shallow, and tier high, so that I can toss wood in
      - use ceiling strips for the frame, and 50 mdf as board
      - top tier, use 17x120x35 plywood
        - top is flat, as a tabletop
  - total height 85cm, workbech height, a bit taller than my windowsill

    */
}


/*
- top of the shelf will be a flat workspace for tmp storage of anything
  - https://youtu.be/_0H71D7dSDQ?t=712
  - no angles version https://www.youtube.com/watch?v=vYu9pn3r5NM
  - when I work, I don't really have time to put all cut-offs away
    - so I need a shallow, tmp storage
- wood storage general plan
  - most lumbers/cut-off needs to stay outside
    - since main workshop is small
  - but I still need a place for 
    - trash
    - working-on pieces
    - litte scrap, I want to keep
- do u want a cart? or boxes on a shelf?
  - being on a shelf is nice, since it makes the floor easy to clean
    - but will I left the floor empty?
      - 100% not, because agin my space is limited
      - it's very likely I will put some boxes on the floor under the shelf
        - if the boxes have no casters, that's means to floor is hard to clean 
        - if I want casters, why not build a shelf on casters?
          - so that is a cart!
- so I want a cart, above the cart, I can still do shelves, for lumber or anything
- for future useful cut-offs, you stack them, not bury them in trash
*/

/*
- most common one
  - three parts
    - front: vertical dividers
    - back: angle part for laying big sheets
    - middle: a shelf
  - steve Ramsey https://www.youtube.com/watch?v=nZtIEFa3Ofk
  - Shop Nation https://www.youtube.com/watch?v=CFcSNfGbUmQ
*/

export const outdoor_lumber_shelf = () => { 
   /**
    * outdoor use, for 4m long wood
    */
}

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