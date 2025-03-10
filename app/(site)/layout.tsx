// povodne sme layout.tsx mali v app foldri - v takom pripade sa styling tu prejavi na vsetkych pagoch
// a aj v admin studiu a aj na stranke samotnej..potom sme to presunuli do site/layout.tsx a od toho
// momentu uz to plati len pre site folder

import {Geist, Geist_Mono} from "next/font/google";

import type {Metadata} from "next";
import "../globals.css";
import Link from "next/link";
import {getPages} from "@/sanity/sanity-utils";

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

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
// get all of our pages
    const pages = await getPages();

    return (
        <html lang="en">
        <body className={"max-w-3xl mx-auto py-20"}>
        <header className={"flex items-center justify-between"}>
            <Link href={"/"}
                  className={"bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent text-lg font-bold"}>
                Back to home page link
            </Link>
            <div className={"flex items-center gap-5 text-sm text-gray-500 font-extrabold"}>
                {pages.map((page) => (
                    <Link key = {page._id} href = {`/${ page.slug }`} className={"hover:underline"}>
                        {page.title}
                    </Link>
                ))}
            </div>
        </header>
        <main className={"py-20"}>
            {children}
        </main>
        </body>
        </html>
    );
}
