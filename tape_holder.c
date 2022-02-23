/*

- best: https://youtu.be/TjdtAZpsXCk?t=142
    - I may store more than one the same type
      - so there is no point to expose them all, like this https://www.youtube.com/watch?v=4fKBZ-H9StM&t=424s

- todo:
  - add a cutter https://youtu.be/4fKBZ-H9StM?t=428
  - a dispenser tape dispenser

- changeLog:
  - v1: https://happypeter.github.io/githome/imgs/20220218
  - v2：https://happypeter.github.io/githome/imgs/20220223
*/

/*
- think this as a small verion of my lumber shelf
  - https://youtu.be/yCtTqg9M6Ek?t=70
  - I will use 3mm plywood for the sides, and add 17mm plywood in between
*/
#define branket 
#define hangerRod // the rod to hange random size rolls
/*
the virtical bars mounted to the back board
- this will be a piece of 17mm plywood strip
- people call this a cleat https://sawdustgirl.com/building-garage-shelves/
*/
#define wallCleat 

int big_tape_gap = 80 
int small_tape_gap = 45 
int hanger_rod_dia = 50
int bracket_length = 250
int wall_cleat_thickness = 17
int wall_cleat_width = 24
int wall_cleat_height = 10

/*
 - you don't want this to be too small, otherwise big tape rolls make stay in the way of it's next column neighbors
 - so width = 24(wall_cleat_width, 17mm plywood strip)+3(3mm thin plywood)x2
*/
int bracket_width = 30 

int main() {
  cut_hanger_bars(); 
  /*
    since the gap between two brankets is small, so it's better to install the cleat to
    the bracket before installing to the back board
  */
  install_bracket();
  cut_hanger_rod(hanger_rod_length);
}