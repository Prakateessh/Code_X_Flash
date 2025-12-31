"use client";

import { useState, useEffect } from "react";
import { generateUsers, type User as UserType } from "@/lib/data";
import { UserPlus, X, Filter, UserCheck } from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function NetworkPage() {
    const { invitations, acceptInvitation, rejectInvitation } = useAppContext();
    const [people, setPeople] = useState<UserType[]>([]);
    const [sentRequests, setSentRequests] = useState<string[]>([]);

    useEffect(() => {
        // Keep consistent random suggestions
        const suggested = generateUsers(12);
        setPeople(suggested);
    }, []);

    const handleConnect = (id: string) => {
        if (sentRequests.includes(id)) return;
        setSentRequests(prev => [...prev, id]);
    };

    return (
        <div className="space-y-6">
            {/* Invitations Card */}
            {invitations.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-blue-50/30">
                        <h2 className="text-base font-semibold text-gray-900">Invitations</h2>
                        <span className="text-sm text-gray-500">{invitations.length} Pending</span>
                    </div>
                    <div>
                        {invitations.map((user) => (
                            <div key={user.id} className="p-4 flex items-center gap-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                                    <Image src={user.avatar} alt={user.name} fill className="object-cover" unoptimized />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm text-gray-900">{user.name}</h3>
                                    <p className="text-xs text-gray-500 truncate">{user.headline}</p>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                                        <span>2 mutuals</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => rejectInvitation(user.id)}
                                        className="text-gray-500 hover:bg-gray-200 p-2 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => acceptInvitation(user.id)}
                                        className="text-blue-600 hover:bg-blue-50 border border-blue-600 px-4 py-1.5 rounded-full font-semibold text-sm transition-colors hover:shadow-sm"
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* People you may know Grid */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-base font-semibold text-gray-900">People you may know</h2>
                    <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {people.map((user) => {
                        const isSent = sentRequests.includes(user.id);

                        return (
                            <div key={user.id} className="border border-gray-200 rounded-lg overflow-hidden relative flex flex-col items-center p-4 text-center hover:shadow-md transition-all active:scale-[0.98]">
                                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                                    <X className="w-4 h-4" />
                                </button>
                                <div className="w-24 h-24 rounded-full bg-gray-100 mb-3 overflow-hidden relative">
                                    <Image src={user.avatar} alt={user.name} fill className="object-cover" unoptimized />
                                </div>
                                <h3 className="font-semibold text-sm text-gray-900 mb-1">{user.name}</h3>
                                <p className="text-xs text-gray-500 h-8 line-clamp-2 mb-4">{user.headline}</p>

                                <button
                                    onClick={() => handleConnect(user.id)}
                                    className={isSent
                                        ? "flex items-center gap-1.5 border border-gray-400 text-gray-500 px-4 py-1 rounded-full font-semibold text-sm w-full justify-center transition-colors mt-auto cursor-default"
                                        : "flex items-center gap-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:shadow-sm px-4 py-1 rounded-full font-semibold text-sm w-full justify-center transition-colors mt-auto"
                                    }
                                >
                                    {isSent ? (
                                        <> <UserCheck className="w-4 h-4" /> Pending </>
                                    ) : (
                                        <> <UserPlus className="w-4 h-4" /> Connect </>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
