
/*
what I really want is a drill guide jig
- https://www.youtube.com/watch?v=KHKspxcpuPg
- ref video 
  -  https://www.ixigua.com/6771779510745432589?logTag=86b94777be3ea9738b48
  - this is also neat https://www.youtube.com/watch?v=ee2jYR9HZgk
  - with wood box and tracks https://www.youtube.com/watch?v=eAgj-nLZ5uI
  
*/
/*
when you huy a bolt or threaded rot, only two metrics really matters
one is '直径', aka majorDiameter
the other is '螺距’, aka pitch
https://baike.baidu.com/item/%E8%9E%BA%E8%B7%9D/4427979
https://www.sohu.com/a/252780674_99904561
what is a pitch https://www.insight-security.com/get-to-know-metric-bolt-sizes
*/
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
- order List
  - I ordered M10 bolt and bearing with inner dia 10mm
  - bearing housing with 28mm hole(adjustable)
  - need drill spindle for my drill chunk(3/8-24UNF)
  - M10-1.5 thread rod and nuts
    - 10mm majorDiameter, pitch1.5, which means it is 17 rather than 24 pitch/inch
  - I don't need locking ring 锁紧环
    - nuts will do
  - ordered a Self-locking chunk with a 3/8-24 joint fitting shank
    - 24RMB for the chunk and shank
    - so that I can either use
  - metal rod(for sliding support)  12mm 1m
    - the linear bearing x2 
      - 2.9RMB x2 
    - spiring x 2  outside dia 14mm, wire thickness 1mm
      - 10RMB x 2 
*/

