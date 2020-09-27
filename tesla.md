---
title: Tesla 何以征服世界?
---

- Mission One
  - prove EV is a better sulution than ICE cars
    - a sulution needs to be a ecosystem
    - General Public now can not see EV is better, and actually EV is not as good as ICE systems right now
    - this is a much narrow but clear version of the officail mission 'accelerate the world's transition to sustainable energy'
  - SO Tesla's top priority is to setup the largest charging network(with the help of Chinese govs), do vertical integration to make really cheap cars, and probably needs to work on smart grid and power generation.
  - Misssion complete when EV is obviously better in most people's eyes,  from both economical or environmental point of view.
  - FSD should be Mission Two. But Mission One is exicting enough.

- Mission X
  - A fully automatated world, where no one need to work
  - Think about everyone one a room that covered with solar pannels and with machines inside
    - the room can run itself and generate endless wealth, right?
  - Tesla sustainable energy plus AI, result will be Perpetual motion Machines.

- Battary
  - Battary today is like petro when Rockefeller was a young man
    - People knew it would be useful, but not at this level
  - Pretty excited about battaries after Tesla Battary Day
  - Megapack + Autobidder = Unlimited imagination

## 综合

- narrative is more important than sales numbers
- 得力的愿景管理
  - 马云说不要为老板工作，而要为共同的伟大目标工作。这句话其实没有可执行性。因为目标是需要不断调整的。
  - Elon 的秘诀是始终给大家勾勒出激动人心的目标。其实目标不需要真正实现，as long as that makes people join forces to create.
- release early and release often
  - Telsa iterates like mad even on hardware
- 巨大的市场
  - 如果未来十五年，有一半的汽车都变成电车，这个规模是很恐怖的。特斯拉如果还能保证目前的份额，那么市场规模也是恐怖的。
- 马斯克是称职的善意独裁者
  - 在各类新闻媒体采访你还见过比马斯克专业工程知识更丰富的企业老总吗？
  - 一个理解开源的人领导的公司，开源是人和人组织起来的最佳形式

- 全力推动自动化生产线
  - 最大化的自动化，哪怕暂时多花点钱
  - 制造机器的机器
- 我国政府会大力扶持电动车
  - 最大的目的不是环保，而是摆脱对 petro 的绝对依赖，想想一旦国际局势有变，我国经济要受多大影响。
- 面向工程的公司才有未来
  - 貌似很多公司都是让跟钱贴的比较近的人当大老板，Tim Cook 是做供应链的，蔚来的李斌也不懂技术，比尔盖茨虽然是技术出身，但是后来也是变成了 businessman 。
  - tesla 非常特别，是 engineering-oriented 的公司。大老板是一线工程师。我觉得这个代表着未来。扎克伯克说，管理公司就跟管理一个软件工程一样，合理分工，模块化组织就好。这个说法我非常喜欢，但是这个还是说的管人。而 Tesla 的思路真的不是管“人”，而是管机械设备，管软件。人，只是生产线上的临时组件，未来是要被机器人取代的。马斯洛说，一个工厂就是一个 CPU ，把线路缩短，时钟调快，就能提高效率，这个就是典型的第一性的，物理的和工程的世界观。https://www.youtube.com/watch?v=dYiNfg9riWc&pp=wgIECgIIAQ==

- the moat is deep enough
  - I considered Tesla did not have deep moat like Wechat or Amazon does, but now I changed my mind.
  - Consider Amazon, the more commodities it offers, the faster it ships, the customers will love it more, and buy more, this is a no-stop process. Same is true for Tesla, the bigger the charging network, the lower price batteries are produced, the more people will love tesla. Tesla is building a EV production stack, thousands of details could be optimized, and it makes perfect sense to have one monoply to do all them at once, rather than have many small companies to do them.

- the new era of monopoly is here
  - people won't use the second best search Engine or e-commerce platform
  - likewise people won't use the second best mobility service, which tesla will become.
  - the digital tech bring mathrew effect to a whole new level
  - If Nio or Lixiang try to compete with Tesla, they have to bring revolutionary innovation in the system level, small imporvement in the details won't make any difference.

## 自动驾驶

- 用“眼睛”开车：跟人类开车的思路类似
  - https://www.youtube.com/watch?v=-b041NXGPZ8&t=8838s
    - Musk 说，人类只是用离得很近的两个 Camera 就可以开车了，而 Tesla 汽车可以有更好的视野，不过基本思路跟人类开车很类似，就是 vision-based 。

- 基于图片建立 3D 模型
  - 机器看到的世界是二维的，图片在它们眼中是没有纵深的
    - 特斯拉的思路是通过移动过程中的多张连续图片进行对比，来估算出各个物体的纵深坐标，建立 3D 世界模型

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

- Lidar 不靠谱
  - 整个的交通系统都是为 vision-based ，人们主要是用眼睛开车
  - Lidar 基本上是用激光做导盲杖，导盲杖怎么看路标呢？Stop Sign ，限速牌都看不见，要自动驾驶干嘛？
  - 路上飞来一个塑料袋，Lidar 可能会急刹车
  - Elon Said: For Cars, Lidar is freaking stupid.
  
- 得工程师者得天下
  - 根据美国business insider相关调研数据，马斯克旗下两个核心企业SpaceX、特斯拉分别位居美国工程类院校学生最向往榜单前二，力压NASA、苹果、谷歌、波音。
- tesla 可以打败能源巨头
  - 以前觉得巨头都很有实力的，不能挑战
  - 但是，看看 SpaceX 对波音和洛马，就知道这些传统恐龙其实不堪一击的
  - 所以，Tesla 下一步会挑战一些能源公司（甚至金融公司），我觉得都有戏。

- 蔚来汽车没有核心竞争力
  - 李斌是文科生。在智能化研发和用户服务的权衡之间，蔚来显然偏向了后者，其对北美团队多轮减员，自动驾驶部门成为重灾区。2019年12月，蔚来与自动驾驶技术公司 Mobileye 合作后不久，即宣告对北美自动驾驶团队裁员141人，仅保留硬件和底层系统人员。
    - 蔚来总裁说，他们的唯一护城河是用户至上。具体措施就是，不断的车友会，互相赠送礼物。感觉好幼稚，doesn't scale 啊。说是要做用户企业，谁不想啊，没有网络效应，没有用户之间的互助机制，单靠定期的未来花钱组织活动，如何才能持续。
    - Peter：优质的服务和客户体验也是硬实力，但是问题是未来这部分用代码优化的空间有多大。如果还是只能靠人力，而且也不能让蔚来汽车用户群形成明确的网络效应。那么这个对我就完全没有吸引力了。
  - 蔚来的硬件比特斯拉高阶，但是比 BBA 呢？将来 BBA 入场，蔚来优势何在？
  - Nio House is a dumb idea
    - 全都是在最贵的地方，例如中国第一高楼的一层。一楼做展厅，打打广告可以理解。二楼弄个私人咖啡馆，非常浪费呀。我要是车主，充电的时候，附近只要有咖啡馆或者 KFC 就很满足了，为啥要私人咖啡馆，费用反正都是用户出。每个车主配一个秘书（ Fellow ），奢侈。
    - 真皮内饰，8000万一场发布会，包括换电都是一个套路，不计成本的尊贵感。
    - 换电这个事，谁都知道方便，但是也是成本根本飘不起来呀。最近几年最佳的方案是，多点快充，让车主不要绕路充电，也不用排队等，附近最好能有个小饭店休息一下。
    - Tesla 是工程师思维，是 problem solver ，李斌想法是完全不同的，我是完全不理解他在干嘛。
    - 本来我觉得 Nio 搞用户社群是个思路，目前看来也是瞎搞，我怀疑李斌根本没听说过啥叫梅特卡夫定理。他说 Nio 的服务系统是人力密集的，但是美团也是呀，美团能赚钱，我们也能呀。其实，美团是不一样的，同一个城市，每增加一个美团骑手，那么全部骑手的每单配送距离都会缩短，这是典型的网络效应，新节点的加入会惠及老节点。李斌把人聚到 Nio House ，大家聊点啥呢？能组成个车主互助群吗？感觉很扯。


- 小鹏是特斯拉的克隆
  - 与蔚来相反，小鹏汽车选择了抛弃 Mobileye，转向全自研。
  - Peter ：跟老大进行无差异竞争，就是送死。

- 换电模式虽好但不必要
  - 如果每个停车位都可以充电，换电池的必要性真的不大
  - 成本：若『换电模式』胜利成为主流，意味着车主随时有充满电的电池可换——运营优化到极致，车电池比应该也是 1：2 以上的关系。不考虑运营成本，一辆车至少要再多配一辆电池。按目前每年两千万车销量、每块电池 10 万元成本计算，主流的换电模式，一年光多出来的电池成本至少就是 2 万亿。
  - 成本高，意味者升级的成本也高。如果要兼容一个新车型，新的电池型号是比较难的
  - 如果我是电动车主，主要的焦虑是找不着充电的地方，而不是充电速度。

- 电力供应方面可以很好的跟政府合作
  - 国家要解决电力问题，国家出大头的钱，Tesla 提供解决方案，澳洲的这个合作，很有启发性。https://www.youtube.com/watch?v=PZz2r9j1Lfo
- v2x 方案不靠谱
  - 中国联通有《5G 远程驾驶白皮书》，所以远程驾驶倒是5G的一个比较实在的应用场景。自动驾驶还是要靠”车子自己的眼睛“来完成，其他方式，耳朵（毫米波雷达），导盲杖（激光雷达）v2x ，高精度地图，都只是辅助，不是核心。
  - 中国在做了
    - 郑州：“智慧岛5G智能公交项目”，宇通L4级别智能巴士
    - 雄安 5G-V2X ，可以人来控制20公里以外的车，远程驾驶，当然未来也可能是 AI 驾驶，但是 AI 在云端，不再车上。
  - v2x is basically regulatiing the whole world . 整个过程绝对不是，划定专用线，然后关键位置装一些信号发生器那么简单。如果车自己的视觉能力不够，突然窜出一个小朋友，怎么应付？v2v 要求每个车都装好系统，v2p 起码要求每个人出们都必须带安装了 v2p 系统的手机，如果只有部分人或者车装，整个系统根本没法运行，这怎么落地呀。
  - https://www.youtube.com/post/UgxsIYI66FTSELkCXSd4AaABCQ?lc=UgwFDltJ-90smpLYVbV4AaABAg
    - 赞同。我的思考角度是这样，5G 可以提供很多 nice to have 的东西，但是自动驾驶的挑战是各种突发和极端的情况，例如，突然窜出的行人，突然加塞的汽车，前车突然坠落的物体，地面丢失的井盖，地下车库路面上的钉子... 所有这些似乎 5G  都帮不上什么忙。如果极端情况，车子自己都可以应对，一些常见场景下，车子当然也能安全驾驶不依赖 5G 了。

- 电池
  - YOUTUBE: Will Tesla Cause A Lithium Shortage? 🔋⚒️ w/ Vivas Kumar
  - 特斯拉有志于生产全世界一半以上的电池
  - 老牌巨头很难追上特斯拉的原因之一是电源管理，一个车里有78000个圆柱电池，如何控制每一个电池的电压，是非常难的，特斯拉的相关软件最牛，软件的运行又跟硬件相关，所以垂直整合在这方面发挥了很大作用。https://www.youtube.com/watch?v=WigjD2CZAJE
  - 特斯拉有一个团队，专门负责盯着电池原料，体现了他们多么重视电池的大规模生产
  - 特斯拉会回收电池原材料，也会让 EV 淘汰下来的电池用到电网储能方面，的确是非常垂直整合了。
  - 车和电池分离是趋势。未来每个车主都会选择适合自己的电池，有些人一天只开十公里，而且一定对充电时间没有要求，因为在家晚上充电。所以这样的用户，完全可以采用一款非常便宜的电池。
- 电动车有利于环境保护
  - 看 tesla 2019 impact report ，可以看出电动车的每公里碳排放已经比 ICE 车少了，而且随着整个产业链的成熟，开矿，电池回收技术的完善，这部分还可以提升。但是就目前来讲，没有跟燃油车拉开太大差距。生产电池还是要有污染和水消耗。
  - 但是，空气污染没有了。万里之外的污染，跟我可以直接吸到肺里的尾气，哪个方案更优秀，一目了然。
  - tesla 给了每个人减少碳排放的机会，那就是不要用 grid 的电，而去自己安装 solar roof 。感觉很好玩，很有诱惑力。

## 垂直整合 vertical integration

- 软硬件整合
  - 软件吃世界，但是硬件是软件的载体。Tesla Robotaxi fleet ，新能源智能电网，starlink 卫星网，未来都是软件的载体。Interl/Microsoft 主导的软硬分离的思路会成为过去，专用硬件搭载专用软件形成全球唯一网络，会是未来的主流。
  - 特斯拉也正在制作跟自己骑车配套的智能手表。如果特斯拉真的变得超级流行，这种表也可能因为硬件和软件上跟车深度整合而变得非常流行。然后，这块表就有可能去争夺 Apple Watch 的市场。我有一种很强的感觉，未来的软件和硬件一定是不分家的，而硬件和硬件之间也是耦合度越高越好用的。单一的软件或者硬件公司很难生存，“生态化反”会变得非常重要，套装全家桶会非常重要，所以垂直整合很重要。
  - Solving The Money Problem 节目上说，Tesla 很可能生产自己的空调。未来，如果特斯拉建房子，我一点都不会意外。一切皆网络，房子如果仅仅是一个独立的房子，本身是不值钱的，北上广深的房子之所以贵，是因为房子是网络上的一个节点。目前房子的网络性，主要由空间位置决定，我的房子和商城医院学校离得近，这个房子的网络效应就比较强。未来，房子智能能力，跟 starlink ，Robottaxi ，smartGrid ，boring 隧道的互动能力会形成它的网络价值。

  - 苹果的教训。为了保证一个繁荣的生态，苹果放纵了微信和 Netflix 的发展，结果自己的相应业务就很难发展了。Tesla 作为下一个苹果，达成网络效应的软件要牢牢把握在自己手里。

- 垂直整合带来工程上的各种美
  - Sandy Munro 发现特斯拉在工程上的各种美观。一百个零部件被一个铸件替代，电子部分被 IC 化，链接线于是变的超级简练，如果跟传统汽车厂商一样，各个组件都是外包的，这个是不可能做到的。https://www.youtube.com/watch?v=l4MVvttOEAQ
  - 工程的美的本质就是简单。简单带来低成本和更高的安全性。
- Peter Thiel: virtical integration companies had their time
  - Ford and Standard Oil were good example
  - they are vertically integrated complex companies
  - they are best for cases where complex collaboration, lots of pieces need to be put together in right way
  - when you assemble everything, you get tremendous advantages
  - they are very capital intensive
- vertical integration does not always work
  - Former facebook exec Chamath said in 2017 that Nvidia would not be able to make a lot of money since, when AI gets really large, each tech gaint will build its own AI chip, but the reality today obviously does not match. TSMC's rise is another counterexample of vertical integration.

## 规模优势

- 内华达 gigafactory ，世界上最大的电池厂
- 大有大的优势，电池技术不行，就买个 Maxwell ，生产线需要自动化改进，就收购一个德国的机器人公司。小公司想都别想。
- 达到一定程度，才可能左右国际上的不确定性，因为电池会用到一些稀有金属，其中有些分布非常集中。
- SEMI 和物流业
  - 特斯拉除了可以颠覆滴滴 Uber ，还可能因为对物流的颠覆，而颠覆京东亚马逊。刘强东说，京东能把成本降到最低，因为货和物流都是自己的，但是对于特斯拉来说，京东的垂直整似乎还不够深，车（ Semi ），汽油（电池和电网），司机（自动驾驶）还不是自己的。
  - 马斯克说，SEMI 运货可以达成比铁路更低的成本。
- 特斯拉未来绝对不是一家买车的公司
  - 它是一家原子移动服务公司（运输货物和人）
  - 是传输原子的互联网，是跟当年的铁路网一样重要的基础设施。
  - 所以，特斯拉的市值想象空间是无限的。
  - 当然，公权力肯定会对它进行限制，但是特斯拉毕竟比铁路要复杂一万倍，在技术标准迅速迭代阶段，大家是不会想要拆分特斯拉的。
- solution not a product
  - Tesla is now the only guy who can provide a EV solution
    - that is parts, charging network, and the cars combined.

## autopilot

- 2 main tasks
  - https://youtu.be/ymcOLL2qEg8?t=303
    - Jim Keller made some great points here
  - recognize things
  - understanding the mental models of pedestrains or drivers, and predict their trajectories
  
## Energy

- megapack 和 autobidder
  - 水能太阳能天然是去中心化的，就近拍卖，可以避免传输损耗，挺棒的做法

- 特斯拉为啥会成为10万亿巨头？
  - 今天有朋友说 NIO 会和 Tesla 共存
    - https://www.youtube.com/watch?v=BAHSoYcVJWQ&lc=z22sgzdj5p3hudyuqacdp435meylb445gydlhttwbm1w03c010c.1582703850354688
    - 我不觉得 Tesla 会和其他厂商并驾齐驱，主要有下面几个原因：
      - iPhone 跟安卓可以平起平坐，但是我们发行，这两套系统的互操作性就是不好，但是所有的自动驾驶汽车都在一个路面上行驶，一定要保证良好的对话
      - 自动驾驶系统太复杂了，所以起码在初期，需要一个巨头去定出行业标准。就跟当前的微软一样，微软腾飞的阶段，是没有任何软件公司可以看见它后脊背的
      - 自动驾驶系统，robotaxi 系统，有网络性，于是就更加马太效应了
      - 所以特斯拉会发展成1999年的微软，只有政府可以跟它博弈
  - 特斯拉是多个赛道的 NO.1
    - Ark Invest 这几天的视频中列举了几个颠覆式创新的赛道
      - 1. 基因排序 2. Robotaxi 3. EV 4. Bitcoin 5. Deep Learning 6. 流媒体
      - 特斯拉在 EV 方向是明确的第一，Robotaxi 上面我自己认为也是第一，虽然路还很长，变数还很多，由于领先的自动驾驶技术，特斯拉的车甚至也是 Deep Learning 的最重要的一个应用方向之一。在未来革命性技术的多个角度都占据很好的生态位，让特斯拉显得非常有潜质。
    - 保险业务
      - 特斯拉有最强的数据收集能力，可以根据不同用户的驾驶安全程度设置，动态调整保险条款
      - 保险意味着是特斯拉垂直整合到了金融层面了，当然 GE 搞金融，导致大危机。很多人说是不务正业，活该，我觉得垂直整合是有价值的，更高的信息透明度和管理水平可以让特斯拉消化掉风险。
        - https://www.youtube.com/watch?v=Zn58tQJjC5w

## 风评

- 雷军：两会提倡卫星互联网
- 王兴：看看 Elon Musk 就觉得中国互联网界做的事情很 Low https://www.youtube.com/watch?v=YHgaeGaORT0
