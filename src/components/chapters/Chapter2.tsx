"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Chapter2Left = () => {
    const [code, setCode] = useState("");
    const cssCode = `body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0B0D21, #1E1E2E);
  color: #B8C5D6;
}

header {
  background: rgba(30,30,46,0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,245,255,0.1);
}

h1 {
  background: linear-gradient(to right, #2D7DD2, #00F5FF);
  -webkit-background-clip: text;
  color: transparent;
}

.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,245,255,0.2);
}

button {
  background: #2D7DD2;
  box-shadow: 0 0 15px rgba(45,125,210,0.5);
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(cssCode.slice(0, i));
            i += 8; // Very fast typing
            if (i > cssCode.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 text-[#9cdcfe] font-mono text-[10px] leading-tight overflow-hidden">
            <pre className="whitespace-pre-wrap">{code}</pre>
        </div>
    );
};

export const Chapter2Right = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sync visual updates with "phases" of CSS being applied
        const interval = setInterval(() => {
            setStep(s => s + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`h-full w-full overflow-y-auto transition-all duration-1000 ${step > 0 ? "bg-deep-space text-silver-gray" : "bg-white text-black"}`}>

            {/* Narrative Overlay */}
            <motion.div
                key={step}
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded shadow-lg font-sans text-xs font-bold z-20"
            >
                {step === 0 && "Applying Base Styles..."}
                {step === 1 && "Typography & Colors ✓"}
                {step === 2 && "Glassmorphism UI ✓"}
                {step >= 3 && "Animations & Interactions ✓"}
            </motion.div>

            <header className={`p-8 text-center transition-all duration-700 ${step > 1 ? "bg-slate-dark/50 backdrop-blur-md border-b border-white/10" : ""}`}>
                <h1 className={`text-4xl font-bold mb-2 transition-all duration-700 ${step > 1 ? "bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-cyan" : ""}`}>
                    Alex Chen
                </h1>
                <p className={`${step > 0 ? "text-muted-blue" : "text-gray-600"}`}>Full-Stack Dev & Security Expert</p>
            </header>

            <div className="p-8 max-w-2xl mx-auto space-y-8">
                {/* Project Cards */}
                <div className="grid grid-cols-2 gap-4">
                    {["E-Commerce Platform", "Security Scanner"].map((project, i) => (
                        <div
                            key={i}
                            className={`p-4 transition-all duration-500 ${step > 2
                                    ? "bg-white/5 border border-white/10 rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
                                    : "border border-gray-300"
                                }`}
                        >
                            <h3 className={`font-bold mb-2 ${step > 1 ? "text-cyber-cyan" : ""}`}>{project}</h3>
                            <p className="text-xs opacity-70">Secure payment system, OAuth 2.0, JWT auth implementation.</p>
                        </div>
                    ))}
                </div>

                {/* Form Styling */}
                <div className={`p-6 transition-all duration-500 ${step > 2 ? "bg-white/5 rounded-xl border border-white/10" : "bg-gray-100"}`}>
                    <h3 className="mb-4 font-bold">Contact</h3>
                    <input
                        className={`w-full mb-2 p-2 rounded transition-all ${step > 2 ? "bg-black/30 border border-white/20 text-white" : "border border-gray-300"}`}
                        placeholder="Email"
                        readOnly
                    />
                    <button
                        className={`w-full p-2 rounded font-bold transition-all ${step > 2
                                ? "bg-gradient-to-r from-electric-blue to-purple-600 text-white shadow-[0_0_15px_rgba(45,125,210,0.4)]"
                                : "bg-gray-200 text-black"
                            }`}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};
