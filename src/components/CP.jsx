import { motion } from 'framer-motion';
import { FiCode, FiTerminal } from 'react-icons/fi';

const cpData = [
  {
    platform: "LeetCode",
    stats: "500+ Problems Solved",
    rating: "Top 5%",
    link: "#",
    icon: <FiCode />
  },
  {
    platform: "Codeforces",
    stats: "Specialist",
    rating: "Max Rating: 1450",
    link: "#",
    icon: <FiTerminal />
  }
];

const hackathons = [
  {
    title: "Global Hack Week",
    position: "Winner - Best Web App",
    description: "Built a full-stack platform for connecting local farmers directly with consumers, effectively cutting out the middleman."
  },
  {
    title: "Smart India Hackathon",
    position: "Finalist",
    description: "Developed an AI-driven dashboard that visualizes predictive data models for urban traffic management."
  }
];

export default function CP() {
  return (
    <section id="cp">
      <div style={{ width: '100%' }}>
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Competitive Programming & Hackathons
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {/* CP Stats */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Coding Profiles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {cpData.map((profile, i) => (
                <motion.a
                  key={i}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    {profile.icon}
                  </div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{profile.platform}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{profile.stats}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{profile.rating}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Hackathons & Competitions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {hackathons.map((hack, i) => (
                <motion.div
                  key={i}
                  className="glass-card"
                  style={{ padding: '2rem', borderLeft: '4px solid var(--accent)' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{hack.title}</h4>
                    <span style={{
                      background: 'rgba(236, 72, 153, 0.1)',
                      color: 'var(--accent)',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {hack.position}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{hack.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
