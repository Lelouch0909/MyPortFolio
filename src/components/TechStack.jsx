import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Cloud Infrastructure": [
        { name: "AWS", level: 90 },
        { name: "Google Cloud", level: 85 },
        { name: "Huawei Cloud", level: 80 },
        { name: "Terraform", level: 75 }
    ],
    "DevOps & CI/CD": [
        { name: "Docker & K8s", level: 95 },
        { name: "GitLab CI", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "ArgoCD", level: 80 }
    ],
    "Backend Engineering": [
        { name: "Java (Spring Boot)", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 }
    ]
};

const TechStack = () => {
    return (
        <div className="section" id="skills">
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
                Technical <span style={{ color: 'var(--secondary)' }}>Expertise</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: '2rem',
                            borderRadius: '20px',
                            borderTop: `3px solid ${index === 0 ? 'var(--primary)' : index === 1 ? 'var(--secondary)' : 'var(--accent)'}`
                        }}
                    >
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', textAlign: 'center' }}>{category}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {items.map((item, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                        <span>{item.name}</span>
                                        <span style={{ color: '#666' }}>{item.level}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.level}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            style={{
                                                height: '100%',
                                                background: index === 0 ? 'var(--primary)' : index === 1 ? 'var(--secondary)' : 'var(--accent)'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Skills Chips */}
            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <p style={{ color: '#888', marginBottom: '1rem' }}>Other Technologies & Tools</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                    {["React Native", "Three.js", "Redis", "Vault", "Linux System Admin", "Bash Scripting", "Grafana", "ELK Stack"].map((tech, i) => (
                        <span key={i} style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.05)',
                            fontSize: '0.9rem',
                            color: '#ccc'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
