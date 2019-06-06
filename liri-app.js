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

if(!command) {
    command = "spotify-this-song";
}

else if (!request) {
    command = "spotify-this-song";
    request = "The Sign";
}

else if (command === "concert-this") {
    console.log("Searching for Concert");
}
else if (command === "spotify-this-song") {
    console.log("Searching for Song");
}
else if (command === "movie-this") {
    var findShow = function(request) {
        // The following URL can be used to search the TV Maze API for a given show
        var queryUrl = "http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl)
        .then(function(response) {
            var jsonData = response.data;
            console.log(jsonData);
            var movieData = [
            "Title: " + jsonData.Title,
            "Year: " + jsonData.Year,
            "Genre(s): " + jsonData.Year,
            "Rating: " + jsonData.rating.average,
            "Network: " + jsonData.network.name,
            "Summary: " + jsonData.summary
            ].join("\n\n");
            console.log(movieData);
        });
    };
    findShow();
}
else if (command === "do-what-it-says") {
    console.log("As you wish");
};
