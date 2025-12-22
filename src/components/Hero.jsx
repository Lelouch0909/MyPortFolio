import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';


const NetworkParticles = ({ count = 300 }) => {
    const points = useRef();

    // Generate random points for the network
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Create a cloud structure
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;
            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Rotate the cloud slowly
        points.current.rotation.y = time * 0.05;
        points.current.rotation.x = time * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#00ff88"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Connections between close points to simulate network/nodes
const NetworkConnections = ({ count = 50 }) => {
    // Simplified static lines for performance/aesthetic (random lines)
    const lines = useMemo(() => {
        const points = [];
        for (let i = 0; i < count; i++) {
            const x1 = (Math.random() - 0.5) * 10;
            const y1 = (Math.random() - 0.5) * 10;
            const z1 = (Math.random() - 0.5) * 10;
            const x2 = x1 + (Math.random() - 0.5) * 4;
            const y2 = y1 + (Math.random() - 0.5) * 4;
            const z2 = z1 + (Math.random() - 0.5) * 4;
            points.push(new THREE.Vector3(x1, y1, z1));
            points.push(new THREE.Vector3(x2, y2, z2));
        }
        return points;
    }, [count]);

    return (
        <lineSegments>
            <bufferGeometry setFromPoints={lines} />
            <lineBasicMaterial color="#00ccff" transparent opacity={0.2} />
        </lineSegments>
    )
}

const Hero = () => {
    return (
        <div style={{ height: '100vh', position: 'relative', width: '100%', background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)' }}>
            {/* 3D Canvas */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                    <ambientLight intensity={0.5} />
                    <NetworkParticles />
                    <NetworkConnections />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ textAlign: 'center' }}
                >
                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: '800',
                        background: '-webkit-linear-gradient(45deg, #00ff88, #00ccff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '0.5rem',
                        textShadow: '0 0 30px rgba(0,255,136,0.3)'
                    }}>
                        LONTSI HERMANN
                    </h1>
                    <h2 style={{
                        fontSize: '2rem',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        color: '#fff'
                    }}>
                        Architecting the Cloud
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#aaa',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        DevOps Engineer • Software Architect • Fullstack Developer
                        <br />
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>Building scalable, secure, and automated infrastructure.</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
