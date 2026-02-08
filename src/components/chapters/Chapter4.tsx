"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Package, Server, Smartphone, CheckCircle } from "lucide-react";

export const Chapter4Left = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const allLogs = [
        "> next build",
        "Creating an optimized production build...",
        "Compiling...",
        "✓ Compiled successfully",
        "Linting and checking validity of types...",
        "✓ Optimization: 79% reduction in bundle size",
        "✓ Tree-shaking enabled",
        "✓ Image optimization active",
        "✓ Static page generation (SSG) complete",
        "Route (app)                              Size     First Load JS",
        "┌ ○ /                                    5.2 kB         82.4 kB",
        "├ ○ /_not-found                          871 B          88.1 kB",
        "└ ○ /projects/[slug]                     4.1 kB         81.3 kB",
        "+ First Load JS shared by all            77.2 kB",
        "  ├ chunks/framework-c4e5.js             45.1 kB",
        "  ├ chunks/main-8f2a.js                  30.2 kB",
        "  └ other shared chunks                  1.9 kB",
        "",
        "✓ Build complete in 2.4s"
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < allLogs.length) {
                setLogs(prev => [...prev, allLogs[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-[#858585] mb-2 select-none items-center gap-2 border-b border-gray-700 pb-2">
                <LucideTerminal size={14} />
                <span>Terminal</span>
            </div>
            <div className="flex flex-col gap-1">
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={log.startsWith("✓") ? "text-terminal-green" : log.startsWith(">") ? "text-yellow-400" : ""}
                    >
                        {log}
                    </motion.div>
                ))}
                <div className="animate-pulse">_</div>
            </div>
        </div>
    );
};

const LucideTerminal = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
);

export const Chapter4Right = () => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-deep-space text-silver-gray font-sans h-full w-full relative overflow-hidden p-8 flex flex-col items-center justify-center gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,182,39,0.1),transparent_70%)]" />

            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-warning-amber to-terminal-green z-10 mb-4">
                Performance Optimization
            </h2>

            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl z-10">
                {/* Main Score Gauge */}
                <div className="col-span-2 flex flex-col items-center justify-center bg-slate-dark/50 p-6 rounded-2xl border border-white/10">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1E1E2E" strokeWidth="10" />
                            <motion.circle
                                cx="50" cy="50" r="45" fill="none" stroke="#39FF14" strokeWidth="10"
                                strokeDasharray="283"
                                strokeDashoffset={283 - (283 * score) / 100}
                                strokeLinecap="round"
                                className="transition-all duration-300 ease-out"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-4xl font-bold text-white">{score}</span>
                            <span className="text-xs text-muted-blue">Lighthouse</span>
                        </div>
                    </div>
                </div>

                {/* Metrics Cards */}
                <MetricCard icon={<Zap size={20} />} label="First Contentful Paint" value="0.8s" delta="-75%" delay={0.5} />
                <MetricCard icon={<Package size={20} />} label="Bundle Size" value="180KB" delta="-79%" delay={0.8} />
                <MetricCard icon={<Server size={20} />} label="Server Response" value="45ms" delta="-60%" delay={1.1} />
                <MetricCard icon={<Smartphone size={20} />} label="Mobile Score" value="100/100" delta="+35%" delay={1.4} />
            </div>
        </div>
    );
};

const MetricCard = ({ icon, label, value, delta, delay }: { icon: any, label: string, value: string, delta: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-slate-dark/30 border border-white/5 p-4 rounded-xl flex items-center justify-between"
    >
        <div className="flex items-center gap-3">
            <div className="text-warning-amber bg-warning-amber/10 p-2 rounded-lg">{icon}</div>
            <div>
                <div className="text-xs text-muted-blue">{label}</div>
                <div className="text-lg font-bold text-white">{value}</div>
            </div>
        </div>
        <div className="text-terminal-green text-sm font-bold bg-terminal-green/10 px-2 py-1 rounded">
            {delta}
        </div>
    </motion.div>
);
