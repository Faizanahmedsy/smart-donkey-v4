import { Bebas_Neue, Inter, Roboto, Roboto_Condensed } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["600"],
});

export const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
