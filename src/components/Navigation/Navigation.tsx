//import { Link } from "react-router-dom";
import styles from './Navigation.module.scss';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.opaque : ''}`}>
      <div className={styles['nav-links']}>
        <a href="#Home" onClick={(e) => handleScroll(e, 'Home')}>Home</a>
        <a href="#About" onClick={(e) => handleScroll(e, 'About')}>About</a>
        <a href="#Experiences" onClick={(e) => handleScroll(e, 'Experiences')}>Experiences</a>
        <a href="#Projects" onClick={(e) => handleScroll(e, 'Projects')}>Projects</a>
        <a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')}>Contact Me</a>
      </div>
    </nav>
  );
}