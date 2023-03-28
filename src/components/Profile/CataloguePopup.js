import React, { useContext } from "react";
import styles from "./CataloguePopup.module.scss";

import Backdrop from "../Backdrop/Backdrop";
import { ThemeContext } from "../../App";
import { FcInfo } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

function CataloguePopup(props) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;
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
          <div className={styles.content}>{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default CataloguePopup;
