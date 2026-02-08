"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Monitor from "./Monitor";
import { useTimelineStore } from "@/store/useTimelineStore";
import { OpeningLeft, OpeningRight } from "@/components/chapters/OpeningSequence";
import { Chapter1Left, Chapter1Right } from "@/components/chapters/Chapter1";
import { Chapter2Left, Chapter2Right } from "@/components/chapters/Chapter2";
import { Chapter3Left, Chapter3Right } from "@/components/chapters/Chapter3";
import { Chapter4Left, Chapter4Right } from "@/components/chapters/Chapter4";
import { Chapter5Left, Chapter5Right } from "@/components/chapters/Chapter5";
import { Chapter6Left, Chapter6Right } from "@/components/chapters/Chapter6";
import Portfolio from "@/components/interface/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Scene() {
    const { currentChapter, nextChapter, setChapter } = useTimelineStore();
    const [showPortfolio, setShowPortfolio] = useState(false);

    // Auto-advance logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const times = [8000, 12000, 12000, 12000, 12000, 12000, 12000, 999999];
        if (currentChapter < times.length - 1) { // Stop at chapter 7 (Reveal)
            timer = setTimeout(() => nextChapter(), times[currentChapter]);
        } else if (currentChapter === 7) {
            // Reveal logic
            setTimeout(() => setShowPortfolio(true), 2000); // Wait for transition
        }
        return () => clearTimeout(timer);
    }, [currentChapter, nextChapter]);

    const renderLeftScreen = () => {
        switch (currentChapter) {
            case 0: return <OpeningLeft />;
            case 1: return <Chapter1Left />;
            case 2: return <Chapter2Left />;
            case 3: return <Chapter3Left />;
            case 4: return <Chapter4Left />;
            case 5: return <Chapter5Left />;
            case 6: return <Chapter6Left />;
            case 7: return <div className="bg-black h-full w-full flex items-center justify-center text-white">MERGING...</div>;
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
            case 5: return <Chapter5Right />;
            case 6: return <Chapter6Right />;
            case 7: return <div className="bg-black h-full w-full flex items-center justify-center text-white">READY</div>;
            default: return null;
        }
    };

    const isRevealing = currentChapter === 7;

    return (
        <div className="w-full h-screen bg-deep-space relative">
            {/* 3D Scene */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: showPortfolio ? 0 : 1 }}
                transition={{ duration: 1 }}
            >
                <Canvas shadows gl={{ antialias: true, toneMappingExposure: 1.5 }}>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, isRevealing ? 12 : 6]} // Pull back camera on reveal
                        fov={50}
                    />

                    {/* Lighting & Environment */}
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                    <pointLight position={[-10, 10, -10]} intensity={0.5} color="#2D7DD2" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />

                    <group position={[0, -0.5, 0]}>
                        {/* Left Monitor */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                // Animate position to center
                                position={isRevealing ? [-1.65, 0, 0] : [-1.7, 0, 0]}
                                rotation={isRevealing ? [0, 0, 0] : [0, 0.25, 0]}
                                theme="blue"
                                screenContent={renderLeftScreen()}
                            />
                        </Float>

                        {/* Right Monitor */}
                        <Float speed={isRevealing ? 0 : 2} rotationIntensity={isRevealing ? 0 : 0.2} floatIntensity={isRevealing ? 0 : 0.5}>
                            <Monitor
                                position={isRevealing ? [1.65, 0, 0] : [1.7, 0, 0]}
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

                        {/* Control to restart */}
                        <div className="fixed bottom-4 right-4 z-[60]">
                            <button
                                onClick={() => {
                                    setShowPortfolio(false);
                                    setChapter(0);
                                }}
                                className="bg-white/10 backdrop-blur text-xs p-2 rounded text-white hover:bg-white/20"
                            >
                                Replay Intro
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Timeline Controls (Debug/Interactive Mode UI) */}
            {!showPortfolio && (
                <>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-40">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                            <button
                                key={i}
                                onClick={() => setChapter(i)}
                                className={`w-2 h-2 rounded-full ${currentChapter === i ? 'bg-cyber-cyan' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setChapter(7)}
                        className="absolute bottom-8 right-8 z-50 text-xs text-white/50 hover:text-white border border-white/20 px-3 py-1 rounded backdrop-blur-sm transition-colors uppercase tracking-widest"
                    >
                        Skip Intro
                    </button>
                </>
            )}
        </div>
    );
}
