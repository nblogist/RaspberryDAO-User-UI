import React, { useState } from 'react'
import styles from './Swap.module.css'
import bitcoinimg from '../../images/blockchain.svg';
import Popup from '../Popup/Popup';

function Swap() {
    const [open, setOpen] = useState(false);
    const change = () => {
        setOpen(false);
    };

    return (
        <>
            {open ? <Popup open={open} switch={change} /> : null}
            <div className={styles.swappage}>
                <div className={styles.heading}>Swap</div>
                <div className={styles.swapbox}>
                    <div className={styles.leftswapbox}>
                        <div className={styles.from}>From</div>
                        <div className={styles.selectNFT}>
                            <img src={bitcoinimg} alt="Bitcoin" className={styles.bitcoinimg}></img>
                            <select
                                name='choosefrom'
                                id='dropdown'
                                className={styles.select}
                                // onChange={event => setReason(event.target.value)}
                                required
                            >
                                <option value='' disabled selected hidden> Choose a BlockChain</option>
                                <option value='Ethereum'>Ethereum</option>
                                <option value='Polygon'>Polygon</option>
                                <option value='XDAI'>XDAI</option>
                            </select>
                        </div>
                        <div className={styles.choose} onClick={() => setOpen(true)}>
                            <button className={styles.choosenft}>Choose A NFT</button>
                        </div>
                        <div className={styles.amountandbalance}>
                            <div className={styles.amount}>0.0</div>
                            <div className={styles.unitandbalance}>
                                <div className={styles.unit}> NFT </div>
                                <div className={styles.balance}>Balance - </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.swapbutton}>
                        <button className={styles.buttonswap}>Swap</button>
                    </div>
                    <div className={styles.rightswapbox}>
                        <div className={styles.to}>To</div>
                        <div className={styles.inputNFT}>
                            <img src={bitcoinimg} alt="Bitcoin" className={styles.bitcoinimg}></img>
                            <input
                                name="tonft"
                                className={styles.input}
                                value='GODWOKEN'
                                disabled>
                            </input>
                        </div>
                        <div className={styles.amountandbalanceright}>
                            <div className={styles.amount}>0.0</div>
                            <div className={styles.unitandbalance}>
                                <div className={styles.unit}> NFT </div>
                                <div className={styles.balance}>Balance - </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Swap