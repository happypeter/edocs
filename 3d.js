const review_tutorials = () => { 
  /**
   * done April Wilkerson's videos https://www.youtube.com/watch?v=vNf_YiBC_g0 */ 
}

const sketchup_tricks = () => { 


  /**
   * quick switch between youtube video to sketchup
   * full screen sketchup, then use 3-finger swipe to switch
   */
  switch_to_video()
  
  /**
   * O to go into orbit mode, then slid on trackpad 
   * H to pan
   * P to pull
   * hover over the toolbar, and can get the shortcuts*/ 
  orbit()
  /**
   * T to Tap Measure mode
   */
  measure()
  
  /**
   * L to draw lines
   */
  line()


  /**
   * close a dado https://youtu.be/rjSE28T3u78?t=554
   * - P to push, select the dado bottom, pull it to the top
   * - now hover ur mouse the the face of dado top, sketchup now know u want to snap to the face
   * - relese your mouse, now your dado is closed
   */
  snap_to_face()


  /**
   * if u want to snap to a certain position u want
   * - draw a line there, then do push/move and sth, 
   * and hover to the line, relase https://youtu.be/rjSE28T3u78?t=570
   */
  snap_to_line()

  /**
   * when u done using a tool, hit space to go back to select mode is a good habit  
   */
  space_often()


  /**
   * https://youtu.be/rjSE28T3u78?t=634
   * - hold shift to select many
   * - click again to deselect
   * - this is the only place you hold your mouse
      * - for any other features, you always, click-relase-drag-click-agin-to-confirm
   */

  select()

  /**
   * https://youtu.be/rjSE28T3u78?t=687
   * upper left corner toolbar icon
   */
  draw_circle()

  /**
   * use line tool to draw a box https://youtu.be/rjSE28T3u78?t=816 
   */
  snap_to_axis()

  /**
   * hold click button to put a guideline
   * relase and drag click you get no guideline
   * menubar-edit-deleteGuides to delete al guideline
   */

  guideline()

  /**
   * https://youtu.be/rjSE28T3u78?t=1223
   * - triple click to select everything. rightclick -> make component(shortcut: g)
   * - m to goto Move mode, select a component and move it to get a copy
   *   - now if you edit one, the other copies will change accordingly
   *   - right click the one you don't want to modify, choose 'make unique'
   */
  components()

  /**
   * move flush touch each other
   * NOTE: always hold the vertext to move
   */

  move_flush()

  /**
   * q to start rotate tool
   * https://youtu.be/rjSE28T3u78?t=1720
   */

  rotate()
}

/*
  - hand sketching the design https://youtu.be/wcn5ayESWLs?t=64

  - plainText first
    - I don't like GUI things, 3d software is just another one of these
    - I love markdown, I love css
      - since I can render html if I need
        - As to my woodwork, I want to just keep every detail in code
        - When I need to render my project, I render it with wood to real world
          - So if in the future, I want to upgrade my design
          - I can take a peek at the photo(or real object) of my desgin
          - if 3d design file is for the sake of quickly get the idea of what you are going to build
            - I think .jpg file will also do the job
      - I can versionControl/Global them,
    - engineering is all about iteratons
      - A .skp file is not git friendly
      - to build sth(woodwork or device development), there is a lot more than just shapes
        - materials/workflow/watchouts/tests(think unitTest & IntegrationTest)/
        - everything will be much more managable(esay to update/modularize)
          - in a 0 redundant way
          - sketchup also has Components
            - but can you pass parameters to it
            - once you make one Unique, can you change it along with its slibings
              - since shapes are not easily searchable
              - so use 3d files to manage a complicated project will not be doable

     
*/