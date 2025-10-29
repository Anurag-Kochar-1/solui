import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sol UI",
  description: "A minimal UI components library",
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
        {/* Floating header */}
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-14 items-center justify-between">
              <a href="/" className="font-semibold tracking-tight">sol ui</a>
              <nav className="flex items-center gap-6 text-sm">
                <a href="/components" className="text-foreground/80 hover:text-foreground transition-colors">Components</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-16">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
        <footer className="border-t border-border/50 mt-12">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-foreground/70">
            © {new Date().getFullYear()} Sol UI
          </div>
        </footer>
      </body>
    </html>
  );
}
