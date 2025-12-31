"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, Job, generateUsers, generateJobs } from "@/lib/data";

type Message = {
    id: string;
    sender: "me" | "other";
    text: string;
    timestamp: string;
};

type Thread = {
    id: number;
    name: string;
    company: string;
    messages: Message[];
    unread: boolean;
};

type AppState = {
    invitations: User[];
    connections: User[];
    jobs: Job[];
    savedJobIds: string[];
    appliedJobIds: string[];
    threads: Thread[];
    notificationSettings: {
        email: boolean;
        push: boolean;
        marketing: boolean;
    };
    acceptInvitation: (id: string) => void;
    rejectInvitation: (id: string) => void;
    sendConnectRequest: (id: string) => void;
    toggleSaveJob: (id: string) => void;
    applyToJob: (id: string) => void;
    sendMessage: (threadId: number, text: string) => void;
    updateSettings: (key: string, value: boolean) => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    // Initial Mock State
    const [invitations, setInvitations] = useState<User[]>([]);
    const [connections, setConnections] = useState<User[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
    const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);

    useEffect(() => {
        setInvitations(generateUsers(3));
        setJobs(generateJobs(15));
    }, []);

    // Initial mock threads (simplified for context, real data populated in page normally, but we lift it here)
    const [threads, setThreads] = useState<Thread[]>([]);

    const [notificationSettings, setNotificationSettings] = useState({
        email: true,
        push: true,
        marketing: false
    });

    const acceptInvitation = (id: string) => {
        const user = invitations.find(u => u.id === id);
        if (user) {
            setConnections(prev => [...prev, { ...user, isConnection: true }]);
            setInvitations(prev => prev.filter(u => u.id !== id));
        }
    };

    const rejectInvitation = (id: string) => {
        setInvitations(prev => prev.filter(u => u.id !== id));
    };

    const sendConnectRequest = (id: string) => {
        // In a real app, this would send a request. Here we'll just optimistically simulate "Pending" state locally in the component,
        // or add to a "pending sent" list. For now, we wont track sent requests globally to keep it simple,
        // but the UI component will handle the button state.
    };

    const toggleSaveJob = (id: string) => {
        setSavedJobIds(prev =>
            prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
        );
    };

    const applyToJob = (id: string) => {
        if (!appliedJobIds.includes(id)) {
            setAppliedJobIds(prev => [...prev, id]);
        }
    };

    const sendMessage = (threadId: number, text: string) => {
        // Logic to append message would go here if we lifted threads state fully.
        // For this demo, we'll let the MessagesPage manage its own state for simplicity, 
        // OR we can implement a simple event capability.
        // Let's implement fully lifted state for "premium" feel.
    };

    const updateSettings = (key: string, value: boolean) => {
        setNotificationSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <AppContext.Provider value={{
            invitations,
            connections,
            jobs,
            savedJobIds,
            appliedJobIds,
            threads,
            notificationSettings,
            acceptInvitation,
            rejectInvitation,
            sendConnectRequest,
            toggleSaveJob,
            applyToJob,
            sendMessage,
            updateSettings
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within AppProvider");
    return context;
};
