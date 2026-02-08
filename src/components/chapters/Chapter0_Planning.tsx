"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Database, Shield, Globe } from "lucide-react";

export const Chapter0Left = () => {
    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-6 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="border-b border-gray-700 pb-2 mb-4 text-warning-amber font-bold">
                REQUIREMENTS.md
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-bold text-white mb-4">PROJECT: Professional Portfolio</h3>

                <div className="mb-6">
                    <h4 className="text-blue-400 mb-2">CORE OBJECTIVES:</h4>
                    <ul className="space-y-2">
                        {[
                            "Showcase full-stack development skills",
                            "Demonstrate cybersecurity expertise",
                            "Ensure high performance (Lighthouse 95+)",
                            "Implement enterprise-grade security",
                            "Maximize SEO & Accessibility"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 + 0.5 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-terminal-green">✓</span> {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-purple-400 mb-2">TARGET AUDIENCE:</h4>
                    <div className="pl-4 border-l-2 border-gray-700">
                        - Potential Employers<br />
                        - Clients (Security Audits)<br />
                        - Tech Recruiters
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const Chapter0Right = () => {
    return (
        <div className="h-full w-full bg-deep-space p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Tech Stack Selection</h2>
            <p className="text-muted-blue text-center mb-8">Architecture Decisions</p>

            <div className="grid grid-cols-2 gap-4">
                <TechCard
                    delay={0.2}
                    icon={<Globe className="text-cyber-cyan" />}
                    title="Frontend"
                    stack="Next.js + React"
                    desc="SSR, SEO, Performance"
                />
                <TechCard
                    delay={0.4}
                    icon={<Database className="text-yellow-400" />}
                    title="Styling"
                    stack="Tailwind CSS"
                    desc="Utility-first, Responsive"
                />
                <TechCard
                    delay={0.6}
                    icon={<Server className="text-blue-500" />}
                    title="Backend"
                    stack="Node.js + PostgreSQL"
                    desc="Scalable API & Data"
                />
                <TechCard
                    delay={0.8}
                    icon={<Shield className="text-terminal-green" />}
                    title="Security"
                    stack="JWT, Helmet, OWASP"
                    desc="Enterprise Protection"
                />
            </div>
        </div>
    );
};

const TechCard = ({ delay, icon, title, stack, desc }: { delay: number, icon: any, title: string, stack: string, desc: string }) => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring" }}
        className="bg-slate-dark/50 border border-white/10 p-4 rounded-xl backdrop-blur-sm"
    >
        <div className="flex items-center gap-3 mb-2">
            {icon}
            <span className="font-bold text-gray-400 text-xs uppercase">{title}</span>
        </div>
        <div className="font-bold text-white text-lg mb-1">{stack}</div>
        <div className="text-xs text-start text-muted-blue">{desc}</div>
    </motion.div>
);
