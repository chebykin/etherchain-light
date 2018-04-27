var web3 = require('web3');
var net = require('net');
var fs = require('fs');
var YAML = require('yamljs');

var config = function () {
  
  this.logFormat = "combined";
  let hostsMap = YAML.load("../ethereum-poa-loadtest/tmp/latest/map.yml");
  this.provider = new web3.providers.HttpProvider(`http://${hostsMap.observers['observer-0'].ip}:8545`);
  // this.provider = new web3.providers.HttpProvider(`http://35.197.249.234:8545`);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = [];
  Object.values(hostsMap.validators).forEach((v) => {
    this.names[`0x${v.engine_signer_address}`] = `${v.name} (${v.provider}/${v.region})`;
  });

  console.log(this.names);
  // this.names = JSON.parse(fs.readFileSync("../ethereum-poa-loadtest/tmp/latest/elMap.json"));
}

module.exports = config;
