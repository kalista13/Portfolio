import styles from './Home.module.scss';
import github from "../../assets/images/image 4.png";
import linkedin from "../../assets/images/image 16.png";
import email from "../../assets/images/image 3.png";


export default function Home() {
  return (
    <div className={styles.home} id = "home">
      <section className={styles.main}>
        <p className={styles.intro}>Hello there!</p>
        <p className={styles.intro}>Welcome to my website, I'm</p>
        <h1 className={styles.name}>Kalista</h1>

        <div className={styles.socials}>
          <a
            href="https://github.com/kalista13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/kalista-singh-cs13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:kalistasingh4@gmail.com.com">
            <img src={email} alt="Email" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            My Resume
          </a>
        </div>
      </section>
    </div>

  );
}