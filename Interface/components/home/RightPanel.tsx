"use client";

import { Sparkles, ArrowRight, TrendingUp, Target } from "lucide-react";
import { motion } from "framer-motion";

export function RightPanel() {
    return (
        <div className="space-y-4">
            {/* AI Daily Brief */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        Daily Career Brief
                    </h2>
                    <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Beta</span>
                </div>

                <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
                        <h3 className="text-xs font-bold text-purple-900 mb-1">Market Insight</h3>
                        <p className="text-xs text-purple-800 leading-relaxed">
                            Demand for "Agentic AI" skills is up 45% this week. Consider adding your recent hackathon project to your portfolio.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-gray-700 mb-2">Suggested Actions</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-xs text-gray-600 hover:bg-gray-50 p-1 rounded cursor-pointer transition-colors">
                                <Target className="w-3.5 h-3.5 mt-0.5 text-blue-500" />
                                <span>Update "React" skill level based on recent project.</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-gray-600 hover:bg-gray-50 p-1 rounded cursor-pointer transition-colors">
                                <TrendingUp className="w-3.5 h-3.5 mt-0.5 text-green-500" />
                                <span>Connect with 3 mentors in AI Ethics.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <button className="w-full mt-3 flex items-center justify-center gap-1 text-xs font-medium text-gray-500 hover:text-purple-600 transition-colors py-1">
                    View full analysis <ArrowRight className="w-3 h-3" />
                </button>
            </motion.div>

            {/* Promoted / Other content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-500 mb-2">Unlock your full potential with</p>
                <div className="flex items-center justify-center gap-1 text-amber-600 font-bold text-sm mb-3">
                    Premium Career
                </div>
                <button className="border border-amber-600 text-amber-600 rounded-full px-4 py-1 text-sm font-medium hover:bg-amber-50 transition-colors">
                    Try for Free
                </button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400 justify-center px-4">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Accessibility</a>
                <a href="#" className="hover:underline">Help Center</a>
                <a href="#" className="hover:underline">Privacy & Terms</a>
                <a href="#" className="hover:underline">Ad Choices</a>
            </div>
        </div>
    );
}
