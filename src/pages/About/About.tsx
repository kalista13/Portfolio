import styles from './About.module.scss';
export default function About() {
  return (
    <section id="About" className={styles.about}>
      <h1 className={styles.head}>About</h1>
      <p className={styles.para}>Hi, I'm Kalista Singh, I'm from Nepal. I'm a third year Computer Science Honors undergraduate student at the Univeristy of Alberta. I am a driven Computer Science student with hands-on experience in software development, robotics, embedded systems programming, and front-end web development. The opportunity to create in computer science excites me, whether it’s building applications, solving complex problems, or experimenting with new technologies. I love to code and am always eager to learn, grow, and take on new challenges in tech!</p>
      <h2 className={styles.skillsHead}>Technical Toolkit</h2>

      <div className={styles.skillGroups}>
        <div className={styles.skillGroup}>
          <h3>Languages</h3>
          <div className={styles.skillTags}>
            <span>Python</span>
            <span>C</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>SQL</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className={styles.skillGroup}>
          <h3>Robotics & Embedded</h3>
          <div className={styles.skillTags}>
            <span>ROS</span>
            <span>Open3D</span>
            <span>OpenCV</span>
            <span>RoboDK</span>
            <span>Raspberry Pi</span>
            <span>Arduino</span>
            <span>I2C</span>
            <span>GPIO</span>
            <span>G-code</span>
            <span>Revopoint SDK</span>
          </div>
        </div>

        <div className={styles.skillGroup}>
          <h3>Frameworks & Software</h3>
          <div className={styles.skillTags}>
            <span>React</span>
            <span>Next.js</span>
            <span>SCSS</span>
            <span>Tkinter</span>
            <span>Firebase</span>
            <span>Firestore</span>
            <span>Android Studio</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className={styles.skillGroup}>
          <h3>Databases & Testing</h3>
          <div className={styles.skillTags}>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>JUnit</span>
            <span>Mockito</span>
          </div>
        </div>
      </div>
  
    </section>
    
  );
}