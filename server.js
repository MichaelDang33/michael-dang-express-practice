// Load express
const express = require("express"); // The new express variable now holds whatever the "express" module is, which is assigned to module.exports.
const path = require("path");

// require the To Do "database"
const gameDb = require("./data/game-db");

// Create our express application
const app = express(); // In order to create an app we invoke the "express ()" function and now we have the express app

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Mount middleware (app.use)

// Mount routes

// Define a "root" route directly on app 
// Next lesson we'll use better practice routing
app.get("/", function (request, response) { // We can define routes using the app object. 2 Main components of HTTP request = method (get) and path (argument "/" for root route).
    // object.method("path", callback fxn (2 arguments) {}). The 2 arguments = (request, response).
    // PATH MUST START WITH A LEADING SLASH WITH REDIRECT NOT RENDER
    response.redirect("/games");
});                                         // When the code runs, it means we received an HTTP request (get) from somewhere and the function runs so that we can send a response back to the browser.

app.get("/games", function (request, response) {
    const games = gameDb.getAll();
    response.render("games/index", { games });
});

app.get("/home", function (request, response) {
    // Never begin the name of the template with a forward slash
    response.render("home",);
});

// Tell the app to listen on port 3000 for HTTP requests from clients
app.listen(3000, function () {
    console.log("Listening on port 3000")
});                                         // Need the server to listen for HTTP requests. Using app object and listen method.
                                            // Takes 2 arguments (port, callback fxn).

// Define another route that matches a request of GET /home and sends a text response of: <h1>Home Page</h1>
// app.get("/home", function (request, response) {
//     response.send("<h1>Home Page</h1>");
// });

// Test it by browsing to localhost:3000/home
