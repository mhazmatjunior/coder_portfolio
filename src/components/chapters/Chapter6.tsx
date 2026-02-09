"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    GitCommit, Globe, Cloud,
    Box, ShieldCheck, Cpu,
    Lock, Terminal, Zap, CheckCircle2
} from "lucide-react";

export const Chapter6Left = () => {
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const DEPLOY_STEPS = [
        "INITIATING_CI/CD_PIPELINE...",
        "VERIFYING_ENVIRONMENT_SECRETS",
        "BUILDING_OPTIMIZED_ASSETS",
        "SECURITY_SCAN_COMPLETED_0_VULN",
        "SIGNING_PRODUCTION_BUILD",
        "PUSHING_TO_EDGE_NETWORK"
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < DEPLOY_STEPS.length) {
                setLogs(prev => [...prev, DEPLOY_STEPS[i]]);
                setProgress(((i + 1) / DEPLOY_STEPS.length) * 100);
                i++;
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#0a0a0a] p-6 font-mono text-xs flex flex-col relative overflow-hidden border border-white/5">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-electric-blue/20 p-2 rounded-lg">
                        <GitCommit size={18} className="text-electric-blue" />
                    </div>
                    <span className="font-black text-white italic tracking-tighter">SECURE_FORGE_v3</span>
                </div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest">CI/CD::ACTIVE</div>
            </div>

            <div className="space-y-4 flex-1">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-3 items-start"
                    >
                        <span className="text-white/20">0{i + 1}</span>
                        <div className="flex flex-col">
                            <span className={i === logs.length - 1 ? "text-cyber-cyan font-bold" : "text-white/50"}>
                                {log}
                            </span>
                            {i === logs.length - 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    className="h-[1px] bg-cyber-cyan/30 mt-1"
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between text-[8px] text-white/40 mb-2 uppercase font-black">
                    <span>Build_Artifact_Status</span>
                    <span>{progress.toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-electric-blue shadow-[0_0_10px_#2D7DD2]"
                    />
                </div>
            </div>
        </div>
    );
};

export const Chapter6Right = () => {
    return (
        <div className="h-full w-full bg-[#050505] p-6 flex flex-col relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,125,210,0.1),transparent_70%)]" />

            <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        rotateY: [0, 5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-48 h-48 relative mb-8"
                >
                    {/* Pulsing CDN Core */}
                    <div className="absolute inset-0 border-2 border-dashed border-electric-blue/30 rounded-full animate-spin-slow" />
                    <div className="absolute inset-6 border border-cyber-cyan/20 rounded-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Cloud size={48} className="text-white drop-shadow-[0_0_20px_#2D7DD2]" />
                        <div className="text-[10px] text-cyber-cyan font-black mt-2 tracking-[0.4em]">DEPLOYING</div>
                    </div>

                    {/* Orbiting Nodes */}
                    {[0, 90, 180, 270].map((angle, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: i * 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00f3ff]" />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="space-y-4 w-full px-8">
                    <div className="text-3xl font-black text-white italic tracking-tighter">GLOBAL_PROPAGATION</div>
                    <div className="grid grid-cols-3 gap-2">
                        {["NY", "LDN", "TKO", "SGP", "FRA", "SFO"].map((city, i) => (
                            <motion.div
                                key={city}
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.3 }}
                                className="bg-white/5 border border-white/10 p-2 rounded text-[8px] font-bold text-cyber-cyan"
                            >
                                <div className="flex items-center justify-center gap-1">
                                    <div className="w-1 h-1 bg-terminal-green rounded-full shadow-[0_0_3px_#22c55e]" />
                                    {city}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-6 flex gap-4 text-[8px] text-white/40 uppercase font-black tracking-widest italic">
                    <div className="flex items-center gap-1"><CheckCircle2 size={10} className="text-terminal-green" /> EDGE_SECURED</div>
                    <div className="flex items-center gap-1"><Zap size={10} className="text-yellow-400" /> ULTRA_LATENCY</div>
                </div>
            </div>

            {/* Scanning Laser */}
            <motion.div
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[2px] bg-electric-blue/40 blur-[2px] z-20 pointer-events-none"
            />
        </div>
    );
};
