import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me Sitting with a Laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with experience in building Resposive Website</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with experience in building Resposive Website</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with experience in building Resposive Website</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}
