import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "BetaLeasing",
  description: "Beta Leasing es una empresa de arrendamiento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
