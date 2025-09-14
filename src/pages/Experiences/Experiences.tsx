import styles from './Experiences.module.scss';

export default function Experiences() {
  return (
    <section id="Experiences" className={styles.experiences}>
      <h1 className={styles.head}>Experiences</h1>
      <h3 className={styles.subhead}>Here is what I've been up to!</h3>

      <div className={styles.timeline}>
        {/* Experience 1 */}

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Software Co-Lead</h2>
            <p className={styles.role}>
               Mission SpaceWalker<span className={styles.date}>| 9/24 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Co-lead software development for a cyanobacteria bioreactor project as a part of the Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX).</li>
              <li>Engineered a python/Tkinter dashboard display live camera feed, minute sensor data and control hardware.</li>
              <li>Programmed and tested embedded software for sensors and system components, ensuring accurate data capture and performance.</li>
              <li>Oversee smooth integration of software with hardware systems</li>
            </ul>
          </div>
        </div>


        {/* Experience 2 */}
        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Web Developer Co-Lead</h2>
            <p className={styles.role}>
               Mission Spacewalker<span className={styles.date}>| 5/25 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Developed responsive front-end interfaces using React, Typescript, and CSS, improving project outreach and engagement..</li>
              <li>Designed website layouts and user flows in Figma.</li>
              <li>Integrated deployment workflows with GitHub Pages/Vercel.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Web Developer Associate</h2>
            <p className={styles.role}>
               Network for Applied Tech<span className={styles.date}>| 1/25 - 5/25</span>
            </p>
            <ul className={styles.details}>
              <li>Built frontend features and contributed to full-stack development with Next.js, React, TypeScript, and SCSS</li>
              <li>Collaborated with cross-functional teams to design and deploy scalable, responsive websites.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Curriculum Specialist </h2>
            <p className={styles.role}>
              Fred Otto DiscoverE Program<span className={styles.date}>| 9/25 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Applied computational thinking and problem-solving skills to develop innovative, interactive hands-on coding/engineering projects that introduces youth to computer science, engineering, and technology concepts.</li>
              <li>Collaborated with a multidisciplinary team to create, test, and optimize educational content.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Instructor </h2>
            <p className={styles.role}>
              Fred Otto DiscoverE Program<span className={styles.date}>| 5/25 - 8/25</span>
            </p>
            <ul className={styles.details}>
              <li>Delivered STEM summer camps introducing youth to coding, robotics, and engineering concepts</li>
              <li>Promoted engagement in CS and technology through interactive, project-based learning.</li>
            </ul>
          </div>
        </div>

        

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Team Leader of Outgoing Exchange</h2>
            <p className={styles.role}>
              AIESEC in Edmonton<span className={styles.date}>| 10/23 - 5/25</span>
            </p>
            <ul className={styles.details}>
              <li>Implementing marketing strategies to recruit exchange participants.</li>
              <li>Administering applications, conducting interviews and assisting exchange participants in finding a suitable volunteer opportunity.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
