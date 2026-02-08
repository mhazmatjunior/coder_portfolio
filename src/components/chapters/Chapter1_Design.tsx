"use client";

import { motion } from "framer-motion";

export const Chapter1Left = () => {
    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-purple-400 mb-2 select-none items-center gap-2 border-b border-gray-700 pb-2">
                <span>DESIGN SYSTEM & HIERARCHY</span>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
                {/* File Tree */}
                <div>
                    <div className="text-gray-500 mb-2">Component Tree</div>
                    <motion.pre
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-yellow-100/80"
                    >
                        {`App
├── Header
│   ├── Logo
│   └── Nav
├── Main
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   └── Contact
└── Footer`}
                    </motion.pre>
                </div>

                {/* Design Tokens */}
                <div>
                    <div className="text-gray-500 mb-2">Color Palette</div>
                    <div className="space-y-2">
                        <ColorSwatch color="#2D7DD2" label="Primary" name="Electric Blue" />
                        <ColorSwatch color="#00F5FF" label="Accent" name="Cyber Cyan" />
                        <ColorSwatch color="#0B0D21" label="Bg" name="Deep Space" />
                        <ColorSwatch color="#39FF14" label="Success" name="Terminal Green" />
                    </div>

                    <div className="text-gray-500 mt-4 mb-2">Typography</div>
                    <div className="space-y-1">
                        <div className="text-xl font-bold text-white">Heading 1</div>
                        <div className="text-lg font-bold text-white/80">Heading 2</div>
                        <div className="text-sm text-gray-400">Body text (Inter)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ColorSwatch = ({ color, label, name }: { color: string, label: string, name: string }) => (
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-2"
    >
        <div className="w-8 h-8 rounded shadow-lg border border-white/10" style={{ backgroundColor: color }} />
        <div>
            <div className="text-[10px] text-gray-500 uppercase">{label}</div>
            <div className="font-bold text-white">{name}</div>
        </div>
    </motion.div>
);

export const Chapter1Right = () => {
    return (
        <div className="h-full w-full bg-deep-space p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Wireframe Container */}
            <motion.div
                initial={{ rotateX: 20, scale: 0.8, opacity: 0 }}
                animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-3/4 h-3/4 border-2 border-dashed border-white/20 rounded-lg p-4 flex flex-col gap-4 bg-slate-dark/50 backdrop-blur-sm shadow-2xl"
            >
                {/* Header */}
                <div className="h-12 border-2 border-dashed border-white/10 rounded flex items-center justify-between px-4">
                    <div className="w-20 h-4 bg-white/10 rounded" />
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-12 h-3 bg-white/10 rounded" />)}
                    </div>
                </div>

                {/* Hero */}
                <div className="flex-1 border-2 border-dashed border-white/10 rounded flex flex-col items-center justify-center gap-4">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/10" />
                    <div className="w-1/2 h-6 bg-white/10 rounded" />
                    <div className="w-1/3 h-4 bg-white/5 rounded" />
                    <div className="flex gap-2 mt-4">
                        <div className="w-24 h-8 bg-electric-blue/20 rounded border border-electric-blue/50" />
                        <div className="w-24 h-8 border border-white/20 rounded" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 right-6 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 text-sm font-bold"
            >
                WIREFRAME APPROVED
            </motion.div>
        </div>
    );
};
