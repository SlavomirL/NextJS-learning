// povodne sme layout.tsx mali v app foldri - v takom pripade sa styling tu prejavi na vsetkych pagoch
// a aj v admin studiu a aj na stranke samotnej..potom sme to presunuli do studio/layout.tsx a od toho
// momentu uz to plati len pre studio folder

// povodne sme layout.tsx mali v app foldri - v takom pripade sa styling tu prejavi na vsetkych pagoch
// a aj v admin studiu a aj na stranke samotnej..potom sme to presunuli do studio/layout.tsx a od toho
// momentu uz to plati len pre studio folder

import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "My popici site",
    description: "Generated by Next.js, Sanity.io and Tailwind CSS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    );
}
