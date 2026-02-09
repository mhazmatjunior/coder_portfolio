"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const phases = [
    { id: 0, label: "Planning", color: "text-blue-400" },
    { id: 1, label: "Design", color: "text-purple-400" },
    { id: 2, label: "Development", color: "text-yellow-400" },
    { id: 3, label: "Testing", color: "text-orange-400" },
    { id: 4, label: "Deployment", color: "text-green-400" },
    { id: 5, label: "Maintenance", color: "text-cyan-400" },
];

interface SDLCIndicatorProps {
    currentPhase: number; // 0-5 mapping to phases
}

export default function SDLCIndicator({ currentPhase }: SDLCIndicatorProps) {
    return (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 flex justify-center">
            <div className="bg-slate-dark/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 shadow-lg shadow-electric-blue/10 flex items-center">

                {/* Title */}
                <div className="text-white font-bold mr-8 hidden md:block">
                    <span className="text-muted-blue">SDLC</span> FLOW
                </div>

                {/* Flow Visualization */}
                <div className="flex items-center gap-2 flex-1 justify-center">
                    {phases.map((phase, index) => {
                        const isActive = index === currentPhase;
                        const isCompleted = index < currentPhase;

                        return (
                            <div key={phase.id} className="flex items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 border border-electric-blue/50 scale-105 shadow-[0_0_15px_rgba(45,125,210,0.5)]" : "opacity-50"
                                        }`}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2 size={16} className="text-terminal-green" />
                                    ) : isActive ? (
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <Circle size={16} className={`${phase.color} fill-current`} />
                                        </motion.div>
                                    ) : (
                                        <Circle size={16} className="text-gray-600" />
                                    )}

                                    <span className={`text-xs font-bold uppercase ${isActive ? "text-white block" : "text-gray-500 hidden md:block"}`}>
                                        {phase.label}
                                    </span>
                                </motion.div>

                                {/* Arrow Connector */}
                                {index < phases.length - 1 && (
                                    <ArrowRight size={12} className={`mx-1 ${isCompleted ? "text-electric-blue" : "text-gray-700"}`} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
