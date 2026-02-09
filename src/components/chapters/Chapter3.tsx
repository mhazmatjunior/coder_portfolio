"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Zap, Activity, MousePointer2, RefreshCw } from "lucide-react";

export const Chapter3Left = () => {
    const [code, setCode] = useState("");
    const [activeStack, setActiveStack] = useState<string[]>([]);

    const jsCode = `// Form Validation Logic
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  push_state('VALIDATING...');
  e.preventDefault();
  
  if (!isValid(email)) {
    return showError('Invalid!');
  }
  
  await api.submit(email);
  showSuccess('Sent! 🚀');
});

// Event Stream Controller
window.addEventListener('scroll', () => {
  const delta = window.scrollY;
  update_parallax(delta);
  check_visibility();
});`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(jsCode.slice(0, i));
            i++;
            if (i > jsCode.length) clearInterval(interval);
        }, 8);

        // Simulated Call Stack tracker
        const stackInterval = setInterval(() => {
            const stacks = ["validate()", "api.submit()", "Observer.check()", "Event.scroll", "Render()"];
            setActiveStack(prev => {
                const next = stacks[Math.floor(Math.random() * stacks.length)];
                return [next, ...prev].slice(0, 4);
            });
        }, 1500);

        return () => {
            clearInterval(interval);
            clearInterval(stackInterval);
        };
    }, []);

    return (
        <div className="h-full w-full bg-[#0d0d0d] p-0 flex flex-col font-mono text-[10px] overflow-hidden border border-white/5">
            {/* Header / Tab */}
            <div className="bg-[#1a1a1a] p-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="bg-[#1e1e1e] px-4 py-1 rounded text-white/40 lowercase italic text-[9px] border-t border-white/10">
                    index.js
                </div>
            </div>

            <div className="flex-1 flex">
                {/* Code Area */}
                <div className="flex-1 p-6 text-[#dcdcaa] leading-relaxed">
                    <pre className="whitespace-pre-wrap">{code}</pre>
                </div>

                {/* Call Stack Sidebar (High-tech) */}
                <div className="w-24 border-l border-white/5 bg-black/40 p-3 flex flex-col gap-4">
                    <div className="text-[8px] text-cyber-cyan uppercase font-black tracking-widest flex items-center gap-1">
                        <Activity size={8} /> STACK
                    </div>
                    <AnimatePresence mode="popLayout">
                        {activeStack.map((item, idx) => (
                            <motion.div
                                key={item + idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1 - idx * 0.2, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-white/5 p-1 rounded border border-white/10 text-[8px] text-white/60 truncate"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export const Chapter3Right = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
    const [isExecuting, setIsExecuting] = useState(false);

    useEffect(() => {
        const demo = async () => {
            await new Promise(r => setTimeout(r, 1000));

            // Mouse movement simulation
            setCursorPos({ x: 40, y: 30 });
            await new Promise(r => setTimeout(r, 800));
            setCursorPos({ x: 50, y: 50 });

            // Type invalid
            const invalid = "user.invalid";
            for (let i = 0; i <= invalid.length; i++) {
                setEmail(invalid.slice(0, i));
                await new Promise(r => setTimeout(r, 50));
            }
            setIsExecuting(true);
            await new Promise(r => setTimeout(r, 1000));
            setStatus("error");
            setIsExecuting(false);

            await new Promise(r => setTimeout(r, 1500));

            // Fix
            setEmail("");
            setStatus("idle");
            const valid = "hassan@logic.dev";
            for (let i = 0; i <= valid.length; i++) {
                setEmail(valid.slice(0, i));
                await new Promise(r => setTimeout(r, 50));
            }
            setIsExecuting(true);
            await new Promise(r => setTimeout(r, 1000));
            setStatus("success");
            setIsExecuting(false);
        };
        demo();
    }, []);

    return (
        <div className="h-full w-full bg-[#050505] text-white p-8 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Visual Interactions HUD */}
            <div className="absolute top-8 left-8 flex gap-6 z-20">
                <div className="bg-black/40 border border-white/10 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-md">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Zap size={16} className="text-yellow-400" />
                    </div>
                    <div>
                        <div className="text-[8px] text-white/40 uppercase font-black">Event_Listener</div>
                        <div className="text-[10px] font-mono">CLICK_INTERRUPT_v.1</div>
                    </div>
                </div>
                {isExecuting && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-electric-blue/20 border border-electric-blue/40 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-md"
                    >
                        <RefreshCw size={16} className="text-electric-blue animate-spin" />
                        <div>
                            <div className="text-[8px] text-white/40 uppercase font-black">Execution</div>
                            <div className="text-[10px] font-mono">ASYNC_AWAIT_PROCESS</div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Main Interactive Demo Card */}
            <motion.div
                className="w-full max-w-sm bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 relative z-10 shadow-2xl"
                animate={{ y: isExecuting ? [0, -4, 0] : 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <Activity size={20} className="text-cyber-cyan" />
                    <h3 className="text-lg font-black tracking-widest uppercase">Logic_Engine</h3>
                </div>

                <div className="space-y-6">
                    <div className="relative">
                        <div className="text-[8px] text-white/40 mb-2 uppercase tracking-[0.3em]">Payload_Input</div>
                        <input
                            value={email}
                            readOnly
                            className={`w-full p-4 rounded-xl bg-black/50 border font-mono text-sm transition-all duration-500 ${status === "error" ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] text-red-400" :
                                status === "success" ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-400" :
                                    "border-white/10 text-white/80"
                                }`}
                        />
                        <AnimatePresence>
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pt-3 text-[10px] text-red-500 font-mono italic flex items-center gap-2"
                                >
                                    <AlertCircle size={12} /> ERROR_TYPE: FORMAT_MISMATCH
                                </motion.div>
                            )}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pt-3 text-[10px] text-green-500 font-mono italic flex items-center gap-2"
                                >
                                    <CheckCircle size={12} /> STATUS: AUTH_COMPLETE_200_OK
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all duration-500 ${isExecuting ? "bg-white/10 text-white/20" : "bg-cyber-cyan text-black shadow-[0_0_30px_#00f3ff55]"
                        }`}>
                        {isExecuting ? "Executing..." : "Activate"}
                    </button>
                </div>

                {/* Simulated Mouse Pointer */}
                <motion.div
                    animate={{
                        left: `${cursorPos.x}%`,
                        top: `${cursorPos.y}%`,
                        opacity: [0.8, 1, 0.8]
                    }}
                    className="absolute pointer-events-none z-30 text-white shadow-2xl"
                >
                    <MousePointer2 size={20} fill="white" />
                </motion.div>
            </motion.div>

            {/* Background Grid Lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full w-px bg-white absolute left-1/4" />
                <div className="h-full w-px bg-white absolute left-2/4" />
                <div className="h-full w-px bg-white absolute left-3/4" />
                <div className="w-full h-px bg-white absolute top-1/4" />
                <div className="w-full h-px bg-white absolute top-2/4" />
                <div className="w-full h-px bg-white absolute top-3/4" />
            </div>
        </div>
    );
};
