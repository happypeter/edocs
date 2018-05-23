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
  extends: "react-tools"
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
