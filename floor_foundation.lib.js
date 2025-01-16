/**
 * I will build this https://happypeter.github.io/githome/imgs/20250116/3.jpeg
 */
import { lumber } from "./wood_shopping";

const material = {
  beams: lumber.old10x10,
  joists: lumber["3m_5x10"]
  /**
   * 5x10 lumber should not span longer than 2m or so
   * and my 5x10 now is less than 3m long, to make a longer
   * joist, have two piece into one, and have 50cm or so overlap
   * and support the joint with beam, this is actually very common trick in framing
   */
}

const tools = {
  miter_saw: {
    /**
     * without the ability to do repeated cut, that means a miter saw station needs to be there
     * I won't start the building
     */
  }
}

const lessons = {
  posts_last: {
    /**
     * cause buried posts is hard to check square
     * I will rather, build the floor frame first
     * make it square, and set posts below that
     */
  }
}