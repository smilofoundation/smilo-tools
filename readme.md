# Smilo-Tools

Official Golang/NodeJS of Smilo Tools


### Dependencies
- Golang 1.11
- Dep
- NodeJS


### DEMO

In this Performance test demo, we are using Graphana and smilo-tools to generate and submit transactions to a smilo blockchain private cluster of 7 nodes.

Hardware used is; 5 Masternodes, Xeon 2670 - 32 GB.


In the image below, you will see a many different metrics. In the hope to make it somewhat useful to you, I have described each colum with a bit more detail.

### Current Block
The current block that was last created

### Since last block received (network)
The amount of time in seconds that the block takes to be propagated over the network

### Block size
The size of the data in the block in kbps

### SmiloPay used
The amount of SmiloPay used for transactions to be processed

### Transactions per block
The amount of transactions that are injected in a single block

### Gas Price (gwei)
The price of gas being used for a transactions. Miners will be able to set this value. Note: on Smilo, Gas is a security deposit that is given back if transaction succeed. 

### Effective Block Time
The time the block takes to be created and sealed.

### TPS
The total amount of transactions per second over the last hour.

### Transactions per Block
The amount of transaction registered per block over time

### Gas Price
The price of gas being used for a transactions. Miners will be able to set this value. Note: on Smilo, Gas is a security deposit that is given back if transaction succeed. 

### Transactions / Block Time
The current amount of transactions registered per block / effective block time; right now

### MAX TPS
The maximum amount of transactions per second measured over the last hour

### Transfers now
The amount of Smilo token transfers at current block

### Smilo value
The  amount of Smilo that was transferred at current block

### Smilo transfers
The amount of Smilo tokens being transferred over time

### Token transfers
The amount of Smilo SRC20 token transfers at the current block

### SRC20 Token transfers
The amount of Smilo SRC20 tokens being transferred over time

### Pending transactions
The transactions that queued to be processed right now

### Pending transactions (2)
The transactions that still need to be processed over time

### Today’s sent Smilo
The amount of Smilo being sent over the last 24 hours

### Server Response
The time it takes for the Smilo Blockchain to respond to our checks in milliseconds over time

### Contracts created
The amount of contracts created over time



[![Smilo Network Performance Test Demo](https://i.ytimg.com/vi/-vNawAjdNAw/hqdefault.jpg)](https://www.youtube.com/watch?v=-vNawAjdNAw "Smilo Network Performance Test Demo")



## License

```
Copyright 2019 The Smilo-Tools Authors
This file is part of the Smilo-Tools library.

The Smilo-Tools library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The Smilo-Tools library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the Smilo-Tools library. If not, see <http://www.gnu.org/licenses/>.
```

