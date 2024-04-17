import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Image from 'next/image';
import Header from "./components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="bg-image h-full items-center justify-center flex flex-col w-full">
        <Header/>
       <Image
          
          src="/background.png" // Specify the path to your image
          alt="Background Image"
          className="bg-image"
          layout="fill"
          objectFit="cover"
        />
        {children}
        
        </body>
    </html>
  );
}
