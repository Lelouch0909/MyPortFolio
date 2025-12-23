import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AWDPay API",
        category: "Fintech Core",
        description: "Architected and developed a secure payment aggregator API facilitating transactions across Africa (Mobile Money, Cards). Implemented PCI-DSS compliant security standards, HMAC signature verification, and automated reconciliation systems.",
        stack: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "Vault", "Prometheus", "Zipkin", "Pulsar", "Microservices"],
        link: "https://documentation-7e8c19.gitlab.io/",
        featured: true
    },
    {
        "title": "Starbucks Kubernetes",
        "category": "Cloud Native / DevOps",
        "description": "Demo project for deploying a Starbucks-inspired application on a Kubernetes cluster. Provides a practical example of orchestrating, scaling, and managing Node.js applications in a cloud-native environment.",
        "stack": ["Kubernetes", "Docker", "Node.js", "PM2 ", "Shell script", "Jenkins", "SonarQube"],
        "link": "https://github.com/Lelouch0909/starbucks-kubernetes",
        "featured": false
    },
    {
        "title": "Rubberduck AI Agent",
        "category": "AI for Developer Education",
        "description": "An intelligent agent—similar to ChatGPT—designed to help users learn microservices development. Built in Spring and leveraging a cloud-native stack, it integrates Zipkin for tracing, Prometheus for monitoring, Apache Pulsar for messaging, and uses Langchain4j and Spring AI for conversational capabilities.",
        "stack": ["Spring Boot", "Microservices", "Zipkin", "Prometheus", "Apache Pulsar", "Langchain4j", "Spring AI"],
        "links": [
            { "label": "📂 Service Registry", "url": "https://github.com/Lelouch0909/rubberduck-service-register" },
            { "label": "🧠 Agent Rag Logic", "url": "https://github.com/Lelouch0909/rubberduck-metier-service-discussion" },
            { "label": "🧠 Chat Rag Agent", "url": "https://github.com/Lelouch0909/rubberduck-metier-service-connector" }
        ],
        "featured": true
    },

    {
        title: "Project LINA",
        category: "Social Impact AI",
        description: "Award-winning smart glasses for the visually impaired. Uses geometric deep learning to analyze terrain and obstacle depth in real-time, providing haptic feedback to the user.",
        stack: ["Python", "LangChain", "Keras", "Raspberry Pi", "OpenCV"],
        link: "https://github.com/Lelouch0909/LINA",
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

                        {/* Links Section: Supports single 'link' or multiple 'links' */}
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignSelf: 'flex-start' }}>
                            {project.links ? (
                                project.links.map((linkItem, idx) => (
                                    <a key={idx} href={linkItem.url} target="_blank" rel="noopener noreferrer" style={{
                                        color: 'var(--text-color)',
                                        borderBottom: '1px solid var(--primary)',
                                        paddingBottom: '2px',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        maxWidth: 'max-content'
                                    }}>
                                        {linkItem.label} {'->'}
                                    </a>
                                ))
                            ) : (
                                project.link && project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                        color: 'var(--text-color)',
                                        borderBottom: '1px solid var(--primary)',
                                        paddingBottom: '2px',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        maxWidth: 'max-content'
                                    }}>
                                        View Project {'->'}
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
