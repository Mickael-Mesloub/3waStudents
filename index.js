import chalk from "chalk";
import fs from "fs";

const colleagues = ["Teddy", "Mélissa", "Thibault", "Thomas"];
const helloWorld = "Hello world!";

colleagues.forEach((colleague) => {
	const randomColor = chalk.rgb(
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256)
	);

	// console.log(randomColor(colleague));
});

fs.writeFile("test.txt", helloWorld, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("File created successfully !");
	}
});

fs.readFile("test.txt", "utf-8", (error, data) => {
	if (error) console.log(error);
	console.log(data);
});
