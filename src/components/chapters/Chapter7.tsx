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
    return (
        <div className="h-full w-full bg-[#050505] p-8 flex flex-col items-center justify-center relative overflow-hidden border border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.08),transparent_70%)]" />
            <div className="absolute w-[800px] h-[800px] bg-cyber-cyan/5 rounded-full blur-[120px] -bottom-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[650px] aspect-square relative"
            >
                {/* Concentric Rotating Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-0 border-[2px] border-dashed border-cyber-cyan/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute inset-8 border border-white/5 rounded-full"
                />

                {/* Cyber Pulse Core */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="text-cyber-cyan font-black text-8xl tracking-tighter drop-shadow-[0_0_20px_#00f3ff]">LIVE</div>
                        <div className="text-white/60 text-base font-bold uppercase tracking-[0.8em] mt-2 translate-x-1">Propagating</div>
                    </motion.div>
                </div>

                {/* Animated Global Nodes (More & Smaller) */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12;
                    return (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                                boxShadow: ["0 0 5px #2D7DD2", "0 0 15px #00f3ff", "0 0 5px #2D7DD2"]
                            }}
                            transition={{ repeat: Infinity, duration: 3 + i * 0.2, delay: i * 0.3 }}
                            className="absolute w-2 h-2 bg-white rounded-full z-20"
                            style={{
                                top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                                left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                            }}
                        />
                    );
                })}

                {/* Connecting Arcs (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyber-cyan" />
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <line
                            key={i}
                            x1="50" y1="50"
                            x2={50 + 42 * Math.cos(angle * Math.PI / 180)}
                            y2={50 + 42 * Math.sin(angle * Math.PI / 180)}
                            stroke="currentColor" strokeWidth="0.2" className="text-cyber-cyan"
                        />
                    ))}
                </svg>
            </motion.div>

            {/* Performance HUD */}
            <div className="mt-16 grid grid-cols-3 gap-12 bg-black/60 backdrop-blur-xl px-16 py-8 rounded-[40px] border border-white/10 relative z-10 shadow-2xl">
                <div className="flex flex-col items-center">
                    <span className="text-cyber-cyan text-4xl font-black">12ms</span>
                    <span className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Latency</span>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <div className="flex flex-col items-center">
                    <span className="text-terminal-green text-4xl font-black">100%</span>
                    <span className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Uptime</span>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <div className="flex flex-col items-center">
                    <span className="text-purple-400 text-4xl font-black">2.4k</span>
                    <span className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Nodes</span>
                </div>
            </div>

            {/* Micro-labels */}
            <div className="absolute top-8 left-8 text-[8px] text-white/20 uppercase tracking-[0.4em] font-mono">Global_Mesh_Sync::Active</div>
            <div className="absolute bottom-8 right-8 text-[8px] text-white/20 uppercase tracking-[0.4em] font-mono">Sector_Alpha_09</div>
        </div>
    );
};
