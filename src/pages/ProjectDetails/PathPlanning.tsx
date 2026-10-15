import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.scss';

export default function PathPlanning() {
  return (
    <main className={styles.projectPage}>

      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <Link to="/#Projects" className={styles.backLink}>
              ← Back to Projects
            </Link>

            <p className={styles.label}>
              Robotics & Automation
            </p>

            <h1 className={styles.title}>
              Robotic Path Planning
            </h1>

            <p className={styles.heroDescription}>
              A robotic grinding workflow that converts 3D scan data
              into executable robot toolpaths by integrating point
              cloud processing, coordinate transformations, path
              generation, ROS, G-code, and robot validation.
            </p>
          </div>

          <img
            src="/assets/images/scan-main.png"
            alt="Robotic path planning setup"
            className={styles.heroImage}
          />

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>

        <p className={styles.text}>
          The goal of this project was to create a complete workflow
          for automated robotic grinding. The system begins with a
          3D scan of a surface, processes the point cloud, generates
          a toolpath, aligns that path with the robot coordinate
          system, and prepares the resulting motion for execution
          by the robot.
        </p>

        <div className={styles.techContainer}>
          <span className={styles.tech}>Python</span>
          <span className={styles.tech}>Open3D</span>
          <span className={styles.tech}>ROS</span>
          <span className={styles.tech}>G-code</span>
          <span className={styles.tech}>RoboDK</span>
          <span className={styles.tech}>3D Scanning</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Work</h2>

        <div className={styles.featureGrid}>

          <div className={styles.feature}>
            <h3>Point Cloud Processing</h3>
            <p>
              Processed and visualized scanned point cloud data using
              Open3D. This included loading PLY files, filtering noise,
              and preparing scanned surfaces for path generation.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Coordinate Alignment</h3>
            <p>
              Developed transformation workflows to align scanner data
              with the robot coordinate system. The workflow evolved
              from a hand-eye calibration approach to a CAD-based
              transformation method for improved stability.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Toolpath Generation</h3>
            <p>
              Modified the path generation workflow so paths could be
              generated directly on raw scan data instead of applying
              transformations to generated G-code.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Robot Integration</h3>
            <p>
              Applied the required transformations through ROS,
              visualized path alignment before execution, defined and
              tested the robot TCP, and executed generated paths on the
              physical robot.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Development Process</h2>

        <div className={styles.gallery}>

          <div>
            <img
              src="/assets/images/path-scan.png"
              alt="Processed 3D scan"
              className={styles.galleryImageContain}
            />
            <p className={styles.imageCaption}>
              Processing and visualizing scanned point cloud data.
            </p>
          </div>

          <div>
            <img
              src="/assets/images/path-generated.png"
              alt="Generated robotic toolpath"
              className={styles.galleryImageContain}
            />
            <p className={styles.imageCaption}>
              Toolpath generated directly from the scanned geometry.
            </p>
          </div>

          <div>
            <img
              src="/assets/images/path-visualization.png"
              alt="Robot path visualization"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>
              Visualizing robot motion and checking path alignment
              before physical execution.
            </p>
          </div>

          <div>
            <img
              src="/assets/images/path-robot.png"
              alt="Robot executing generated path"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>
              Physical testing of the generated toolpath.
            </p>
          </div>

        </div>
      </section>

      <section className={`${styles.section} ${styles.result}`}>
        <h2 className={styles.sectionTitle}>Result</h2>

        <p className={styles.text}>
          The robot successfully followed generated paths on the table
          surface, demonstrating integration between scan processing,
          path generation, coordinate alignment, and physical robot
          motion. Testing also helped identify small remaining alignment
          offsets that could be refined further.
        </p>
      </section>

    </main>
  );
}