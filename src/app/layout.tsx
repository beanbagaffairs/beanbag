import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

// Add metadata for favicon
export const metadata = {
  title: "Bean Bag Affairs",
  description: "Premium Wedding Planning and Ad Film Production",
  icons: {
    icon: "https://images.pexels.com/photos/29173977/pexels-photo-29173977.jpeg",
    shortcut: "https://images.pexels.com/photos/29173977/pexels-photo-29173977.jpeg",
    apple: "https://images.pexels.com/photos/29173977/pexels-photo-29173977.jpeg",
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
      </body>
    </html>
  );
}
