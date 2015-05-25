# 代码高亮

默认不支持三个倒引号的语法，需要在 _config.yml 中添加

kramdown:
  input: GFM


代码高亮就先安装 gem install rouge 然后在  _config.yml 中添加

highlighter: rouge


就可以了，但是必须用 liquid 的语法包裹代码才行，用到引号的不行。
