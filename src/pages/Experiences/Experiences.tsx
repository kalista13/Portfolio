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
            <h2 className={styles.jobTitle}>Mission Spacewalker</h2>
            <p className={styles.role}>
              Co-Lead Web Developer <span className={styles.date}>| 5/25 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Developed responsive front-end interfaces using React, TypeScript, JavaScript, and CSS.</li>
              <li>Designed website layouts and user flows in Figma.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Mission SpaceWalker</h2>
            <p className={styles.role}>
              Software Co-Lead <span className={styles.date}>| 9/24 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Co-lead software development for a cyanobacteria bioreactor in the Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX).</li>
              <li>Developed a Python/Tkinter dashboard to display live camera feed, monitor sensor data, and control hardware (flow sensors, pressure sensors, stepper motor).</li>
              <li>Integrated software with hardware systems (Raspberry Pi, actuators, sensors) to ensure smooth operation.</li>
              <li>Conducted testing of all components to verify data accuracy and system reliability.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Fred Otto DiscoverE Program</h2>
            <p className={styles.role}>
              Curriculum Specialist <span className={styles.date}>| 9/25 - Present</span>
            </p>
            <ul className={styles.details}>
              <li>Co-lead software development for a cyanobacteria bioreactor in the Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX).</li>
              <li>Developed a Python/Tkinter dashboard to display live camera feed, monitor sensor data, and control hardware (flow sensors, pressure sensors, stepper motor).</li>
              <li>Integrated software with hardware systems (Raspberry Pi, actuators, sensors) to ensure smooth operation.</li>
              <li>Conducted testing of all components to verify data accuracy and system reliability.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Fred Otto DiscoverE Program</h2>
            <p className={styles.role}>
              Instructor <span className={styles.date}>| 5/25 - 8/25</span>
            </p>
            <ul className={styles.details}>
              <li>Promoting STEM engagement through hands-on projects.</li>
              <li>Instructing engineering focused summer camp sessions for youth as part of DiscoverE.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Network for Applied Tech</h2>
            <p className={styles.role}>
               Web Developer Associate <span className={styles.date}>| 1/25 - 5/25</span>
            </p>
            <ul className={styles.details}>
              <li>Built front-end features and collaborated on full-stack development using Next.js, TypeScript, React, and CSS.</li>
              <li>Improved site functionality and worked with teammates on design and deployment.</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>AIESEC in Edmonton</h2>
            <p className={styles.role}>
              Team Leader of Outgoing Exchange  <span className={styles.date}>| 10/23 - 5/25</span>
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
