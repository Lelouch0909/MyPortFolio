import React, { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PointMaterial, Points } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const CyberGlobe = () => {
    const count = 4000; // Dense particle count
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const radius = 9;
        for (let i = 0; i < count; i++) {
            // Uniform point distribution on sphere surface
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);

            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.08; // Smooth rotation
        }
    });

    return (
        <group ref={pointsRef}>
            {/* The Particle Sphere */}
            <Points positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00ccff"
                    size={0.08}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* Inner Glow Sphere (Atmosphere) */}
            <mesh>
                <sphereGeometry args={[8.8, 32, 32]} />
                <meshBasicMaterial color="#00ff88" transparent opacity={0.05} />
            </mesh>

            {/* Outer Connecting Lines (Abstract) */}
            <mesh scale={[1.05, 1.05, 1.05]}>
                <sphereGeometry args={[9, 20, 20]} />
                <meshBasicMaterial color="#00ccff" wireframe transparent opacity={0.03} />
            </mesh>
        </group>
    );
};

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ height: '100vh', position: 'relative', width: '100%', background: '#050505' }}>
            {/* 3D Canvas */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Canvas camera={{ position: [0, 0, 18], fov: 60 }} dpr={[1, 2]}>
                    <fog attach="fog" args={['#050505', 15, 35]} />
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={null}>
                        <CyberGlobe />
                    </Suspense>

                    {/* Stars removed for cleaner look */}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="hero-container"
                    style={{ pointerEvents: 'auto' }}
                >

                    <h1 className="hero-title">
                        LONTSI HERMANN
                    </h1>
                    <h2 className="hero-subtitle">
                        Software DevOps Engineer
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#e2e8f0',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        marginBottom: '3rem',
                        textAlign: 'center'
                    }}>
                        Designing resilient global infrastructure and automated cloud systems.
                    </p>

                    <div className="hero-buttons">
                        <button
                            onClick={scrollToContact}
                            className="hero-btn"
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                border: '1px solid #00ff88',
                                background: 'rgba(0, 255, 136, 0.1)',
                                backdropFilter: 'blur(5px)',
                                color: '#00ff88',
                                cursor: 'pointer',
                                boxShadow: '0 0 20px rgba(0,255,136,0.2)',
                                transition: 'all 0.2s ease',
                                letterSpacing: '1px',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'rgba(0, 255, 136, 0.2)';
                                e.target.style.boxShadow = '0 0 35px rgba(0,255,136,0.5)';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'rgba(0, 255, 136, 0.1)';
                                e.target.style.boxShadow = '0 0 20px rgba(0,255,136,0.2)';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            GET IN TOUCH
                        </button>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                border: '1px solid #fff',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(5px)',
                                color: '#fff',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <span>Follow on</span>
                            <i className="fa-brands fa-x-twitter" style={{ fontSize: '1.2rem' }}></i>
                        </a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.9rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            marginTop: '1rem',
                            cursor: 'default'
                        }}
                    >
                        Explore My World
                        <div style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>↓</div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
