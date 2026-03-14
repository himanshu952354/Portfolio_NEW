import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["Java", "C++", "C", "Python", "JavaScript"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", items: ["MongoDB", "SQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative' }}>
      {/* Background glow for aesthetics */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'var(--secondary)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ width: '100%', zIndex: 1 }}>
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: '2rem',
                borderTop: '3px solid',
                borderTopColor: `hsl(${220 + (index * 40)}, 80%, 60%)`, // dynamic colors
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{skillGroup.category}</h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {skillGroup.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      cursor: 'default',
                      transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = `rgba(255, 255, 255, 0.15)`;
                      e.currentTarget.style.borderColor = `hsl(${220 + (index * 40)}, 80%, 60%, 0.5)`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
