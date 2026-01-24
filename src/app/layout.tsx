import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivam S. Ramoliya",
  description: "A cinematic developer portfolio.",
  icons: {
    icon: "/Shivam-1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5a4" />
        <link rel="icon" href="/Shivam-1.png" />
        <link rel="shortcut icon" href="/Shivam-1.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Shivam-1.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
