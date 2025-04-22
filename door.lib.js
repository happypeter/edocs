/*
- you can make a door with a simple piece of OSB
  - https://youtu.be∏/fkVfX2hUlc8?t=3653
*/

export const sliding_door = {
  /**
   * PDD has wheels that slide on steel pipes, 7RM for 4
   */
  track: {
    iron_pipe: {
      thick: 2, // rigid enough for 95cm span,
    },
    fastener: {
      mount_points: 3, // the pipe is 180cm long, but I can have three mount points
      // at each point I will have 2 or more routing clamps will be screwed to very thick back wood board
    },
    dangling_prevention: {
      burid_angle: {
      /**
       * angle iron will be buried in concreter floor,
       * bottom wheels will be used
       */
      },
      wall_mount_fllor_guide: {
        /**
         * https://youtu.be/_DeTpfGTVPw?t=757
         */
      }
    }
  },