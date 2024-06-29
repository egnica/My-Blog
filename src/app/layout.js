import {Inter} from "next/font/google";
import {Roboto} from "next/font/google";
import "./globals.css";
import Google from "../components/google";
import Footer from "../components/Footer";

const inter = Inter({subsets: ["latin"]});

const decrip =
	"Explore the journey of a developer workin on dev things. Follow along for insights, tips, and experiences on building dynamic web applications";

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Late Start Dev",
	description: {decrip},
	keywords: ["Nicholas Egner", "Late Start Dev", "Blog", "Developer"],

	openGraph: {
		title: "Late Start Dev",
		site_name: "Late Start Dev",
		description: {decrip},
		url: "https://latestartdev.com/",
		images: [
			{
				url: "https://latestartbucket.s3.us-east-2.amazonaws.com/nick-pic.png",
				width: 350,
				height: 479,
			},
		],
		twitter: {
			card: "summary_large_image",
			site: "@NicholasEgner",
			creator: "@NicholasEgner",
			title: " Late Start Dev",
			description: {decrip},
			image: "https://latestartbucket.s3.us-east-2.amazonaws.com/nick-pic.png",
		},

		other: {
			canonical: `https://latestartdev.com/`,
			author: "NicholasEgner",
			viewport: "width=device-width, initial-scale=1",
			robots: "index, follow",
		},
	},
};

export default function RootLayout({children}) {
	return (
		<>
			<html lang='en'>
				<body className={roboto.className}>
					<Google />
					<div style={{padding: " 2% 5%"}}>{children}</div>

					<Footer />
				</body>
			</html>
		</>
	);
}
