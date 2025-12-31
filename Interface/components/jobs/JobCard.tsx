"use client";

import { type Job } from "@/lib/data";
import { Building2, MapPin, Clock, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export function JobCard({ job, selected, onClick }: { job: Job; selected?: boolean; onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "bg-white p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors relative group",
                selected ? "border-l-4 border-l-blue-600 bg-blue-50/30" : "border-l-4 border-l-transparent"
            )}
        >
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                    <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h3 className={cn("font-bold text-base group-hover:underline decoration-blue-500", selected ? "text-blue-700" : "text-gray-900")}>
                        {job.title}
                    </h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                    <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.date}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                        <div className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            Actively recruiting
                        </div>
                        <div className="text-[10px] text-gray-500">
                            {job.applicants} applicants
                        </div>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-900 self-start">
                    <Bookmark className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
