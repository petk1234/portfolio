import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./header.module.scss";
import portfolioImg from "../../images/portfolio.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <img src={portfolioImg} className={styles.img} />
      <h1 className={styles.title}>PORTFOLIO</h1>
      <nav className={styles.nav}>
        <div>
          <Link
            activeClass="active"
            to="experience"
            prefetch={false}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.link}
          >
            Experience
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            prefetch={false} // допомагає проти FOUC warning в консолі
            smooth={true}
            offset={50}
            duration={500}
            className={styles.link}
          >
            My projects
          </Link>
        </div>
        <div>
          <Link
            activeClass="active"
            to="form"
            prefetch={false}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.link}
          >
            Write me
          </Link>
        </div>
      </nav>
    </header>
  );
}
