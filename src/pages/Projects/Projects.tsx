import styles from './Projects.module.scss';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      img: "/assets//images/photo3.png",
      desc: "A personal website built with React, TypeScript, and SCSS.",
      github: "https://github.com/kalista13/Portfolio#"
    },
    {
      title: "Emotions App",
      img: "/assets/images/image 31.png",
      //desc: "A 3D renderer made from scratch in C, implementing ray tracing, semi-realistic lighting, shadows, and anti-aliasing.",
      desc: "An app built with Java that let's you log and view your emotion summary.",
      github: "https://github.com/kalista13/Emojilog#"
    },
    {
      title: "Club Website",
      img: "/assets/images/image 32.png",
      //desc: "MongoDB-based data management system to search, and analyze large tweet datasets with batch JSON processing and real-time querying."
      desc:"An interactive and responsive website built with React, TyprScript, and SCSS for MissionSpace Walker",
      github: "https://github.com/kalista13/MSWUA#"
    },

  ];

  return (
    <section id="Projects" className={styles.projects}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.img} alt={project.title} className={styles.image} />
            <div className={styles.content}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.description}>{project.desc}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img src="assets/images/github.png" alt="GitHub" className={styles.githubIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}