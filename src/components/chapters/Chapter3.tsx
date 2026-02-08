"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, MessageSquare, Heart } from "lucide-react";

export const Chapter3Left = () => {
    const [code, setCode] = useState("");
    const fullCode = `import { useState, useEffect } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // API Integration
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="interactive-demo">
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      <Modal isOpen={isOpen}>
        <h2>Dynamic Content</h2>
      </Modal>
    </div>
  );
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.slice(0, i + 1));
            i++;
            if (i >= fullCode.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-[#858585] mb-2 select-none items-center gap-2">
                <span className="text-yellow-400">JS</span>
                <span>App.tsx</span>
            </div>
            <pre className="whitespace-pre-wrap break-all text-yellow-100">
                <code dangerouslySetInnerHTML={{
                    __html: code
                        .replace(/import/g, '<span class="text-purple-400">import</span>')
                        .replace(/from/g, '<span class="text-purple-400">from</span>')
                        .replace(/const/g, '<span class="text-blue-400">const</span>')
                        .replace(/return/g, '<span class="text-purple-400">return</span>')
                        .replace(/function/g, '<span class="text-blue-400">function</span>')
                }} />
                <span className="animate-pulse text-white">|</span>
            </pre>
        </div>
    );
};

export const Chapter3Right = () => {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-deep-space text-silver-gray font-sans h-full w-full relative overflow-hidden p-8 flex flex-col items-center justify-center gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,125,210,0.1),transparent_70%)]" />

            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-purple z-10">
                Interactive Elements
            </h2>

            {/* Interactive Card 1: Counter */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-dark border border-electric-blue/30 p-6 rounded-xl w-full max-w-sm flex items-center justify-between z-10 hover:shadow-[0_0_20px_rgba(45,125,210,0.3)] transition-shadow"
            >
                <div>
                    <h3 className="text-lg font-semibold text-white">State Management</h3>
                    <p className="text-sm text-muted-blue">Click to update state</p>
                </div>
                <button
                    onClick={() => setCount(c => c + 1)}
                    className="bg-electric-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hover:bg-blue-500 transition-colors"
                >
                    {count}
                </button>
            </motion.div>

            {/* Interactive Card 2: Modal Trigger */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-dark border border-neon-purple/30 p-6 rounded-xl w-full max-w-sm flex items-center justify-between z-10 hover:shadow-[0_0_20px_rgba(157,78,221,0.3)] transition-shadow cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <div>
                    <h3 className="text-lg font-semibold text-white">Dynamic Modal</h3>
                    <p className="text-sm text-muted-blue">Click to open overlay</p>
                </div>
                <div className="bg-neon-purple/20 text-neon-purple p-3 rounded-lg">
                    <MessageSquare size={24} />
                </div>
            </motion.div>

            {/* Floating Elements Animation */}
            <motion.div
                className="absolute top-10 right-10 text-terminal-green opacity-20"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <RotateCcw size={48} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 left-10 text-error-red opacity-20"
                animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Heart size={48} />
            </motion.div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            className="bg-slate-dark border border-white/10 p-6 rounded-xl max-w-xs w-full shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-bold text-white mb-2">Hello World!</h3>
                            <p className="text-muted-blue mb-4">This is a dynamic modal component powered by React state and Framer Motion.</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
