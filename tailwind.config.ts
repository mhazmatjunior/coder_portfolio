import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-space": "#0a0a12",
                "slate-dark": "#16161e",
                "electric-blue": "#2d7dd2",
                "cyber-cyan": "#00f5ff",
                "neon-purple": "#9d4edd",
                "terminal-green": "#39ff14",
                "warning-amber": "#ffb627",
                "error-red": "#ff0033",
                "silver-gray": "#e0e1dd",
                "muted-blue": "#6272a4",
            },
            fontFamily: {
                mono: ["Fira Code", "monospace"],
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 12s linear infinite",
                "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glitch": "glitch 1s linear infinite",
            },
            keyframes: {
                glitch: {
                    "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
                    "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
                    "62%": { transform: "translate(0,0) skew(5deg)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
