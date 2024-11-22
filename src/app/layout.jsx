import { Barlow } from "next/font/google";
import "@/app/ui/globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "./ui/thoggle-theme";

const inter = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Barrio fino",
  description: "Barrio fino page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}