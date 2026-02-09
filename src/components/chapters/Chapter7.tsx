"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, Cpu, Database,
    Server, Globe, Terminal, Zap, HardDrive,
    Signal, Lock, RefreshCw
} from "lucide-react";

export const MaintenanceLeft = () => {
    const [stats, setStats] = useState({ cpu: 12, ram: 45, network: 850 });
    const [logs, setLogs] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const LOG_MESSAGES = [
        "SYNCRONIZING_EDGE_NODES...",
        "ENCRYPTING_DATA_STREAM_802.1Q",
        "OPTIMIZING_RENDER_PIPELINE",
        "UPDATING_DISTRIBUTED_CACHE",
        "HEALTH_CHECK_PASSED_REGION_US_EAST_1",
        "SSL_CERTIFICATE_VALIDATED",
        "LOAD_BALANCER_STABLE_0.02ms_LAG",
        "CLEANING_TEMP_BUFFER_0x2A4F",
        "SCALING_INSTANCES_AUTO_RECOVERY",
        "INTEGRITY_INDEX_99.998%"
    ];

    useEffect(() => {
        const statsInterval = setInterval(() => {
            setStats(s => ({
                cpu: Math.floor(12 + Math.random() * 8),
                ram: Math.floor(42 + Math.random() * 3),
                network: Math.floor(840 + Math.random() * 50)
            }));
        }, 800);

        const logInterval = setInterval(() => {
            setLogs(prev => {
                const next = [...prev, LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]];
                return next.slice(-8); // Keep last 8 logs
            });
        }, 1200);

        return () => {
            clearInterval(statsInterval);
            clearInterval(logInterval);
        };
    }, []);

    return (
        <div className="h-full w-full bg-[#050505] p-6 text-xs font-mono text-cyber-cyan overflow-hidden border border-white/5 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #00f3ff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="flex items-center justify-between mb-8 border-b border-cyber-cyan/30 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Activity size={24} className="text-cyber-cyan" />
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                        />
                    </div>
                    <span className="font-bold tracking-tighter text-lg uppercase italic">System_Core_v2.0</span>
                </div>
                <div className="text-[10px] text-white/40 flex items-center gap-2">
                    <RefreshCw size={10} className="animate-spin" />
                    SYNCING_LIVE
                </div>
            </div>

            <div className="space-y-6 relative z-10">
                {/* Visual Diagnostics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 border border-white/10 p-4 rounded-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyber-cyan shadow-[0_0_10px_#00f3ff]" />
                        <div className="text-[10px] text-white/50 mb-2 flex items-center gap-2">
                            <Cpu size={12} /> PROCESSING_UNIT
                        </div>
                        <div className="text-3xl font-black tabular-nums">{stats.cpu}%</div>
                        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${stats.cpu}%` }}
                                className="h-full bg-cyber-cyan"
                            />
                        </div>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-4 rounded-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                        <div className="text-[10px] text-white/50 mb-2 flex items-center gap-2">
                            <Database size={12} /> MEMORY_MATRIX
                        </div>
                        <div className="text-3xl font-black tabular-nums">{stats.ram}%</div>
                        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${stats.ram}%` }}
                                className="h-full bg-purple-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Real-time Logs Terminal */}
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-[9px] relative h-40 overflow-hidden shadow-inner">
                    <div className="flex items-center gap-2 mb-3 opacity-50 border-b border-white/5 pb-2 uppercase tracking-widest">
                        <Terminal size={12} /> Access_Logs::root@hassan
                    </div>
                    <div className="space-y-1 opacity-80">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i + log}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-2"
                            >
                                <span className="text-white/20">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                <span className={i === logs.length - 1 ? "text-terminal-green font-bold" : "text-white/60"}>
                                    {i === logs.length - 1 ? "> " : ""}{log}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    {/* Scanning Line Effect */}
                    <motion.div
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-cyber-cyan/20 z-20 pointer-events-none"
                    />
                </div>

                <div className="bg-electric-blue/5 border border-electric-blue/20 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-electric-blue/20 p-2 rounded-lg">
                            <Lock size={20} className="text-electric-blue" />
                        </div>
                        <div>
                            <div className="text-[10px] text-white/40 uppercase tracking-widest">Security_Shield</div>
                            <div className="font-bold text-white uppercase italic">Active_&_Secured</div>
                        </div>
                    </div>
                    <Signal size={20} className="text-electric-blue animate-pulse" />
                </div>
            </div>
        </div>
    );
};


export const MaintenanceRight = () => {
    const [performance, setPerformance] = useState({ latency: 85, throughput: 12, health: 94 });

    useEffect(() => {
        const interval = setInterval(() => {
            setPerformance(p => ({
                latency: Math.max(12, p.latency - (Math.random() * 2)),
                throughput: Math.min(100, p.throughput + (Math.random() * 1.5)),
                health: Math.min(100, p.health + (Math.random() * 0.1))
            }));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#050505] p-8 flex flex-col relative overflow-hidden border border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,255,0.1),transparent_70%)]" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="text-[10px] text-cyber-cyan font-black tracking-[0.3em] uppercase mb-1">Performance_Optimization</div>
                        <h2 className="text-2xl font-black text-white italic tracking-tighter">SYSTEM_STABILIZATION</h2>
                    </div>
                    <div className="bg-cyber-cyan/10 px-4 py-2 rounded-lg border border-cyber-cyan/30">
                        <div className="text-[8px] text-cyber-cyan font-bold uppercase">Health_Index</div>
                        <div className="text-xl font-black text-white">{performance.health.toFixed(1)}%</div>
                    </div>
                </div>

                {/* Primary Metric: Latency Drop */}
                <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 mb-6 relative overflow-hidden group">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Network_Latency</div>
                            <div className="text-5xl font-black text-cyber-cyan tabular-nums drop-shadow-[0_0_15px_#00f3ff55]">
                                {performance.latency.toFixed(0)}<span className="text-lg ml-1 font-normal opacity-50">ms</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[8px] text-terminal-green uppercase font-black">Optimization_Delta</div>
                            <div className="text-xl font-bold text-terminal-green">-{(85 - performance.latency).toFixed(1)} ms</div>
                        </div>
                    </div>

                    {/* Simple SVG Graph Simulation */}
                    <div className="h-32 w-full relative">
                        <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#00f3ff" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d={`M 0 50 Q 50 ${60 + Math.random() * 20}, 100 ${40 + performance.latency / 2}, 150 70, 200 60, 250 80, 300 ${performance.latency}`}
                                fill="transparent"
                                stroke="#00f3ff"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                                className="opacity-50"
                            />
                            {/* Animated current status line */}
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                                d={`M 0 80 L 100 60 L 200 40 L 300 ${performance.latency / 1.5}`}
                                fill="url(#latencyGradient)"
                                stroke="#00f3ff"
                                strokeWidth="3"
                                className="drop-shadow-[0_0_8px_#00f3ff]"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap size={14} className="text-yellow-400" />
                            <span className="text-[10px] text-white/40 uppercase font-black">Throughput</span>
                        </div>
                        <div className="text-2xl font-black text-white italic">{performance.throughput.toFixed(1)} <span className="text-[10px] font-normal not-italic opacity-40">req/s</span></div>
                        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${performance.throughput}%` }}
                                className="h-full bg-yellow-400 shadow-[0_0_10px_#facc15]"
                            />
                        </div>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <Globe size={14} className="text-electric-blue" />
                            <span className="text-[10px] text-white/40 uppercase font-black">Global_Edge</span>
                        </div>
                        <div className="text-2xl font-black text-white italic">ACTIVE</div>
                        <div className="flex gap-1 mt-2">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: [0.2, 1, 0.2],
                                        backgroundColor: i < 6 ? "#3b82f6" : "#1e293b"
                                    }}
                                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                                    className="h-1 flex-1 rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse shadow-[0_0_5px_#22c55e]" />
                        <span className="text-[9px] text-white/40 font-mono">ENCRYPTED_SSL_TUNNEL::ON</span>
                    </div>
                    <div className="text-[9px] text-white/20 font-mono uppercase tracking-widest">Region::Global_Propagated</div>
                </div>
            </div>

            {/* Scanning Grid Line */}
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-cyber-cyan/10 blur-[1px] pointer-events-none"
            />
        </div>
    );
};
