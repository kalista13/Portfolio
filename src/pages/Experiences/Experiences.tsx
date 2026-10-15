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
            <h2 className={styles.jobTitle}>Robotics and Automation Intern</h2>
            <p className={styles.role}>
               Additive Design and Manufacturing Lab<span className={styles.date}>| 1/26 - 8/26</span>
            </p>
            <ul className={styles.details}>
              <li>Developed a robotic grinding pipeline converting 3D point-cloud scans into executable robot toolpaths using Python, ROS, G-code, and RoboDK.</li>
              <li>Integrated a Revopoint 3D scanner with camera calibration, coordinate transformations, AprilTag pose estimation, and TCP calibration for robot alignment.</li>
              <li>Developed surface deviation analysis to identify defects, generate heatmaps, and adapt grinding toolpaths to scanned surface geometry</li>
              <li>Validated generated toolpaths through visualization, RoboDK simulation, and physical robot execution, identifying and refining alignment errors</li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Software Co-Lead</h2>
            <p className={styles.role}>
               Mission SpaceWalker<span className={styles.date}>| 9/24 - 1/26</span>
            </p>
            <ul className={styles.details}>
              <li>Co-lead software development for a cyanobacteria bioreactor project as a part of the Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX).</li>
              <li>Developed a Python/Tkinter control dashboard for real-time sensor telemetry, camera monitoring, and manual/automated hardware control.</li>
              <li>Integrated pressure, flow, and temperature sensors using I2C/GPIO and implemented valve, stepper-motor, and system sequencing logic.</li>
              <li>Implemented safety and reliability logic for sensor monitoring, emergency hardware control, and local data handling during system operation.</li>
            </ul>
          </div>
        </div>


        {/* Experience 2 */}
        <div className={styles.experienceItem}>
          <div className={styles.content}>
            <h2 className={styles.jobTitle}>Web Developer Co-Lead</h2>
            <p className={styles.role}>
               Mission Spacewalker<span className={styles.date}>| 5/25 - 1/26 </span>
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
            <h2 className={styles.jobTitle}>Teaching Assistant</h2>
            <p className={styles.role}>
               University of Alberta<span className={styles.date}>| 1/26 - 5/26 </span>
            </p>
            <ul className={styles.details}>
              <li>Assisted students during weekly lab sessions by answering questions related to course concepts, assignments, and ethical issues in data science and artificial intelligence.</li>
              <li>DEvaluated and graded assignments and lab work, providing constructive feedback and ensuring consistent application of course rubrics</li>
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
