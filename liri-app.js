// Bringing in NPM dependencies
var axios = require("Axios");
var spotify = require('node-spotify-api');
var dotenv = require('dotenv').config();
var moment = require("moment");
var keys = require("./keys.js");
// variable to access Spotify keys
var spotify = new spotify(keys.spotify);

// Store command
var command = process.argv[2];

// Store argv as array
var argument = process.argv;

// Take in command line argument and store the desired song, artist etc... as a variable 'request'
var tempArray = [];
for (i = 3; i < argument.length; i++) {
    tempArray.push(process.argv[i]);
}
var request = tempArray.join(" ");

console.log("===============");
console.log("So far we have your command: " + command + "\nand your request: " + request);