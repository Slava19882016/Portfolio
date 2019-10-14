import React from 'react';
import styles from './Skills.module.css';


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.headerTitle}>
                <h2 className={styles.headerTitle}>Мои скилы</h2>
                <div className={styles.line}></div>
                </div>

                <div className={styles.skillsWrapper}>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>HTML and CSS</span>
                        <span className={styles.description}>
                            HTML — стандартизированный язык разметки документов во Всемирной паутине.
                            Большинство веб-страниц имеют содержание разметки на языке HTML.
                            CSS — формальный язык описания внешнего вида документа,
                            написанного с использованием языка разметки.
                        </span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>JS</span>
                        <span className={styles.description}>
                            JavaScript — компилируемый язык программирования.
                            Поддерживает объектно-ориентированный, императивный
                            и функциональный стили. Является реализацией языка ECMAScript.
                            JavaScript является отцом таких языков как C# C++ Java.
                            Если бы не JS то не было этих языков ибо JS это СИЛА!!!</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>React</span>
                        <span className={styles.description}>
                            JavaScript-библиотека с открытым исходным кодом
                            для разработки пользовательских интерфейсов.
                            React разрабатывается и поддерживается Facebook,
                            Instagram и сообществом отдельных разработчиков и корпораций.
                            React может использоваться для разработки одностраничных и
                            мобильных приложений.</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;
