import MyProject from "../myProject/MyProject";
import styles from "./myProjects.module.scss";
export default function MyProjects() {
  const projectsNames = ["gallery", "filmoteka", "phonebook"];
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>My projects</h1>
      <ul className={styles.projects}>
        {projectsNames.map((projectName) => (
          <MyProject key={projectName} projectName={projectName} />
        ))}
      </ul>
    </section>
  );
}
