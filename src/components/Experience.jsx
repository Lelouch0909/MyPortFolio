import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Lead Developer",
        company: "AWDPay",
        date: "Mai 2024 – Present",
 description: `Leading the design, architecture, and development of robust payment APIs, used by major enterprises (including BETWINNER).
Oversaw the end-to-end development and deployment of a high-performance mobile payment application.
Managed cloud infrastructure on AWS, automated environments using Docker and NGINX, and handled large-scale PostgreSQL databases.
Established advanced observability solutions (monitoring, alerting, logging) to ensure system reliability, health, and quick incident response.
Led the innovation cell: technology watch, proof of concepts, and mentoring of the development team.`,
    stack: ["Next.js", "Spring Boot", "GitLab CI", "PostgreSQL", "Docker", "NGINX", "AWS", "Monitoring", "Alerting", "Cloudwatch", "Prometheus", "Grafana"]
    },
    {
    title: "Freelance Backend Developer",
    company: "GreenFlow Solutions",
    date: "Jul 2024 – Feb 2025",
    description: `Designed and implemented robust backend services for a SaaS platform dedicated to real-time environmental data aggregation and analytics.
Developed RESTful APIs using Node.js and Express, optimized for high-throughput sensor data ingestion and secure data processing.
Architected scalable data models and optimized PostgreSQL queries for efficient storage and fast retrieval of millions of records.
Set up CI/CD pipelines with GitHub Actions and Docker, automating testing, security checks, and deployments to AWS cloud infrastructure.
Established comprehensive observability with Prometheus and Grafana (metrics and alerting), along with Sentry for error monitoring.
Handled ongoing maintenance, troubleshooting, and regular system updates to ensure 24/7 reliability and compliance with best security practices.`,
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "GitLab CI",
      "AWS",
      "Prometheus",
      "Grafana",
      "Sentry",
      "REST API"
    ]
} ,

    {
    title: "Freelance Fullstack Developer",
    company: "Tann Mann Foundation",
    date: "Nov 2023 – Mar 2024",
    description: `Designed and developed a web and mobile platform for emergency first aid ordering, featuring real-time geolocation and responsive interfaces.
Set up automated build and deployment pipelines using Docker containers for both frontend and backend services.
Integrated Firebase for authentication, cloud functions, and serverless backend operations, ensuring scalability and reliability.`,
    stack: [
      "React",
      "React Native",
      "Google Maps API",
      "Docker",
      "Firebase",
      "CI/CD",
      "Monitoring",
      "Logging"
    ]
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
