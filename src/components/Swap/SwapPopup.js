import React, { useContext } from "react";
import styles from "./SwapPopup.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import { ThemeContext } from "../../App";
import { FcInfo } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

function SwapPopup(props) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const Truncate = (str) => {
    return str.length > 41 ? str.substring(0, 38) + "..." : str;
  };

  return (
    <>
      <Backdrop show={props.show} switch={props.switch} />
      <div className={theme === "light" ? styles.light : styles.dark}>
        <div className={styles.popup}>
          <div className={styles.info}>
            <FcInfo />
          </div>
          <div className={styles.cross}>
            <FaTimes
              style={theme === "dark" ? { color: "black" } : { color: "white" }}
              onClick={props.switch}
            />
          </div>
          <div className={styles.content}>
            <div>View your Transaction on Explorer</div>
            <a href={props.txhash} target="_blank">
              {Truncate(props.txhash)}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwapPopup;
