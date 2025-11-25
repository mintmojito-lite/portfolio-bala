import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Cursor from "../components/Cursor";
import DancingCat from "../components/DancingCat"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Bala Bhaskar | Systems Engineer",
  description: "High-Assurance Systems Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-black antialiased">
        {/* Only these two global items should be here */}
        <Cursor />
        <DancingCat />
        
        {/* This renders your page content */}
        {children}
      </body>
    </html>
  );
}