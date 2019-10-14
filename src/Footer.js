import React from 'react';
import styles from './Footer.module.css';



function Footer() {
  return (
    <div className={styles.footer}>
<div className={styles.container}>
<span className={styles.blockTitle}>Писук Вячеслав</span>
  <div className={styles.socialBlock}>
    <div className={styles.socialIcon}></div>
    <div className={styles.socialIcon}></div>
    <div className={styles.socialIcon}></div>
    <div className={styles.socialIcon}></div>
  </div>
  <span className={styles.copiright}>2019 Все права защищены </span>
</div>
    </div>
  );
}

export default Footer;
