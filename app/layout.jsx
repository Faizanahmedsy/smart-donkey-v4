import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/utils/fonts";
import Providers from "./providers";
import { FooterSection, NavbarSection } from "@/components/shared";

export const metadata = {
  title: "Smart Donkey",
  description: "Created by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(" bg-page-gradient min-h-screen", poppins.className)}>
        <Providers>
          <NavbarSection />
          <main>{children}</main>
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
