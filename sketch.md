- sketch runner
  - sketch 的命令面板
  - https://sketchflowkit.com/

- 黏住顶部 stick to top
  - 创建了一个 symbol ，顶部的一个窄窄的 header 如何随着整个组件 resize 的过程中
  - 保持顶部位置
  - 解决方法，给小 header 设置 resize 的时候，选三侧贴合，底部不贴和
  - 默认点一下是四边都贴合，但是可以取消单纯任何一侧的

- 动手思路
  - 全部按 react 的方式来思考设计
  - 每个页面上先化大框框，确定每个大框框的作用
  - 每个大框框中划分多个小框框
  - 每个小框框都要有自己的名字
  - 然后思考这个小框框是否适合放置在这个大框框中
  - 也就是让界面的布局完全语义化
  - 最终的设计图不见得所有的框框都保留自己的 border ，可以有留白，可以有突出变形，
    - 但是大框框之间绝对不会比大框框之内的小框框之间离得更近（触犯亲密性原则），不然证明你的结构安排有问题
  - 但是如果你的设计必须去掉 border 才行，那是否意味着界面组件的概念层级组织根本就不对呢？

- 拷贝拖拽到另外一个 artboard
  - 独立对象之间拖拽即可
  - 在一个 group 之内的就比较麻烦，因为拷贝之后拖拽，group 也会自动 resize
  - 所以线必须把对象移到 group 之外，再拖拽到其他的 artboard
  - 另外的思路，在左侧边栏操作，先 cmd-d 拷贝一个对象，然后直接把它移动到目标画板
  - 此时当然看不见，去 canvas 上拖拽这个对象到目标画板即可

- select a artboard
  - 画板上没有任何 layer 的时候，点一下画板即可
  - 有了东西，可以点 artboard 的顶部的名字名字
  - 更实用的就是，右击 pick layer 选中画板名

- 安装 icons
  - https://github.com/keremciu/sketch-iconfont
    - follow what's in README
    - 装完之后要是总不出现 Plugins-> Abstract -> Load 试试
