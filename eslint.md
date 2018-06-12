前言：react-static create 出来的项目，采用的 eslint 配置时 react-tools ，我自己非常的喜欢。但是用 vscode 打开后，跟我的 prettier 默认配置有冲突，所以一旦每次保存，运行了 prettier ，那么编辑器界面上就会看到很多 eslint 报错。所以才有了下面的解决方案。

先选一套合适的 lint 规则，

例如选择：

package.json

```
  "eslint-config-react-tools": "1.1.2",
```

然后配置

/.eslintrc.js

```js
module.exports = {
  extends: 'react-tools'
};
```

这样，安装了 eslint 插件的 vscode 中就会报出各种错误了。

但是这里差错的规则可能跟 prettier 有冲突。现在我肯定希望 prettier 做出让步，跟 eslintrc 中规定的方式一致的啦。

具体步骤是：

所以就得到 vscode 中，到 settings ，删除所有 pettier 相关的自定义设置（注意即使这样，prettier 也依然保留了大量的自己的默认配置 ），

```
 // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  "prettier.eslintIntegration": false
```

只开启这一项，把 false 改为 true 。这样，prettier 自己的想法要完全从属与 eslint 配置 。

当然，未来我自己项目的默认首选还是：https://www.npmjs.com/package/eslint-config-react-app

### 另

配置 vscode 支持 eslint 报错只需要两步

```
You would need to install an ESLint plugin for your editor first. Then, add a file called .eslintrc to the project root:

{
  "extends": "react-app"
}
```

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor

### markdown file

一旦 markdown 文件中有 js 代码块，eslint 就不管了，还是需要 prettier
加一些设置的.

### react-static 项目

react-static 项目中 JSX 出现缩进错误。

现在我的 prettier 是从属于 eslint 的。并且如果删除了 eslintrc 中的内容，保存时候的错误缩进就没有了。所以这个是一个 eslint 的错误。

```
 <div />
    <div>
      <Routes />
    </div>
```

我把 .eslintrc 中，删除 react-tools 直接使用 airbnb ，然后从https://github.com/react-tools/eslint-config-react-tools/blob/master/index.js 拷贝了一些必要点的 rules 过来。一切正常了。


## babelrc 文件

.babelrc 文件打开后，vscode 会自动识别格式为 json 。但是当保存这个文件的时候，prettier 会把原来的 json 格式的内容，变成普通 JS 对象

```
{
  extends: 'react-static/.babelrc',
  plugins: ['react-hot-loader/babel']
}
```

但是同时 eslint 优惠把上面的内容都加上红线，说 json 内容应该是双引号等等。


```
    "prettier.eslintIntegration": false,
```

vscode 中的这一项设置为 false ，prettier 就可以正确的保留 .babelrc 的双引号了。看来还是 eslint 有问题。

eslint 的确是不能正确处理 .babelrc 文件的内容，但是默认 eslint 的命令行是会忽略 .babelrc 文件的。但是不知道为何 vscode-eslint 没有忽略。暂时没有找到好的方法处理，直接用 vim 来修改这个文件吧。(也会看到 vscode 打开 .babelrc 后有一个 load schema 的失败错误，所以可能也是相关的)



## 支持 jest


```
npm i  eslint-plugin-jest
```

.eslintrc.js

```js
module.exports = {
  parser: 'babel-eslint', // 没有这句，class 组件内， state = {xxx:xxx} 就会报错了
  extends: 'airbnb',
  plugins: ['jest'],
  rules: {
    semi: ['error', 'never'],

    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
  },
  env: {
    'jest/globals': true,
  },
}

```


以上的内容抽取自 https://github.com/react-tools/eslint-config-react-tools/blob/master/index.js
