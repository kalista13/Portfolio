//import { Link } from "react-router-dom";
import styles from './Navigation.module.scss';

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();  // preventDefault() stops the browser from jumping instantly to the section
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
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