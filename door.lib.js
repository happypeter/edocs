/*
- you can make a door with a simple piece of OSB
  - https://youtu.be∏/fkVfX2hUlc8?t=3653
*/

export const sliding_door = {

  wheels: {
    /**
     * PDD: 全钢轨道滑轮, U 型, 1.2寸, 4分，六分管通用
     */
    fastener: {
      /**
       * use long nails, bend the point end, to bite into wood
       * or use bolts and nuts, but if the wood is thick, drilling holes for bolts could be harder
       */
    }
  },
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