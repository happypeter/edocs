# 给 haoqicat.com 添加腾讯的 https 证书

https://cloud.tencent.com/product/ssl?fromSource=gwzcw.471468.471468.471468

先把域名解析转到微信。

从腾讯的`云解析`界面导入 haoqicat.com 之后，需要

```
记录导入成功！成功导入 13 条记录，如有遗漏，可在记录管理，手动添加。
您还需要到域名注册商（万网）处，将 DNS 修改为

f1g1ns1.dnspod.net

f1g1ns1.dnspod.net

不能同时和其他 DNS 混用，会导致解析混乱。

修改 DNS 服务器需要最长 72 个小时的全球生效时间，请耐心等待。
```

我到 domain.com 把 DNS 服务改为上面的。

到 [证书管理控制台](https://console.cloud.tencent.com/ssl) 查找信息进行填写 云解析 上的 TXT 记录。然后等待控制台上的状态从 `未验证` 变成其他状态。

使用云解析之后，再次申请子域名的证书（ trustAsia 的免费证书没有通配符，所以每个子域名都要单独申请），由于主域名 haoqicat.com 已经配置过腾讯云解析，所以添加 txt 记录那一步就省略了。

## 没有备案的域名

就不能用云解析服务了：https://console.cloud.tencent.com/domain/cns

可以到类似 godday 这样的网站上直接添加 txt 记录。添加时 **主机** 一项要填 `_dnsauth` 。

这种方式添加 txt 之后，证书验证也是十来分钟就过了。

## 部署到 nginx

https://cloud.tencent.com/document/product/400/4143

haoqicat.com

```conf
server {
    listen         80;
    server_name    haoqicat.com;
    return         301 https://$server_name$request_uri;
}
server {
    listen         80;
    server_name    www.haoqicat.com;
    return         301 https://$server_name$request_uri;
}
server {
    listen       443 ssl default_server;
    server_name  haoqicat.com;
    ssl on;
    ssl_certificate   /etc/nginx/cert/1_haoqicat.com_bundle.crt;
    ssl_certificate_key  /etc/nginx/cert/2_haoqicat.com.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;+
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

        location / {
        proxy_pass http://localhost:3000;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_x_forwarded_host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 3m;
        proxy_send_timeout 3m;
    }
  }
```

book.haoqicat.com

```conf
server {
    listen         80;
    server_name    book.haoqicat.com;
    return         301 https://$server_name$request_uri;
}
server {
    listen       443 ssl;
    server_name  book.haoqicat.com;
    ssl on;
    ssl_certificate   /etc/nginx/cert/1_book.haoqicat.com_bundle.crt;
    ssl_certificate_key  /etc/nginx/cert/2_book.haoqicat.com.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;+
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    root   /home/peter/sites/book/;
}
```

一个 create-react-app 编译输出的静态项目

```
server {
    listen         80;
    server_name    example.us;
    return         301 https://$server_name$request_uri;
}

server {
    listen       443 ssl;
    server_name  example.us;
    ssl on;
    ssl_certificate   /etc/nginx/cert/1_example.us_bundle.crt;
    ssl_certificate_key  /etc/nginx/cert/2_example.us.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

    root /home/ubuntu/express-alipay-stripe/build/;
    location / {
      try_files $uri /index.html;
    }
}
```

https 步骤及常见问题 
https://github.com/happypeter/onestep/issues/714
