XuWentao failed to run scrarchbox installation script, because he do
not know how to set proxy for wget
i solved this problem this way
$vim ~/.wgetrc
export PROXY=http://211.90.168.94:8080/
export http_proxy = http://211.90.168.94:8080/
export ftp_proxy = http://211.90.168.94:8080/
and then
source ./wgetrc
but even now
wget http://www.baidu.com
can not be done
you have to use
wget -Y on -p -k https://www.baidu.com/
so i think i can replace all the "wget" in the script with "wget -Y on -p -k"
but when i open the script
i find out that wget is not in use
run the script now, it is now able to connect to the outside web, great!

