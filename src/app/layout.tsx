import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
// import AnnouncementBanner from "@/components/AnnouncementBanner";
import Providers from "@/components/providers";

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

// const poppins = Poppins({ 
//   weight: ['400', '500', '700'],
//   subsets: ["latin"],
//   display: 'swap',
// });
// const roboto_slab = Roboto_Slab({ 
//   weight: ['400', '500', '700'],
//   subsets: ["latin"],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Gyanlab Tutorial",
  description: "Comprehensive coaching for all major exams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* <AnnouncementBanner /> */}
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
