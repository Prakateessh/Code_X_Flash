"use client";

import { useState } from "react";
import { PlayCircle, Star, Award, BookOpen, Clock, MoreVertical, Bookmark } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LearningPage() {
    const [activeTab, setActiveTab] = useState("In Progress");

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Learning</h1>
                    <p className="text-gray-600">Upgrade your skills with AI-curated courses.</p>
                </div>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                    {["In Progress", "Saved", "History"].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-4 py-1.5 rounded-md text-sm font-semibold transition-all",
                                activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { id: 1, title: "Advanced Agentic AI Patterns", author: "Dr. Sarah Chen", progress: 65, rating: 4.9, img: 101 },
                    { id: 2, title: "Next.js 14 Server Components", author: "Vercel Team", progress: 30, rating: 4.8, img: 102 },
                    { id: 3, title: "System Design for Scale", author: "Alex Xu", progress: 10, rating: 5.0, img: 103 },
                    { id: 4, title: "Rust for JavaScript Developers", author: "Frontend Masters", progress: 0, rating: 4.7, img: 104 },
                    { id: 5, title: "Enterprise TypeScript", author: "Matt Pocock", progress: 0, rating: 4.9, img: 105 },
                    { id: 6, title: "UI/UX Principles for Devs", author: "Gary Simon", progress: 85, rating: 4.6, img: 106 },
                ]
                    .filter(c => activeTab === "In Progress" || (activeTab === "Saved" && c.progress === 0))
                    .map(course => (
                        <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col h-full">
                            <div className="h-40 bg-gray-200 relative">
                                <Image src={`https://picsum.photos/seed/${course.img}/400/200`} alt="Course" fill className="object-cover" unoptimized />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100" />
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                                <p className="text-xs text-gray-500 mb-2">By {course.author}</p>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                                        <Star className="w-3 h-3 fill-current" /> {course.rating}
                                    </span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> 2h 45m
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    {course.progress > 0 ? (
                                        <>
                                            <div className="flex justify-between text-[10px] font-semibold text-gray-500 mb-1">
                                                <span>{course.progress}% complete</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div style={{ width: `${course.progress}%` }} className="bg-green-600 h-full rounded-full"></div>
                                            </div>
                                        </>
                                    ) : (
                                        <button className="w-full border border-blue-600 text-blue-600 font-bold text-xs py-2 rounded-full hover:bg-blue-50 transition-colors">
                                            Start Learning
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {activeTab === "History" && (
                <div className="text-center py-20 text-gray-500 bg-white rounded-lg border border-gray-200 border-dashed">
                    <Award className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No completed courses yet. Keep going!</p>
                </div>
            )}
        </div>
    );
}
