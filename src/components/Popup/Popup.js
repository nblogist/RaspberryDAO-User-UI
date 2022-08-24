import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Popup.module.css';
import cross from '../../images/Cross.svg';
import Catalogue from '../Catalogue/Catalogue';

function Popup(props) {
    const num = [1, 2, 4, 5, 66, 7, 343, 43];
    return (
        <div className={styles.popup}>
            <div className={styles.cross}>
                <img src={cross} alt="" onClick={props.switch}></img>
            </div>
            <div className={styles.catalogues}>
                <div className={styles.nfts}>
                    {num.map(() => {
                        return (
                            <Link to='/profile/iuebfibsdivdissdibv'>
                                <Catalogue />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popup