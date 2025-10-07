import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "A.BEN-AME | Web & Mobile Developer Portfolio",
  description:
    "Professional portfolio of A.BEN-AME, a skilled web & mobile developer specialized in building high-quality, modern, and scalable applications using Next.js, React Native, and more.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>A.BEN-AME | Web & Mobile Developer Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of A.BEN-AME, a skilled web & mobile developer specialized in building high-quality, modern, and scalable applications using Next.js, React Native, and more."
        />
        <meta
          name="keywords"
          content="web developer, mobile developer, portfolio, React, React Native, Next.js, frontend, backend, MERN, Expo, freelance developer"
        />
        <meta property="og:title" content="A.BEN-AME | Web & Mobile Developer" />
        <meta
          property="og:description"
          content="Discover the work and skills of A.BEN-AME, expert in creating modern web and mobile applications tailored for business success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="A.BEN-AME Portfolio" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
