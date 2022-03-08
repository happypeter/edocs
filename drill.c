/*
- drill press stand
  - https://youtu.be/_JeBHyRscRQ?t=80
  - https://www.youtube.com/watch?  v=xMNplAdWCeE
  - right size for the slides
  - follow my shelf_box_system guidelines, the x10cm
  - cabinet separation shelves with dados
*/
int drill_stand_cabinet() {

}

/*
when you huy a bolt or threaded rod, only two metrics really matters
one is '直径', aka majorDiameter
the other is '螺距’, aka pitch
https://baike.baidu.com/item/%E8%9E%BA%E8%B7%9D/4427979
https://www.sohu.com/a/252780674_99904561
what is a pitch https://www.insight-security.com/get-to-know-metric-bolt-sizes
*/

/*
- I bought this in Nov 2020, it's been working for me
  - the batteries do not last very long any more
    - but still acceptable
  - need to change a new chunk
    - https://www.ixigua.com/7039735865257656840?logTag=ebba8e7bd2dde899d67e
*/
#define OldDrill '峰硕12V双速充电钻36VF电池'

/*
- I bought this new one, since the it works with my OldDrill batteries
- What bugs me is not that I need too often
  - it is I don't have enough drills, so that I need to change bits too ofen
- big brand's like 东成, the brush-less versions are too expensive
*/

#define NewDrill '峰硕21V无刷冲击重载款'
#define CordDrill '东成07-10 扳手款500W电钻'
#define Pitch '螺距' 



/*
  The largest diameter of the thread of the screw or nut
*/
#define majorDiameter 'outsideDiameter' 


/*
- my drill chuck model is 3/8-24UNF 
  - https://www.gewinde-normen.de/en/unified-fine-thread.html
    - 3/8 is the majorDiameter, 0.375inch or 9.525mm
      - PDD people call this size 美制
      - for M10, they only offer 3 pitches: 1/1.25/1.5
    - 24 means 24pitch/inch, so one pitch is 1.058
  */
#define chunkShankSize '3/8-24UNF'

/*
- my drill chunk need Americal imperial units, not metric unit, two different system,
  - bolts follow each units don't compatible with each other
- M10
  - The letter ‘M’ indicates that this bolt uses a metric thread.
  - 10 is the majorDiameter, it is usually called '直径' in shopping context
*/





/*
  - DIY https://youtu.be/0BdbhecDxrw?t=392
*/
int install_drill_press_clamps() {

}

/*
- ref: https://www.youtube.com/watch?v=DP5WYZ32_lM
*/

int make_a_vise() {

}

/*
- Amazing device to cut metal with high precision
 https://www.youtube.com/watch?v=yGgNvV1_3hQ
*/

int cut_metal() {

}

/*
- https://www.youtube.com/watch?v=ee2jYR9HZgk
- https://www.youtube.com/watch?v=KHKspxcpuPg
  - being able to punch holes on a large board, is not able to do on my drill press
  - with setup of certain jig, this can also be used to punch holes in sides of boards
  - similar things can be done with my router
- materialList
  - 30mm wood hole opener for the bearings
  - Dia 12mm drill bit for steel rod, 30cmx2
  - bearing with inner dia 10mm
  - drill spindle for my drill chunk(3/8-24UNF)
  - M10-1.5 thread rod and nuts
    - 10mm majorDiameter, pitch1.5, which means it is 17 rather than 24 pitch/inch
  - Self-locking chunk with a 3/8-24 joint fitting shank
    - 24RMB for the chunk and shank
    - so that I can either use
  - Dia12 the linear bearing x2 
      - 2.9RMB x2 
  - spring x 2  outside dia 14mm, wire thickness 1mm
    - 3.6RMB x 2 
  - Flange 12mm inner dia
  - Flange inner dia 10mm, for stopper rod

*/

int diy_drill_guide() {

}