import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Select the weights you need
  variable: "--font-quicksand", // Defines the CSS variable
});

export const metadata: Metadata = {
  title: "Dasangsherlaam",
  description: "Most exciting and informative articles on different topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(quicksand.variable)}
    >
      <body className={`${quicksand.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
