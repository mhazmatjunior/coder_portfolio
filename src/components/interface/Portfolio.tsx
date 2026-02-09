"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Code, Shield, ExternalLink, Terminal, Download, Award, BadgeCheck, X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayText, setDisplayText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsStarted(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 80);
        return () => clearInterval(interval);
    }, [isStarted, text]);

    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple font-mono">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-12 bg-neon-purple ml-1 translate-y-2"
            />
        </span>
    );
};

export default function Portfolio() {
    const [selectedCert, setSelectedCert] = useState<any>(null);
    const [showAllCerts, setShowAllCerts] = useState(false);

    const certifications = [
        { name: "React - The Complete Guide", issuer: "Academind / Udemy", date: "2024", color: "from-[#61DAFB]/20", image: "/React - The Complete Guide.jpg" },
        { name: "JavaScript Programming", issuer: "Professional Certification", date: "2024", color: "from-[#F7DF1E]/20", image: "/JavaScript Certificate.jpg" },
        { name: "JavaScript (Basic)", issuer: "HackerRank", date: "2024", color: "from-[#F7DF1E]/10", image: "/javascript_basic certificate_page-0001.jpg" },
        { name: "IBM Cybersecurity Analyst Professional", issuer: "IBM / Coursera", date: "2024", color: "from-[#052FF2]/20", image: "/IBM Cybersecurity Analyst.jpg" },
        { name: "Operating Systems Specialist", issuer: "IBM", date: "2024", color: "from-[#0F62FE]/20", image: "/Operating Systems IBM.jpg" },
        { name: "CompTIA Security+ & CySA+", issuer: "CompTIA", date: "2024", color: "from-[#FF0000]/20", image: "/comptia-security-cysa.jpg" },
        { name: "Cybersecurity Tools & Cyberattacks", issuer: "IBM / Coursera", date: "2024", color: "from-[#4B0082]/20", image: "/Introduction to Cybersecurity Tools and Cyberattacks.jpg" },
        { name: "Penetration Testing & Cryptography", issuer: "IBM", date: "2024", color: "from-[#FF4500]/20", image: "/Penetration Testing, Threat Hunting, and Cryptography.jpg" },
        { name: "Compliance & Standards", issuer: "IBM", date: "2024", color: "from-[#FFD700]/20", image: "/compliance-standards.jpg" },
        { name: "Cybersecurity Architecture", issuer: "IBM / Coursera", date: "2024", color: "from-[#00CED1]/20", image: "/Cybersecurity Architecture.jpg" },
        { name: "Incident Response & Forensics", issuer: "IBM", date: "2024", color: "from-[#228B22]/20", image: "/Incident Response and Digital Forensics.jpg" },
        { name: "Generative AI for Cybersecurity", issuer: "IBM", date: "2024", color: "from-[#8A2BE2]/20", image: "/Generative AI Boost Your Cybersecurity Career.jpg" },
        { name: "Database Essentials", issuer: "IBM / Coursera", date: "2024", color: "from-[#40E0D0]/20", image: "/Database Essentials and Vulnerabilities.jpg" },
        { name: "Computer Networks & Security", issuer: "IBM / Coursera", date: "2024", color: "from-[#FF6347]/20", image: "/Computer Networks and Network Security.jpg" },
        { name: "Cybersecurity Careers", issuer: "IBM / Coursera", date: "2024", color: "from-[#32CD32]/20", image: "/Introduction to Cybersecurity Careers.jpg" },
        { name: "Cybersecurity Essentials", issuer: "IBM / Coursera", date: "2024", color: "from-[#00008B]/20", image: "/Introduction to Cybersecurity Essentials.jpg" },
        { name: "Cybersecurity Capstone Project", issuer: "IBM / Coursera", date: "2024", color: "from-[#800000]/20", image: "/Cybersecurity Case Studies and Capstone Project.jpg" },
        { name: "CC Pre-Assessment", issuer: "ISC2 / Coursera", date: "2024", color: "from-[#4682B4]/20", image: "/CC Course Pre Assessment.jpg" }
    ];

    const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 9);

    return (
        <div className="w-full min-h-screen bg-deep-space text-silver-gray font-sans overflow-y-auto overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
                    >
                        <motion.button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                            onClick={() => setSelectedCert(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-3xl w-full aspect-[4/3] bg-[#0A0A12] border border-cyber-cyan/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)] flex items-center justify-center group/modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Scanning Laser Line */}
                            <motion.div
                                initial={{ top: "-10%" }}
                                animate={{ top: "110%" }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent z-20 shadow-[0_0_15px_rgba(0,243,255,0.8)] opacity-50"
                            />

                            <img
                                src={selectedCert.image}
                                alt={selectedCert.name}
                                className="w-full h-full object-contain relative z-10 p-2"
                            />

                            {/* Modal Metadata Overlay */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[20px] border-black/20 z-0" />

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-30">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                                    <span className="text-cyber-cyan font-mono text-[10px] tracking-[0.3em] font-bold">DECRYPTED_CREDENTIAL_ACCESS</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.name}</h3>
                                <p className="text-muted-blue font-medium text-sm">{selectedCert.issuer} • Verified 2024</p>
                            </div>

                            {/* Decorative Corner Brackets */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan/30 z-30" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan/30 z-30" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Background Effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue rounded-full filter blur-[150px] opacity-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md bg-deep-space/80 border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-cyber-cyan"
                >
                    Dev<span className="text-white">Sec</span>
                </motion.div>
                <div className="flex gap-6 text-sm font-medium">
                    {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyber-cyan transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 relative pt-20">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-40 h-40 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple p-1 mb-8"
                >
                    <div className="w-full h-full rounded-full bg-slate-dark flex items-center justify-center overflow-hidden relative">
                        <img
                            src="/My Pic.jpg"
                            alt="Hassan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Security Shield (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                "0 0 0px rgba(34, 197, 94, 0)",
                                "0 0 20px rgba(34, 197, 94, 0.4)",
                                "0 0 0px rgba(34, 197, 94, 0)"
                            ]
                        }}
                        transition={{
                            delay: 1.2,
                            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                            boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }}
                        className="absolute -bottom-2 -right-2 bg-slate-dark p-2 rounded-full border border-white/10 z-10 shadow-2xl"
                    >
                        <Shield className="text-terminal-green" size={24} />
                    </motion.div>

                    {/* Web Dev Brackets (Bottom Left - Symmetry with Shield) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                "0 0 0px rgba(0, 243, 255, 0)",
                                "0 0 20px rgba(0, 243, 255, 0.4)",
                                "0 0 0px rgba(0, 243, 255, 0)"
                            ]
                        }}
                        transition={{
                            delay: 0.8,
                            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                            boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }}
                        className="absolute -bottom-2 -left-2 bg-slate-dark p-2 rounded-full border border-white/10 z-10 shadow-2xl"
                    >
                        <Code className="text-cyber-cyan" size={24} />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-center mb-6"
                >
                    Hi, I'm <span className="text-electric-blue">Hassan</span> <br />
                    <TypewriterText text="Full-Stack Developer" delay={800} />
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-muted-blue max-w-2xl text-center mb-10"
                >
                    Building secure, performant, and immersive web experiences.
                    Bridging the gap between creative development and robust security.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                >
                    <a href="#projects" className="px-8 py-3 bg-electric-blue text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-electric-blue/20">
                        View My Work
                    </a>
                    <button className="px-8 py-3 border border-slate-700 rounded-lg font-bold hover:border-cyber-cyan hover:text-cyber-cyan transition-colors flex items-center gap-2">
                        <Download size={18} /> Resume
                    </button>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-8 bg-slate-dark/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Code className="text-electric-blue" /> Technical Arsenal
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-cyber-cyan">Development</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Three.js', 'PostgreSQL', 'Docker'].map((skill) => (
                                    <div key={skill} className="bg-slate-dark p-4 rounded-lg border border-white/5 hover:border-electric-blue/50 transition-colors">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6 text-terminal-green">Security</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Penetration Testing', 'OWASP Top 10', 'Encryption', 'OAuth/JWT', 'Network Security', 'Security Audits'].map((skill) => (
                                    <div key={skill} className="bg-slate-dark p-4 rounded-lg border border-white/5 hover:border-terminal-green/50 transition-colors">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Terminal className="text-neon-purple" /> Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Project Media Management",
                                desc: "A full-stack management system for a media company, streamlining content, projects, and team workflows into a single, efficient platform.",
                                tags: [
                                    { name: "Next.js", color: "bg-electric-blue/10 text-electric-blue" },
                                    { name: "React.js", color: "bg-neon-purple/10 text-neon-purple" },
                                    { name: "Tailwind", color: "bg-cyber-cyan/10 text-cyber-cyan" },
                                    { name: "PostgreSQL", color: "bg-terminal-green/10 text-terminal-green" }
                                ],
                                github: "https://github.com/mhazmatjunior/Project_Media_Management_V2.git",
                                live: "https://project-media-management-v2.vercel.app/",
                                image: "/Project 1.png"
                            },
                            {
                                title: "School of Islam",
                                desc: "A modern full stack Learning Management System for an academy, enabling courses, assignments, and student progress tracking all in one interactive platform.",
                                tags: [
                                    { name: "Next.js", color: "bg-electric-blue/10 text-electric-blue" },
                                    { name: "React.js", color: "bg-neon-purple/10 text-neon-purple" },
                                    { name: "Tailwind", color: "bg-cyber-cyan/10 text-cyber-cyan" },
                                    { name: "PostgreSQL", color: "bg-terminal-green/10 text-terminal-green" }
                                ],
                                github: "https://github.com/mhazmatjunior/School-of-Islam.git",
                                live: "https://school-of-islam.vercel.app/",
                                image: "/Project 2.png"
                            },
                            {
                                title: "Future Secure Project",
                                desc: "An upcoming project focused on advanced cybersecurity implementation and real-time threat monitoring systems. Stay tuned for the release.",
                                tags: [
                                    { name: "Next.js", color: "bg-electric-blue/10 text-electric-blue" },
                                    { name: "Three.js", color: "bg-neon-purple/10 text-neon-purple" },
                                    { name: "Security+", color: "bg-terminal-green/10 text-terminal-green" }
                                ],
                                github: "#",
                                live: "#",
                                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-slate-dark border border-white/10 rounded-xl overflow-hidden group shadow-lg flex flex-col"
                            >
                                <div className="h-48 bg-slate-dark/50 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                                    {i === 2 ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                            <div className="w-3/4 h-3/4 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse" />
                                            <Shield className="text-white/10" size={48} />
                                        </div>
                                    ) : (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
                                    )}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white font-bold border border-cyber-cyan/50 bg-cyber-cyan/10 px-6 py-2 rounded-lg backdrop-blur-sm hover:bg-cyber-cyan/20 transition-all">
                                            {i === 2 ? "Coming Soon" : "View Live Project"}
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-blue mb-4 flex-1">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag.name} className={`text-xs px-2 py-1 rounded ${tag.color}`}>{tag.name}</span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium mt-auto">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors"><Github size={16} /> Code</a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors"><ExternalLink size={16} /> Live</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="py-24 px-8 bg-black/20 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
                                <Award className="text-cyber-cyan" size={36} /> Professional <span className="text-electric-blue italic">Credentials</span>
                            </h2>
                            <p className="text-muted-blue max-w-xl">Verified expertise across cloud computing, cybersecurity, and advanced engineering systems.</p>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mx-8 mb-4 hidden md:block" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <AnimatePresence>
                            {displayedCerts.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                    transition={{
                                        delay: showAllCerts && i >= 9
                                            ? (i - 9) * 0.05
                                            : Math.floor(i / 3) * 0.1 + (i % 3) * 0.03,
                                        duration: 0.4
                                    }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                    onClick={() => setSelectedCert(cert)}
                                    className="relative group cursor-pointer h-full"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="bg-slate-dark/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group-hover:border-white/20 transition-all shadow-2xl h-full flex flex-col min-h-[320px]">
                                        {/* Image Preview - Always Visible but Transparent & Fitted */}
                                        <div className="absolute inset-4 opacity-20 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none grayscale-[0.5] group-hover:grayscale-0 flex items-center justify-center overflow-hidden rounded-xl">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full h-full object-contain scale-110 group-hover:scale-100 transition-transform duration-1000"
                                                loading="lazy"
                                            />
                                            {/* Contrast Overlay for Text Legibility */}
                                            <div className="absolute inset-0 bg-slate-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                                        </div>

                                        {/* Hover Overlay Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-0">
                                            <div className="p-3 bg-cyber-cyan/20 rounded-full border border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                                                <ZoomIn className="text-cyber-cyan" size={24} />
                                            </div>
                                        </div>
                                        {/* Animated Corner Border */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyber-cyan/20 to-transparent transition-opacity group-hover:opacity-40" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

                                        <div className="flex justify-between items-start mb-10 relative z-10">
                                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                                                <BadgeCheck className="text-cyber-cyan" size={28} />
                                            </div>
                                            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] font-black">{cert.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors leading-tight relative z-10">{cert.name}</h3>
                                        <p className="text-sm text-muted-blue font-medium mb-8 relative z-10">{cert.issuer}</p>

                                        <div className="mt-auto flex items-center gap-3 text-[10px] font-mono font-bold text-cyber-cyan opacity-60 group-hover:opacity-100 transition-opacity group-hover:tracking-widest duration-300 relative z-10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                                            CLICK_TO_EXPAND
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show More Button */}
                    <div className="flex justify-center mt-8">
                        <motion.button
                            onClick={() => setShowAllCerts(!showAllCerts)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-3 px-8 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-cyber-cyan font-mono text-xs font-black tracking-[0.3em] uppercase hover:border-cyber-cyan/50 hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 via-transparent to-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {showAllCerts ? (
                                <>
                                    VIEW_LESS_CREDENTIALS <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    VIEW_ALL_CREDENTIALS <ChevronDown size={16} />
                                </>
                            )}
                            {/* Scanning Border Effect */}
                            <motion.div
                                animate={{ left: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute top-0 w-1/4 h-px bg-cyber-cyan shadow-[0_0_10px_#00f5ff] opacity-50"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Background Grid Polish */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-8 bg-gradient-to-t from-black/50 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Build Securely?</h2>
                    <p className="text-xl text-muted-blue mb-12">
                        Whether you need a secure web application, a penetration test, or just want to chat about tech.
                    </p>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href="https://github.com/mhazmatjunior" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-dark rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bsliysa8uSw%2BZPpMlDDbw0A%3D%3D" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-dark rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:mhazmatjunior@gmail.com" className="p-4 bg-slate-dark rounded-full hover:bg-error-red hover:text-white transition-all hover:scale-110">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="bg-slate-dark/50 border border-white/5 p-8 rounded-2xl max-w-lg mx-auto backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 text-terminal-green mb-4">
                            <Shield size={16} />
                            <span className="text-xs font-mono">ENCRYPTED COMMUNICATION AVAILABLE</span>
                        </div>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="bg-deep-space border border-white/10 p-3 rounded-lg focus:border-cyber-cyan outline-none transition-colors" />
                            <input type="email" placeholder="Email" className="bg-deep-space border border-white/10 p-3 rounded-lg focus:border-cyber-cyan outline-none transition-colors" />
                            <textarea placeholder="Message" rows={4} className="bg-deep-space border border-white/10 p-3 rounded-lg focus:border-cyber-cyan outline-none transition-colors" />
                            <button className="bg-gradient-to-r from-electric-blue to-neon-purple text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                Send Secure Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center text-sm text-muted-blue border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} M.Hassan Azmat. All rights reserved.</p>
            </footer>
        </div>
    );
}
