const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = `https://api.baobab.klaytn.net:8651`
<<<<<<< HEAD
const PRIVATE_KEY = '0x018164d15488fc89d42636cc9d1edb696ba801e2a70733a43d54649e3cb0f11b'
=======
const PRIVATE_KEY = '0x018164d15488fc89d42636cc9d1edb696ba801e2a70733a43d54649e3cb0f11b' 
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789

module.exports = {
  networks: {  
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    }
  },
}