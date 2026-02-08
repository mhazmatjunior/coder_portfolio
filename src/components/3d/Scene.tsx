"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Monitor from "./Monitor";
import { useTimelineStore } from "@/store/useTimelineStore";
import SDLCIndicator from "@/components/interface/SDLCIndicator";

// New Speedrun Chapters
import { OpeningLeft, OpeningRight } from "@/components/chapters/OpeningSequence";
import { Chapter1Left, Chapter1Right } from "@/components/chapters/Chapter1"; // Foundation
import { Chapter2Left, Chapter2Right } from "@/components/chapters/Chapter2"; // Styling
import { Chapter3Left, Chapter3Right } from "@/components/chapters/Chapter3"; // Interactivity
import { Chapter4Left, Chapter4Right } from "@/components/chapters/Chapter4"; // Opt & Sec
import { Chapter5Left, Chapter5Right } from "@/components/chapters/Chapter5"; // Deprecated/merged
import { Chapter6Left, Chapter6Right } from "@/components/chapters/Chapter6"; // Deployment

import Portfolio from "@/components/interface/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Scene() {
    const { currentChapter, nextChapter, setChapter } = useTimelineStore();
    const [showPortfolio, setShowPortfolio] = useState(false);

    // Speedrun Phases:
    // 0: Opening (0-5s)
    // 1: Foundation (5-20s) -> 15s
    // 2: Styling (20-40s) -> 20s
    // 3: Interactivity (40-55s) -> 15s
    // 4: Opt & Sec (55-70s) -> 15s
    // 5: Deployment (70-85s) -> 15s
    // 6: Reveal (85-90s+) -> 5s -> Portfolio

    const getSDLCPhase = (chapter: number) => {
        if (chapter === 0) return -1; // Pre-start
        if (chapter === 1) return 0; // Planning/Foundation
        if (chapter === 2) return 1; // Design/Styling
        if (chapter === 3) return 2; // Development/Interactivity
        if (chapter === 4) return 3; // Testing (Opt & Sec)
        if (chapter === 5) return 4; // Deployment
        return 5; // Maintenance (Live)
    };

    useEffect(() => {
        // Exact Speedrun Timings
        const times = [5000, 15000, 20000, 15000, 15000, 15000, 5000];

        let timer: NodeJS.Timeout;
        if (currentChapter < times.length) {
            timer = setTimeout(() => nextChapter(), times[currentChapter]);
        } else if (currentChapter === 7) {
            // 7 is post-reveal state
            setShowPortfolio(true);
        }
        return () => clearTimeout(timer);
    }, [currentChapter, nextChapter]);

    const renderLeftScreen = () => {
        switch (currentChapter) {
            case 0: return <OpeningLeft />;
            case 1: return <Chapter1Left />; // Foundation
            case 2: return <Chapter2Left />; // Styling
            case 3: return <Chapter3Left />; // Interactivity
            case 4: return <Chapter4Left />; // Opt & Sec
            case 5: return <Chapter6Left />; // Deployment (Using Ch6 component for now, will refactor)
            case 6: return <div className="h-full w-full bg-black flex items-center justify-center text-terminal-green font-mono text-xl animate-pulse">SYSTEM ONLINE</div>;
            default: return null;
        }
    };

    const renderRightScreen = () => {
        switch (currentChapter) {
            case 0: return <OpeningRight />;
            case 1: return <Chapter1Right />;
            case 2: return <Chapter2Right />;
            case 3: return <Chapter3Right />;
            case 4: return <Chapter4Right />;
            case 5: return <Chapter6Right />;
            case 6: return <div className="h-full w-full bg-deep-space flex items-center justify-center text-white text-2xl font-bold">WELCOME</div>;
            default: return null;
        }
    };

    const isRevealing = currentChapter >= 6; // Reveal starts at Ch 6

    return (
        <div className="w-full h-screen bg-deep-space relative overflow-hidden">
            {/* SDLC Visualizer */}
            <AnimatePresence>
                {!showPortfolio && (
                    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}>
                        <SDLCIndicator currentPhase={getSDLCPhase(currentChapter)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Timer (Top Right) */}
            {!showPortfolio && (
                <div className="absolute top-8 right-8 z-50 font-mono text-xl text-electric-blue bg-black/50 px-4 py-2 rounded">
                    <Timer />
                </div>
            )}

            {/* 3D Scene */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: showPortfolio ? 0 : 1 }}
                transition={{ duration: 1 }}
            >
                <Canvas shadows gl={{ antialias: true, toneMappingExposure: 1.5 }}>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, isRevealing ? 12 : 5.5]}
                        fov={50}
                    />

                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                    <pointLight position={[-10, 10, -10]} intensity={0.5} color="#2D7DD2" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />

                    <group position={[0, -0.5, 0]}>
                        {/* Left Monitor */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                position={isRevealing ? [0, 0, -0.5] : [-1.7, 0, -0.5]}
                                rotation={isRevealing ? [0, 0, 0] : [0, 0.25, 0]}
                                theme="blue"
                                screenContent={renderLeftScreen()}
                            />
                        </Float>

                        {/* Right Monitor */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                position={isRevealing ? [0, 0, 0.5] : [1.7, 0, 0.5]}
                                rotation={isRevealing ? [0, 0, 0] : [0, -0.25, 0]}
                                theme="cyan"
                                screenContent={renderRightScreen()}
                            />
                        </Float>
                    </group>

                    <OrbitControls enabled={!isRevealing} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
                </Canvas>
            </motion.div>

            {/* Portfolio Overlay */}
            <AnimatePresence>
                {showPortfolio && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-50 overflow-auto"
                    >
                        <Portfolio />
                        <div className="fixed bottom-4 right-4 z-[60]">
                            <button
                                onClick={() => {
                                    setShowPortfolio(false);
                                    setChapter(0);
                                }}
                                className="bg-white/10 backdrop-blur text-xs p-2 rounded text-white hover:bg-white/20"
                            >
                                Replay Speedrun
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {!showPortfolio && (
                <button
                    onClick={() => setChapter(7)}
                    className="absolute bottom-8 right-8 z-50 text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1 rounded backdrop-blur-sm transition-colors uppercase tracking-widest"
                >
                    Skip Intro
                </button>
            )}
        </div>
    );
}

const Timer = () => {
    const [time, setTime] = useState(0);
    const { currentChapter } = useTimelineStore();

    useEffect(() => {
        const start = Date.now();
        const interval = setInterval(() => {
            const now = Date.now();
            const elapsed = Math.floor((now - start) / 1000);
            setTime(elapsed);
        }, 1000);
        return () => clearInterval(interval);
    }, [currentChapter]); // Reset on chapter change? No, keep running total? 
    // Actually simplicity: just run one timer if we want total "Speedrun" time. 
    // But for now, let's just show elapsed since component mount (which is when Scene mounts). 
    // To match user request "00:00 counting up", we can just do a simple global timer.

    return (
        <span>{`00:${time < 10 ? `0${time}` : time}`}</span>
    );
}
