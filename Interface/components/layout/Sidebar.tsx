"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Briefcase,
    Home,
    MessageSquare,
    Bell,
    User,
    Settings,
    Grid,
    Zap,
    BookOpen,
    PieChart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: User, label: "Network", href: "/network" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: MessageSquare, label: "Messaging", href: "/messages" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Zap, label: "Assistant", href: "/assistant" },
    { icon: BookOpen, label: "Learning", href: "/learning" },
    { icon: PieChart, label: "Analytics", href: "/analytics" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-6">
            {/* Mini Profile Card */}
            <div className="rounded-2xl bg-gray-50/50 p-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        ME
                    </div>
                    <div>
                        <h2 className="text-sm font-bold truncate text-gray-900">Frontend Dev</h2>
                        <p className="text-gray-500 text-xs truncate">Agentic UI Builder</p>
                    </div>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500 pt-3 border-t border-gray-200">
                    <span className="flex flex-col">
                        Viewers
                        <span className="text-blue-600 font-bold text-sm">42</span>
                    </span>
                    <span className="flex flex-col text-right">
                        Connections
                        <span className="text-blue-600 font-bold text-sm">1,204</span>
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <div>
                <nav className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all rounded-xl",
                                    isActive
                                        ? "text-black bg-gray-100 shadow-sm"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-black"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", isActive ? "text-black" : "text-gray-400")} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Premium CTA */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 text-center border border-amber-100/50">
                <p className="text-xs text-amber-900/60 mb-1 font-medium tracking-wide uppercase">Upgrade</p>
                <span className="font-bold text-amber-900 block mb-3 text-sm">Premium Career</span>
                <Link href="/premium" className="block w-full bg-white border border-amber-200 text-amber-700 font-bold py-2 rounded-full hover:bg-amber-50 transition-colors text-xs shadow-sm">
                    Try for Free
                </Link>
            </div>

            <div className="text-xs text-gray-400 text-center">
                CareerGraph © 2025
            </div>
        </div>
    );
}
