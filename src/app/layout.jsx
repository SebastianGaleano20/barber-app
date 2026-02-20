import { Barlow } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import Head from "next/head"

const inter = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Barrio fino",
  description: "Barrio fino page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>Barrio Fino</title>
        <meta name="title" content="Barrio fino"></meta>
      </Head>
      <body className={`${inter.className} bg-gray-50 dark:bg-dark transition-colors duration-300`}>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}