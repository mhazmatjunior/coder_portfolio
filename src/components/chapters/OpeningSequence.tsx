"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const OpeningLeft = () => {
    return (
        <div className="h-full w-full bg-black flex items-center justify-center p-8">
            <div className="font-mono text-terminal-green text-sm">
                <span className="animate-pulse">_</span>
            </div>
        </div>
    );
};

export const OpeningRight = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = [
            { time: 0, step: 0 },
            { time: 500, step: 1 },
            { time: 1500, step: 2 },
            { time: 2500, step: 3 },
            { time: 3500, step: 4 }
        ];

        sequence.forEach(({ time, step }) => {
            setTimeout(() => setStep(step), time);
        });
    }, []);

    return (
        <div className="h-full w-full bg-deep-space flex flex-col items-center justify-center p-8 text-center text-white">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.h1
                        key="s1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="text-4xl font-bold font-mono"
                    >
                        Let's build a portfolio.
                    </motion.h1>
                )}
                {step === 2 && (
                    <motion.h1
                        key="s2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className="text-4xl font-bold font-mono text-muted-blue"
                    >
                        From scratch.
                    </motion.h1>
                )}
                {step === 3 && (
                    <motion.h1
                        key="s3" initial={{ opacity: 0, scale: 1.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="text-5xl font-black font-mono text-electric-blue"
                    >
                        RIGHT NOW.
                    </motion.h1>
                )}
                {step === 4 && (
                    <motion.div
                        key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-terminal-green font-mono text-xl animate-pulse"
                    >
                        INITIALIZING...
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
