import { Inter } from "next/font/google";
import NavBar from "@/app/components/navbar-menu";
import DocSearch from "@/app/components/DocSearch"
import "./globals.css";
import "./prism-dracula.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeCoder's Note",
  description: "Generated by FreeCoder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className + '  container mx-[auto] max-w-[80%]'}>
        <div className="relative w-full flex items-center justify-center bg-yellow-400">
          <NavBar className="top-2" />
        </div>
        <div className="markdown-body mt-20">{children}</div>
      </body>
    </html>
  );
}
