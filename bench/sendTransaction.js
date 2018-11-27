const Web3 = require('web3');

const max = process.env.MAX || 100;
const target = process.env.TARGET || "192.187.124.250";
const receiver = process.env.RECEIVER || "0xc0ce2fd65f71c6ce82d22db11fcf7ca43357f172";

let web3 = new Web3(new Web3.providers.HttpProvider(`http://${target}:22000`));
let sender = web3.eth.accounts[0];
const amount = web3.toWei(0.000000000001, "ether");

function checkConnection(){
    if (!web3.isConnected()) {
        console.log("**** WE LOST CONNECTION!! ****")
        web3 = new Web3(new Web3.providers.HttpProvider(`http://${target}:22000`));
        if (web3.isConnected()) {
            console.log("**** WE MANAGED TO RESTORE CONNECTION!! ****");
        } else {
            console.log("**** COULD NOT RESTORE CONNECTION!! ****");
            process.exit(1);
        }
    }
}

function sendSingleTransaction(cb) {
    web3.eth.sendTransaction({from: sender, to: receiver, value: amount}, function(){
        cb();
    })
}

//TODO: does not work, find out how to do this properly
function sendBatchTransactions(max){
    const batch = web3.createBatch();
    for (var i=0;i<max;i++) {
        batch.add(web3.eth.sendTransaction({from: sender, to: receiver, value: amount}))
    }
    batch.execute();
}

let counter = 0;

function loopTransactions(cb) {
    checkConnection()
    sendSingleTransaction(function(){

        counter = counter + 1;
        if (counter === max) {
            console.log(`We just sent ${max} transactions!  o/ `);
            counter = 0;
            cb();
        } else {
            loopTransactions(cb);
        }
    })

}


function doJob() {

    loopTransactions(function(){

        console.log(`Finish sending ${max} transactions, will call myself again ...`)
        doJob()
    })


}


doJob()
