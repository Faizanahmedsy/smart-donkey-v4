import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/utils/fonts";
import Providers from "./providers";
import { FooterSection, NavbarSection } from "@/components/shared";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: {
    // en: "Faizan's Portfolio",
    // ur: "فیضان کا پورٹ فولیو",
    default: SITE_CONFIG.name,
    // template: `%s |  ${SITE_CONFIG.name}`,
    template: (title) => `${title} | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
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
