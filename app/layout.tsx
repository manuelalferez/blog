import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Image from "next/image";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manuel",
  description: "Manuel Alférez",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between gap-12">
                <div className="flex items-center">
                  <Image
                    src={"https://i.imgur.com/hJieCmM.jpeg"}
                    alt="manuel profile picture"
                    width={40}
                    height={40}
                    className="rounded-full m-2 ml-0"
                  />
                  <span className="text-base font-medium">Manuel</span>
                </div>
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Blog</Link>
                  <Link href="/about">About</Link>
                  <Link href="/portfolio">Portfolio</Link>
                </nav>
              </div>
            </header>
            <main className="py-6">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
