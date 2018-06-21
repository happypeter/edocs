## viewport 很重要

sketch 中默认导出的 svg 图，是没有 viewport 的，这样

```
svgr left.svg> Left.svg
```

之后，如果

```
<Left width={20} />
```

会发现有一部分内容就不显示了。

添加上 Viewport ，类似这样

Left.js

```js
import React from 'react'

const Left = props => (
  <svg viewBox="0 0 98 10" width={98} height={10} {...props}>
    <g stroke="#13C7B3" fill="none" fillRule="evenodd">
      <path d="M94 5c1.657 0 3-.895 3-2s-1.343-2-3-2" />
      <path d="M32 1h62M4 9h62M4 5h89" strokeLinecap="square" />
      <path d="M4 9c-1.657 0-3-.895-3-2s1.343-2 3-2" />
    </g>
  </svg>
)

export default Left
```


然后这样使用

```js
  introHeader: {
    width: '60px',
    border: '1px solid red',
  },
  left: {
    border: '1px solid green',
    width: '100%',
  },

     <div className={s.introHeader}>
        <Left className={s.left} />
      </div>
```

父元素 div 宽带如果变小，那么 Left 组件图形也会跟 png 图一样，按比例压缩，不会有内容被遮挡了。
