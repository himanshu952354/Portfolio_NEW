import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Your University Name",
    duration: "2020 - 2024",
    description: "Focused on core computer science subjects including Data Structures, Algorithms, Operating Systems, Database Management Systems, and Web Engineering. Achieved a CGPA of [Your CGPA]."
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name",
    duration: "2018 - 2020",
    description: "Completed with a focus on Physics, Chemistry, and Mathematics. Scored [Your Percentage/Grade]."
  }
];

export default function Education() {
  return (
    <section id="education">
      <div style={{ width: '100%' }}>
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--glass-border)',
            zIndex: 1
          }}></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: index !== educationData.length - 1 ? '3rem' : 0,
                zIndex: 2
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '10px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 10px var(--primary-glow)',
                border: '4px solid var(--bg-color)'
              }}></div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 500 }}>{edu.institution}</h4>
                <div style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  {edu.duration}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
