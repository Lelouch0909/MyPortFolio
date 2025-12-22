import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Lead Developer",
        company: "AWDPay",
        date: "Mai 2024 – Present",
        description: "Development of Payment API consumed by multiple enterprises (incl. BETWINNER). Mobile payment app development. Innovation cell leadership.",
        stack: ["NextJs", "ExpressJs", "GitLab CI", "PostgreSQL", "Docker", "NGINX", "Spring Boot"]
    },
    {
        title: "Freelance Fullstack",
        company: "Tann Mann Foundation",
        date: "Nov 2023 – Mar 2024",
        description: "Designed and developed a web & mobile platform for emergency first aid ordering with realtime geolocation.",
        stack: ["React", "Google Maps API", "Docker", "Firebase", "React Native"]
    }
];

const Experience = () => {
    return (
        <div className="section" id="experience" style={{ position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--text-color)' }}
            >
                Work <span style={{ color: 'var(--primary)' }}>Experience</span>
            </motion.h2>

            <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        style={{ marginBottom: '4rem', position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0.5rem',
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '50%',
                            background: 'var(--secondary)',
                            boxShadow: '0 0 10px var(--secondary)'
                        }} />

                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>{exp.company} | {exp.date}</h4>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', maxWidth: '800px' }}>{exp.description}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {exp.stack.map((tech, i) => (
                                <span key={i} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '5px 10px',
                                    borderRadius: '15px',
                                    fontSize: '0.9rem',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
