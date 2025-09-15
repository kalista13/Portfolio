import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; 2025 Kalista Singh</p>

      <div className={styles.icons}>
        <a
          href="https://github.com/kalista13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/image 4.png" alt="GitHub" className={styles.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/kalista-singh-cs13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/image 16.png" alt="LinkedIn" className={styles.icon} />
        </a>

        <a href="mailto:kalistasingh4@gmail.com">
          <img src="/assets/images/image 3.png" alt="Email" className={styles.icon} />
          
        </a>
      </div>
    </footer>
  );
}
