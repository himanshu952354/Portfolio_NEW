import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const primaryColor = '#283593';

  return (
    <div className="resume-page" style={{
      padding: '120px 20px 60px',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-color)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <style>{`
        @media print {
          .resume-page { padding: 0 !important; background: white !important; }
          .print-button, .resume-page > h2 { display: none !important; }
          .resume-paper { 
            box-shadow: none !important; 
            margin: 0 !important; 
            width: 100% !important; 
            max-width: none !important;
            border: none !important;
            padding: 20px 40px !important;
          }
        }
        .resume-paper {
          background: white;
          width: 100%;
          max-width: 900px;
          padding: 40px 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #ddd;
          color: #333;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          line-height: 1.35;
        }
        .resume-paper section {
          padding: 0 !important;
          display: block !important;
        }
        .resume-paper ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }
        .resume-paper li {
          display: list-item !important;
        }
        .section-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: ${primaryColor};
          margin-top: 0.4rem;
          margin-bottom: 0.05rem !important;
          text-align: left !important;
          text-transform: uppercase;
        }
        .section-divider {
          border-bottom: 1.3px solid ${primaryColor};
          margin-bottom: 0.1rem;
        }
        .blue-link {
          color: ${primaryColor};
          text-decoration: underline;
        }
        .bold-blue {
          color: ${primaryColor};
          font-weight: bold;
        }
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .skill-item {
          margin-bottom: 0.05rem;
          font-size: 0.92rem;
        }
        .skill-label {
          display: inline-block;
          min-width: 130px;
          color: ${primaryColor};
          font-weight: bold;
          vertical-align: top;
        }
        .skill-item > span:nth-child(2) {
          display: inline-block;
          width: calc(100% - 135px);
          vertical-align: top;
        }
        ul {
          padding-left: 1.2rem;
          margin: 0.1rem 0;
        }
        li {
          margin-bottom: 0.05rem;
        }
        p {
          margin: 0.05rem 0;
        }

        /* Responsive Mobile Layout */
        @media (max-width: 768px) {
          .resume-page {
            padding: 100px 15px 40px !important;
          }
          .resume-paper {
            padding: 25px 20px !important;
          }
          header h1 {
            font-size: 1.8rem !important;
          }
          .flex-between {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.2rem;
            margin-bottom: 0.5rem;
          }
          .flex-between > div {
            text-align: left !important;
            width: 100%;
          }
          .skill-label {
            display: block !important;
            min-width: 100% !important;
          }
          .skill-item > span:nth-child(2) {
            display: block !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* Page Header (Heading & Button) */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            fontSize: 'clamp(3rem, 7vw, 10rem)',
            lineHeight: 1,
            margin: 0,
            fontWeight: 400,
            letterSpacing: '-2px',
            color: 'var(--text-primary)'
          }}
        >
          Resume
        </h2>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-aos="fade-up"
          data-aos-duration="800"
          href="/Portfolio/Resume.pdf"
          download="Himanshu_Shekhar_Resume.pdf"
          className="print-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: primaryColor,
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          <FiDownload /> Download Resume
        </motion.a>
      </div>

      <div
        className="resume-paper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {/* Document Header Section */}
        <header>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: primaryColor, margin: '0 0 0.1rem 0' }}>Himanshu Shekhar</h1>
          <div className="flex-between" style={{ fontSize: '0.92rem' }}>
            <div style={{ flex: 1 }}>
              <p>LinkedIn: <a className="blue-link" href="https://linkedin.com/in/himanshu9523" target="_blank" rel="noreferrer">linkedin.com/in/himanshu9523</a></p>
              <p>GitHub: <a className="blue-link" href="https://github.com/himanshu952354" target="_blank" rel="noreferrer">github.com/himanshu952354</a></p>
            </div>
            <div style={{ textAlign: 'right', flex: 1 }}>
              <p>Email: <a className="blue-link" href="mailto:shekhar952354@gmail.com">shekhar952354@gmail.com</a></p>
              <p>Mobile: +91-7368989376</p>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section>
          <h2 className="section-title">SKILLS</h2>
          <div className="section-divider"></div>
          <ul style={{ marginTop: '0.1rem', listStyleType: 'disc' }}>
            <li className="skill-item">
              <span className="skill-label">Languages:</span>
              <span>Java, JavaScript</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Frontend:</span>
              <span>HTML5, CSS3, Tailwind CSS, React.js</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Backend:</span>
              <span>Node.js, Express.js, Socket.io, REST APIs, JWT Authentication</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Database & Tools:</span>
              <span>MongoDB, MySQL, Git, Github, Postman, Vercel, Render</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Core CS Skills:</span>
              <span>Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</span>
            </li>
            <li className="skill-item">
              <span className="skill-label">Soft Skills:</span>
              <span>Problem-Solving, Team work, Adaptability, Critical Thinking</span>
            </li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-divider"></div>

          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">
                PayFlow – Employee Payment & HR Management System |{' '}
                <a href="https://github.com/himanshu952354/Employee_Payment_Management" target="_blank" rel="noreferrer" className="blue-link">GitHub</a> |{' '}
                <a href="https://employee-payment-management.onrender.com/employees" target="_blank" rel="noreferrer" className="blue-link">Live</a>
              </p>
              <p style={{ fontWeight: 500 }}>May’ 2026</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Built a multi-tenant HR & Payroll system with separate Admin and Employee dashboards.</li>
              <li>Integrated Stripe and PayPal APIs for automated monthly salary payouts.</li>
              <li>Designed a secure multi-tenant database with role-based access control.</li>
              <li>Implemented real-time chat, attendance tracking, and employee management.</li>
              <li>Developed a global autocomplete search for faster employee and payroll operations.</li>
              <li><span className="bold-blue">Tech stack used:</span> PHP, Laravel, MySQL, Tailwind CSS, Stripe API, PayPal REST API, OAuth 2.0</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.2rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">
                PlanPilot – Project Management & Real-time Collaboration |{' '}
                <a href="https://github.com/himanshu952354/Plan-Pilot" target="_blank" rel="noreferrer" className="blue-link">GitHub</a> |{' '}
                <a href="https://plan-pilot-blush.vercel.app/" target="_blank" rel="noreferrer" className="blue-link">Live</a>
              </p>
              <p style={{ fontWeight: 500 }}>Feb’ 2026</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Built a real-time collaborative project management app using Socket.io for live state sync.</li>
              <li>Implemented secure authentication with Clerk (multi-tenant user management).</li>
              <li>Designed interactive dashboards with Recharts for productivity insights.</li>
              <li>Integrated Monaco Editor for in-app collaborative coding.</li>
              <li>Developed a secure team invitation system with join tokens.</li>
              <li><span className="bold-blue">Tech stack used:</span> React, Node.js, Express, MongoDB, Socket.io, Clerk, GSAP, Framer Motion</li>
            </ul>
          </div>

          <div style={{ marginTop: '0.2rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">
                Echo – AI-Powered Sentiment Analysis for Helpdesk Calls |{' '}
                <a href="https://github.com/himanshu952354/Echo" target="_blank" rel="noreferrer" className="blue-link">GitHub</a> |{' '}
                <a href="https://echo-gold.vercel.app/" target="_blank" rel="noreferrer" className="blue-link">Live</a>
              </p>
              <p style={{ fontWeight: 500 }}>Dec’ 2025</p>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Built a full-stack MERN application to analyze customer sentiment from helpdesk call recordings.</li>
              <li>Integrated Deepgram Nova-2 API for real-time speech-to-text transcription and sentiment analysis.</li>
              <li>Developed an interactive analytics dashboard with charts for sentiment, call volume, and SLA tracking.</li>
              <li>Implemented JWT authentication, secure audio uploads, and in-browser call recording.</li>
              <li>Automated manager alerts and support notifications using email integration.</li>
              <li><span className="bold-blue">Tech stack used:</span> React, Node.js, Express, MongoDB, Deepgram API, Tailwind CSS, Recharts, JWT, Multer, Nodemailer.</li>
            </ul>
          </div>
        </section>

        {/* TRAINING */}
        <section>
          <h2 className="section-title">TRAINING</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">
                Lovely Professional University |{' '}
                <a href="https://drive.google.com/file/d/1HY9LW4fPVX3I7Y1fFASYLD8pMVVeJf8x/view?usp=sharing" target="_blank" rel="noreferrer" className="blue-link">Certificate</a>
              </p>
              <p style={{ fontWeight: 500 }}>Jun’ 2025 – Jul' 2025</p>
            </div>
            <p style={{ fontWeight: 500 }}>Placement Ace: Java Bootcamp (Leetcode-Codeforces Edition)</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li>Applied core Data Structures and Algorithms concepts for placements.</li>
              <li>Solved 100+ problems on LeetCode and Codeforces to improve problem-solving skills.</li>
              <li><span className="bold-blue">Tech stacks used:</span> Java, Data Structures and Algorithms</li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section>
          <h2 className="section-title">CERTIFICATES</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>ChatGPT- 4 Prompt Engineering | Infosys | <a href="https://drive.google.com/file/d/1hR_xZfWZ9bMw4HHe_xh8szCo-towZUSC/view?usp=drive_link" target="_blank" rel="noreferrer" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>Aug’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Java Programming | NeoColab | <a href="https://drive.google.com/file/d/189gpbome7y3ROYzALjHpmSNpxpfhojEr/view?usp=drive_link" target="_blank" rel="noreferrer" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>May’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Human Computer Interaction | NPTEL | <a href="https://drive.google.com/file/d/1N2iTGO2KtDmcqHEEn_dVyXgwxnX03KOy/view?usp=sharing" target="_blank" rel="noreferrer" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>Apr’ 2025</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Data Structures and Algorithm | NeoColab | <a href="https://drive.google.com/file/d/1g3oaN_6JSwzXlHesYg7dDBUAt9u09_Jv/view?usp=drive_link" target="_blank" rel="noreferrer" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>Dec’ 2024</p>
            </div>
            <div className="flex-between" style={{ marginBottom: '0.02rem' }}>
              <p>Responsive Web Design | FreeCodeCamp | <a href="https://drive.google.com/file/d/1OffZxmGMx6jDHqr7mEX1NA0RyeRxsKvI/view?usp=drive_link" target="_blank" rel="noreferrer" className="blue-link">Certificate</a></p>
              <p style={{ fontWeight: 500 }}>Nov’ 2023</p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="section-divider"></div>
          <ul style={{ listStyleType: 'disc', marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <li>Solved 600+ algorithmic problems across LeetCode, CodeChef, and Codeforces.</li>
            <li>
              Achieved contest ratings of 1600+ (LeetCode), 1400+ (CodeChef), and 1000 (Codeforces).{' '}
              <a href="https://codolio.com/profile/Dj952354" target="_blank" rel="noreferrer" className="blue-link">Codolio</a>
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="section-title">EDUCATION</h2>
          <div className="section-divider"></div>
          <div style={{ marginTop: '0.1rem', fontSize: '0.9rem' }}>
            <div className="flex-between">
              <p className="bold-blue">Lovely Professional University</p>
              <p style={{ fontWeight: 500 }}>Phagwara, Punjab</p>
            </div>
            <div className="flex-between">
              <p>Bachelor of Technology - Computer Science and Engineering; <strong>CGPA: 7.68</strong></p>
              <p style={{ fontWeight: 500 }}>August 2023 - Present</p>
            </div>

            <div style={{ marginTop: '0.2rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Ram Krishna College</p>
                <p style={{ fontWeight: 500 }}>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Intermediate; <strong>Percentage: 83%</strong></p>
                <p style={{ fontWeight: 500 }}>April 2021 - March 2022</p>
              </div>
            </div>

            <div style={{ marginTop: '0.2rem' }}>
              <div className="flex-between">
                <p className="bold-blue">Regional Secondary School</p>
                <p style={{ fontWeight: 500 }}>Madhubani, Bihar</p>
              </div>
              <div className="flex-between">
                <p>Matriculation; <strong>Percentage: 82%</strong></p>
                <p style={{ fontWeight: 500 }}>April 2019 - March 2020</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
