import type { Metadata } from "next";

import "./globals.css";
import "./fonts.css"


export const metadata = {
  // title: 'The Wild Oasis', v1. verzio
  title:{
    temp:"%s / N&M Web-Egyedi webfejlesztés",
    default:"N&M Web-Egyedi webfejlesztés",
  },
  description:"Egyedi weboldal fejlesztés olcsón."
//seohoz fontos kiegeszito

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
