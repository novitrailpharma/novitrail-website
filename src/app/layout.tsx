import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
// import TopBar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "Novitrail Pharmaceuticals",
  description: "Novitrail Pharmaceuticals is a leading pharmaceutical company in the India, offering a wide range of high-quality medicines and healthcare products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-tomorrow flex flex-col min-h-screen"
      >
      {/* <TopBar /> */}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
