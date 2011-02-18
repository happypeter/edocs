while read line; do 
echo $line # or whaterver you want to do with the $line variable
done < $1


#################################
#
#    big example
#    
#################################

while read line; do 
echo $line|grep ^./ &>/dev/null # serch the line that begins with "./", that is the filename

if [ $? -eq 0 ]
then
    filename=$line # if the line is a filename, then update filename
else
    echo  "this is not a filename"
fi

done < reversed

