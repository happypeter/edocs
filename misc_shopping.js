const sheet_metal = {
  /**
   * https://happypeter.github.io/githome/imgs/20250122/7.jpeg
   * list: https://happypeter.github.io/githome/imgs/20250120/1966892679.jpeg
   */
  project: waldorf_goose,
  total: 2205, //RMB 70RMB for shopping included
  wall: {
    thick: 0.5, //mm
    qty: 16,
    size: {
      width: 91, //cm, overlap exculded, so 91 is valid width
      length: 4, //m
    },
    price: 20, //RMB/m,
    total: 1280, //RMB
  },
  corner: {
    // 阳角 outside corner
    length: 4, //m
    width: 14, // 7cm on each side of the bend line
    price: 10, //RMB/m
    total: 160, 
  },
  roof: {
    // 顶瓦
    width: 86, //cm, overlap excluded
    length: 280, 
    thick: 0.5,
    qty: 10,
    price: 20, //RMB/m,
    total: 560, //RMB
  },
  ridge_cap: {
    // 脊瓦
    length: 5, //m
    price: 13, //RMB/m,
    total: 65, //RMB

  }
}