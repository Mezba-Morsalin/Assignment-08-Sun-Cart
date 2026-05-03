import dns from "node:dns/promises";
dns.setServers(['8.8.8.8' , '8.8.4.4']);

import { Poppins } from "next/font/google";
import "./globals.css";


const poppinsSans = Poppins({
  variable : "poppins",
  subsets : ["latin"],
  weight : ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Sun Cart",
  description: " Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppinsSans.className} h-full antialiased`}
       data-theme = "light"
    >
      <body className="">{children}</body>
    </html>
  );
}
