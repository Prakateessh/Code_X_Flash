"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Brain, Rocket } from "lucide-react";

const BENEFITS = [
    {
        icon: Brain,
        title: "AI Analysis",
        description: "Get deep insights into your resume and compatibility for every role.",
    },
    {
        icon: Zap,
        title: "Agentic Auto-Apply",
        description: "Let your AI agent apply to jobs while you sleep (safely).",
    },
    {
        icon: Rocket,
        title: "Priority Ranking",
        description: "Appear at the top of recruiter searches with verified skills.",
    },
];

export default function PremiumPage() {
    return (
        <div className="min-h-screen bg-[#f3f2ef]">
            {/* Hero Section */}
            <div className="bg-[#1d2226] text-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 px-8 py-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="p-2 bg-amber-400/10 rounded-full text-amber-400">
                                <Sparkles className="w-6 h-6" />
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-500 text-transparent bg-clip-text">
                            Unlock Your Career Potential
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Supercharge your job search with Agentic AI. Get hired 3x faster with automated networking and intelligent insights.
                        </p>
                        <button className="bg-amber-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-300 transition-colors shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                            Try for Free for 1 Month
                        </button>
                        <p className="text-xs text-gray-500 mt-4">No credit card required for trial.</p>
                    </motion.div>
                </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {BENEFITS.map((b, i) => (
                    <motion.div
                        key={b.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <b.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{b.title}</h3>
                        <p className="text-gray-600 text-sm">{b.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Choose your plan</h2>

                    <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 text-center font-bold text-gray-500">Free</div>
                        <div className="col-span-1 text-center font-bold text-amber-600">Premium</div>

                        {[
                            "Basic Profile",
                            "Job Search",
                            "AI Resume Review",
                            "Unlimited InMail",
                            "Agentic Auto-Apply",
                            "Who Viewed Your Profile"
                        ].map((feature, idx) => (
                            <div key={feature} className="col-span-3 grid grid-cols-3 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded px-2">
                                <div className="col-span-1 font-medium text-gray-700">{feature}</div>
                                <div className="col-span-1 flex justify-center">
                                    {idx < 2 ? <Check className="w-5 h-5 text-gray-400" /> : <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-2"></div>}
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <Check className="w-5 h-5 text-amber-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-50 p-6 text-center">
                    <h3 className="font-bold text-gray-700">Ready to accelerate your career?</h3>
                    <div className="mt-4 flex justify-center gap-4">
                        <button className="text-gray-500 font-semibold hover:text-gray-700">Maybe Later</button>
                        <button className="bg-amber-400 text-black font-bold px-6 py-2 rounded-full hover:bg-amber-300 transition-colors shadow-sm">
                            Activate Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
