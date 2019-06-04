// Bringing in NPM dependencies
var axios = require("Axios");
var spotify = require('node-spotify-api');
var dotenv = require('dotenv').config();
var moment = require("moment");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);