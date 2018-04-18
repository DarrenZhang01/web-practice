/* A very simple http server using nodejs */
let http = require("http");

function server (request, response) {

	console.log("The request has been received!");
	console.log("The request url is: " + request.url);

	if (request.url == "/") {
		response.write("Hello from the server side!");
		response.end();
	} else if (request.url == "/darren") {
		response.write("You are calling route '/darren'");
		response.end();
	} else {
		response.write("The requested url has not been set!");
		response.end();
	}
}

var app = http.createServer(server);
app.listen(4001);
