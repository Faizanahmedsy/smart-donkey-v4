import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/util";
import { ThemeProvider } from "@/components/themeProvider";
import { kulimPark, poppins, roboto } from "@/lib/utils/fonts";
import { Footer, Navbar } from "@/components/shared";

// import image from "../public/bgpattern1.png";

export const metadata = {
  title: "Smart Donkey",
  description: "Created by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(" bg-page-gradient min-h-screen", poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
