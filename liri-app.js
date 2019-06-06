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

// initialize helper function
var displayInitial = () => {
    console.log("===============");
    console.log("So far we have your command: " + command + "\nand your request: " + request);
}



// If blocks to check argv arguments
if(!command) {
    console.log("Use a command to retrieve data!")
}

else if (!request) {
    command = "spotify-this-song";
    request = "The Sign";
}

else if (command === "concert-this") {
    var findConcert = function(req) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + req + "/events?app_id=codingbootcamp";
        axios.get(queryUrl)
        .then(function(response) {
            var jsonData = response.data[0];
            var concertData = [
            "\nVenue: " + jsonData.venue.name,
            "Location: " + jsonData.venue.city,
            "Date: " + jsonData.datetime
            ].join("\n\n");
            console.log(concertData);
        });
    };
    displayInitial();
    findConcert(request);
}
else if (command === "spotify-this-song") {
    displayInitial();
    spotify
        .search({ type: 'track', query: request })
        .then(function(response) {
    var data = response.tracks.items[0];
    var songData = [
    "\nArtist: " + data.artists[0].name,
    "Song Name: " + data.name,
    "Link: " + data.preview_url,
    "Album: " + data.album.name
    ].join("\n\n");
    console.log(songData);
  });
}
else if (command === "movie-this") {
    var findShow = function(req) {
        var queryUrl = "http://www.omdbapi.com/?t=" + req + "&y=&plot=short&apikey=a248ec5c";
        axios.get(queryUrl)
        .then(function(response) {
            var jsonData = response.data;
            var movieData = [
            "\nTitle: " + jsonData.Title,
            "Year: " + jsonData.Year,
            "Rating (IMDB): " + jsonData.imdbRating,
            "Rating (Rotten Tomatoes): " + jsonData.imdbVotes,
            "Country: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors
            ].join("\n\n");
            console.log(movieData);
        });
    };
    displayInitial();
    findShow(request);
}
else if (command === "do-what-it-says") {
    console.log("As you wish");
};
