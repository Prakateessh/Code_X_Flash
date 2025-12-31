"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, CheckCircle, Brain, AlertCircle, BookOpen, ChevronRight, Zap, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AssistantPage() {
    const [activeGoal, setActiveGoal] = useState("Get ML Internship");
    const [query, setQuery] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'agent', text: string }[]>([]);

    const handleAsk = () => {
        if (!query.trim()) return;
        setChatHistory(prev => [...prev, { role: 'user', text: query }]);
        setQuery("");
        setIsThinking(true);

        // Simulate agent thinking
        setTimeout(() => {
            setIsThinking(false);
            setChatHistory(prev => [...prev, { role: 'agent', text: "I've analyzed the job market for ML Internships. Based on your current skills, I recommend focusing on PyTorch deployment patterns next." }]);
        }, 2000);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sidebar / Goal Selector */}
            <div className="md:col-span-4 space-y-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Current Goal
                    </h2>
                    <div
                        onClick={() => setActiveGoal("Get ML Internship")}
                        className={cn("p-3 border rounded-md mb-3 cursor-pointer ring-offset-2 transition-all", activeGoal === "Get ML Internship" ? "bg-blue-50 border-blue-100 ring-2 ring-blue-500" : "bg-white border-gray-200 hover:bg-gray-50")}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={cn("font-bold", activeGoal === "Get ML Internship" ? "text-blue-900" : "text-gray-700")}>Get ML Internship</span>
                            {activeGoal === "Get ML Internship" && <span className="bg-blue-200 text-blue-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">Active</span>}
                        </div>
                        <p className={cn("text-xs", activeGoal === "Get ML Internship" ? "text-blue-700" : "text-gray-500")}>Target: Summer 2025</p>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-blue-600 h-full w-[45%]"></div>
                        </div>
                    </div>

                    <div
                        onClick={() => setActiveGoal("Senior Frontend Dev")}
                        className={cn("p-3 border rounded-md cursor-pointer ring-offset-2 transition-all", activeGoal === "Senior Frontend Dev" ? "bg-blue-50 border-blue-100 ring-2 ring-blue-500" : "bg-white border-gray-200 hover:bg-gray-50 opacity-80")}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={cn("font-bold", activeGoal === "Senior Frontend Dev" ? "text-blue-900" : "text-gray-700")}>Senior Frontend Dev</span>
                            {activeGoal === "Senior Frontend Dev" && <span className="bg-blue-200 text-blue-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">Active</span>}
                        </div>
                        <p className={cn("text-xs", activeGoal === "Senior Frontend Dev" ? "text-blue-700" : "text-gray-500")}>Target: 2 Years</p>
                    </div>

                    <button className="w-full mt-2 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors">
                        + Add New Goal
                    </button>
                </div>

                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg shadow-lg border border-indigo-800 p-5 text-white relative overflow-hidden flex flex-col h-[300px]">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Brain className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                        </div>
                        <span className="font-bold">Agent Chat</span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs mb-3 no-scrollbar relative z-10">
                        <div className="bg-indigo-800/50 p-2 rounded-lg rounded-tl-none self-start">
                            Hi! I'm tracking your progress towards your ML Internship. How can I help today?
                        </div>
                        {chatHistory.map((c, i) => (
                            <div key={i} className={cn("p-2 rounded-lg max-w-[90%]", c.role === 'user' ? "bg-white/20 ml-auto rounded-tr-none text-right" : "bg-indigo-800/50 rounded-tl-none")}>
                                {c.text}
                            </div>
                        ))}
                        {isThinking && (
                            <div className="text-gray-300 text-[10px] italic flex items-center gap-1">
                                <Sparkles className="w-3 h-3 animate-pulse" /> Thinking...
                            </div>
                        )}
                    </div>

                    <div className="relative z-10">
                        <div className="flex gap-2 bg-indigo-950/50 p-1.5 rounded-full border border-indigo-700/50">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                                type="text"
                                placeholder="Ask your agent..."
                                className="flex-1 bg-transparent border-none outline-none text-xs px-2 text-white placeholder-indigo-300"
                            />
                            <button onClick={handleAsk} className="p-1.5 bg-indigo-500 rounded-full hover:bg-indigo-400 text-white shadow-sm">
                                <Send className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Plan Area */}
            <div className="md:col-span-8 space-y-6">

                {/* Next Best Action */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                    <div className="flex items-start gap-4">
                        <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h2 className="text-lg font-bold text-gray-900">Next Best Action</h2>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full uppercase tracking-wider">High Impact</span>
                            </div>
                            <p className="text-gray-600 mt-1 mb-4">
                                Complete the "Advanced PyTorch" certification. 3 of your target roles list this as a required skill.
                            </p>
                            <div className="flex gap-3">
                                <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-black transition-colors">
                                    Start Verification
                                </button>
                                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors">
                                    Why is this important?
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Weekly Plan */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-900">Your Adaptive Plan</h2>
                        <span className="text-xs text-gray-500">Updated 2h ago</span>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex gap-4 opacity-50">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs ring-4 ring-white">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                            </div>
                            <div className="pb-6">
                                <h3 className="text-sm font-bold text-gray-900 line-through text-gray-400">Update Resume parsing</h3>
                                <p className="text-xs text-gray-400">Completed yesterday</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="flex gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-blue-50 shadow-md shadow-blue-200">
                                    Now
                                </div>
                                <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                            </div>
                            <div className="pb-6 w-full">
                                <h3 className="text-sm font-bold text-gray-900">PyTorch Certification</h3>
                                <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200 mb-2 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BookOpen className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm font-medium">Course: Deep Learning specialization</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-blue-600 h-full w-[60%] animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold text-xs ring-4 ring-white">
                                    3
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900">Apply to 5 Target Roles</h3>
                                <p className="text-xs text-gray-500 mt-1">Pending portfolio update</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skill Gaps */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            Skill Gaps
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded border border-amber-100">AWS</span>
                            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded border border-amber-100">System Design</span>
                        </div>
                        <button className="text-xs text-blue-600 font-medium mt-3 flex items-center gap-1 hover:underline">
                            View roadmap <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <h3 className="font-bold text-gray-900 text-sm mb-3">Reflection</h3>
                        <p className="text-xs text-gray-600 italic">
                            "You seem to be avoiding backend tasks. Consider shadowing a backend engineer next week to build confidence."
                        </p>
                        <div className="flex gap-2 mt-3">
                            <button className="text-[10px] bg-green-50 hover:bg-green-100 border border-green-200 px-2 py-1 rounded text-green-700 transition-colors">Acknowledge</button>
                            <button className="text-[10px] bg-gray-50 hover:bg-gray-100 border border-gray-200 px-2 py-1 rounded text-gray-600 transition-colors">Dispute</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
