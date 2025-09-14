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
      title: "App",
      img: "/assets/images/photo2.png",
      desc: "Weather app",
      github: "https://github.com/kalista13/Portfolio#"
    },
    {
      title: "app2",
      img: "/assets/images/photo2.png",
      desc: "an app",
      github: "https://github.com/kalista13/Portfolio#"
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