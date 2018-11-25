// Read Synchrously
var fs = require("fs");
// console.log("\n *START* \n");
//get output from getpeerinfo and save it as peers.json in the same dir as this js file 

var content = fs.readFileSync("peers.json");
// console.log("Output Content : \n"+ content);
var jsondata = JSON.parse(content);
for( i =0;i<jsondata.length;i++){
    //output data needed for chainparams.cpp addition
console.log("vSeeds.push_back(CDNSSeedData(\"gennodes\"," +"\"" + jsondata[i].addr + "\"" + "));")
}

//now do the same with masternodedata.json
// console.log("\n *START* \n");
//get output from masternode list and save it as masternodedata.json in the same dir as this js file 

var content = fs.readFileSync("masternodedata.json");
// console.log("Output Content : \n"+ content);
var jsondataa = JSON.parse(content);
for( i =0;i<jsondataa.length;i++){
    //output data needed for chainparams.cpp addition
console.log("vSeeds.push_back(CDNSSeedData(\"gennodes\"," +"\"" + jsondataa[i]['ip:port'] + "\"" + "));")
}
// console.log("Mn conf end")

// console.log("\n *EXIT* \n");
