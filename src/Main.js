import React from 'react';
import styles from './Main.module.css';
import photo from "./IMG_1868.JPG"

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут <span>Слава</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                        <img className={styles.img} src={photo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
