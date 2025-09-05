import styles from './About.module.scss';
export default function About() {
  return (
    <section id="About" className={styles.about}>
      <h1 className={styles.head}>About</h1>
      <p className={styles.para}>Hi, I'm Kalista Singh, I'm from Nepal. I'm a third year Computer Science Honors undergraduate student at the Univeristy of Alberta. I am a driven Computer Science student with hands-on experience in software development, embedded systems programming, and front-end web development. The opportunity to create in computer science excites me, whether it’s building applications, solving complex problems, or experimenting with new technologies. I love to code and am always eager to learn, grow, and take on new challenges in tech!</p>
      <h2 className={styles.skillsHead}>Skills</h2>
      <div className={styles.skills}>
        <div className={styles.skillItem}>
          <img src="/assets/images/html.png" alt="HTML" className={styles.skillIcon} />
          <span>HTML</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/css.png" alt="CSS" className={styles.skillIcon} />
          <span>CSS</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/js.png" alt="JavaScript" className={styles.skillIcon} />
          <span>JavaScript</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/ts.png" alt="TypeScript" className={styles.skillIcon} />
          <span>TypeScript</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/react.png" alt="React" className={styles.skillIcon} />
          <span>React</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/python.png" alt="Python" className={styles.skillIcon} />
          <span>Python</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/c.png" alt="C" className={styles.skillIcon} />
          <span>C</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/java.png" alt="Java" className={styles.skillIcon} />
          <span>Java</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/sql.png" alt="SQL" className={styles.skillIcon} />
          <span>SQL</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/mongo.png" alt="MongoDB" className={styles.skillIcon} />
          <span>MongoDB</span>
        </div>
        <div className={styles.skillItem}>
          <img src="/assets/images/firebase.png" alt="Firebase" className={styles.skillIcon} />
          <span>Firebase</span>
        </div>
      </div>
    </section>
    
  );
}