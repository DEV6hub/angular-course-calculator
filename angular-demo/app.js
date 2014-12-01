//temporary webserver for local dev env
var connect = require("connect"),
    PORT = 8081;
connect.createServer(connect.static(__dirname)).listen(PORT);
console.log("Server listening on port: " + PORT);
