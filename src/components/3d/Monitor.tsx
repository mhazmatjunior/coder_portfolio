"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface MonitorProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    screenContent?: React.ReactNode;
    theme?: "blue" | "cyan";
}

export default function Monitor({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    screenContent,
    theme = "blue",
}: MonitorProps) {
    const groupRef = useRef<THREE.Group>(null);
    const glowColor = theme === "blue" ? "#2D7DD2" : "#00F5FF";

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            {/* Monitor Frame */}
            <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.05} receiveShadow castShadow>
                <meshStandardMaterial color="#1E1E2E" roughness={0.2} metalness={0.8} />
            </RoundedBox>

            {/* Screen Area */}
            <mesh position={[0, 0, 0.06]}>
                <planeGeometry args={[3, 1.9]} />
                <meshBasicMaterial color="#000" />
            </mesh>

            {/* Render 2D DOM Content */}
            <Html
                transform
                position={[0, 0, 0.07]}
                distanceFactor={1.5}
                occlude="blending"
                className="w-[1280px] h-[800px] bg-deep-space overflow-hidden select-none pointer-events-none"
                style={{
                    width: "1280px",
                    height: "800px",
                    backgroundColor: "#0B0D21",
                    boxShadow: `0 0 20px ${glowColor}20`,
                }}
            >
                <div className="w-full h-full text-silver-gray font-mono p-4 flex flex-col">
                    {screenContent || (
                        <div className="flex items-center justify-center h-full">
                            <span className="text-xl animate-pulse">Initializing System...</span>
                        </div>
                    )}
                </div>
            </Html>

            {/* Screen Glow Effect */}
            <pointLight position={[0, 0, 1]} intensity={0.5} color={glowColor} distance={3} decay={2} />
        </group>
    );
}
