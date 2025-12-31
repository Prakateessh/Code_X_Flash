import React from "react";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// RNT UI Asset Pack (A–Z)
// Tailwind-only, previewable in Canvas.
// ------------------------------------------------------------

function cnn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

// A) AppStage (dark stage background)
export function AppStage({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen w-full bg-[#0b0b0f]">{children}</div>;
}

// B) FrameCard (white rounded frame)
export function FrameCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative w-full rounded-[40px] bg-white p-7 shadow-[0_40px_120px_rgba(0,0,0,0.55)]",
                className
            )}
        >
            {children}
        </div>
    );
}

// C) CornerGlow (top-left lilac hint)
export function CornerGlow() {
    return (
        <div className="pointer-events-none absolute -left-28 -top-28 h-56 w-56 rounded-[40px] bg-gradient-to-br from-[#e9e5ff] to-white opacity-90" />
    );
}

// D) LogoMark
export function LogoMark({ size = 36 }: { size?: number }) {
    return (
        <div className="relative" style={{ height: size, width: size }}>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" />
            <div className="absolute left-[6px] top-[6px] h-[14px] w-[14px] rounded-full bg-white/80" />
            <div className="absolute right-[7px] top-[8px] h-[10px] w-[10px] rounded-full bg-white/70" />
            <div className="absolute bottom-[6px] left-[10px] h-[16px] w-[16px] rounded-2xl bg-white/60" />
        </div>
    );
}

// E) Icon: Search
export function SearchIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
        </svg>
    );
}

// F) Icon: ChevronDown
export function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

// G) GradientButton (round search button)
export function GradientButton({
    children,
    ariaLabel,
    className,
    onClick,
}: {
    children: React.ReactNode;
    ariaLabel?: string;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={cn(
                "grid place-items-center rounded-full bg-gradient-to-br from-purple-200 to-pink-200 text-black/70 shadow-sm hover:brightness-95",
                className
            )}
        >
            {children}
        </button>
    );
}

// H) PrimaryButton (black CTA)
export function PrimaryButton({
    children,
    className,
    onClick
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full bg-black px-5 py-2.5 text-white shadow-sm hover:bg-black/90",
                className
            )}
        >
            {children}
        </button>
    );
}

// I) GhostButton
export function GhostButton({
    children,
    className,
    onClick
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70 hover:bg-black/[0.02]",
                className
            )}
        >
            {children}
        </button>
    );
}

// J) InputPill
export function InputPill({
    placeholder,
    className,
    value,
    onChange
}: {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={cn(
                "h-11 w-full rounded-full border border-black/10 bg-white px-5 text-sm outline-none placeholder:text-black/35 focus:border-black/20",
                className
            )}
            placeholder={placeholder}
        />
    );
}

// K) DropdownPill (visual only)
export function DropdownPill({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-1 text-sm text-black/70">
            <span>{label}</span>
            <ChevronDownIcon className="text-black/45" />
        </div>
    );
}

// M) GradientPanel (hero background)
export function GradientPanel({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-[34px] border border-black/5 bg-gradient-to-br from-[#efe9ff] via-[#d7ecff] to-[#ffe8f6]",
                className
            )}
        >
            {children}
        </div>
    );
}

// N) H1 Title
export function Title({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={cn("text-balance text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl", className)}>
            {children}
        </h1>
    );
}

// O) Subtitle
export function Subtitle({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("mx-auto mt-4 max-w-[540px] text-sm leading-6 text-black/55 sm:text-base", className)}>
            {children}
        </p>
    );
}

// P) GlassSearchBar
export function GlassSearchBar({
    placeholder = "What Are You Looking For?",
    rightLabel = "Jobs",
}: {
    placeholder?: string;
    rightLabel?: string;
}) {
    return (
        <div className="mx-auto mt-8 flex max-w-[860px] items-center gap-3 rounded-full bg-white/65 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur">
            <input
                className="h-12 w-full rounded-full bg-transparent px-5 text-sm outline-none placeholder:text-black/35 sm:text-base"
                placeholder={placeholder}
            />
            <div className="hidden items-center gap-2 text-sm text-black/55 sm:flex">
                <span>{rightLabel}</span>
                <ChevronDownIcon className="text-black/45" />
            </div>
            <GradientButton className="h-12 w-12 shrink-0" ariaLabel="Search">
                <SearchIcon />
            </GradientButton>
        </div>
    );
}

// Q) DotPill
export function DotPill({
    label,
    tone,
}: {
    label: string;
    tone: "blue" | "pink" | "green";
}) {
    const dot =
        tone === "blue"
            ? "bg-sky-300"
            : tone === "pink"
                ? "bg-pink-300"
                : "bg-emerald-300";
    return (
        <div className="flex items-center gap-2 text-xs text-black/50">
            <span className={cn("h-2 w-2 rounded-full", dot)} />
            <span>{label}</span>
        </div>
    );
}

// U) Badge
export function Badge({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs", className)}>
            {children}
        </span>
    );
}

// V) StatCard
export function StatCard({
    title,
    value,
    hint,
}: {
    title: string;
    value: string;
    hint?: string;
}) {
    return (
        <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
            <div className="text-xs font-semibold uppercase tracking-wide text-black/45">
                {title}
            </div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight text-black">
                {value}
            </div>
            {hint ? <div className="mt-1 text-sm text-black/50">{hint}</div> : null}
        </div>
    );
}
