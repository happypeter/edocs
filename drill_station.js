/*
    - drill 
      - https://www.ixigua.com/6974625115858272772
        - you do want the gap between the holding boards for each drill larger than the reverse/forward switches
          - https://happypeter.github.io/githome/imgs/20220316/1.jpg
        - and you do want to be generious on the depth
          - since you dont want to remove the bits every time
      - drill+bits+charging https://youtu.be/kLpmInMdQpw?t=1068
        - It's always better to keep things more modular, unless there is a reason not to do so.
          - So I will keep a standalone bits holder
    - next verion idea
      - cut gaps on a board https://youtu.be/2lDFvVGtMuE?t=290
        - if you buy a new drills, you cut more gaps
        - other wise the space can be used for sth else
    - tables without braces https://happypeter.github.io/githome/imgs/20221027
*/

const time_spent = {
  more_cleat: { hr: 2, date： 20221115 }，
}

export const drill_station = () => {
  /**
   * two cabinets on top of a 20cm platform, and connected by a shelf board like this https://youtu.be/mi2UIgTMRNc?t=80
   */
  size(depth=60, height=90, width=80)
  french_cleats()
  table_top()
  hammmer_drill_storage()
  table_top_shelf()
}

const french_cleats = () => { 
   /**
    * hange drill drill, bits holders
    */
}


const table_top = () => { 
  /**
  * stud wall style table top
   */
  double_top() 
}

const hammmer_drill_storage = () => { 
  /**
   * have a place for my hammer drill */ 
}

const table_top_shelf = () => { 
  size(length=80, height=50, depth=20) 
}