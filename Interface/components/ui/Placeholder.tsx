"use client";

import { Construction } from "lucide-react";

export function PlaceholderPage({ title, description }: { title: string; description?: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Construction className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-500 max-w-md">
                {description || "This feature is currently under development as part of the Agentic AI Career Assistant demo."}
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                Go Back Home
            </button>
        </div>
    );
}
