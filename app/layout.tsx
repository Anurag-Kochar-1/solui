import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solui.xyz"),
  title: {
    default: "Sol UI | Solana UI Components with Personality",
    template: "%s | Sol UI",
  },
  description: "Fun, bold, and unconventional Solana UI components. Not the boring stuff — copy-paste and ship.",
  openGraph: {
    title: "Sol UI",
    description: "Fun, bold, and unconventional Solana UI components. Not the boring stuff — copy-paste and ship.",
    url: "https://solui.dev",
    siteName: "Sol UI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sol UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sol UI",
    description: "Fun, bold, and unconventional Solana UI components. Not the boring stuff - copy-paste and ship.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-16">
            <Toaster richColors />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
