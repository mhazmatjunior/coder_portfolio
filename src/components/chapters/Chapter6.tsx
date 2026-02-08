"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, GitCommit, Cloud } from "lucide-react";

export const Chapter6Left = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const allLogs = [
        "> git push origin main",
        "✓ Pushed to main branch",
        "✓ Triggered Vercel Deployment",
        "------------------------------",
        "Building...",
        "✓ Install Dependencies [0.4s]",
        "✓ Build Application [1.2s]",
        "✓ Run Optimizations [0.8s]",
        "✓ Upload to Edge Network",
        "------------------------------",
        "DEPLOYMENT COMPLETE",
        "URL: https://alexchen.dev",
        "Status: 200 OK"
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < allLogs.length) {
                const line = allLogs[i];
                setLogs(prev => [...prev, line]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 text-blue-400 border-b border-gray-700 pb-2 mb-2">
                <GitCommit size={14} />
                <span>CI/CD PIPELINE</span>
            </div>
            {logs.map((log, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                    className={`mb-1 ${log.includes("URL") ? "text-cyber-cyan underline" : log.includes("✓") ? "text-terminal-green" : ""}`}
                >
                    {log}
                </motion.div>
            ))}
        </div>
    );
};

export const Chapter6Right = () => {
    const nodes = [
        { x: 20, y: 30 }, { x: 50, y: 25 }, { x: 80, y: 35 },
        { x: 30, y: 60 }, { x: 60, y: 70 }, { x: 90, y: 80 }
    ];

    return (
        <div className="h-full w-full bg-deep-space p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,125,210,0.1),transparent)]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                className="w-full h-48 bg-slate-dark/50 rounded-lg border border-white/10 relative overflow-hidden"
            >
                {/* World Map Placeholder Grid */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {nodes.map((n, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                        className="absolute w-2 h-2 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00F5FF]"
                        style={{ top: `${n.y}%`, left: `${n.x}%` }}
                    >
                        <motion.div
                            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-cyber-cyan rounded-full"
                        />
                    </motion.div>
                ))}

                <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-black/60 px-2 py-1 rounded">
                    <Globe size={12} className="text-electric-blue" />
                    <span className="text-[10px] text-white">CDN LIVE</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5 }}
                className="mt-6 flex flex-col items-center"
            >
                <div className="text-4xl font-bold text-white mb-1">99.99%</div>
                <div className="text-xs text-muted-blue tracking-widest uppercase">Uptime Guarantee</div>
            </motion.div>
        </div>
    );
};
