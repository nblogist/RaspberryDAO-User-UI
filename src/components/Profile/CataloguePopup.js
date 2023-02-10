import React, { useState, useContext, useEffect } from "react";
import styles from "./CataloguePopup.module.scss";
import cross from "../../images/Cross.svg";
import crossd from "../../images/CrossD.svg";
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
            {/* {
                            theme === 'dark' ? <img src={crossd} alt="" onClick={props.switch}></img> : <img src={cross} alt="" onClick={props.switch}></img>
                        } */}
          </div>
          <div className={styles.content}>{props.content}</div>
        </div>
      </div>
    </>
  );
}

export default CataloguePopup;
