import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "SiebeGPT",
};

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`font-sans ${poppins.variable}`}>
        <AuthProvider>
            {children}
        </AuthProvider>
        </body>
        </html>
    );
}
