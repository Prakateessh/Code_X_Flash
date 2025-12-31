"use client";

import { useState } from "react";
import { type Job } from "@/lib/data";
import { JobCard } from "@/components/jobs/JobCard";
import { Search, SlidersHorizontal, ArrowRight, CheckCircle2, Star, Sparkles, Building2, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/AppContext"; // Verify this path

export default function JobsPage() {
    const { jobs, savedJobIds, appliedJobIds, toggleSaveJob, applyToJob } = useAppContext();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    // Auto-select first job if none selected
    if (!selectedJob && jobs.length > 0) {
        setSelectedJob(jobs[0]);
    }

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col">
            {/* Filters */}
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
                {["Job type", "Date posted", "Experience level"].map(f => (
                    <button key={f} className="px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-100 bg-white whitespace-nowrap">
                        {f}
                    </button>
                ))}
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-600 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 whitespace-nowrap">
                    Remote
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
                {/* Job List */}
                <div className="col-span-12 md:col-span-5 bg-white rounded-lg shadow-sm border border-gray-200 overflow-y-auto no-scrollbar h-full">
                    <div className="p-4 border-b border-gray-100">
                        <h2 className="font-bold text-gray-900">Recommended for you</h2>
                    </div>
                    <div>
                        {jobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                selected={selectedJob?.id === job.id}
                                onClick={() => setSelectedJob(job)}
                            />
                        ))}
                    </div>
                </div>

                {/* Detail Panel */}
                <div className="hidden md:block md:col-span-7 bg-white rounded-lg shadow-sm border border-gray-200 overflow-y-auto h-full relative">
                    <AnimatePresence mode="wait">
                        {selectedJob && (
                            <motion.div
                                key={selectedJob.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="p-6"
                            >
                                {/* Job Header */}
                                <div className="border-b border-gray-100 pb-6 mb-6">
                                    <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 mb-4">
                                        <Building2 className="w-8 h-8" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{selectedJob.title}</h1>
                                    <div className="text-sm text-gray-600 flex gap-2 mb-4">
                                        <span>{selectedJob.company}</span>
                                        <span>•</span>
                                        <span>{selectedJob.location}</span>
                                    </div>

                                    <div className="flex gap-3">
                                        {appliedJobIds.includes(selectedJob.id) ? (
                                            <button disabled className="bg-green-100 text-green-800 px-6 py-2 rounded-full font-bold flex items-center gap-2 cursor-default">
                                                <CheckCircle2 className="w-5 h-5" /> Applied
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => applyToJob(selectedJob.id)}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-colors shadow-sm active:scale-95"
                                            >
                                                Apply now <ArrowRight className="w-4 h-4" />
                                            </button>
                                        )}

                                        <button
                                            onClick={() => toggleSaveJob(selectedJob.id)}
                                            className={savedJobIds.includes(selectedJob.id)
                                                ? "border border-blue-600 bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-bold transition-colors"
                                                : "border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors"
                                            }
                                        >
                                            {savedJobIds.includes(selectedJob.id) ? "Saved" : "Save"}
                                        </button>
                                    </div>
                                </div>

                                {/* AI Fit Score */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 rounded-lg mb-6 flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                            Strong Match
                                            <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full">92% Match</span>
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1 mb-2">
                                            Your profile matches this role's key requirements.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                                                <CheckCircle2 className="w-3 h-3" /> React
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-sm text-gray-800">
                                    <h3 className="font-bold text-lg">About the job</h3>
                                    <p>
                                        We are looking for a talented individual to join {selectedJob.company}.
                                        This mock job description highlights the importance of {selectedJob.title} in our organization.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
