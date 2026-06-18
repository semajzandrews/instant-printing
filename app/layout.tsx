import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

// Author (display) is loaded from Fontshare via the <link> below.
// Spline Sans Mono carries technical captions / crop-mark labels.
const mono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Instant Printing · Business cards, banners & copies on Main St, Orange NJ",
  description:
    "A walk-in print shop on Main Street in the City of Orange, New Jersey. Business cards, signs and banners, copies, document printing, photo prints and faxing. Open Monday through Friday, 9 to 5.",
  openGraph: {
    title: "Instant Printing · Orange NJ",
    description: "Same-block printing on Main St. Cards, banners, copies, faxing.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mono.variable} antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=author@400,500,600,700&f[]=general-sans@400,500,600&display=swap"
        />
      </head>
      <body className="bg-paper text-ink min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
