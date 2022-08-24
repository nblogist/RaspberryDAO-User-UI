import React from 'react'
import styles from './Toggle.module.css'
import logo from '../../images/logo.svg'

function Toggle({ status, setStatus }) {
    return (
        <label className={styles.switch}>
            {status ? 
            <input className={styles.switchinput} type="checkbox" onClick={() => setStatus(!status)} checked/> :
            <input className={styles.switchinput} type="checkbox" onClick={() => setStatus(!status)} />}
            <span className={styles.switchlabel} data-on="" data-off=""></span>
            <span className={styles.switchhandle}></span>
        </label>
    )
}

export default Toggle