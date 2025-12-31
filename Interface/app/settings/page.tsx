"use client";

import { useAppContext } from "@/context/AppContext";
import { Bell, Mail, Smartphone, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
    const { notificationSettings, updateSettings } = useAppContext();

    const TOGGLES = [
        { key: "email", label: "Email Notifications", icon: Mail, description: "Receive a weekly digest and urgent alerts." },
        { key: "push", label: "Push Notifications", icon: Smartphone, description: "Instant alerts on your mobile device." },
        { key: "marketing", label: "Marketing Emails", icon: Volume2, description: "Tips, offers, and news from Career Hacky partners." },
    ];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                        <Bell className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Notification Settings</h1>
                        <p className="text-sm text-gray-500">Manage how we contact you.</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {TOGGLES.map((t) => (
                        <div key={t.key} className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <t.icon className="w-5 h-5 text-gray-400 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">{t.label}</h3>
                                    <p className="text-sm text-gray-500">{t.description}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => updateSettings(t.key, !notificationSettings[t.key as keyof typeof notificationSettings])}
                                className={cn(
                                    "w-11 h-6 rounded-full transition-colors relative",
                                    notificationSettings[t.key as keyof typeof notificationSettings] ? "bg-green-600" : "bg-gray-200"
                                )}
                            >
                                <div className={cn(
                                    "w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 transition-transform",
                                    notificationSettings[t.key as keyof typeof notificationSettings] ? "translate-x-5.5 left-0.5" : "left-0.5"
                                )}></div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <button className="text-gray-500 font-medium text-sm hover:underline">Reset to Default</button>
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
