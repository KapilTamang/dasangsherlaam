import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], //Select the weights you need
  variable: "--font-inter", //Defines the CSS variable
})

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
      className={`${cn(inter.variable)} no-scrollbar`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased min-h-full flex flex-col`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
