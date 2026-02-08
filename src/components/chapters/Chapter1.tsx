"use client";

import { useEffect, useState } from "react";

export const Chapter1Left = () => {
    const [code, setCode] = useState("");
    const fullCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Portfolio</title>
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Welcome</h2>
      <p>I build things for the web.</p>
    </section>
  </main>
</body>
</html>`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.slice(0, i + 1));
            i++;
            if (i >= fullCode.length) clearInterval(interval);
        }, 30); // Typing speed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-xs overflow-hidden leading-relaxed">
            <div className="flex text-[#858585] mb-2 select-none">
                <span className="mr-4">EXPLORER</span>
                <span>index.html</span>
            </div>
            <pre className="whitespace-pre-wrap break-all">
                <code dangerouslySetInnerHTML={{
                    __html: code.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }} />
                <span className="animate-pulse">|</span>
            </pre>
        </div>
    );
};

export const Chapter1Right = () => {
    return (
        <div className="bg-white text-black p-8 font-serif h-full w-full overflow-y-auto">
            <header className="mb-8 border-b border-gray-300 pb-4">
                <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
                <nav>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="#" className="text-blue-600 underline">About</a></li>
                        <li><a href="#" className="text-blue-600 underline">Skills</a></li>
                        <li><a href="#" className="text-blue-600 underline">Projects</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Welcome</h2>
                    <p className="mb-4">I build things for the web.</p>
                    <p>This is a raw HTML structural view before styling is applied.</p>
                </section>
                <footer className="mt-8 text-sm border-t border-gray-300 pt-4">
                    &copy; 2024 Portfolio
                </footer>
            </main>
        </div>
    );
};
