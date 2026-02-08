"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Globe, CheckCircle, Server, Cloud } from "lucide-react";

export const Chapter6Left = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const allLogs = [
        "> git push origin main",
        "Enumerating objects: 15, done.",
        "Counting objects: 100% (15/15), done.",
        "Writing objects: 100% (15/15), 1.2 KiB | 1.2 MiB/s, done.",
        "Total 15 (delta 8), reused 0 (delta 0)",
        "remote: Resolving deltas: 100% (8/8), completed with 4 local objects.",
        "",
        "✓ Triggered workflow: Production Deploy",
        "• Install dependencies... [3s]",
        "• Run tests... [12s]",
        "• Build application... [8s]",
        "• Upload to CDN... [2s]",
        "",
        "Deployment completed successfully",
        "Preview URL: https://portfolio.dev"
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
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-blue-400 mb-2 select-none items-center gap-2 border-b border-gray-700 pb-2">
                <GitCommit size={14} />
                <span>CI/CD Pipeline</span>
            </div>
            <div className="flex flex-col gap-1">
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={log.includes("✓") ? "text-terminal-green" : log.includes("remote:") ? "text-gray-500" : ""}
                    >
                        {log}
                    </motion.div>
                ))}
                <div className="animate-pulse text-blue-400">_</div>
            </div>
        </div>
    );
};

export const Chapter6Right = () => {
    const [nodes, setNodes] = useState<{ id: number, x: number, y: number, city: string }[]>([]);

    useEffect(() => {
        // Locations roughly approximating: NY, London, Tokyo, Sydney, Sao Paulo, Frankfurt
        const locations = [
            { x: 30, y: 40, city: "New York" },
            { x: 48, y: 35, city: "London" },
            { x: 80, y: 45, city: "Tokyo" },
            { x: 52, y: 38, city: "Frankfurt" },
            { x: 35, y: 70, city: "Sao Paulo" },
            { x: 85, y: 75, city: "Sydney" },
            { x: 15, y: 40, city: "SF" },
            { x: 70, y: 55, city: "Singapore" },
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < locations.length) {
                setNodes(prev => [...prev, { ...locations[i], id: i }]);
                i++;
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-deep-space text-silver-gray font-sans h-full w-full relative overflow-hidden p-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,125,210,0.1),transparent_80%)]" />

            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-cyan z-10 mb-8">
                Global Deployment
            </h2>

            <div className="relative w-full max-w-lg aspect-[2/1] bg-slate-dark/30 rounded-xl border border-white/5 overflow-hidden">
                {/* Abstract Map Grid */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-10">
                    {Array.from({ length: 72 }).map((_, i) => (
                        <div key={i} className="border border-white/20" />
                    ))}
                </div>

                {/* Nodes Lighting Up */}
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute flex items-center justify-center"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                        {/* Ping animation */}
                        <motion.div
                            animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute w-4 h-4 bg-cyber-cyan rounded-full"
                        />
                        <div className="relative w-2 h-2 bg-white rounded-full z-10 box-shadow-[0_0_10px_rgba(0,245,255,1)]" />

                        {/* Connecting lines (simplified) */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 100 }} // Abstract connection
                            className="absolute top-0 left-1/2 w-[1px] bg-gradient-to-b from-cyber-cyan to-transparent opacity-20 -z-10 transform -translate-x-1/2 rotate-45 origin-top"
                        />

                        <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 text-[9px] text-cyber-cyan font-mono whitespace-nowrap bg-black/50 px-1 rounded backdrop-blur-sm"
                        >
                            {node.city} ✓
                        </motion.span>
                    </motion.div>
                ))}

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Cloud size={16} className="text-electric-blue" />
                    <span className="text-xs text-muted-blue">CDN Status: </span>
                    <span className="text-xs text-terminal-green font-bold">ACTIVE</span>
                </div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4 }}
                className="mt-8 flex items-center gap-2 bg-terminal-green/10 text-terminal-green px-6 py-2 rounded-full border border-terminal-green/20"
            >
                <CheckCircle size={20} />
                <span className="font-bold">DEPLOYMENT COMPLETE</span>
            </motion.div>
        </div>
    );
};
