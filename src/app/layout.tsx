import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes, Cinzel } from "next/font/google"; // Added Cinzel
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingThemeToggle } from "@/components/ui/FloatingThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Added Signature Font
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

// Added Premium Serif Font
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rangon Ke Raag - Monika Mahto",
  description: "Portfolio of Monika Mahto - Artist & Painter. Exploring colors through Oil, Acrylic, and Sketches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.variable,
          playfair.variable,
          greatVibes.variable,
          cinzel.variable // Add variable to body
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
