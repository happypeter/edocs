- mac
  -  global proxy for all broesers in one go
  - system preference -> networking ->select Wifi or whatever in use -> advanced -> proxy -> set "socket proxy 127.0.0.1:7070"
  then I can use chrome and safari to view youtube and all...

- linux + chrome
   chrome --proxy-server="socks5://127.0.0.1:7070"
   ssh -N -D 7070 peter@happyec.org

psd to html is dead
- http://blog.teamtreehouse.com/psd-to-html-is-dead
- https://news.ycombinator.com/item?id=7058121
  -  It wasn't your paper anymore; it was their screens.
  - I want to work not just with designers, but with Web designers, who intimately understand the workings of HTML, CSS, some JavaScript, and the implications for different browser sizes and versions. Web designers speak HTML/CSS natively,
  -  css 的书写也已经从单页面，一部分一部分的完成，变成了一种系统的，器件式，高复用度的组织形式，而由设计师来主导页面设计，很多时候注意不到这一点。
- https://designschool.canva.com/ 的 figure 标签，提供各种分辨率下的图片
- svg/web font to get retina icons
  - 更好设置过度效果，改变颜色
- 最早大家都是直接用切图的方式来实现阴影，圆角，过度效果，现在 css 的新属性都支持了
dns

# happycasts.net 改名为 haoduoshipin.com

现在我想要 happycasts.net/xxx 自动重定向到  haoduoshipin.com/xxx 可以这样做

nginx.conf 中这样写

```
server {
        listen 80;
        index index.html index.htm;
        server_name happycasts.net;
        return 301 $scheme://haoduoshipin.com$request_uri;
}

server {
        listen 80;
        index index.html index.htm;
        server_name www.happycasts.net;
        return 301 $scheme://haoduoshipin.com$request_uri;
}
```

详细信息：https://github.com/happypeter/haoduoshipin/issues/325
