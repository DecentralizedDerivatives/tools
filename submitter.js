const Web3 = require("web3");
const fs = require('fs');
const Tx = require('ethereumjs-tx')
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/zkGX3Vf8njIXiHEGRueB"));

var nonce = process.argv[2]
var pkey = process.argv[3]
var gPrice = process.argv[4]
var account = process.argv[5];

console.log('Nonce submitted: ', nonce,'      ');
console.log('pkey', pkey,'      ')


  var privateKey = new Buffer(pkey, 'hex');
  web3.eth.getTransactionCount(account, function (err, nonce) {
    var tx = new Tx({
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(web3.utils.toWei(gPrice,'gWei')),
      gasLimit: 21000,
      to: account,
      value: 0
    });
    tx.sign(privateKey);

    var raw = '0x' + tx.serialize().toString('hex');
    web3.eth.sendSignedTransaction(raw, function (err, transactionHash) {
       console.log(transactionHash);
    });
  });