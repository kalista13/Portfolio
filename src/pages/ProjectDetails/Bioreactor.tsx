import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.scss';

export default function Bioreactor() {
  return (
    <main className={styles.projectPage}>

      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <Link to="/#Projects" className={styles.backLink}>
              ← Back to Projects
            </Link>

            <p className={styles.label}>
              Embedded Systems & Software
            </p>

            <h1 className={styles.title}>
              Automated Cyanobacteria Bioreactor System
            </h1>

            <p className={styles.heroDescription}>
              A Raspberry Pi-based automated control system integrating
              sensors, cameras, actuators, and a Python dashboard for
              real-time monitoring and control of a cyanobacteria
              bioreactor.
            </p>
          </div>

          <img
            src="/assets/images/bioreactor-main.png"
            alt="Automated cyanobacteria bioreactor"
            className={styles.heroImage}
          />

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>

        <p className={styles.text}>
          This project involved developing the software and embedded
          control system for an automated cyanobacteria bioreactor
          designed for operation under microgravity conditions.
          The system uses a Raspberry Pi to coordinate sensors,
          actuators, cameras, and control logic while providing
          real-time system information through a graphical dashboard.
        </p>

        <div className={styles.techContainer}>
          <span className={styles.tech}>Python</span>
          <span className={styles.tech}>Tkinter</span>
          <span className={styles.tech}>Raspberry Pi</span>
          <span className={styles.tech}>I2C</span>
          <span className={styles.tech}>Sensors</span>
          <span className={styles.tech}>Embedded Systems</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Work</h2>

        <div className={styles.featureGrid}>

          <div className={styles.feature}>
            <h3>System Integration</h3>
            <p>
              Integrated sensors, actuators, and cameras with a
              Raspberry Pi to create a centralized system for
              monitoring and controlling the bioreactor.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Control Dashboard</h3>
            <p>
              Developed a Python and Tkinter graphical dashboard
              displaying real-time telemetry and camera feeds while
              providing manual and automated hardware controls.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Hardware Control</h3>
            <p>
              Implemented control functionality for system components
              including valves and stepper motors as part of the
              automated bioreactor workflow.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Sensor Communication</h3>
            <p>
              Implemented I2C and hardware communication for pressure,
              temperature, and CO2 sensing, with a focus on reliable
              embedded-system data collection.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>System</h2>

        <div className={styles.gallery}>

          <div>
            <img
              src="/assets/images/bioreactor-system.png"
              alt="Bioreactor system"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>
              The physical cyanobacteria bioreactor and supporting
              hardware.
            </p>
          </div>

          <div>
            <img
              src="/assets/images/bioreactor-flight.png"
              alt="Bioreactor flight system"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>
              Tested bioreactor on flight.
            </p>
          </div>

          <div>
            <img
              src="/assets/images/bioreactor-dashboard.png"
              alt="Bioreactor control dashboard"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>
              Python/Tkinter dashboard providing camera feeds,
              telemetry, and system controls.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}