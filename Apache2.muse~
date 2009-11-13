= ubuntu 9.04 =


apt-get install apache2
/var/www/index.html
http://127.0.0.1/
done


== cgi-bin ==
{{{
vim /etc/apache2/sites-enabled/000-default
}}}

{{{
        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
        <Directory "/usr/lib/cgi-bin">
                AllowOverride None
                Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
                Order allow,deny
                Allow from all
        </Directory>
}}}

then I can put s.py into /usr/lib/cgi-bin/, can call it like this
{{{

<form method=POST action="cgi-bin/s.py">
}}}

== s.py ==
I got lots of errors, which are availbale to check at
{{{
/var/log/apache2/error-log
}}}

but finally this works
{{{
#!/usr/bin/python
import cgi
form = cgi.FieldStorage()


print "Content-type: text/html"
html ="""
<hr>
<p>%s</p>
<hr>
"""

print html % ("hello, %s"%form['user'].value)
}}}
