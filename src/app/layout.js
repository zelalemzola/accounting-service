import { Fraunces, Inter, Italianno, Libre_Baskerville, Merriweather, Playfair_Display, Tinos } from "next/font/google";
import "./globals.css";

const inter = Merriweather({ subsets: ["latin"],weight:['300',"400","700","900"] });

export const metadata = {
  title: "AA Accounting",
  description: "AA accounting and Gig workers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
