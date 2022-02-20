/*

- best: https://youtu.be/TjdtAZpsXCk?t=142
    - I may store more than one the same type
      - so there is no point to expose them all, like this https://www.youtube.com/watch?v=4fKBZ-H9StM&t=424s

- todo:
  - add a cutter https://youtu.be/4fKBZ-H9StM?t=428
  - a dispenser tape dispenser

- changeLog:
  - v1: https://happypeter.github.io/githome/imgs/20220218
*/

#define branket // think this as a small verion of my lumber shelf
#define hangerRod // the rod to hange random size rolls
#define verticalMount // the virtical bars mounted to the back board

int big_tape_gap = 80 
int small_tape_gap = 45 
int hanger_rod_dia = 50
int bracket_length = 250
/*
 - you don't want this to be too small, otherwise big tape rolls make stay in the way of it's next column neighbors
 - so width = 30(wood strip)+5(mdf)x2
*/
int bracket_width = 30 

int main() {

  /*
   - one trick here is that you can do a rough cut initially, 
   - then after installing the rod connecting all the bars, you can do a final cut
  */
  cut_hanger_bars(); //
  cut_hanger_rod(hanger_rod_length);
  drill_wholes(); // a drill press is needed here
}