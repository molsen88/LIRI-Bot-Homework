var fs = require( "fs" );
// var inquirer = require( "inquirer" );
var axios = require( "axios" )
var moment = require( "moment" )
var Spotify = require( 'node-spotify-api' );
var Keys = require( "./keys" );

var choice = process.argv[2];
var info = process.argv.slice( 3 ).join( " " );


switch ( choice ) {
    case "movie-this":
        Movie();
        break;

    case "concert-this":
        Bands();
        break;

    case "spotify-this-song":
        Music();
        break;
}

function Movie() {
    var queryUrl = "http://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy";
    console.log( queryUrl );




    axios.get( "http://www.omdbapi.com/?t=" + info + "&y=&plot=short&apikey=trilogy" ).then(
        function ( response ) {
            console.log( "Title: " + response.data.Title );
            console.log( "Release: " + response.data.Year );
            console.log( "IMDB rating: " + response.data.imdbRating );
            //    * Rotten Tomatoes Rating of the movie.
            // console.log( "Rotten Tomatoes rating: " + response.data.Ratings[1].Value );
            console.log( "Country origin: " + response.data.Country );
            console.log( "Language: " + response.data.Language );
            console.log( "Plot: " + response.data.Plot );
            console.log( "Actors: " + response.data.Actors );
        } );

};

function Bands() {
    var queryUrl = "https://rest.bandsintown.com/artists//events?app_id=codingbootcamp";
    console.log( queryUrl );
    axios.get( "https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp" ).then(
        function ( response ) {
            for ( var i = 0; i < 6; i++ ) {
                console.log( "Name of the venue: " + response.data[i].venue.name )
                console.log( "Venue location: " + response.data[i].venue.city )
                console.log( "Venue date: " + response.data[i].datetime )

            }
        } )
}





