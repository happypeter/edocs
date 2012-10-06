# gem

    cd gitbro
    gem server # then I get really nice api docs for all my gems
# pry
railscasts,

I actually use `gem install pry pry-doc --force`

because  I have to use force. but things worked out ok

# rails

the Xcode on Lepord CD is buggy, so must be installed on line

(just download the 4.1G xcode from developer.apple.com, then everything is OK)

follow the installation on official site, still I need to Ctrl-C once runing

    rvm install 1.9.2

like I did on Linux, now done.

now
    cd auth-love
    bundle install

error:

    checking for mysql_query() in -lmysqlclient... no

I try:
    
    sudo port install mysql5 # readline openssl ... installed as deps

now  `bundle install` done.

but I failed to config this mysql to work, so I:

    sudo port uninstall mysql5 ‑‑follow‑dependencies

now try to install the dmg file:
http://dancewithnet.com/2010/05/09/run-apache-php-mysql-in-mac-os-x/
http://dev.mysql.com/doc/refman/5.1/en/macosx-installation-pkg.html

well it's far more well documented, nice. Though I failed to start mysql with
`mysqld_safe`, but it came alive after reboot.

when I try to `bundle install` mysql2 failed:

    /Users/peter/.rvm/rubies/ruby-1.9.2-p290/include/ruby-1.9.1/ruby/st.h:69: error: size of array ‘st_check_for_sizeof_st_index_t’ is negative

Fuck, it is simply because I installed the x86 dmg file rather then `x86_64`.

rake problem:

    You have already activated rake 0.9.2, but your Gemfile requires rake 0.8.7. Consider using bundle exec.

SO I use

    bundle exec rake doc:guides

it worked well.

### passenger

    cd auth-love
    bundle install # passenger in Gemfile alreadey
    passenger-install-apache2-module # NO sudo

now I setup a virtualhost with Passenger.prefpane, from

http://www.fngtps.com/passenger-preference-pane

and install for  `single user`, everything worked as shown in railscasts.com.

