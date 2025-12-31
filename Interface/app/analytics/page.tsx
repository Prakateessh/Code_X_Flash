"use client";

import { BarChart, Search, Users, Eye, TrendingUp, Info, Briefcase } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Career Analytics</h1>
                    <button className="text-sm text-blue-600 font-semibold hover:bg-blue-50 px-3 py-1 rounded-full transition-colors">Export Report</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm font-medium"><Users className="w-4 h-4" /> Profile views</div>
                        <div className="text-3xl font-bold text-gray-900">142</div>
                        <div className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 12% vs last week</div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm font-medium"><Search className="w-4 h-4" /> Search appearances</div>
                        <div className="text-3xl font-bold text-gray-900">48</div>
                        <div className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 5% vs last week</div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm font-medium"><Eye className="w-4 h-4" /> Post impressions</div>
                        <div className="text-3xl font-bold text-gray-900">1.2k</div>
                        <div className="text-xs text-red-600 font-bold mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3 rotate-180" /> 2% vs last week</div>
                    </div>
                </div>

                {/* SVG Area Chart */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-8">
                    <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                        Profile Activity
                        <Info className="w-4 h-4 text-gray-400 cursor-help" />
                    </h3>
                    <div className="h-48 w-full relative">
                        <svg className="w-full h-full text-blue-600" preserveAspectRatio="none" viewBox="0 0 100 50">
                            {/* Grid Lines */}
                            <line x1="0" y1="0" x2="100" y2="0" stroke="#f3f4f6" strokeWidth="0.5" />
                            <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#f3f4f6" strokeWidth="0.5" />
                            <line x1="0" y1="25" x2="100" y2="25" stroke="#f3f4f6" strokeWidth="0.5" />
                            <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#f3f4f6" strokeWidth="0.5" />
                            <line x1="0" y1="50" x2="100" y2="50" stroke="#f3f4f6" strokeWidth="0.5" />

                            {/* Area Gradient Definition */}
                            <defs>
                                <linearGradient id="gradientId" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* The Area Path */}
                            <path d="M0,50 L0,30 C10,25 20,40 30,35 C40,30 50,10 60,15 C70,20 80,5 90,10 L100,20 V50 Z"
                                fill="url(#gradientId)" />

                            {/* The Line Path */}
                            <path d="M0,30 C10,25 20,40 30,35 C40,30 50,10 60,15 C70,20 80,5 90,10 L100,20"
                                fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />

                            {/* Data Points */}
                            <circle cx="0" cy="30" r="1.5" fill="white" stroke="currentColor" strokeWidth="1" />
                            <circle cx="30" cy="35" r="1.5" fill="white" stroke="currentColor" strokeWidth="1" />
                            <circle cx="60" cy="15" r="1.5" fill="white" stroke="currentColor" strokeWidth="1" />
                            <circle cx="90" cy="10" r="1.5" fill="white" stroke="currentColor" strokeWidth="1" />
                            <circle cx="100" cy="20" r="1.5" fill="white" stroke="currentColor" strokeWidth="1" />
                        </svg>

                        {/* Hover Overlay Tooltip (Mocked as static for now to ensure visibility) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
                            1.2k Views
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium px-2">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-4">Top search keywords</h3>
                        <div className="space-y-3">
                            {[
                                { k: "Frontend Developer", p: 45 },
                                { k: "React Engineer", p: 30 },
                                { k: "UX Designer", p: 15 },
                                { k: "Next.js Specialist", p: 10 }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-700">{item.k}</span>
                                        <span className="font-bold text-gray-900">{item.p}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div style={{ width: `${item.p}%` }} className="bg-amber-400 h-full rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-4">Visitor Demographics</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-900">Recruiters</h4>
                                    <p className="text-xs text-gray-500">65% of your profile visitors</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-900">Founders & CTOs</h4>
                                    <p className="text-xs text-gray-500">20% of your profile visitors</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Search className="w-6 h-6 text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-900">Engineers</h4>
                                    <p className="text-xs text-gray-500">15% of your profile visitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
