import chalk from "chalk";

const colleagues = ["Teddy", "Mélissa", "Thibault", "Thomas"];

colleagues.forEach((colleague) => {
	const randomColor = chalk.rgb(
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256)
	);

	console.log(randomColor(colleague));
});
