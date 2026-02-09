"use client";

import { motion, AnimatePresence } from "framer-motion";

interface InsightOverlayProps {
    currentChapter: number;
}

const insights: Record<number, string> = {
    1: "First, we make the semantic foundation...",
    2: "Then, we apply a unified design system...",
    3: "Next, we implement interactive logic...",
    4: "After that, we optimize for security and scale...",
    5: "Finally, we deploy to the Edge Network...",
    6: "System Live. Continuous Monitoring...",
};

export default function InsightOverlay({ currentChapter }: InsightOverlayProps) {
    const text = insights[currentChapter];

    return (
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center pointer-events-none">
            <AnimatePresence mode="wait">
                {text && (
                    <motion.div
                        key={currentChapter}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Dramatic Background Glow */}
                        <div className="absolute inset-0 bg-cyber-cyan/20 blur-3xl rounded-full scale-150 opacity-50" />

                        <div className="relative bg-black/60 backdrop-blur-xl px-6 py-1.5 rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-1">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mb-1"
                            />
                            <p className="text-white text-[11px] font-bold uppercase tracking-[0.2em] font-mono whitespace-nowrap">
                                {text}
                            </p>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "40%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-[2px] bg-electric-blue/50 mt-1"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
