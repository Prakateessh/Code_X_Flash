import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CareerGraph",
    description: "Agentic AI Career Development Assistant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>
                    <div className="min-h-screen bg-white">
                        <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
                            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-2">
                                <TopBar />
                            </div>
                        </div>

                        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6 px-4 lg:px-6 py-8">
                            {/* Sidebar */}
                            <aside className="hidden md:block w-64 flex-shrink-0">
                                <div className="sticky top-24">
                                    <Sidebar />
                                </div>
                            </aside>

                            {/* Main Content */}
                            <main className="flex-1 min-w-0">
                                {children}
                            </main>
                        </div>
                    </div>
                </AppProvider>
            </body>
        </html>
    );
}
