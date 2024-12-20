/*
- breaker panel
  - use PVC pipes to protect the wires 
- how to seal PVC pipes to avoid rain water coming in
  - no need, simply hide the pipe top under the box https://youtu.be/S7dQRU95Cnw?t=58
- add air circuit breaker 空气开关 空开 https://happypeter.github.io/githome/imgs/20211113/1.jpg
## power system

- yard underground wires/cables
  - 50cm from the west wall of house,  40cm deep
  - there are 3 points to the east of the house where you can drag the wires out of pipe, in case the wire fail to work, detail here https://happypeter.github.io/githome/imgs/20220909/

*/

const switch_pannel = {
  /**
   * 
   * I will have a two pin leakage protector for the main input with capacity same as the switch outside the yard.
Then live will be connected to a 1 to 8 hub, neutral also to a hub. So that for each circuit i will all use 1pin switch.
   
   */
  terms: {
    hub: '汇流排 PDD: 配电箱连接排', 
  },
  tips: {
    capacity: '1 sq mm wire carries 5A current, so If I have a 6sqmm main input, my main switch would be C30',
  },

  
}

