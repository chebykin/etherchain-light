var web3 = require('web3');
var net = require('net');
var fs = require('fs');

var config = function () {
  
  this.logFormat = "combined";
  let hostsMap = JSON.parse(fs.readFileSync("../ethereum-poa-loadtest/tmp/latest/hostsMap.json"));
  this.provider = new web3.providers.HttpProvider(`http://${hostsMap.validators[0].ip}:8545`);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = JSON.parse(fs.readFileSync("../ethereum-poa-loadtest/tmp/latest/elMap.json"));
}

module.exports = config;
