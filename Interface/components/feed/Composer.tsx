"use client";

import { Image as ImageIcon, Calendar, Briefcase, Video } from "lucide-react";

export function Composer() {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 font-bold">ME</div>
                <button className="flex-1 text-left border border-gray-300 rounded-full px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                    Start a post, try asking AI for ideas...
                </button>
            </div>
            <div className="flex justify-between items-center px-2">
                <div className="flex gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-md flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <ImageIcon className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Media</span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-md flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <Calendar className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium">Event</span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-md flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <Briefcase className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium">Job</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
