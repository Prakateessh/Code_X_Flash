"use client";

import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { type Post, generatePosts, generateUsers, setSeed, shuffleArray } from "@/lib/data";
import { Loader2 } from "lucide-react";

export function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Rotation logic on mount
        const seed = Date.now();
        setSeed(seed);

        // Generate pool of 50 posts
        const users = generateUsers(20);
        const allPosts = generatePosts(50, users);

        // Shuffle and pick subset (e.g., 20)
        const shuffled = shuffleArray(allPosts);
        const subset = shuffled.slice(0, 20);

        setPosts(subset);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div>
            {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
            ))}
        </div>
    );
}
