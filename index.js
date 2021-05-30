ThingWebCoffee = require("./coffee").ThingWebCoffee
Servient = require("@node-wot/core").Servient
HttpServer = require("@node-wot/binding-http").HttpServer


// ### Change this if using another direcoty ###
const TD_DIRECTORY = "http://localhost:8031/api/td"
// ###  -----------------------------------  ###


var httpServer = new HttpServer({ port: 8031 });
var servient = new Servient();

servient.addServer(httpServer);
servient.start().then((WoT) => {
  test_thing = new ThingWebCoffee(WoT, TD_DIRECTORY);
})