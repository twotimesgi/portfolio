import type { Metadata } from "next";
import "./globals.css";
import {Roboto, Space_Grotesk} from "next/font/google";


export const metadata: Metadata = {
  title: "Luigi Bardella Gerbi - Portfolio",
  description: "Generated by create next app",
};

const spaceGrotesk = Space_Grotesk({weight: ["400"], subsets: ["latin"], variable: "--space-grotesk"});
const roboto = Roboto({weight: ["400", "700", "500"], subsets: ["latin"], variable: "--roboto-mono"});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body
        className={`${roboto.className} ${spaceGrotesk.variable} antialiased lg:mx-42 md:mx-36 sm:mx-36 xs:mx-6 text-slate-700 bg-custom-gradient leading-normal selection:bg-slate-700 selection:text-slate-300
        `}
      >
        {children}
      </body>
    </html>
  
  );
}
