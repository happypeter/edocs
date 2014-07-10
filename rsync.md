** Grsync

<example>
 sudo apt-get install grsync
</example>

it is so simple, and gives console output in gui

=~/.grsync/= has its config file


Sample uses of grsync include: 
 - synchronize a music collection with removable devices, 
 - backup personal files to a networked drive, 
 - replication of a partition to another one, 
 - mirroring of files, etc.


** test

<example>
pet@girl:~/SYNC$ rsync -r source/ root@10.1.0.155:~/peter
root@10.1.0.155's password: 
pet@girl:~/SYNC$ 
</example>
and it si done! exactly like =scp= 
but how can I keep the remote [dest] exactly like local:[src]
I mean if I change a file name in [src], I hope the older name won't show up in [dest]

A: the **option** =--delete= will do the job, for other options, check =man= or check the command line output of
=grsync=

Note: =-c= has nothing to do with *verify integrity*, since **integrity** is forever guranteed, see this 

              Note that rsync always verifies that each transferred  file  was
              correctly  reconstructed  on  the  receiving  side by checking a
              whole-file checksum that is generated  as  the  file  is  trans-
              ferred,  but  that automatic after-the-transfer verification has
              nothing to do with this option's before-the-transfer "Does  this
              file need to be updated?" check.

