import { motion } from 'framer-motion';
import { useState } from 'react';

const formContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const formItem = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact({ paddingBottom = '10rem' }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Optional: Email logic redirect or trigger
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem 0',
    border: 'none',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    background: 'transparent',
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease'
  };

  return (
    <section id="contact" style={{
      padding: `8rem var(--spacing-x) ${paddingBottom} var(--spacing-x)`,
      backgroundColor: 'var(--bg-color)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'flex-start'
      }}>
        <div>
          <motion.div 
            style={{ overflow: 'hidden' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={{
                hidden: { y: '120%', opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 400,
                margin: 0,
                letterSpacing: '-2px',
                color: 'var(--text-primary)',
                lineHeight: 1
              }}
            >
              Get in touch
            </motion.h2>
          </motion.div>
          <motion.div 
            style={{ overflow: 'hidden', marginTop: '1.5rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={{
                hidden: { y: '120%', opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
              style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1.2rem', 
                maxWidth: '450px', 
                lineHeight: 1.6,
                marginTop: 0
              }}
            >
              Have a project in mind or just want to say hi? Feel free to leave a message or email me directly at <a href="mailto:shekhar952354@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>shekhar952354@gmail.com</a>
            </motion.p>
          </motion.div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          variants={formContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={formItem}>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.15)'}
              />
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={formItem}>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.15)'}
              />
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={formItem}>
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.15)'}
              />
            </motion.div>
          </div>
          
          <div style={{ overflow: 'hidden' }}>
            <motion.button
              type="submit"
              variants={formItem}
              whileHover={{ scale: 1.02, backgroundColor: 'var(--primary)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.3rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '1rem',
                width: '100%',
                transition: 'background-color 0.3s ease'
              }}
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
