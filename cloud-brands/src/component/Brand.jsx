import React from 'react'
import styles from "../css/Brand.module.css"

export default function Brand({ brand }) {
    const { id, link, image, title } = brand;

    return (
        <a className={styles.brandsImages}>
            <div className={styles.centeredImageText}>
                {title}
            </div>
            <img src={image} className={styles.brandImage} />

        </ a>
    )
}
