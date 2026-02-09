"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Monitor from "./Monitor";
import { useTimelineStore } from "@/store/useTimelineStore";
import SDLCIndicator from "@/components/interface/SDLCIndicator";
import InsightOverlay from "@/components/interface/InsightOverlay";

// New Speedrun Chapters
import { OpeningLeft, OpeningRight } from "@/components/chapters/OpeningSequence";
import { Chapter1Left, Chapter1Right } from "@/components/chapters/Chapter1"; // Foundation
import { Chapter2Left, Chapter2Right } from "@/components/chapters/Chapter2"; // Styling
import { Chapter3Left, Chapter3Right } from "@/components/chapters/Chapter3"; // Interactivity
import { Chapter4Left, Chapter4Right } from "@/components/chapters/Chapter4"; // Opt & Sec
import { Chapter5Left, Chapter5Right } from "@/components/chapters/Chapter5"; // Deprecated/merged
import { Chapter6Left, Chapter6Right } from "@/components/chapters/Chapter6"; // Deployment
import { MaintenanceLeft, MaintenanceRight } from "@/components/chapters/Chapter7"; // Maintenance

import Portfolio from "@/components/interface/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Scene() {
    const { currentChapter, nextChapter, setChapter } = useTimelineStore();
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showSDLC, setShowSDLC] = useState(false);

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
        // Exact Speedrun Timings (Total: 45s)
        const times = [10000, 4000, 7000, 5000, 4000, 4000, 2300]; // 300ms extra pause on Maintenance

        let timer: NodeJS.Timeout;
        let sdlcTimer: NodeJS.Timeout;

        if (currentChapter < times.length) {
            timer = setTimeout(() => nextChapter(), times[currentChapter]);

            // Handle SDLC Reveal timing
            if (currentChapter === 0) {
                setShowSDLC(false); // Reset
                sdlcTimer = setTimeout(() => setShowSDLC(true), 9500); // Sync with build start
            } else if (currentChapter > 0 && currentChapter <= 6) {
                setShowSDLC(true);
            } else {
                setShowSDLC(false);
            }
        } else if (currentChapter === 7) {
            setShowPortfolio(true);
            setShowSDLC(false);
        }

        return () => {
            clearTimeout(timer);
            clearTimeout(sdlcTimer);
        };
    }, [currentChapter, nextChapter]);

    const renderLeftScreen = () => {
        switch (currentChapter) {
            case 0: return <OpeningLeft />;
            case 1: return <Chapter1Left />; // Foundation
            case 2: return <Chapter2Left />; // Styling
            case 3: return <Chapter3Left />; // Interactivity
            case 4: return <Chapter4Left />; // Opt & Sec
            case 5: return <Chapter6Left />; // Deployment
            case 6:
            case 7: return <MaintenanceLeft />;
            default: return <MaintenanceLeft />;
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
            case 6:
            case 7: return <MaintenanceRight />;
            default: return <MaintenanceRight />;
        }
    };

    // Chapters 0-6 are speedrun. Chapter 7 is the final reveal.
    const isRevealing = currentChapter >= 7;
    const isMaintenance = currentChapter === 6;

    return (
        <div className="w-full h-screen bg-deep-space relative overflow-hidden">
            {/* SDLC Visualizer & Insights */}
            <AnimatePresence>
                {showSDLC && !showPortfolio && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                        <SDLCIndicator currentPhase={getSDLCPhase(currentChapter)} />
                        <InsightOverlay currentChapter={currentChapter} />
                    </motion.div>
                )}
            </AnimatePresence>


            {/* 3D Scene */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: showPortfolio ? 0 : 1 }}
                transition={{ duration: 1.5 }}
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

                    <group
                        position={[0, isRevealing ? -0.4 : -0.2, 0]}
                        visible={currentChapter > 0}
                    >
                        {/* Monitors appear when Chapter > 0 */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                position={isRevealing ? [-1.7, 0, -0.5] : [-1.5, 0, -0.4]}
                                rotation={isRevealing ? [0, 0, 0] : [0, 0.25, 0]}
                                scale={isRevealing ? 2.0 : 0.9}
                                theme="blue"
                                screenContent={renderLeftScreen()}
                            />
                        </Float>

                        {/* Right Monitor */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                position={isRevealing ? [1.7, 0, 0.5] : [1.5, 0, 0.4]}
                                rotation={isRevealing ? [0, 0, 0] : [0, -0.25, 0]}
                                scale={isRevealing ? 2.0 : 0.9}
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
                        <div className="fixed bottom-12 right-12 z-[60]">
                            <button
                                onClick={() => {
                                    setShowPortfolio(false);
                                    setChapter(0);
                                }}
                                className="bg-white/10 backdrop-blur text-xs px-4 py-2 rounded text-white hover:bg-white/20 transition-all active:scale-95 border border-white/10 font-mono tracking-widest uppercase"
                            >
                                Replay Intro
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {!showPortfolio && (
                <button
                    onClick={() => setChapter(7)}
                    className="absolute bottom-8 right-8 z-[100] text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1 rounded backdrop-blur-sm transition-colors uppercase tracking-widest"
                >
                    Skip Intro
                </button>
            )}
        </div>
    );
}

