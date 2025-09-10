import type { Metadata } from "next";
import { Inter, Instrument_Serif, Figtree, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "mocha.email",
  description: "your inbox, supercharged and caffeinated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ height: "auto", overflow: "auto" }}
    >
      <head />
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${figtree.variable} ${newsreader.variable} antialiased relative overflow-hidden font-sans`}
        style={{ height: "auto", overflow: "auto" }}
      >
        {/* Global subtle paper texture background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-15 dark:opacity-[3%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
