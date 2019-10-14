import React from 'react';
import styles from './Projects.module.css';


function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мои проекты</span>
                <div className={styles.projectsWrapper}>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>To Do List</span>
                        <span className={styles.description}>rrrrrrrrrrrrrrrrrrr</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Calculator</span>
                        <span className={styles.description}>rrrrrrrrrrrrrrrrrrr</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Social Network</span>
                        <span className={styles.description}>rrrrrrrrrrrrrrrrrrr</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
