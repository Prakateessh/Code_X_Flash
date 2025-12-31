"use client";

import { useState } from "react";
import { User, MapPin, Link as LinkIcon, Calendar, Edit2, Plus } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState("Activity");

    return (
        <div className="space-y-4">
            {/* Header Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative pb-4">
                <div className="h-48 bg-gradient-to-r from-blue-700 to-indigo-800 relative">
                    <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-sm transition-colors">
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="px-6 relative">
                    <div className="w-40 h-40 rounded-full border-4 border-white bg-gray-200 absolute -top-24 overflow-hidden">
                        <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" fill className="object-cover" unoptimized />
                    </div>

                    <div className="mt-20 flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Felix The Cat</h1>
                            <p className="text-lg text-gray-600">Senior Frontend Engineer | Agentic AI Enthusiast</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco Bay Area</span>
                                <span className="flex items-center gap-1"><LinkIcon className="w-4 h-4" /> felix.dev</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Joined January 2025</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-1.5 rounded-full font-bold transition-colors">
                                Connect
                            </button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-1.5 rounded-full font-bold hover:bg-blue-50 transition-colors">
                                Message
                            </button>
                            <button className="border border-gray-500 text-gray-500 px-3 py-1.5 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                More
                            </button>
                        </div>
                    </div>

                    {/* Stats / Mutuals */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-bold text-gray-900">500+ items</span>
                        <span>•</span>
                        <span className="text-blue-600 font-bold hover:underline cursor-pointer">Contact info</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-[72px] z-10">
                <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
                    {["About", "Activity", "Experience", "Education", "Skills", "Interests"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                                activeTab === tab
                                    ? "border-green-600 text-green-700 bg-green-50/50"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 min-h-[300px]">
                {activeTab === "About" && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
                        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                            I am a passionate software engineer focused on building intuitive and performant user interfaces.
                            Currently exploring the intersection of Frontend Engineering and Agentic AI.

                            Expertise:
                            - React / Next.js
                            - TypeScript
                            - Tailwind CSS
                            - Framer Motion
                        </p>
                    </div>
                )}

                {activeTab === "Experience" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                            <button className="p-2 hover:bg-gray-100 rounded-full"><Plus className="w-5 h-5 text-gray-600" /></button>
                        </div>

                        {[1, 2].map((i) => (
                            <div key={i} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center font-bold text-gray-400">
                                    {i === 1 ? "G" : "M"}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base">Senior Software Engineer</h3>
                                    <p className="text-sm text-gray-900">TechCorp Inc. • Full-time</p>
                                    <p className="text-sm text-gray-500">Jan 2022 - Present • 2 yrs 1 mo</p>
                                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                                    <p className="text-sm text-gray-800 mt-2">
                                        Leading the frontend migration to Next.js App Router. Implementing new design system tokens.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Activity" && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Activity</h2>
                        <div className="flex gap-2 mb-4">
                            <button className="px-4 py-1 rounded-full border border-green-600 bg-green-600 text-white text-sm font-bold">Posts</button>
                            <button className="px-4 py-1 rounded-full border border-gray-300 text-gray-600 text-sm font-bold hover:bg-gray-100">Comments</button>
                        </div>
                        <p className="text-sm text-gray-500 italic">Felix hasn't posted lately.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
