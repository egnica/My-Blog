"use client";
import Script from "next/script";

export default function Google() {
	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=G-T0ZD0VC4NF`}
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T0ZD0VC4NF');
        `}
			</Script>
		</>
	);
}
