import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk} from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';



export const metadata: Metadata = {
  title: "Luigi Bardella Gerbi - Portfolio",
  description: "Since writing my first line of code at 12, I've been hooked on the sheer thrill of building something from nothing. What started as simple curiosity quickly evolved into an obsession with turning ideas into reality.",
};

const spaceGrotesk = Space_Grotesk({weight: ["400"], subsets: ["latin"], variable: "--space-grotesk"});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body
        className={` ${GeistSans.className} ${GeistMono.variable} ${spaceGrotesk.variable} antialiased lg:mx-42 md:mx-36 sm:mx-36 xs:mx-6 text-slate-700 bg-custom-gradient leading-normal selection:bg-slate-700 selection:text-slate-300
        `}
      >
        {children}
      </body>
    </html>
  
  );
}
