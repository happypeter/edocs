
/**
 * - eXtra build 
 * - components
 *   - the firewood storage system, waste wood off-cuts 
 * - building lesson:
 *   - build the components first
 *     - If I were to build the 3 shevles first, and then try install them, then I don't need to do 1millon times cut and try in place
 *     - and also I can just check level once, and do the poles and supporting pieces in one go, so that I don't need to test level for 30times
 *     - conclusion: build the box(aka, shelve)es first, then consider poles and anything as accessories, I could have done the same with 10p of the time
 *     - the montra: cut everything of same size in one go, let other components try to fit them, not otherwise
 */
import { issues } from "./githome_issues_2024"

const cost = [
  issues.search('firewood, xmiter')
]
  
const guidelines = {
  portable: 'box should be 60cm long, but not too big to life',
  handles: 'I do need handles',
  stackable: 'yes, I also want the boxes to be stable and stackable',
}

const storage_spaces = [
/**
 * I happen to have seveal things that contains/hold 60cm deep boxes
 */
  'near south wear slab',
  'the width of my hand truck',
  'the lower storey of my work bench'
]

box = {
  demesion: {
    length: 60, // this is only demension I conctrol
    height: undefined, // they are stackable, so height can be flexable
    width: '<60', // otherwise it will be too heavy
  }
}

const shelves = {
  /**
   * I don't have long pieces, most of my firewood are small scraps, <20m, so that I just build box-ish things, e.g crates, shelves with fences. and I just throw the pieces in, no need to stack nicely
   */
  top_layer: 'same as the second',
  third_layer: 'a simple shelf',
  second_layer: 'with fence, and a door so that I can easily dump wood scraps out, think a trailer of a tractor',
  bottom_layer: 'a simple shelf'

}
/**
 * https://www.bilibili.com/video/BV12W411U7WD/
 * 【【做工具】搭建多功能斜切锯(KS120)工作站 转自Michael Alm-哔哩哔哩】 https://b23.tv/tYs1HWC
Toekick or not i still need to make sure the cabinets on both sides r rock stable and on samu level

【新开箱个斜切锯，一上手觉得巨好用！-哔哩哔哩】 https://b23.tv/27LbXT9

 */

const miter_saw = {
  feathers: {
    stop_blocks: 'https://theweekendwoodworker.com/tww-tool-list-thank-you-cc/'
  },
  fix_dirve_belt: {
    /**https://happypeter.github.io/githome/imgs/20241015/ */
    /**
     * install_drive_belt: get the edge of the belt on the wheel, then spin the wheel,
     * the direction also matters, when the wheel spin the wrong way, of the belt installed the wrong way, spining only make the belt off the wheels not on
     */
  }
}