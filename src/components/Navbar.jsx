import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StaggeredMenu from './StaggeredMenu';

const navLinks = [
  { title: 'Home', path: 'home' },
  { title: 'Projects', path: 'projects' },
  { title: 'About Me', path: 'about' }
];

const menuItems = navLinks.map(link => ({
  label: link.title,
  ariaLabel: `Go to ${link.title} section`,
  link: link.path
}));

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/skrshekharmdr' }, // Add original URLs if known, leaving generic for now
  { label: 'LinkedIn', link: 'https://linkedin.com/' } 
];

export default function Navbar({ setIsHoveringRing }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem var(--spacing-x)' : '1.5rem var(--spacing-x)',
        background: scrolled ? 'rgba(var(--bg-color-rgb), 0.8)' : 'transparent',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Interactive Logo Ring (Double) */}
      <motion.div
        onMouseEnter={() => setIsHoveringRing && setIsHoveringRing(true)}
        onMouseLeave={() => setIsHoveringRing && setIsHoveringRing(false)}
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          border: '1.5px solid var(--text-primary)',
          flexShrink: 0,
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {/* Inner Ring */}
        <motion.div 
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            border: '1.5px solid var(--text-primary)'
          }}
          whileHover={{
            backgroundColor: 'var(--text-primary)',
            transition: { duration: 0.2 }
          }}
        />
      </motion.div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '2rem' }}>
        {/* Staggered Menu Container */}
        <div style={{ position: 'relative', zIndex: 100 }}>
             <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="var(--text-primary)"
                openMenuButtonColor="#ffffff" // Toggle button becomes white on black background
                changeMenuColorOnOpen={true}
                colors={['#1a1a1a', '#000000']}
                accentColor="var(--accent-color)"
            />
        </div>
      </div>
    </motion.nav>
  );
}
