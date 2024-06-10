import {Inter} from "next/font/google";
import {Roboto} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Late Start Dev",
	description: "This is Nick's blog",
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
