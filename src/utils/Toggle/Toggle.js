import React, { useContext, useRef } from "react";
import styles from "./Toggle.module.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../App";

function Toggle({ status, setStatus }) {
  const inputref = useRef(status);
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <label className={styles.switch}>
      <input
        className={
          theme === "light" ? styles.switchinputlight : styles.switchinputdark
        }
        type="checkbox"
        checked
        onChange={() => {
          setStatus(!status);
        }}
        ref={inputref}
      />
      <span className={styles.switchlabel} data-on="" data-off=""></span>
      <span className={styles.switchhandle}>
        {theme === "light" ? (
          <BsFillSunFill className={styles.icon} fontSize="16px" />
        ) : (
          <BsFillMoonStarsFill className={styles.icon} fontSize="14px" />
        )}
      </span>
    </label>
  );
}

export default Toggle;
