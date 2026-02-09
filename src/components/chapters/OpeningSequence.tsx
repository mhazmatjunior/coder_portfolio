"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Synchronized timing hook
const useOpeningStep = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = [
            { time: 500, step: 1 },     // "HAVE AN IDEA?" 
            { time: 2200, step: 2 },    // "LET'S TURN IT INTO REALITY"
            { time: 4500, step: 3 },    // "LET ME SHOW YOU HOW..."
            { time: 6800, step: 4 },    // "DECODING THE PROCESS"
            { time: 9200, step: 5 },    // "LET'S BUILD IT TOGETHER"
        ];

        const timers = sequence.map(({ time, step }) =>
            setTimeout(() => setStep(step), time)
        );

        return () => timers.forEach(clearTimeout);
    }, []);

    return step;
};

export const OpeningLeft = () => {
    const step = useOpeningStep();

    return (
        <div className="h-full w-full bg-black flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="left-text-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="font-mono text-white text-3xl font-bold tracking-[0.2em] -ml-12"
                    >
                        HAVE AN IDEA?
                    </motion.div>
                )}
                {step === 3 && (
                    <motion.div
                        key="left-text-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="font-mono text-white text-3xl font-bold tracking-[0.2em] italic -ml-12"
                    >
                        LET ME SHOW YOU HOW...
                    </motion.div>
                )}
                {step === 4 && (
                    <motion.div
                        key="left-text-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="font-mono text-cyber-cyan text-sm tracking-[0.5em] font-light uppercase"
                    >
                        Initializing Logical Framework
                    </motion.div>
                )}
                {step === 0 && (
                    <motion.div key="cursor" className="font-mono text-terminal-green text-sm animate-pulse">
                        _
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const OpeningRight = () => {
    const step = useOpeningStep();

    return (
        <div className="h-full w-full bg-deep-space flex flex-col items-center justify-center p-8 text-center text-white">
            <AnimatePresence mode="wait">
                {step === 2 && (
                    <motion.h1
                        key="reality"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="text-4xl font-black font-mono text-cyber-cyan tracking-tighter"
                    >
                        LET'S TURN IT INTO REALITY.
                    </motion.h1>
                )}
                {step === 4 && (
                    <motion.div
                        key="show-how"
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-2xl font-mono text-white tracking-[0.3em] font-black uppercase"
                    >
                        DECODING THE PROCESS
                    </motion.div>
                )}
                {step === 5 && (
                    <motion.div
                        key="together"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                        />
                        <h1 className="text-4xl font-black font-mono text-white mb-6 relative">
                            LET'S BUILD IT <span className="text-electric-blue">TOGETHER</span>.
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="h-0.5 bg-gradient-to-r from-electric-blue via-cyber-cyan to-terminal-green"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

