"use client";

import { useState } from "react";
import { Bell, Briefcase, Eye, MessageSquare, MoreHorizontal, Check, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { COMPANIES } from "@/lib/data";

type Notification = {
    id: number;
    type: "view" | "job" | "message" | "connection";
    content: string;
    time: string;
    read: boolean;
    image?: string;
};

export default function NotificationsPage() {
    const [filter, setFilter] = useState("All");

    // Deterministic mock generation
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1, type: "view", content: "Your profile was viewed by **5 recruiters** at Google and Meta.", time: "2h", read: false },
        { id: 2, type: "job", content: "New job alert: **Senior Frontend Engineer** in San Francisco matched your profile.", time: "4h", read: false, image: `https://api.dicebear.com/7.x/initials/svg?seed=${COMPANIES[0]}` },
        { id: 3, type: "message", content: "**Alice Johnson** commented on your post: 'Great insights on Agentic AI!'", time: "1d", read: true, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
        { id: 4, type: "job", content: "**Microsoft** is actively hiring for roles you might like.", time: "1d", read: true, image: `https://api.dicebear.com/7.x/initials/svg?seed=${COMPANIES[7]}` },
        { id: 5, type: "view", content: "You appeared in **12 searches** this week.", time: "2d", read: true },
        { id: 6, type: "connection", content: "**Bob Smith** accepted your connection request.", time: "2d", read: true, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
    ]);

    const markAsRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const filtered = filter === "All" ? notifications :
        filter === "Jobs" ? notifications.filter(n => n.type === "job") :
            notifications.filter(n => n.type === "message" || n.type === "connection");

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
                    <h3 className="font-bold text-gray-900 mb-4">Manage your notifications</h3>
                    <div className="space-y-4">
                        <Link href="/settings" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            <Settings className="w-4 h-4" /> View Settings
                        </Link>
                        <hr className="border-gray-100" />
                        <p className="text-xs text-gray-500">
                            Improve your recommendations by updating your notification preferences per category.
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:col-span-6 space-y-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 flex gap-2 overflow-x-auto no-scrollbar">
                    {["All", "Jobs", "My Posts"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap",
                                filter === f ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                    <button onClick={markAllRead} className="ml-auto text-xs text-gray-500 font-semibold hover:text-gray-900 px-2 whitespace-nowrap">
                        Mark all as read
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
                    {filtered.map((n) => (
                        <div
                            key={n.id}
                            onClick={() => markAsRead(n.id)}
                            className={cn(
                                "p-4 border-b border-gray-100 flex gap-4 hover:bg-gray-50 cursor-pointer transition-colors relative group",
                                !n.read ? "bg-blue-50/40" : ""
                            )}
                        >
                            <div className="mt-1 flex-shrink-0 relative">
                                {n.image ? (
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative border border-gray-100">
                                        <Image src={n.image} alt="Icon" fill className="object-cover" unoptimized />
                                        <div className="absolute bottom-0 right-0 p-0.5 bg-white rounded-full">
                                            {n.type === "job" && <Briefcase className="w-3 h-3 text-green-600 fill-green-100" />}
                                            {n.type === "message" && <MessageSquare className="w-3 h-3 text-purple-500 fill-purple-100" />}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                        {n.type === "view" && <Eye className="w-6 h-6 text-blue-500" />}
                                        {n.type === "job" && <Briefcase className="w-6 h-6 text-green-600" />}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 pr-8">
                                <p className="text-sm text-gray-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: n.content.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>') }}></p>
                                <span className="text-xs text-gray-500 mt-1 block">{n.time}</span>
                                {n.type === "job" && (
                                    <button className="mt-2 text-xs border border-blue-600 text-blue-600 font-bold px-3 py-1 rounded-full hover:bg-blue-50">
                                        View Job
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                                {!n.read && <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>}
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>No notifications in this filter.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center sticky top-24">
                    <p className="text-xs text-gray-500 mb-2">Promoted</p>
                    <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-100 hover:bg-gray-100 cursor-pointer transition-colors">
                        <div className="w-12 h-12 bg-white rounded shadow-sm mx-auto mb-3 flex items-center justify-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className="w-6 h-6 object-contain" alt="Google" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 mb-1">Master Cloud Computing</p>
                        <p className="text-xs text-gray-500 mb-3">Get certified in Google Cloud today.</p>
                        <button className="text-xs border border-gray-400 px-3 py-1 rounded hover:border-gray-900">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
