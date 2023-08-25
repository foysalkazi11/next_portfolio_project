import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ToggleTheme from "@/components/ToggleTheme";
import ThemeContextProvider from "@/context/theme-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foysal Kazi | portfolio website",
  description:
    "Foysal Kazi is a font-end web developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#fbe2e3] -z-10 blur-[10rem] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full
         sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd6fb] -z-10 blur-[10rem] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
            <ToggleTheme />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
