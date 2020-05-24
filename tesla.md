## 自动驾驶

- 用“眼睛”开车：跟人类开车的思路类似
  - https://www.youtube.com/watch?v=-b041NXGPZ8&t=8838s
    - Musk 说，人类只是用离得很近的两个 Camera 就可以开车了，而 Tesla 汽车可以有更好的视野，不过基本思路跟人类开车很类似，就是 vision-based 。

- 海量训练数据
  - Lidar 和 hd map 的方案下，大量行驶数据可能不是最重要的
  - 但是 Tesla 走“图像识别”路线，所以大量的训练是必须的，例如训练 AI 认识猫，就必须输入很多猫的照片，要训练 Tesla 认识 STOP sign ，就必须有足够的 stop sign 的图片作为训练数据，特斯拉会在线下训练 detector ，然后部署到所有车上。这是神经网络学习的基本原理了。
  - Tesla's Andrej Karpathy 说：如果你没有 fleet ，哪里来的 tens of thousand Stop Sign 的图片呢？没有图片，怎么能训练 AI 呢？
    - https://www.youtube.com/watch?v=HTsxrW5FWf4
  - 没有海量的图片，如何应对 long tail ？
    - https://youtu.be/hx7BXih7zx8?t=632
    - 不能保证 long tail 可以 handle ，the vision-based approch is pointless.
  - Lidar 方案的公司，不切换到 vision-based ，恰恰是因为他们没有 fleet ，搜集不到大量数据。
  - 神经网络要想正常工作有三大需求：large/real/varied dataset https://youtu.be/WGm5Yc4JWug?t=337
  - 如果没有海量的图片进行训练，即使 lane lines 都识别不了，想象一下 lane lines 可能转弯，可能被阴影笼罩，雪夜，逆光等各种情况：https://youtu.be/Ucp0TTmvqOE?t=7323


- Lidar 似乎不靠谱
  - 整个的交通系统都是为 vision-based ，人们主要是用眼睛开车
  - Lidar 基本上是用激光做导盲杖，导盲杖怎么看路标呢？Stop Sign ，限速牌都看不见，要自动驾驶干嘛？
  - 路上飞来一个塑料袋，Lidar 可能会急刹车
  - Elon Said: For Cars, Lidar is freaking stupid.
  
- 竞争者
  - 蔚来汽车
    - 李斌是文科生。在智能化研发和用户服务的权衡之间，蔚来显然偏向了后者，其对北美团队多轮减员，自动驾驶部门成为重灾区。2019年12月，蔚来与自动驾驶技术公司Mobileye合作后不久，即宣告对北美自动驾驶团队裁员141人，仅保留硬件和底层系统人员。
      - Peter：优质的服务和客户体验也是硬实力，但是问题是未来这部分用代码优化的空间有多大。如果还是只能靠人力，而且也不能让蔚来汽车用户群形成明确的网络效应。那么这个对我就完全没有吸引力了。
    - 小鹏是科技范。与蔚来相反，小鹏汽车选择了抛弃 Mobileye，转向全自研。
      - Peter ：跟老大进行无差异竞争，就是送死。
- 换电站
  - 如果每个停车位都可以充电，换电池的必要性真的不大
  - 成本：若『换电模式』胜利成为主流，意味着车主随时有充满电的电池可换——运营优化到极致，车电池比应该也是 1：2 以上的关系。不考虑运营成本，一辆车至少要再多配一辆电池。按目前每年两千万车销量、每块电池 10 万元成本计算，主流的换电模式，一年光多出来的电池成本至少就是 2 万亿。
  - 成本高，意味者升级的成本也高。如果要兼容一个新车型，新的电池型号是比较难的

- v2x 方案
  - 中国在做了
    - 郑州：“智慧岛5G智能公交项目”，宇通L4级别智能巴士
    - 雄安 5G-V2X ，可以人来控制20公里以外的车，远程驾驶，当然未来也可能是 AI 驾驶，但是 AI 在云端，不再车上。
  - v2x is basically regulatiing the whole world . 整个过程绝对不是，划定专用线，然后关键位置装一些信号发生器那么简单。如果车自己的视觉能力不够，突然窜出一个小朋友，怎么应付？而谷歌机器视觉很厉害，那么要专门的信号发生器干嘛？
## Energy
- megapack 和 autobidder
  - 水能太阳能天然是去中心化的，就近拍卖，可以避免传输损耗，挺棒的做法
