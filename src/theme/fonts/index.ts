import localFont from "next/font/local";

export const anjoman = localFont({
	src: [
		{
			path: "./ANJOMAN-REGULAR.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--anjoman",
});
