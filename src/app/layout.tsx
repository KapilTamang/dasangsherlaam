import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";


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
      suppressHydrationWarning
    >
      <body className={`${quicksand.className} antialiased min-h-full flex flex-col`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
