"use client";

import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { plan, saved } = usePlan()

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]/95 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

                <div>
                    <Link
                        href="/"
                        className=" flex items-center gap-2 text-2xl font-black uppercase text-white"
                    >
                        <Image src="/logo.png" alt="FitLog" width={32} height={32} ></Image>
                        FITLOG
                    </Link>
                </div>


                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className={`relative py-2 text-sm font-bold uppercase tracking-wider transition ${isWorkoutActive
                            ? "text-[#ccff00]"
                            : "text-white/60 hover:text-white"
                            }`}
                    >
                        Workout

                        {isWorkoutActive && (
                            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#ccff00]" />
                        )}
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`relative py-2 text-sm font-bold uppercase tracking-wider transition ${isPlanActive
                            ? "text-[#ccff00]"
                            : "text-white/60 hover:text-white"
                            }`}
                    >
                        My Plan

                        {isPlanActive && (
                            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#ccff00]" />
                        )}
                    </Link>
                </div>
                <div className="hidden items-center gap-4 md:flex">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        Plan

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1 text-xs font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        Saved

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-600 px-1 text-xs text-gray-300">
                            {saved.length}
                        </span>
                    </Link>

                </div>


                <div className="hidden items-center gap-3 md:flex">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#101010] transition hover:scale-105"
                    >
                        <span>Plan</span>
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#101010] px-1 text-[10px] text-[#ccff00]">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                    >
                        <span>Saved</span>
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-current px-1 text-[10px]">
                            {saved.length}
                        </span>
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="border-t border-white/10 bg-[#101010] px-5 py-5 md:hidden">
                        <div className="flex flex-col gap-3">

                            <Link
                                href="/"
                                onClick={closeMenu}
                                className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition ${isWorkoutActive
                                    ? "bg-[#ccff00] text-[#101010]"
                                    : "text-white/70 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                Workout
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={closeMenu}
                                className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition ${isPlanActive
                                    ? "bg-[#ccff00] text-[#101010]"
                                    : "text-white/70 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                My Plan
                            </Link>

                            
                            <div className="mt-2 flex gap-3 border-t border-white/10 pt-4">
                                <Link
                                    href="/my-plan"
                                    onClick={closeMenu}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-4 py-3 text-xs font-black uppercase text-[#101010]"
                                >
                                    Plan
                                    <span className="rounded-full bg-[#101010] px-2 py-0.5 text-[#ccff00]">
                                        {plan.length}
                                    </span>
                                </Link>

                                <Link
                                    href="/my-plan"
                                    onClick={closeMenu}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 text-xs font-black uppercase text-white"
                                >
                                    Saved
                                    <span className="rounded-full border border-current px-2 py-0.5">
                                        {saved.length}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </header >
    );
};

export default Navbar;