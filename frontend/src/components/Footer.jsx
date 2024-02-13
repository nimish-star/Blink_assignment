import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      
      <a
        href="https://github.com/your-github-repo"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}
      >
        <FaGithub size={30} />
      </a>
      <style>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
