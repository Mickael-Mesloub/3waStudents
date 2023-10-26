import http from "http";
import Axios from "axios";
import fs from "fs";

const host = "localhost";
const port = 8000;

const helloWorld = "<h1>Hello World!</h1>";

const server = http.createServer((req, res) => {
	res.write(helloWorld);
});

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});

Axios.get("http://www.google.com")
	.then((response) => {
		fs.writeFile("google.html", response.data, (error) => {
			if (error) console.log(error);
			console.log("File created successfully !");
		});
	})
	.catch((error) => {
		console.log(error);
	});
