import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certificates = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "2022",
    link: "#"
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "2023",
    link: "#"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" style={{ background: 'var(--surface-1)' }}>
      <div style={{ width: '100%' }}>
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(99, 102, 241, 0.2)' }}
            >
              <div style={{
                background: 'var(--primary-glow)',
                color: 'var(--primary)',
                padding: '1rem',
                borderRadius: '50%',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FiAward />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{cert.issuer}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Issued: {cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
