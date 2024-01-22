import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeProvider";
import { kulimPark, poppins, roboto } from "@/lib/utils/fonts";
import { Footer, Navbar } from "@/components/shared";
import AppLayoutConfig from "@/components/shared/AppLayoutConfig";
import NavBarConfig from "@/components/shared/NavBarConfig";
import FooterConfig from "@/components/shared/FooterConfig";

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
          <NavBarConfig />
          <main>{children}</main>
          <FooterConfig />
        </ThemeProvider>
      </body>
    </html>
  );
}
