import { useState } from "react";
import Modal from "../modal/Modal";
import { CSSTransition } from "react-transition-group";
import projectsInfo from "../../projectsInfo";
import styles from "./myProject.module.scss";
import transition from "./transition.module.scss";
export default function MyProject({ projectName }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <li
        className={styles.projectCard}
        onClick={(e) => modal === false && setModal(true)}
      >
        <img
          className={styles.projectImg}
          src={
            projectsInfo.filter(
              (project) => project.projectName === projectName
            )[0].projectImg
          }
        />
        <h3>{projectName}</h3>
      </li>
      <CSSTransition
        in={modal}
        timeout={250}
        appear={true}
        unmountOnExit
        classNames={{
          enter: transition["myProjectEnter"],
          enterActive: transition["myProjectEnterActive"],
          exit: transition["myProjectExit"],
          exitActive: transition["myProjectExitActive"],
        }}
        mountOnEnter={true}
      >
        <Modal
          projectInfo={JSON.stringify(
            projectsInfo.filter(
              (project) => project.projectName === projectName
            )[0]
          )}
          setModal={setModal}
        />
      </CSSTransition>
    </>
  );
}
