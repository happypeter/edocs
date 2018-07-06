## DIST error

> Cannot read property 'DIST' of undefined

Just had the same error , during `npm run build`

Fixed with

```
rm -r node_modules
npm i
```


## history.push() 只更新路由，不刷新页面

这里指的是通过 createBrowserHistory 创建的自己的 history

```js
      <Provider store={store}>
        <Router history={history}>
          <div>
            <CssBaseline />
            <Main />
          </div>
        </Router>
      </Provider>
```

导入 history 的语句必须在 App.js 中，而不能在 Main.js 中，目前还不清楚原由。
