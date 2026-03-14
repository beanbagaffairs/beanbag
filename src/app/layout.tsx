import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./fonts.css";
import ClientLayout from "./ClientLayout";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });

// Add metadata for favicon
export const metadata = {
  title: "Bean Bag Affairs",
  description: "Premium Wedding Planning and Ad Film Production",
  icons: {
    icon: [
      { url: "/cropped_logo.png", sizes: "any", type: "image/png" }
    ],
    shortcut: "/cropped_logo.png",
    apple: "/cropped_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N6EF3ZHTY1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N6EF3ZHTY1');
          `}
        </Script>
      </head>
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppIcon />
      </body>
    </html>
  );
}
