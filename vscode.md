# vscode tips

## nav

cmd-1 cmd-2 .... 在各个打开的文件中切换


### debug

.vscode/xxx

```
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}"
    }
  ]
}
```
就是默认生成的，改了一下端口号。