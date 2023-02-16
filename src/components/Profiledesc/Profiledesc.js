import React, { useContext, useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Profiledesc.module.scss";
import sample from "../../images/Sample.svg";
import { FaUserCircle } from "react-icons/fa";
import { ThemeContext } from "../../App";
import { useAccount, useNetwork } from "wagmi";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

function Profiledesc() {
  const navigate = useNavigate();
  const location = useLocation();
  const [nft, setNft] = useState(location.state.nft);
  const [isApproved, setApproval] = useState(false);
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isApprovaltx, seApprovaltx] = useState(false);
  const [isSwaptx, setSwaptx] = useState(false);

  const Truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  };

  let image_url = "";
  try {
    if (chain.network === "Godwoken Testnet") {
      image_url = nft.image;
    } else {
      if (nft.media.length != 0 && nft.media[0].format != "mp4") {
        image_url = nft.media[0].gateway;
      } else {
        image_url = sample;
      }
    }
  } catch (error) {
    // console.log("Error handle", error);
  }

  const themes = useContext(ThemeContext);
  const { theme, toggleTheme } = themes;
  window.scroll(0, 0);

  useEffect(() => {
    // console.log(chain.network, location.state.chain);
    if (chain.network != location.state.chain) {
      navigate("/profile");
    }
  }, [chain.network]);

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      {isLoading ? (
        <LoadingSpinner
          isApprovaltx={isApprovaltx}
          isSwaptx={isSwaptx}
          theme={theme}
        />
      ) : (
        <div className={styles.descmain}>
          <Link to="/profile">
            <div className={styles.back}>
              <IoChevronBackOutline /> Back
            </div>
          </Link>
          <div className={styles.descpage}>
            <div className={styles.imgDiv}>
              <img
                className={styles.sampleProduct}
                src={image_url}
                alt="NFT Image"
              />
            </div>
            <div className={styles.details}>
              <div className={styles.title}>{nft.title}</div>
              <div className={styles.prodid}>
                Token Id : {Truncate(nft.tokenId)}
              </div>
              <div className={styles.profdetails}>
                <FaUserCircle className={styles.user} />
                <div className={styles.profile}>
                  <div className={styles.name}>{address}</div>
                  {/* <div className={styles.userdesc}>From India</div> */}
                </div>
              </div>
              <div className={styles.nftdesc}>{nft.description}</div>
              {chain.network === "Godwoken Testnet" ? (
                ""
              ) : (
                <div className={styles.swap}>
                  <div className={styles.note}>
                    To swap this NFT, click below button
                  </div>
                  <Link to="/swap">
                    <div className={styles.secondbutton}>
                      <button className={styles.secondbtn}>Swap NFT</button>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profiledesc;
