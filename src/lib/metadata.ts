import type { Metadata } from "next";

export const siteConfig = {
  name: "Your Name Portfolio",
  description:
    "Portfolio of a passionate Full-Stack developer in modern technologies and revolutionary user interfaces.",
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og-image.jpg",
  links: {
    github: "https://github.com/YourUsername",
    linkedin: "https://linkedin.com/in/YourUsername",
    twitter: "https://twitter.com/YourUsername",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "developer",
    "full-stack",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "portfolio",
    "web developer",
    "frontend",
    "backend",
    "javascript",
  ],
  authors: [
    {
      name: "Your Name",
      url: siteConfig.url,
    },
  ],
  creator: "Your Name",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@YourUsername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
