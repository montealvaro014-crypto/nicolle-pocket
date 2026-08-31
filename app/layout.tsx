import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolle Pocket · Aventura Pokémon",
  description: "Una aventura rosa interactiva con Pokémon, voces y datos cargados desde PokéAPI.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
