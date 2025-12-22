import React from 'react';
import { motion } from 'framer-motion';

const certs = [
    "React Native Developer (FrontEnd Master - 2025)",
    "Huawei Cloud Architect Associate (2024)",
    "AI Engineer for Data Scientists (DataCamp - 2025)",
    "IBM DevOps (IBM - 2025)",
    "Docker Foundations (Docker - 2024)",
    "Spring Boot Professional (Spring - 2025)",
    "JavaScript Foundations Professional (Mozilla - 2024)",
    "Project Management (Microsoft - 2024)",
    "IT Leadership (ServiceNow - 2024)"
];

const Certifications = () => {
    return (
        <div className="section" id="certifications">
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                Certifications & <span style={{ color: 'var(--accent)' }}>Awards</span>
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, background: 'var(--primary)', color: 'black' }}
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            border: '1px solid var(--primary)',
                            color: 'var(--text-color)',
                            background: 'rgba(0,0,0,0.2)',
                            cursor: 'default'
                        }}
                    >
                        {cert}
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>Honors</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>🏆 Huawei ICT Challenge 2025 - 1st Prize "Tech" (Project LINA)</p>
                <p style={{ fontSize: '1.2rem' }}>🏆 Camtel Blue Tech Challenge 2024 - 1st Prize "Handicap" (Project LINA)</p>
            </div>
        </div>
    );
};

export default Certifications;
