import type { Metadata } from "next";
import { Inter, Instrument_Serif, Figtree, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Footer from "@/components/footer";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import { FloatingNav } from "../components/ui/floating-navbar";
import Navbar from "@/components/navbar";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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

   const navItems = [
     {
       name: "Home",
       link: "#hero",
       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
       ariaLabel: "Go to home section",
     },
     {
       name: "Features",
       link: "#features",
       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
       ariaLabel: "View features section",
     },
     {
       name: "Pricing",
       link: "#pricing",
       icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
       ariaLabel: "View pricing section",
     },
     {
       name: "Manifesto",
       link: "/manifesto",
       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
       ariaLabel: "Read manifesto",
     },
   ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ height: "auto", overflow: "auto" }}
    >
      <head />
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${figtree.variable} ${newsreader.variable} antialiased relative overflow-hidden font-sans animate-fadeIn`}
        style={{ height: "auto", overflow: "auto" }}
      >
        {/* Global subtle paper texture background
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-15 dark:opacity-[3%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuroraBackground /> */}
          <Navbar/>
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
