"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Chapter1Left = () => {
    const [code, setCode] = useState("");
    const fullCode = `<!DOCTYPE html>
<html>
<head>
  <title>Hassan</title>
</head>
<body>
  <header>
    <h1>Hassan</h1>
    <p>Dev & Sec</p>
  </header>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
  </nav>
  <section>
    <h2>Projects</h2>
    <article>E-Commerce</article>
    <article>Security</article>
  </section>
</body>
</html>`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.slice(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 9); // Finishes around 3.5s (380 chars)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 text-[#d4d4d4] font-mono text-[10px] leading-tight overflow-hidden">
            <pre className="whitespace-pre-wrap">{code}</pre>
        </div>
    );
};

export const Chapter1Right = () => {
    // Reveal elements based on time to sync with code typing roughly
    const [step, setStep] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setStep(s => s + 1);
        }, 350); // 10 steps over 3.5s (Chapter duration 4s)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-white text-black p-8 font-serif overflow-y-auto">


            <motion.header initial={{ opacity: 0 }} animate={{ opacity: step > 1 ? 1 : 0 }}>
                <h1 className="text-3xl font-bold mb-2">Hassan</h1>
                <p className="mb-4">Full-Stack Dev & Security Expert</p>
            </motion.header>

            <motion.nav initial={{ opacity: 0 }} animate={{ opacity: step > 2 ? 1 : 0 }} className="mb-4 text-blue-600 underline flex gap-4">
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </motion.nav>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step > 4 ? 1 : 0 }}>
                <h2 className="text-xl font-bold mb-2">About Me</h2>
                <p className="mb-4">5+ years building secure web apps...</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step > 6 ? 1 : 0 }}>
                <h2 className="text-xl font-bold mb-2">Skills</h2>
                <div className="mb-4">React • Node.js • Python • Penetration Testing</div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step > 8 ? 1 : 0 }}>
                <h2 className="text-xl font-bold mb-2">Projects</h2>
                <ul className="list-disc pl-5">
                    <li>E-Commerce Platform</li>
                    <li>Security Scanner</li>
                </ul>
            </motion.div>
        </div>
    );
};
