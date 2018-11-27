#!/usr/bin/env bash


seq 2 | parallel "MAX=999999 TARGET=198.204.251.98 RECEIVER=0xecf7e57d01d3d155e5fc33dbc7a58355685ba39c node ./sendTransaction.js " > /dev/null  2>&1 & disown
seq 2 | parallel "MAX=999999 TARGET=107.150.40.146 RECEIVER=0xc0ce2fd65f71c6ce82d22db11fcf7ca43357f172 node ./sendTransaction.js " > /dev/null  2>&1 & disown
seq 2 | parallel "MAX=999999 TARGET=142.54.177.170 RECEIVER=0x7cb791430d2461268691bfba6e35d8a8c7ea2e63 node ./sendTransaction.js " > /dev/null  2>&1 & disown
seq 2 | parallel "MAX=999999 TARGET=74.91.28.98 RECEIVER=0xd54924701cd0d94d677d0a66dee75c978e175c74 node ./sendTransaction.js " > /dev/null  2>&1 & disown
seq 2 | parallel "MAX=999999 TARGET=192.187.124.250 RECEIVER=0x2f65a895741143953aabed3680177594818a5f9a node ./sendTransaction.js " > /dev/null  2>&1 & disown


#./multi-parallel.sh