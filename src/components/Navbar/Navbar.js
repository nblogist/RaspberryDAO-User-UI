import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import logo from '../../images/logo.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Toggle from '../../utils/Toggle/Toggle';
import hamburger from '../../images/Hamburger.svg';
import close from '../../images/close.svg';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className={styles.entirenavbar}>
                <div className={styles.left}>
                    <Link to='/'>
                        <div className={styles.logo}>
                            <img src={logo} alt='Logo' />
                        </div>
                    </Link>
                    <div className={styles.content}>
                        <ul className={styles.menulinks}>
                            <Link to='/'>
                                <li className={styles.home}>Home</li>
                            </Link>
                            <Link to='/profile'>
                                <li className={styles.explore}>
                                    Dashboard
                                </li>
                            </Link>
                            <Link to='/marketplace'>
                                <li className={styles.marketplace}>
                                    Bridge NFT
                                </li>
                            </Link>
                            <Link to='/activity'>
                                <li className={styles.activities}>
                                    Activities
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <Toggle />
                    <div style={{ padding: 8, color: '#4D3BCE' }}>
                        <ConnectButton />
                    </div>
                    <div className={styles.hamburger} onClick={() => setMobileOpen(true)}>
                        <img src={hamburger} alt="Hamburger"></img>
                    </div>
                </div>
            </div>
            {mobileOpen ? (
                <div className={styles.mobileham}>
                    <div className={styles.closeimg} onClick={() => setMobileOpen(false)}>
                        <img src={close} alt='close'></img>
                    </div>
                    <div className={styles.mobileleft}>
                        <div className={styles.mobilelogo}>
                            <Link to='/'>
                                <img
                                    className={styles.mobilelogoimage}
                                    onClick={() => setMobileOpen(false)}
                                    src={logo}
                                    alt=''
                                />
                            </Link>
                        </div>
                        <div className={styles.mobilecontent}>
                            <ul className={styles.mobilemenulinks}>
                                <Link to='/' onClick={() => setMobileOpen(false)}>
                                    <li className={styles.home}>Home</li>
                                </Link>
                                <Link to='/profile' onClick={() => setMobileOpen(false)}>
                                    <li className={styles.explore}>
                                        Dashboard
                                    </li>
                                </Link>
                                <Link to='/marketplace' onClick={() => setMobileOpen(false)}>
                                    <li className={styles.marketplace}>
                                        Bridge NFT
                                    </li>
                                </Link>
                                <Link to='/activity' onClick={() => setMobileOpen(false)}>
                                    <li className={styles.activities}>
                                        Activities
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}


export default Navbar