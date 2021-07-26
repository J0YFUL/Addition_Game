# Addition_Game

clone-code from klaytn official tutorial document (inflearn)
------------------------------------------------------------------------
version for using :

truffle <- 4.1.15
node <- 11.15.0 (downgraded, newest version was 14.17.3 (nvm convert))
npm <- 6.7.0 (same above about node version)

dependencies from package.json
"caver-js": "^1.6.3"
"connect-privkey-to-provider": "^0.0.3"
"spin.js": "^4.0.0"
------------------------------------------------------------------------

How to use this BApp :

1. make your accounts of Klaytn Wallet from (https://wallet.klaytn.com/create), 2 account would be good for test
   - remeber 'password' , 'keystore file', 'private key' data in your mind or txt file.

2. Get the free KLAY from klaytn faucet (https://baobab.wallet.klaytn.com/access?next=faucet), 5 KLAY per day.
   these klays will be used for this BApp running on the baobab testnet.
   
3. install node.js(npm) and then truffle 'npm install -g truffle@4.1.15' command.

4. install main file and in that directory, use command 'npm install'

5. check the 'node_modules' file and whether dependencies exist.(caver-js, connect-privkey-to-provider, spin-js)

6. if success, modify content 'truffle.js' file with YOUR PRIVATE KEY
   in line 5, const PRIVATE_KEY = 'YOUR PRIVATE KEY what you get' << you'll need some klays in that account(use free-faucet)
   and then Use command 'truffle deploy --compile-all --reset --network klaytn'
   this command deploy and re-compile the contract. File deployedAddress maybe changed cause of deployment.
   
7. npm run dev

8. test the BApp
