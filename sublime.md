### For MacOS
 
emmet : html&css snippets
        Settting User may have this package ignored, so uncomment that line
sass  : .scss file format support
 
 
install package named “Erb" or sth
 
Key Binding User 中要做下面的设置


```
[
  { "keys": ["ctrl+shift+."], "command": "erb" },
  { "keys": ["shift+tab"], "command": "reindent" , "args": { "single_line": false } }
]
```
 
reindent use tab( rather than two spaces ), how to fix?
  - set `  "translate_tabs_to_spaces": true ` in Setting User


- http://happycasts.net/episodes/85


Settings User:


```
{
  "color_scheme": "Packages/RailsCasts Colour
Scheme/RailsCastsColorScheme.tmTheme",
  "font_face": "Courier New",
  "font_size": 17.0,
  "line_padding_bottom": 1, # 适当调节一下，有助于中文显示效果
  "line_padding_top": 1,

  "ignored_packages":
  [
    "Vintage"
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true
}
```

- wrap text in html tag
  - ctrl-w(macx)
