"use client";

import { MoreHorizontal, Calendar } from "lucide-react";

export default function ApplicationsPage() {
    const columns = [
        { name: "Saved", count: 12, color: "border-gray-300" },
        { name: "Applied", count: 5, color: "border-blue-500" },
        { name: "Interview", count: 2, color: "border-amber-500" },
        { name: "Offer", count: 0, color: "border-green-500" },
        { name: "Rejected", count: 1, color: "border-red-500" },
    ];

    return (
        <div className="h-[calc(100vh-6rem)] overflow-x-auto">
            <div className="flex gap-6 min-w-max pb-4 h-full">
                {columns.map((col) => (
                    <div key={col.name} className="w-72 flex flex-col h-full">
                        <div className={`font-bold text-gray-700 mb-4 flex justify-between items-center border-t-4 pt-2 ${col.color}`}>
                            <span>{col.name}</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{col.count}</span>
                        </div>

                        <div className="flex-1 bg-gray-50/50 rounded-lg p-2 space-y-3 overflow-y-auto">
                            {Array.from({ length: col.count > 3 ? 3 : col.count }).map((_, i) => (
                                <div key={i} className="bg-white p-3 rounded shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-sm text-gray-900">Software Engineer</h3>
                                        <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">Google • Mountain View</p>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded w-fit">
                                        <Calendar className="w-3 h-3" /> Applied 2d ago
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
