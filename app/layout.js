import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Portfolio",
  description: "Kriste Aukstuolis's art portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
