export type User = {
    id: string;
    name: string;
    headline: string;
    avatar: string; // URL or color
    isConnection: boolean;
};

export type Post = {
    id: string;
    author: User;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    reposts: number;
    tags: string[];
    image?: string; // Optional
};

export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    date: string;
    applicants: number;
    type: "Full-time" | "Contract" | "Internship";
};

// Seeded random number generator
function sfc32(a: number, b: number, c: number, d: number) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}

// Simple seeded random
let random = Math.random;
export const setSeed = (seed: number) => {
    const seeder = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, seed);
    random = seeder;
};

export const HEADLINES = [
    "Senior Software Engineer at TechCorp",
    "Product Designer | UX/UI Specialist",
    "Building the future of Agentic AI",
    "Frontend Developer | React & Next.js Enthusiast",
    "AI Researcher | NLP & Transformers",
    "Marketing Manager | Growth Hacker",
    "Technical Recruiter at HireMe",
    "CS Student at Stanford University",
    "Full Stack Developer | Open Source Contributor",
    "Data Scientist | Machine Learning Engineer",
];

export const NAMES = [
    "Alice Johnson", "Bob Smith", "Charlie Brown", "Diana Prince", "Ethan Hunt",
    "Fiona Gallagher", "George Martin", "Hannah Lee", "Ian McKellen", "Julia Roberts",
    "Kevin Hart", "Laura Croft", "Michael Scott", "Nancy Wheeler", "Oscar Isaac",
    "Paul Atreides", "Quentin Tarantino", "Rachel Green", "Steve Rogers", "Tony Stark"
];

export const COMPANIES = ["Google", "Meta", "Netflix", "Airbnb", "Stripe", "OpenAI", "Anthropic", "Vercel", "Linear", "Amazon", "Microsoft", "Databricks"];

const TAGS = ["#robotics", "#AI", "#hiring", "#career", "#design", "#tech", "#coding", "#react", "#nextjs", "#jobsearch", "#agenticAI", "#webdev", "#opensource", "#leadership"];

const POST_CONTENTS = [
    "Just finished a deep dive into Agentic AI patterns. The ability for LLMs to plan and execute multi-step tasks is going to revolutionize how we build software. Has anyone else experimented with LangChain recently?",
    "I'm thrilled to announce that I've joined TechCorp as a Senior Engineer! Excited to work on the next generation of developer tools. #career #newjob",
    "Unpopular opinion: TypeScript is more about documentation than type safety. Change my mind. ☕ #coding #typescript",
    "Feeling overwhelmed by the speed of AI development? You're not alone. My advice: focus on fundamentals. Deep learning principles haven't changed as fast as the frameworks. #AI #learning",
    "Does anyone have recommendations for advanced React performance optimization resources? Specifically looking into concurrent rendering patterns.",
    "Reflecting on my journey from a bootcamp grad to a Lead Dev. It wasn't easy, but consistency was key. Keep building, keep learning! 💪 #motivation #career",
    "Just published a new blog post on building accessible UI components with Tailwind and Headless UI. Check it out! (Link in comments) #webdev #a11y",
    "The market for Frontend Engineers is shifting. It's no longer enough to just know React. You need to understand the full stack, server components, and increasingly, how to integrate AI agents. #tech #trends",
    "Designing for AI agents requires a fundamental shift in UX thinking. It's not just about buttons and forms anymore; it's about intent and conversation. #design #ux",
    "Big news! Our team just shipped the new dashboard feature we've been working on for months. Kudos to the whole squad for the late nights and hard work. 🚀 #shipit",
    "Is it just me, or are meetings getting longer and more frequent? We need more async culture in tech. #wfh #remotework",
    "Just wrapped up an amazing weekend at the AI Hackathon. Built a career assistant agent that helps you optimize your resume. The code is a mess, but it works! 😂 #hackathon #projects",
    "Hiring Alert! 🚨 I'm looking for a Junior Designer to join my team. If you love clean UI and are passionate about accessibility, DM me! #hiring #designjobs",
    "Learning Rust this weekend. The borrow checker is humbling, to say the least. Any tips for a C++ refugee? #rust #learning",
    "Artificial General Intelligence (AGI) feels closer than ever. Are we ready for the societal impact? #future #ethics",
    "Remote work produced some of my best code, but I do miss the whiteboard sessions. There's something about scribbling boxes and arrows in person that Zoom just can't replicate.",
    "Shoutout to all the open source maintainers keeping the digital world running. You are the unsung heroes of our industry. ❤️ #opensource",
    "Stop optimizing prematurely. Make it work, make it right, make it fast. In that order.",
    "I've been using GitHub Copilot for a year now. It hasn't replaced me, but it has definitely made me faster. It's like having a really knowledgeable intern pair programming with you.",
    "Consistency > Intensity. Writing code for 30 minutes every day is better than a 10-hour marathon once a week.",
    "Anyone else attending the Next.js conference next month? Let's connect! 👋",
    "Burnout is real. Take care of your mental health, folks. No job is worth your sanity. #mentalhealth",
    "Just got my AWS certification! It was a tough exam, but totally worth it. Now time to deploy some serverless functions. ☁️ #aws #cloud",
    "Interesting trend: CSS is getting so powerful, I'm finding myself writing less and less JavaScript for UI transitions. `has()`, container queries, nesting... it's a golden era for CSS.",
    "Mentorship is a two-way street. I learn just as much from my mentees as they learn from me.",
    "Implementing a dark mode isn't just `invert(1)`. You need to carefully consider contrast ratios and color distinctiveness. #designsystems",
    "Why is centering a div still a meme? `grid place-items-center`. Done.",
    "The best engineers I know exemplify humility. They aren't afraid to say 'I don't know' and then go find the answer.",
    "Starting a new side project today: A personalized news aggregator powered by local LLMs. Privacy first! #privacy #ai",
    "Recruiters: Please stop sending generic LinkedIn messages. If you actually read my profile, you'd know I'm not a Java developer.",
    "Agentic workflows are the new microservices. Orchestrating small, specialized agents is going to be the main architectural challenge of 2026.",
    "Product Managers: What's the one feature you wish engineers understood better about your role?",
    "Reviewing code is an art. Be kind, be constructive, and explain the 'why', not just the 'what'.",
    "Just discovered a memory leak in production that's been there for 6 months. Fix deployed. Server costs dropped by 40%. 📉💰 #debugging",
    "Imposter syndrome never really goes away. You just get better at ignoring it and doing the work anyway.",
    "Experimenting with WebAssembly today. The performance gains for heavy computation in the browser are insane.",
    "Your portfolio is your handshake. Make sure it's firm and leaves a good impression.",
    "Does anyone use VIM as their daily driver in 2025? Or have we all moved to VS Code / Cursor?",
    "Great leaders eat last. They take the blame for failures and give away the credit for successes.",
    "I replaced my entire testing stack with Playwright. No regrets. It's just so much more stable than Cypress.",
    "The gap between 'Junior' and 'Senior' isn't knowing syntax. It's knowing what NOT to build.",
    "Listening to the new episode of Syntax FM. great insights on the future of web frameworks.",
    "We need to talk about AI hallucinations in critical systems. It's not a bug, it's a feature of the architecture, and we need guardrails.",
    "Happy Friday! deploying to production at 4:55 PM. Wish me luck. 🤞 (Just kidding, read-only Friday rules!)",
    "If you're looking for a sign to start that project you've been dreaming about... THIS IS IT. GO.",
    "Analyzing user churn data today. It's amazing what you can find when you actually talk to users instead of just looking at dashboards.",
    "Building a Design System is 20% choosing colors and 80% politics and communication.",
    "Networking isn't about collecting contacts. It's about building genuine relationships.",
    "To the recruiter who ghosted me 3 years ago and just messaged me about a 'Principal' role: New phone, who dis? 💅",
    "Documentation is a love letter to your future self."
];

export const generateUsers = (count: number): User[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `u-${i}`,
        name: NAMES[Math.floor(random() * NAMES.length)] + (i > 20 ? ` (${i})` : ""),
        headline: HEADLINES[Math.floor(random() * HEADLINES.length)],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + (random() * 1000)}`,
        isConnection: random() > 0.5,
    }));
};

export const generatePosts = (count: number, users: User[]): Post[] => {
    const posts: Post[] = [];
    // Ensure we have enough unique content or cycle through it
    const shuffledContents = shuffleArray([...POST_CONTENTS, ...POST_CONTENTS]); // Double it just in case

    for (let i = 0; i < count; i++) {
        const author = users[Math.floor(random() * users.length)];
        const contentTemplate = shuffledContents[i % shuffledContents.length];

        // Add some random variety to stats
        const likes = Math.floor(random() * 1200) + 12;
        const comments = Math.floor(likes * 0.1) + Math.floor(random() * 5);
        const reposts = Math.floor(likes * 0.05);

        posts.push({
            id: `p-${i}`,
            author,
            content: contentTemplate,
            timestamp: `${Math.floor(random() * 48) + 1}h ago`,
            likes,
            comments,
            reposts,
            tags: [TAGS[Math.floor(random() * TAGS.length)], TAGS[Math.floor(random() * TAGS.length)]],
            image: random() > 0.6 ? `https://picsum.photos/seed/${i + 999}/800/400` : undefined, // Increased frequency to 40%
        });
    }
    return posts;
};

export const generateJobs = (count: number): Job[] => {
    const TITLES = ["Frontend Engineer", "Backend Developer", "Product Manager", "UX Designer", "AI Engineer", "DevOps Specialist", "Data Analyst", "Engineering Manager"];
    const LOCATIONS = ["San Francisco, CA", "New York, NY", "London, UK", "Remote", "Austin, TX", "Seattle, WA", "Berlin, DE"];

    return Array.from({ length: count }).map((_, i) => ({
        id: `j-${i}`,
        title: TITLES[Math.floor(random() * TITLES.length)],
        company: COMPANIES[Math.floor(random() * COMPANIES.length)],
        location: LOCATIONS[Math.floor(random() * LOCATIONS.length)],
        date: `${Math.floor(random() * 14)}d ago`,
        applicants: Math.floor(random() * 500) + 20,
        type: "Full-time",
    }));
};

// Shuffle function (Fisher-Yates) using our seeded random
export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
