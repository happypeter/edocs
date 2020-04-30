今天遇到一个错误，page build failure 不断。

最后发现，用 default layout 就没错，用 post layout 就不行。

最终发现原因了，post layout 文件里用了 `date_to_string` 这样的函数，
而用这样的函数的文件必须是这样的

    _posts/2014-3-24-ctags.md

我的这个文件不满足这个格式要求，所以不能用 `date` 相关函数。
