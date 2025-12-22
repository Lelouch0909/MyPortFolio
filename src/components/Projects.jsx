import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AWDPay API",
        category: "Fintech Core",
        description: "Architected and developed a secure payment aggregator API facilitating transactions across Africa (Mobile Money, Cards). Implemented PCI-DSS compliant security standards, HMAC signature verification, and automated reconciliation systems.",
        stack: ["Java Spring Boot", "PostgreSQL", "Redis", "Docker", "Vault"],
        link: "https://documentation-7e8c19.gitlab.io/",
        featured: true
    },
    {
        title: "KubeScale Orchestrator",
        category: "Cloud Infrastructure",
        description: "(Fictional) A custom Kubernetes operator built in Go to automatically scale stateless microservices based on custom Prometheus metrics (request latency & queue depth) rather than just CPU/RAM.",
        stack: ["Go", "Kubernetes", "Prometheus", "Helm", "gRPC"],
        link: "#",
        featured: true
    },
    {
        title: "AlgoTrade Engine",
        category: "High-Performance Computing",
        description: "(Fictional) Low-latency trading engine capable of processing 50k orders/second. Built with Rust for memory safety and zero-cost abstractions, utilizing ring buffers and lock-free data structures.",
        stack: ["Rust", "C++", "ZeroMQ", "Linux Kernel Tuning"],
        link: "#",
        featured: false
    },
    {
        title: "Lambda-UI",
        category: "Open Source",
        description: "Created and maintained a comprehensive React Native component library used by 1000+ developers. Focus on performance, accessibility (a11y), and native feel across iOS and Android.",
        stack: ["React Native", "TypeScript", "NPM", "CI/CD"],
        link: "https://lambda-ui.dev/",
        featured: false
    },
    {
        title: "Project LINA",
        category: "Social Impact AI",
        description: "Award-winning smart glasses for the visually impaired. Uses geometric deep learning to analyze terrain and obstacle depth in real-time, providing haptic feedback to the user.",
        stack: ["Python", "TensorFlow Lite", "Raspberry Pi", "OpenCV"],
        link: "#",
        featured: false
    }
];

const Projects = () => {
    return (
        <div className="section" id="projects">
            <div style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    Selected <span style={{ color: 'var(--primary)' }}>Projects</span>
                </h2>
                <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px' }}>
                    A showcase of mission-critical systems, open-source tools, and high-performance engineering.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                    >
                        {/* Hover Glow Effect */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '5px',
                            background: project.featured ? 'var(--primary)' : 'var(--secondary)'
                        }} />

                        <div style={{
                            fontSize: '0.8rem',
                            color: project.featured ? 'var(--primary)' : 'var(--secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '1rem',
                            fontWeight: 'bold'
                        }}>
                            {project.category}
                        </div>

                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>{project.title}</h3>

                        <p style={{ marginBottom: '2rem', color: '#bbb', lineHeight: '1.7', flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {project.stack.map((tag, i) => (
                                <span key={i} style={{
                                    fontSize: '0.85rem',
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                alignSelf: 'flex-start',
                                color: 'var(--text-color)',
                                borderBottom: '1px solid var(--primary)',
                                paddingBottom: '2px',
                                fontSize: '0.9rem'
                            }}>
                                View Project {'->'}
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
