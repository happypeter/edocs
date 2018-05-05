## 配置 vue-svg-loader

使用 vue-cli 3.0

```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('vue-svg-loader')
  }
}
```

```js
//package.json
 "dependencies": {
    "vue": "^2.5.16"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.0-beta.9",
    "@vue/cli-plugin-eslint": "^3.0.0-beta.9",
    "@vue/cli-service": "^3.0.0-beta.9",
    "vue-svg-loader": "^0.5.0",
    "vue-template-compiler": "^2.5.13"
  },
```

就可以了。
