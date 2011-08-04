## heroku
to install:
    
    gem install heroku

now creat a new presentation with showoff

    showoff create test-pres # note you need to give a name 

setup heroku:

    peter@cow:~/ddd/test-pres$ showoff heroku test-pres # again the NAME
    # if you don't give a name, operation failed but no error msg, so careful
    image sizing disabled - install rmagick
    pdf generation disabled - install pdfkit
    herokuized. run something like this to launch your heroku presentation:

          heroku create test-pres
          bundle install
          #git init
          git add Gemfile.lock .gems config.ru
          git commit -m 'herokuized'
          # git remote add heroku git@heroku.com:test-pres.git
          git push heroku master
          
    peter@cow:~/ddd/test-pres$ ls -a
    .  ..  config.ru  Gemfile  one  showoff.json

ERROR: sshkey

    peter@cow:~/vim-showoff-peter$ git push heroku 
    Permission denied (publickey).
    fatal: The remote end hung up unexpectedly

the fix:

    peter@cow:~/vim-showoff-peter$ heroku keys:add
    Uploading ssh public key /home/peter/.ssh/id_rsa.pub


## my requirement

I want to creat slides from text rather than within a WYSIWYG environment. so
that I can use Vim to get it done faster and git to version control it.

Schacon <http://github.com/schacon/showoff>
said _slidy_ is cool, so I tried
<http://www.w3.org/Talks/Tools/Slidy2/>
it just worked perfectly when I downloaded this

<http://www.w3.org/Talks/Tools/Slidy2/slidy.zip>

and people even want to do this in _Markdown_ 

<http://github.com/nakajima/slidedown>

which is really nice touch.

but the next thing I want is to convert this to PDF, tried 
<http://www.princexml.com/overview/> but it showed no differce from what I get
to generate pdf within _firefox-print-print into pdf_, the `class = slide` is
simply ignored and the output.pdf is not slides but rather common pages.

### A dirty but not quick way to get PDF:

press F11 in firefox `printScreen` all pages and add all of them to slids
within openoffice, then generate pdf with ooo.

#showoff installation(on ubuntu 9.10)

    478  gem install showoff

  then I end up with:
    
    require mkmf(error)

so I 

    sudo apt-get install ruby1.8-dev

but the same error remains, and later I found it was because I am using `rubygems1.9` and it will call `ruby1.9`
but `ruby1.9-dev` is not installed, the fix is simple: uninstall rubygems1.9 and then

    516  sudo aptitude install rubygems1.8

now the following error actually required these

    522  iii libxml2-dev
    532  iii libxslt-dev

and now 

    534  gem install showoff

succeeded!

### now on 10.04

you also need to install rmagik and pdfkit, sounds really useful.

## test

    479  git clone https://github.com/schacon/showoff-wrangling-git.git
    536  cd showoff-wrangling-git/
    540  export PATH=$PATH:/home/peter/.gem/ruby/1.8/bin
    543  showoff serve

    firefox 127.0.0.1:9090

done!
