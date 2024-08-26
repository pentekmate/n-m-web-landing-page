import type { Metadata } from "next";

import "./globals.css";
import "./fonts.css"
import { Suspense } from "react";
import Loading from "./_Components/Loading";


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
      <Suspense fallback={<Loading></Loading>}>
          <body>{children}</body>
      </Suspense>
    </html>
  );
}
