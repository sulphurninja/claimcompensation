import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Claim My Compensation - Mass Tort",
  description: "Camp Lejeune Water Contamination Lawsuit, Talcum Powder Lawsuit, Firefighting Foam(FFF) Lawsuit, Paraquat Lawsuit, NEC Baby Formula Lawsuit, Roundup Lawsuit, Zantac Lawsuit, CPAP Lawsuit,Mesothelioma Lawsuit, Rideshare Lawsuit, PFAS Lawsuit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
