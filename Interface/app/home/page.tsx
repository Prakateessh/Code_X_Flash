import { Feed } from "@/components/feed/Feed";
import { Composer } from "@/components/feed/Composer";
import { RightPanel } from "@/components/home/RightPanel";

export default function HomePage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feed Column */}
            <div className="lg:col-span-8">
                <Composer />
                <div className="flex items-center justify-between mb-2 px-1">
                    <div className="h-[1px] bg-gray-300 flex-1"></div>
                    <span className="text-xs text-gray-400 font-medium px-2 uppercase">Sort by: Top</span>
                    <div className="h-[1px] bg-gray-300 flex-1"></div>
                </div>
                <Feed />
            </div>

            {/* Right Panel Column */}
            <div className="hidden lg:block lg:col-span-4">
                <RightPanel />
            </div>
        </div>
    );
}
