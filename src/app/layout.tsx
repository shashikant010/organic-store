'use client'
import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
      <Header/>
        {children}
      {/* <Navbar/> */}
      <Footer/>
        </body>
    </html>
  );
}
