import React from 'react';
import styles from './Slogan.module.css';



function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>Рассматриваю варианты удаленной работы</span>
        <form className={styles.formWrapper}>
        <button className={styles.btnSubmit} type="submit">Нанять меня</button>
        </form>
      </div>

    </div>
  );
}

export default Slogan;
