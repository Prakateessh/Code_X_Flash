"use client";

import { motion } from "framer-motion";
import { type Post } from "@/lib/data";
import { User, Heart, MessageSquare, Repeat, Send, MoreHorizontal, ThumbsUp } from "lucide-react";
import Image from "next/image";

export function PostCard({ post, index }: { post: Post; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow"
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="object-cover"
                            unoptimized // For mock data URLs
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{post.author.name}</h3>
                        <p className="text-gray-500 text-xs truncate max-w-[200px]">{post.author.headline}</p>
                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                            <span>{post.timestamp}</span>
                            <span>•</span>
                            <User className="w-3 h-3" />
                        </div>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Content */}
            <div className="mb-3">
                <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">
                    {post.content}
                </p>

                {post.image && (
                    <div className="mt-3 rounded-md overflow-hidden bg-gray-100 relative h-64 w-full">
                        <Image
                            src={post.image}
                            alt="Post content"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-2 mb-2">
                <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-blue-500 bg-blue-50 rounded-full p-0.5 box-content" />
                    <span>{post.likes}</span>
                </div>
                <div className="flex gap-3">
                    <span>{post.comments} comments</span>
                    <span>{post.reposts} reposts</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-gray-500 pt-1">
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium flex-1 justify-center">
                    <ThumbsUp className="w-5 h-5" />
                    <span>Like</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium flex-1 justify-center">
                    <MessageSquare className="w-5 h-5" />
                    <span>Comment</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium flex-1 justify-center">
                    <Repeat className="w-5 h-5" />
                    <span>Repost</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium flex-1 justify-center">
                    <Send className="w-5 h-5" />
                    <span>Send</span>
                </button>
            </div>
        </motion.div>
    );
}
