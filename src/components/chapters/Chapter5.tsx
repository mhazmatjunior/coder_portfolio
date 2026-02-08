"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, AlertTriangle, CheckCircle, Bug } from "lucide-react";

export const Chapter5Left = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const allLogs = [
        "> npm audit",
        "Running security audit...",
        "Scanning dependencies...",
        "✓ 0 vulnerabilities found",
        "",
        "> running penetration tests",
        "• Testing XSS protection... [PASSED]",
        "• Testing SQL Injection... [BLOCKED]",
        "• Testing CSRF tokens... [ACTIVE]",
        "• Rate Limiting... [ENABLED]",
        "",
        "Generating security report...",
        "Score: A+ (100/100)",
        "Compliance: GDPR, CCPA, SOC 2"
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < allLogs.length) {
                const line = allLogs[i]; // capture value synchronously
                setLogs(prev => [...prev, line]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-terminal-green mb-2 select-none items-center gap-2 border-b border-gray-700 pb-2">
                <Shield size={14} />
                <span>Security Console</span>
            </div>
            <div className="flex flex-col gap-1">
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={log.includes("PASSED") || log.includes("BLOCKED") || log.includes("✓") ? "text-terminal-green" : log.includes("Running") ? "text-blue-400" : ""}
                    >
                        {log}
                    </motion.div>
                ))}
                <div className="animate-pulse text-terminal-green">_</div>
            </div>
        </div>
    );
};

export const Chapter5Right = () => {
    const [threats, setThreats] = useState<{ id: number, type: string, x: number, y: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const type = Math.random() > 0.5 ? "XSS" : "SQLi";
            // Random start position around the center
            const angle = Math.random() * Math.PI * 2;
            const distance = 150;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            setThreats(prev => [...prev.slice(-5), { id, type, x, y }]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-deep-space text-silver-gray font-sans h-full w-full relative overflow-hidden p-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05),transparent_70%)]" />

            {/* Central Shield */}
            <div className="relative z-10">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(0,245,255,0.2)", "0 0 40px rgba(0,245,255,0.4)", "0 0 20px rgba(0,245,255,0.2)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-slate-dark/80 backdrop-blur-md rounded-full p-8 border border-cyber-cyan shadow-[0_0_30px_rgba(0,245,255,0.3)]"
                >
                    <Shield size={64} className="text-cyber-cyan" />
                </motion.div>

                {/* Revolving Rings */}
                <div className="absolute inset-0 -m-4 border border-terminal-green/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 -m-8 border border-electric-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Threats being blocked */}
            <AnimatePresence>
                {threats.map(threat => (
                    <motion.div
                        key={threat.id}
                        initial={{ opacity: 0, x: threat.x * 2, y: threat.y * 2 }}
                        animate={{ opacity: [0, 1, 0], x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        onAnimationComplete={() => {
                            // Usually we remove from state here but we slice inside setter anyway
                        }}
                        className="absolute flex items-center justify-center"
                        style={{
                            left: "50%",
                            top: "50%",
                            marginLeft: -20,
                            marginTop: -20,
                            width: 40,
                            height: 40
                        }}
                    >
                        <div className="text-error-red">
                            <Bug size={24} />
                        </div>
                        {/* Shield Impact Effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.5], opacity: [1, 0] }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                            className="absolute inset-0 rounded-full border-2 border-terminal-green"
                        />
                    </motion.div>
                ))}
            </AnimatePresence>

            <div className="absolute bottom-8 flex gap-4">
                <div className="flex items-center gap-2 bg-terminal-green/10 px-4 py-2 rounded-full border border-terminal-green/20">
                    <CheckCircle size={16} className="text-terminal-green" />
                    <span className="text-xs font-bold text-terminal-green">SYSTEM SECURE</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                    <Lock size={16} className="text-electric-blue" />
                    <span className="text-xs font-bold text-electric-blue">ENCRYPTION ACTIVE</span>
                </div>
            </div>
        </div>
    );
};
