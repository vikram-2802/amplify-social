import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amplify Social | India’s Regional Influencer Marketing & Digital PR Powerhouse",
  description:
    "Amplify Social helps brands build meaningful conversations through one of India’s strongest regional creator networks, combining influencer marketing, digital PR, and strategic communications.",
  keywords: [
    "influencer marketing",
    "digital PR",
    "regional campaigns",
    "brand launches",
    "corporate communications",
    "India creators",
  ],
  metadataBase: new URL("https://amplifysocial.com"),
  openGraph: {
    title: "Amplify Social | India’s Regional Influencer Marketing & Digital PR Powerhouse",
    description:
      "Premium influencer marketing and digital PR services for brands seeking cultural relevance and measurable growth across India.",
    type: "website",
    url: "https://amplifysocial.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplify Social | India’s Regional Influencer Marketing & Digital PR Powerhouse",
    description:
      "Premium influencer marketing and digital PR services for brands seeking cultural relevance and measurable growth across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
