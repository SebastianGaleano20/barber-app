import { Barlow } from "next/font/google";
import "@/app/ui/globals.css";

const inter = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Barrio fino",
  description: "Barrio fino page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
