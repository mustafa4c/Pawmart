import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/_component/Navbar";
import Footer from "@/_component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
    </html>
  );
}
