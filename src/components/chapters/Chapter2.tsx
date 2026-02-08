"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideTerminal } from "lucide-react";

export const Chapter2Left = () => {
    const [code, setCode] = useState("");
    const fullCode = `body {
  background: #0B0D21;
  color: #B8C5D6;
  font-family: 'Inter', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: rgba(30, 30, 46, 0.8);
  backdrop-filter: blur(10px);
}

.hero h1 {
  font-size: 3.5rem;
  background: linear-gradient(to right, #2D7DD2, #9D4EDD);
  -webkit-background-clip: text;
  color: transparent;
}

.card {
  border: 1px solid #1E1E2E;
  box-shadow: 0 4px 6px -1px rgba(0, 245, 255, 0.1);
  transition: transform 0.2s;
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.slice(0, i + 1));
            i++;
            if (i >= fullCode.length) clearInterval(interval);
        }, 40); // Typing speed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-[#858585] mb-2 select-none items-center gap-2">
                <span className="text-blue-400">#</span>
                <span>styles.css</span>
            </div>
            <pre className="whitespace-pre-wrap break-all text-blue-300">
                <code dangerouslySetInnerHTML={{
                    __html: code
                }} />
                <span className="animate-pulse text-white">|</span>
            </pre>
        </div>
    );
};

export const Chapter2Right = () => {
    return (
        <div className="bg-deep-space text-silver-gray font-sans h-full w-full overflow-y-auto overflow-x-hidden relative">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-slate-dark to-deep-space -z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue rounded-full filter blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple rounded-full filter blur-[100px] opacity-20" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="p-8"
            >
                <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6 backdrop-blur-sm sticky top-0 z-50">
                    <motion.h1
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-cyan"
                    >
                        DevPortfolio
                    </motion.h1>
                    <nav>
                        <ul className="flex space-x-6 text-sm font-medium">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ scale: 1.1, color: '#00F5FF' }}
                                    className="cursor-pointer hover:text-cyber-cyan transition-colors"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <main>
                    <section className="mb-16">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl font-bold mb-4 leading-tight">
                                Building Digital <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-cyan">
                                    Experiences
                                </span>
                            </h2>
                            <p className="text-muted-blue max-w-md mb-8 text-lg">
                                Full-Stack Developer & Security Analyst crafting robust and beautiful web solutions.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-electric-blue/20">
                                    View Work
                                </button>
                                <button className="px-6 py-2 border border-slate-700 rounded-lg hover:border-cyber-cyan hover:text-cyber-cyan transition-colors">
                                    Contact Me
                                </button>
                            </div>
                        </motion.div>
                    </section>

                    <section className="grid grid-cols-2 gap-6">
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="bg-slate-dark/50 border border-white/5 p-6 rounded-xl hover:border-cyber-cyan/50 transition-colors group"
                            >
                                <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                <h3 className="text-xl font-bold mb-2">Project {i}</h3>
                                <p className="text-sm text-muted-blue">A secure and performant web application built with Next.js.</p>
                            </motion.div>
                        ))}
                    </section>
                </main>
            </motion.div>
        </div>
    );
};
