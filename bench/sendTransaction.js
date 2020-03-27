// Copyright 2019 The Smilo-Tools Authors
// This file is part of the Smilo-Tools library.
//
// The Smilo-Tools library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The Smilo-Tools library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the Smilo-Tools library. If not, see <http://www.gnu.org/licenses/>.

const Web3 = require('web3');

const maxSTR = process.env.MAX;
const max = (maxSTR ? parseInt(maxSTR) : 100);
const target = process.env.TARGET || "192.187.124.250";
const receiver = process.env.RECEIVER || "0xc0ce2fd65f71c6ce82d22db11fcf7ca43357f172";
const DEBUG = process.env.DEBUG

let web3 = new Web3(new Web3.providers.HttpProvider(`http://${target}:22000`));
let sender = web3.eth.accounts[0];
const amount = web3.toWei(0.000000000001, "ether");

function checkConnection() {
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
    web3.eth.sendTransaction({from: sender, to: receiver, value: amount}, function (err, transaction) {
        if (err) {
            console.log("ERROR: sendTransaction, ", err);
        } else if (DEBUG) {
            console.log("DEBUG: sendSingleTransaction, ", transaction);
        }
        cb();
    })
}

//TODO: does not work, find out how to do this properly
function sendBatchTransactions(max) {
    const batch = web3.createBatch();
    for (var i = 0; i < max; i++) {
        batch.add(web3.eth.sendTransaction({from: sender, to: receiver, value: amount}))
    }
    batch.execute();
}

let counter = 0;

function loopTransactions(cb) {
    checkConnection()
    sendSingleTransaction(function () {

        counter = counter + 1;
        if (counter === max) {
            console.log(`We just sent ${max} transactions!  o/ `);
            counter = 0;
            cb();
        } else {
            if (DEBUG) {
                console.log("DEBUG: loopTransactions, ", counter);
            }
            loopTransactions(cb);
        }
    })

}


function doJob() {

    loopTransactions(function () {

        console.log(`Finish sending ${max} transactions, will call myself again ...`)
        doJob()
    })


}

console.log("[*] Starting to send transactions ... , MAX=" + max)
doJob()

