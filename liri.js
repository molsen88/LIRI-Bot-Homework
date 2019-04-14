require( "dotenv" ).config();

var keys = require( "./keys.js" );

//This is the axios npm required for pulling info 

var axios = require( "axios" );
var inquirer = require( "inquirer" );
// var spotify = require( "spotify" )

// var userInput = "";

// function Start() {
//     inquirer.prompt( [
//         {
//             type: "list",
//             message: "What information are you looking for",
//             choices: ["movie", "music", "concerts"],
//             name: "info"
//         }


//     ] )
// }

// function Music() {
//     var queryUrl = "https://rest.bandsintown.com/artists//events?app_id=codingbootcamp";
//     console.log( queryUrl );
//     inquirer.prompt( [
//         {
//             type: "input",
//             name: "userInput",
//             message: "What band are you looking for?"
//         }
//     ] ).then( function ( response ) {
//         axios.get( "https://rest.bandsintown.com/artists/" + response.userInput + "/events?app_id=codingbootcamp" ).then(
//             function ( response ) {
//                 console.log( "Name of venue: " + respons.data.events[i].venue.name )
//             }
//         )
//     } )
// }

// function Bands() {
//     var queryUrl = "https://rest.bandsintown.com/artists//events?app_id=codingbootcamp";
//     console.log( queryUrl );
//     inquirer.prompt( [
//         {
//             type: "input",
//             name: "userInput",
//             message: "What band are you looking for?"
//         }
//     ] ).then( function ( response ) {
//         axios.get( "https://rest.bandsintown.com/artists/" + response.userInput + "/events?app_id=codingbootcamp" ).then(
//             function ( response ) {
//                 console.log( "Name of venue: " + response.data.artists.events.venue.name )
//             }
//         )
//     } )
// }
// var options = {
//     provider: "spotify",
//     apiKey: 553f5c8e2ae144ef9f6fa43288e246a1;
// };
// function Music() {


//     var queryURL = 
// }





function Movie() {
    var queryUrl = "http://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy";
    console.log( queryUrl );
    inquirer.prompt( [
        {
            type: "input",
            name: "userInput",
            message: "What movie are you looking for?"
        }

    ] ).then( function ( response ) {
        axios.get( "http://www.omdbapi.com/?t=" + response.userInput + "&y=&plot=short&apikey=trilogy" ).then(
            function ( response ) {
                console.log( "Title: " + response.data.Title );
                console.log( "Release: " + response.data.Year );
                console.log( "IMDB rating: " + response.data.imdbRating );
                //    * Rotten Tomatoes Rating of the movie.
                console.log( "Rotten Tomatoes rating: " + response.data.Ratings[1].Value );
                console.log( "Country origin: " + response.data.Country );
                console.log( "Language: " + response.data.Language );
                console.log( "Title: " + response.data.Plot );
                console.log( "Title: " + response.data.Actors );
            } );


    } );
}
// Bands();
Movie();

// Start();


// if user picks out of three options then run each function of the options






// var axios = require( "axios" );
// var artist = process.argv;


// var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// console.log( queryURL )
// axios.get( queryURL ).then(
//     function ( response ) {
//         console.log( "Name of Venue: " + response.venue[i].name );
//         console.log( "Venue location " + response.venue.city );
//         console.log( "Date of the event " + response.datetime );
//     }
// )





























// var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";