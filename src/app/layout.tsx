import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBSA @ UIUC | Muslim Business Student Association",
  description:
    "A space where Muslim students grow together through community, opportunity, and impact at the University of Illinois Urbana-Champaign.",
  openGraph: {
    title: "MBSA @ UIUC",
    description:
      "Muslim Business Student Association at the University of Illinois Urbana-Champaign.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#001429] text-white">
        {children}
      </body>
    </html>
  );
}
