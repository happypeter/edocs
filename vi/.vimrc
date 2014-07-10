""""""""""""""""""""""""""""""""""""""""
"
"             brower
"
""""""""""""""""""""""""""""""""""""""""
" NOW Browser() only works for lines containing nothing but the link
" refer to http://vim.wikia.com/wiki/VimTip306 
function! Browser ()
  let line = getline (".")
"  let line = matchstr (line, "\%(http://\|www\.\)[^ ,;\t]*")
  exec "!firefox ".line
endfunction
map ,w :call Browser ()<CR>

""""""""""""""""""""""""""""""""""""""""
"
"             buffers
"
""""""""""""""""""""""""""""""""""""""""
" in order to switch between buffers
" with unsaved change 
set hidden
" I just use <Tab> to do buffernext, but need to make sure I am in Normal Mode
" and I do use <Tab> for any other purposes in Normal Mode 
map <Tab> :bn<CR>
""""""""""""""""""""""""""""""""""""""""
"
"             formatting 
"
""""""""""""""""""""""""""""""""""""""""
" this is for C comments, see *fo-table* to know what althese options mean
set fo=croq
""""""""""""""""""""""""""""""""""""""""
"
"             general
"
""""""""""""""""""""""""""""""""""""""""
" why I use *,* to do mapping?
" inspired by Derek, the reasons:
" 1. <LEADER> is too long to type
" 2. *,* is easier to reach than *\*
" 3. in practice you nerver type in *,v*, but *, v*
" Derek also do a nomap for *,*
"   nnomap <c-e> ,
" I do not do it, since I do not use *,* as a command a lot

""""""""""""""""""""""""""""""""""""""""
"
"             taglist
"
""""""""""""""""""""""""""""""""""""""""
map ,t :Tlist<CR>

""""""""""""""""""""""""""""""""""""""""
"
"             Doxgen
"
""""""""""""""""""""""""""""""""""""""""
" highlight the doxygen comments
" used with DoxygenToolkit.vim
let g:load_doxygen_syntax=1

""""""""""""""""""""""""""""""""""""""""
"
"             QT-doc
"
""""""""""""""""""""""""""""""""""""""""
map ,k :!qref <cword><ENTER>

""""""""""""""""""""""""""""""""""""""""
"
"             NERDtree
"
""""""""""""""""""""""""""""""""""""""""
map ,n :NERDTreeToggle<CR>

""""""""""""""""""""""""""""""""""""""""
"
"             quit quickly
"
""""""""""""""""""""""""""""""""""""""""
" before I use <S-ZZ> to quit, this has the danger of unexpectedly
" save some garbage editing, so I have a safer way now as below
map ,, :q<CR>
" force quit
map ,f :q!<CR>

""""""""""""""""""""""""""""""""""""""""
"
"             vimrc editing 
"
""""""""""""""""""""""""""""""""""""""""
map ,v :vnew ~/edocs/plaintext/vi/vimrc<CR>
" see :h script 
" it seems stupid to run VimrcUpdate everytime vimrc is modified
" there must be a better way
function! s:VimrcUpdate()
  exe "!cp /home/peter/edocs/plaintext/vi/vimrc .vimrc&&echo vimrc updated"
  " so ~/.vimrc
  " the above line cause error: can not update VimrcUpdate, it is in use
  " I can run ==so %== to avoid restart vim
endfunction
com! UpdateVimrc call s:VimrcUpdate()
""""""""""""""""""""""""""""""""""""""""
"
"            quick escape  
"
""""""""""""""""""""""""""""""""""""""""
" set quick escape from insert mode, and now I can go without arrow keys and
" use j and k to move around in insert mode
imap JJ <esc>
imap jj <esc>

""""""""""""""""""""""""""""""""""""""""
"
"             wildmode
"
""""""""""""""""""""""""""""""""""""""""
set wildmenu

""""""""""""""""""""""""""""""""""""""""
"
"             tabbing 
"
""""""""""""""""""""""""""""""""""""""""
set expandtab
set shiftwidth=4
set tabstop=4

""""""""""""""""""""""""""""""""""""""""
"
"             dictionary
"
""""""""""""""""""""""""""""""""""""""
" i_CTRL_X_K 
set dictionary+=~/.vim/dict/simple
" the ic for dict somethings works something sucks
set ic 
set dictionary-=/usr/share/dict/words dictionary+=/usr/share/dict/words

""""""""""""""""""""""""""""""""""""""""
"
"             status line
"
""""""""""""""""""""""""""""""""""""""""
" Set the status line the way i like it
set stl=%f\ %m\ %r\ Line:%l/%L[%p%%]\ Col:%c\ Buf:%n\ [%b][0x%B]

" tell VIM to always put a status line in, even if there is only one window
" this means I can also see what is the filename I am in, finally!
set laststatus=2

""""""""""""""""""""""""""""""""""""""""
"
"             misc
"
""""""""""""""""""""""""""""""""""""""""
" have nice $ sign when you use `cw`
set cpoptions+=$

" Do not know how to use autocmd yet, so the following line not working
" autocmd FileType text setlocal textwidth=78
set textwidth=78

" input abrevation 
iab frm from 
" set number for doing diffs and folding
set nu
" Show the current command in the lower right corner
set showcmd
" When the page starts to scroll, keep the cursor 8 lines from the top and 8
" lines from the bottom
set scrolloff=8

" Allow the cursor to go in to "invalid" places
set virtualedit=all


