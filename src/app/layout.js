import "./globals.css";
import Header from "./components/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Footer from "./components/layout/Footer";

import { Inter } from "next/font/google";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="da">
        <body>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
