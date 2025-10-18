import { Inter } from "next/font/google";
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
    icon: "/cropped_logo.png",
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
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppIcon />
      </body>
    </html>
  );
}
