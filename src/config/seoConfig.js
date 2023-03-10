export const websiteUrl = "https://sigar.vercel.app";
export const githubBaseUrl =
	"https://github.com/virgel1995/sigar-client";


export const siteConfig = {
	repo: {
		url: githubBaseUrl,
		editUrl: `${githubBaseUrl}/edit/main/content`,
		blobUrl: `${githubBaseUrl}/blob/main`,
	},
	author: {
		name: "virus24",
		github: "virgel1995",
		twitter: "@virus24",
		email: "kazouya25@gmail.com",
	},
	seo: {
		title: "Developers - Gate",
		description: "web site For developer who need to share feeds to outher or get help",
		openGraph: {
			url: websiteUrl,
			type: "website",
			image: {
				url: `${websiteUrl}/static/assets/img/devloper.gif`,
				width: 1240,
				height: 1080,
				alt: "web site For developer who need to share feeds to outher or get help",
				type: "image/png",
			},
			locale: "en_US",
			siteName: "Developers - Gate",
		},
		twitter: {
			site: "@virus24",
			handle: "@virus24",
			cardType: "summary_large_image",
			image: {
				url: `${websiteUrl}/static/assets/img/devloper.gif`,
				width: 1012,
				height: 506,
				alt: "web site For developer who need to share feeds to outher or get help",
				type: "image/png",
			},
		},
		robots: "index, follow",
	},
};