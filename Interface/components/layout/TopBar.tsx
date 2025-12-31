"use client";

import { Search, MessageSquare, Bell, User, Menu } from "lucide-react";
import Link from "next/link";
import { LogoMark, InputPill, GradientButton, SearchIcon, Badge } from "@/components/ui/assets";

export function TopBar() {
    return (
        <header className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
                <Link href="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <LogoMark size={40} />
                    <span className="text-2xl font-extrabold tracking-tight text-gray-900 hidden sm:block">Career Hacky</span>
                </Link>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 max-w-md w-full mx-4 relative">
                <div className="relative w-full">
                    <InputPill placeholder="Search for jobs, people, posts..." className="pr-12 bg-gray-50 border-gray-200" />
                    <div className="absolute right-1.5 top-1.5">
                        <GradientButton className="h-8 w-8" ariaLabel="Search">
                            <SearchIcon className="w-4 h-4" />
                        </GradientButton>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <Link href="/premium">
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 cursor-pointer transition-colors border border-amber-200">
                        Try Premium for Free
                    </Badge>
                </Link>

                {/* Mobile menu handled by existing layout mostly, keeping simple here */}
                <div className="flex items-center gap-3 md:hidden">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Menu className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </header>
    );
}
