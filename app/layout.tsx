import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "R Bouncers | Professional Security Services in Pune",

  description:
    "R Bouncers provides professional security services for weddings, VIP protection, corporate events, crowd management, private functions and event security across Pune, Pimpri-Chinchwad, Hinjewadi, Wakad, Baner and Maharashtra.",

  keywords: [
    "Bouncers in Pune",
    "Security Services Pune",
    "Wedding Security Pune",
    "VIP Protection Pune",
    "Event Security Pune",
    "Corporate Security Pune",
    "Crowd Management Pune",
    "Private Security Maharashtra",
    "Professional Bouncers",
    "Bodyguards Pune",
    "Event Management Security",
    "Security Agency Pune",
    "Bouncer Services Pune",
    "R Bouncers"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
