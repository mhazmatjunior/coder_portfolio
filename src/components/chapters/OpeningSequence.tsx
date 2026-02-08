"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const OpeningLeft = () => {
    const [text, setText] = useState("");
    const fullText = "Got an idea?";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-full w-full bg-deep-space text-silver-gray font-mono text-4xl">
            <span className="border-r-2 border-cyber-cyan pr-2 animate-pulse">
                {text}
            </span>
        </div>
    );
};

export const OpeningRight = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 2000); // Wait for "Got an idea?"
        const timer2 = setTimeout(() => setStep(2), 4000); // "Turn it into reality"
        const timer3 = setTimeout(() => setStep(3), 6000); // "Watch how..."
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-deep-space text-white font-sans text-3xl font-bold text-center p-8">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        Let's turn it into reality.
                    </motion.div>
                )}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="text-electric-blue"
                    >
                        Watch how a website comes to life...
                    </motion.div>
                )}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-cyber-cyan text-4xl"
                    >
                        INITIALIZING WORKSPACE...
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
