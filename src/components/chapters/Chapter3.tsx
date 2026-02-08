"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

export const Chapter3Left = () => {
    const [code, setCode] = useState("");
    const jsCode = `// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value;
  
  if (!isValid(email)) {
    return showError('Invalid Email!');
  }
  
  await api.submit(email);
  showSuccess('Message Sent! 🚀');
});

// Smooth Scroll
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(jsCode.slice(0, i));
            i += 5;
            if (i > jsCode.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 text-[#dcdcaa] font-mono text-[10px] leading-tight overflow-hidden">
            <pre className="whitespace-pre-wrap">{code}</pre>
        </div>
    );
};

export const Chapter3Right = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
    const [scrollPos, setScrollPos] = useState(0);

    // Auto-demo script
    useEffect(() => {
        const demo = async () => {
            // Wait a bit
            await new Promise(r => setTimeout(r, 2000));

            // Type invalid email
            const invalid = "bad-email";
            for (let i = 0; i <= invalid.length; i++) {
                setEmail(invalid.slice(0, i));
                await new Promise(r => setTimeout(r, 100));
            }
            setStatus("error");

            await new Promise(r => setTimeout(r, 1500));

            // Fix email
            setEmail("");
            setStatus("idle");
            const valid = "alex@dev.com";
            for (let i = 0; i <= valid.length; i++) {
                setEmail(valid.slice(0, i));
                await new Promise(r => setTimeout(r, 100));
            }
            setStatus("success");

            await new Promise(r => setTimeout(r, 2000));

            // Scroll demo
            setScrollPos(200);
        };
        demo();
    }, []);

    return (
        <div className="h-full w-full bg-deep-space text-silver-gray p-8 relative overflow-hidden">
            {/* Narrative */}
            <motion.div
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded shadow-lg font-sans text-xs font-bold z-20"
            >
                Interactive Logic Active
            </motion.div>

            <div className="max-w-md mx-auto mt-10 bg-slate-dark/50 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Contact Form</h3>

                <div className="relative mb-4">
                    <input
                        value={email}
                        readOnly
                        className={`w-full p-3 rounded bg-black/30 border transition-colors ${status === "error" ? "border-red-500 text-red-400" :
                            status === "success" ? "border-green-500 text-green-400" : "border-white/20 text-white"
                            }`}
                        placeholder="Enter email..."
                    />
                    {status === "error" && <AlertCircle className="absolute right-3 top-3 text-red-500" size={18} />}
                    {status === "success" && <CheckCircle className="absolute right-3 top-3 text-green-500" size={18} />}
                </div>

                <AnimatePresence>
                    {status === "error" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="text-red-400 text-xs mb-2">
                            Invalid email format.
                        </motion.div>
                    )}
                    {status === "success" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="text-green-400 text-xs mb-2">
                            Message sent successfully!
                        </motion.div>
                    )}
                </AnimatePresence>

                <button className="w-full bg-electric-blue py-2 rounded text-white font-bold opacity-80">
                    Submit
                </button>
            </div>

            {/* Scroll Demo */}
            <motion.div
                animate={{ y: -scrollPos }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="mt-12 opacity-50 space-y-4"
            >
                <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-4">
                    <div className="w-1/3 h-4 bg-white/10 rounded mb-2" />
                    <div className="w-full h-2 bg-white/5 rounded" />
                    <div className="w-2/3 h-2 bg-white/5 rounded mt-2" />
                </div>
                <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-4">
                    <div className="w-1/3 h-4 bg-white/10 rounded mb-2" />
                </div>
            </motion.div>
        </div>
    );
};
