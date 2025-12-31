"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MoreHorizontal, Edit, Image as ImageIcon, Paperclip, Send as SendIcon, Phone, Video } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAMES, COMPANIES } from "@/lib/data";

interface Message {
    id: string;
    text: string;
    sender: "me" | "other";
    timestamp: string;
}

interface Thread {
    id: number;
    name: string;
    title: string;
    messages: Message[];
}

export default function MessagesPage() {
    const [selectedId, setSelectedId] = useState<number>(0);
    const [threads, setThreads] = useState<Thread[]>([]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate threads locally since we aren't using deep context for this complex object to save time
        const initialThreads = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            name: NAMES[i % NAMES.length],
            title: `Talent Acquisition at ${COMPANIES[i % COMPANIES.length]}`,
            messages: [
                {
                    id: `init-${i}`,
                    text: i % 2 === 0
                        ? "Hi Felix, thanks for connecting. Your background in Agentic AI is impressive!"
                        : "Are you available for a quick chat?",
                    sender: "other" as const,
                    timestamp: "10:30 AM"
                }
            ]
        }));
        setThreads(initialThreads);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [threads, selectedId]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        setThreads(prev => prev.map(t => {
            if (t.id === selectedId) {
                return {
                    ...t,
                    messages: [...t.messages, {
                        id: Date.now().toString(),
                        text: inputText,
                        sender: "me",
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }]
                };
            }
            return t;
        }));
        setInputText("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    const activeThread = threads.find(t => t.id === selectedId);

    return (
        <div className="grid grid-cols-12 bg-white rounded-lg shadow-sm border border-gray-200 h-[calc(100vh-8rem)] overflow-hidden">
            {/* Sidebar */}
            <div className="col-span-12 md:col-span-4 border-r border-gray-200 flex flex-col h-full">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="font-bold text-gray-900">Messaging</h2>
                    <div className="flex gap-1">
                        <button className="p-2 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5 text-gray-600" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-full"><Edit className="w-5 h-5 text-gray-600" /></button>
                    </div>
                </div>
                {/* Search Bar omitted for brevity */}

                <div className="flex-1 overflow-y-auto">
                    {threads.map(thread => {
                        const lastMsg = thread.messages[thread.messages.length - 1];
                        return (
                            <div
                                key={thread.id}
                                onClick={() => setSelectedId(thread.id)}
                                className={cn(
                                    "flex gap-3 p-4 cursor-pointer border-l-4 transition-colors hover:bg-gray-50",
                                    selectedId === thread.id ? "border-green-600 bg-blue-50/30" : "border-transparent"
                                )}
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                                    <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${thread.name}`} alt="User" fill className="object-cover" unoptimized />
                                </div>
                                <div className="flex-1 min-w-0 pr-2">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-semibold text-sm text-gray-900 truncate">{thread.name}</h3>
                                        <span className="text-xs text-gray-500">{lastMsg.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">
                                        {lastMsg.sender === "me" ? "You: " : ""}{lastMsg.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 hidden md:flex flex-col h-full bg-gray-50/30">
                {activeThread ? (
                    <>
                        <div className="p-3 border-b border-gray-200 flex justify-between items-center bg-white">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-sm text-gray-900">{activeThread.name}</h2>
                                <span className="text-xs text-gray-500">{activeThread.title}</span>
                            </div>
                            <div className="flex gap-2 text-gray-500">
                                <button className="p-2 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5" /></button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {activeThread.messages.map(msg => (
                                <div key={msg.id} className={cn("flex gap-3", msg.sender === "me" ? "flex-row-reverse" : "")}>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                                        {msg.sender === "me" ? (
                                            <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">ME</div>
                                        ) : (
                                            <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeThread.name}`} alt="User" fill className="object-cover" unoptimized />
                                        )}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-lg shadow-sm max-w-[80%]",
                                        msg.sender === "me" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white border border-gray-200 text-gray-800 rounded-tl-none"
                                    )}>
                                        <p className="text-sm">{msg.text}</p>
                                        <span className={cn("text-[10px] mt-1 block", msg.sender === "me" ? "text-blue-100" : "text-gray-400")}>{msg.timestamp}</span>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="bg-gray-100 rounded-lg p-2">
                                <textarea
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="w-full bg-transparent outline-none text-sm min-h-[60px] resize-none placeholder-gray-500"
                                    placeholder="Write a message..."
                                ></textarea>
                                <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200/50">
                                    <div className="flex gap-2 text-gray-500">
                                        <button className="hover:text-gray-700"><ImageIcon className="w-5 h-5" /></button>
                                    </div>
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputText.trim()}
                                        className="px-4 py-1.5 bg-blue-600 text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">Select a thread</div>
                )}
            </div>
        </div>
    );
}
