'use strict';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function test_firebase()
{
  var firebase = require("nativescript-plugin-firebase");
  console.log("testing firebase");

await firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
}
module.exports = test_firebase;
