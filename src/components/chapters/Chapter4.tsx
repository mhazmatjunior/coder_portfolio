"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle, Lock, Bug, Server } from "lucide-react";

export const Chapter4Left = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const allLogs = [
        "> nx run-many --target=test",
        "✓ Unit tests passed (42/42)",
        "✓ Integration tests passed (12/12)",
        "",
        "> lighthouse --audit",
        "• Performance: 98/100",
        "• Accessibility: 100/100",
        "• SEO: 100/100",
        "",
        "> owasp-scan --deep",
        "✓ XSS vulnerability check: CLEAN",
        "✓ SQL Injection check: CLEAN",
        "✓ Dependency Audit: 0 Critical",
        "",
        "BUILD SUCCESSFUL [Total time: 1.4s]",
        "Security Grade: A+"
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
        }, 220); // Synced with duration (4s)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 text-xs font-mono overflow-hidden">
            <div className="text-gray-500 border-b border-gray-700 pb-2 mb-2 flex justify-between">
                <span>TEST_RUNNER</span>
                <span className="text-terminal-green">ACTIVE</span>
            </div>
            {logs.map((log, i) => (
                <div key={i} className={`mb-1 ${log.includes("✓") ? "text-terminal-green" :
                    log.includes(">") ? "text-yellow-400 font-bold" :
                        log.includes("SUCCESSFUL") ? "text-blue-400 font-bold bg-blue-900/20" : "text-gray-300"
                    }`}>
                    {log}
                </div>
            ))}
        </div>
    );
};

export const Chapter4Right = () => {
    return (
        <div className="h-full w-full bg-deep-space p-6 grid grid-cols-2 grid-rows-2 gap-4 relative overflow-hidden">

            {/* Performance Card */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}
                className="bg-slate-dark/50 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-yellow-500/5" />
                <Zap className="text-yellow-400 mb-2" size={32} />
                <div className="text-4xl font-bold text-white">98</div>
                <div className="text-xs text-muted-blue uppercase tracking-widest">Performance</div>
                <div className="mt-2 text-[10px] text-terminal-green">-79% Bundle Size</div>
            </motion.div>

            {/* Security Card */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }}
                className="bg-slate-dark/50 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-blue-500/5" />
                <Shield className="text-electric-blue" size={32} />
                <div className="text-4xl font-bold text-white">A+</div>
                <div className="text-xs text-muted-blue uppercase tracking-widest">Security</div>
                <div className="mt-2 flex gap-1">
                    <CheckCircle size={10} className="text-terminal-green" />
                    <span className="text-[10px] text-gray-400">OWASP Compliant</span>
                </div>
            </motion.div>

            {/* Bottom Status Bar */}
            <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }}
                className="col-span-2 bg-terminal-green/10 border border-terminal-green/30 rounded-xl p-4 flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <Server size={20} className="text-terminal-green" />
                    <div>
                        <div className="font-bold text-white text-sm">System Optimization Complete</div>
                        <div className="text-[10px] text-terminal-green">Ready for production environment</div>
                    </div>
                </div>
                <CheckCircle size={24} className="text-terminal-green" />
            </motion.div>
        </div>
    );
};
