import React from 'react'
import styles from './Catalogue.module.css'
import sample from '../../images/Sample.svg'

function Catalogue() {
    return (
        <div className={styles.catalogue}>
            <div className={styles.container}>
                <div clasName={styles.simage}>
                    <img src={sample} alt="Sample" className={styles.sampleimage}></img>
                </div>
                <div className={styles.lowerbox}>
                    <div className={styles.lowerboxcontent}>
                        <div className={styles.name}>
                            The Demon
                        </div>
                        <div className={styles.desc}>
                            By Someone
                        </div>
                        <div className={styles.button}>
                            <button className={styles.bttn}>Add to My Collections</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogue