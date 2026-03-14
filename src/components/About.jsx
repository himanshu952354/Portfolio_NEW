import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about">
            <div style={{ width: '100%' }}>
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '2.5rem' }}
                    >
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Hello! I'm <strong>Himanshu Shekhar</strong>, a passionate and dedicated Full Stack Developer. I have a strong foundation in <span className="text-gradient">Data Structures and Algorithms</span> and love solving complex programming problems.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            While I have explored C, C++, and Python, my primary language for coding is <strong>Java</strong>. My expertise extends to building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            I have developed full-stack projects that include secure authentication, robust backend architectures, and dynamic frontend experiences. I am currently looking for exciting opportunities to work as a Software Developer.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                    >
                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>☕</div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Java Specialist</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Primary language for problem-solving and software development.</p>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>⚛️</div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>MERN Stack</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Building dynamic frontend and robust backend architectures.</p>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>🧠</div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Problem Solver</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Enjoys tackling complex Data Structures and Algorithms.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
