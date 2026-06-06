import type { Metadata } from "next";
import { Elms_Sans} from "next/font/google";
import "./globals.css";

const elmsSans = Elms_Sans({
  variable: "--font-elms-sans",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "DAGsoc",
  description: "Official website for the University of Southampton's Digital Art and Gamedev Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        Hello :3
        {children}
        </body>
    </html>
  );
}
