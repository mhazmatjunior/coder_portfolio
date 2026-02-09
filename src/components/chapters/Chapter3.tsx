"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, CheckCircle2, Lock, AlertCircle
} from "lucide-react";

export const Chapter3Left = () => {
    const [code, setCode] = useState("");
    const jsCode = `// Form Validation Logic
function validateLogin(data) {
  const { email } = data;
  
  // Validation Check
  if (!email.includes('@')) {
    dispatch({ type: 'ERROR', msg: 'INVALID_FORMAT' });
    return false;
  }

  // Success Case
  if (email === 'hassan@dev') {
    fireSuccessAnimation();
    socket.emit('auth_complete');
  }
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(jsCode.slice(0, i));
            i++;
            if (i > jsCode.length) clearInterval(interval);
        }, 12);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#0d0d0d] p-6 font-mono text-[10px] overflow-hidden border border-white/5 flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-white/30 border-b border-white/5 pb-2">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="italic">validation.js</span>
            </div>
            <pre className="text-[#dcdcaa] leading-relaxed whitespace-pre-wrap flex-1">{code}</pre>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] text-cyber-cyan font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <Activity size={10} className="animate-pulse" />
                    Logic_Engine_v1
                </div>
                <div className="text-white/20">UTF-8</div>
            </div>
        </div>
    );
};

export const Chapter3Right = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

    useEffect(() => {
        const runDemo = async () => {
            // Wait before start
            await new Promise(r => setTimeout(r, 1000));

            // Sequence 1: Invalid Email
            const badEmail = "invalid-user";
            for (let i = 0; i <= badEmail.length; i++) {
                setEmail(badEmail.slice(0, i));
                await new Promise(r => setTimeout(r, 80));
            }
            setStatus("error");

            // Wait in error state
            await new Promise(r => setTimeout(r, 2000));

            // Sequence 2: Clear and Success
            setStatus("idle");
            for (let i = email.length; i >= 0; i--) {
                setEmail(email.slice(0, i));
                await new Promise(r => setTimeout(r, 30));
            }
            await new Promise(r => setTimeout(r, 500));

            const goodEmail = "hassan@dev";
            for (let i = 0; i <= goodEmail.length; i++) {
                setEmail(goodEmail.slice(0, i));
                await new Promise(r => setTimeout(r, 80));
            }
            setStatus("success");

            // Reset for loop after long wait
            await new Promise(r => setTimeout(r, 4000));
            setStatus("idle");
            setEmail("");
            runDemo();
        };

        runDemo();
    }, []);

    return (
        <div className="h-full w-full bg-deep-space text-silver-gray relative overflow-hidden flex flex-col">
            <header className="p-6 text-center bg-black/40 backdrop-blur-md border-b border-white/10 relative z-10 transition-colors duration-500">
                <h1 className="text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-cyan">
                    Hassan
                </h1>
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[10px] text-muted-blue tracking-widest uppercase italic font-bold">Logic_Powered_UX</p>
                    <div className={`w-1.5 h-1.5 rounded-full ${status === 'error' ? 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]' : status === 'success' ? 'bg-terminal-green animate-pulse' : 'bg-white/20'}`} />
                </div>
            </header>

            <div className="p-6 space-y-4 flex-1 relative z-10">
                {/* Background UI Cards (Faded) */}
                <div className="grid grid-cols-2 gap-3 opacity-20">
                    {["Project_Alpha", "Security_Beta"].map((p, i) => (
                        <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-[10px] font-bold text-white mb-1">{p}</h3>
                            <div className="w-1/2 h-1 bg-white/10 rounded" />
                        </div>
                    ))}
                </div>

                {/* Primary Interaction Card */}
                <motion.div
                    animate={{
                        scale: status === 'error' ? [1, 1.01, 1] : 1,
                        borderColor: status === 'error' ? '#ef4444' : status === 'success' ? '#22c55e' : 'rgba(255,255,255,0.1)'
                    }}
                    className="p-4 bg-white/5 rounded-2xl border transition-colors duration-300 relative overflow-hidden backdrop-blur-sm shadow-2xl"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Lock size={12} className={status === 'success' ? 'text-terminal-green' : 'text-muted-blue'} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Auth_Interface</span>
                        </div>
                        <AnimatePresence mode="wait">
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="flex items-center gap-1 text-[8px] text-red-500 font-bold"
                                >
                                    <AlertCircle size={10} /> INVALID_FORMAT
                                </motion.div>
                            )}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="flex items-center gap-1 text-[8px] text-terminal-green font-bold"
                                >
                                    <CheckCircle2 size={10} /> SESSION_OPEN
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="relative mb-4">
                        <input
                            className={`w-full bg-black/40 border rounded-lg p-3 text-[10px] transition-all outline-none font-mono ${status === 'error' ? 'border-red-500/50 text-red-200' :
                                    status === 'success' ? 'border-terminal-green/50 text-terminal-green' :
                                        'border-white/10 text-white/50'
                                }`}
                            value={email}
                            placeholder="username@node"
                            readOnly
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            {status === 'success' && (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                    <CheckCircle2 size={14} className="text-terminal-green" />
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div initial={{ x: [0, -2, 2, 0] }} animate={{ x: 0 }} transition={{ repeat: 3 }}>
                                    <AlertCircle size={14} className="text-red-500" />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <button
                        className={`w-full py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${status === 'success' ? 'bg-terminal-green text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]' :
                                status === 'error' ? 'bg-red-500 text-white' :
                                    'bg-gradient-to-r from-electric-blue to-purple-600 text-white'
                            }`}
                    >
                        {status === 'success' ? "Access_Granted" : status === 'error' ? "Retry_Logic" : "Verify_Identity"}
                    </button>
                </motion.div>

                {/* Status Bar */}
                <div className="bg-black/60 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[7px] text-white/30 uppercase font-black tracking-widest">Execution_Feedback</span>
                        <span className={`text-[8px] font-bold ${status === 'error' ? 'text-red-500' : status === 'success' ? 'text-terminal-green' : 'text-white/20'}`}>
                            {status === 'error' ? 'EXCEPTION' : status === 'success' ? 'DONE' : 'WAITING'}
                        </span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            animate={{
                                width: status === 'error' ? '100%' : status === 'success' ? '100%' : '0%',
                                backgroundColor: status === 'error' ? '#ef4444' : status === 'success' ? '#22c55e' : '#00f3ff'
                            }}
                            className="h-full"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.2),transparent)]" />
        </div>
    );
};
