"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Code, Shield, ExternalLink, Terminal, Download } from "lucide-react";

export default function Portfolio() {
    return (
        <div className="w-full min-h-screen bg-deep-space text-silver-gray font-sans overflow-y-auto overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
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
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
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
                    <div className="w-full h-full rounded-full bg-slate-dark flex items-center justify-center overflow-hidden">
                        {/* Placeholder Avatar */}
                        <span className="text-4xl font-bold text-white">ME</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-slate-dark p-2 rounded-full border border-white/10">
                        <Shield className="text-terminal-green" size={24} />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-center mb-6"
                >
                    Full-Stack Developer <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
                        & Cybersecurity Analyst
                    </span>
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
                    <button className="px-8 py-3 bg-electric-blue text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-electric-blue/20">
                        View My Work
                    </button>
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
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-slate-dark border border-white/10 rounded-xl overflow-hidden group shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-white font-bold border border-white px-4 py-2 rounded">View Demo</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition-colors">Secure E-Commerce Platform</h3>
                                    <p className="text-sm text-muted-blue mb-4">A full-stack e-commerce solution with integrated payment gateway and robust security features.</p>
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-xs bg-electric-blue/10 text-electric-blue px-2 py-1 rounded">Next.js</span>
                                        <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">Stripe</span>
                                        <span className="text-xs bg-terminal-green/10 text-terminal-green px-2 py-1 rounded">Security+</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><Github size={16} /> Code</a>
                                        <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><ExternalLink size={16} /> Live</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                        <a href="#" className="p-4 bg-slate-dark rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="#" className="p-4 bg-slate-dark rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-4 bg-slate-dark rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-110">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="p-4 bg-slate-dark rounded-full hover:bg-error-red hover:text-white transition-all hover:scale-110">
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
