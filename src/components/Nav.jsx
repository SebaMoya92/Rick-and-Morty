import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  const location = useLocation();
  const [formCompleted, setFormCompleted] = useState(false);

  if (location.pathname === "/") {
    return null;
  }

  const handleFormCompletion = () => {
    setFormCompleted(true);
  };

  return (
    <div className={`${styles.nav} ${formCompleted ? styles.active : ""}`}>
      <ul>
        <Link to="/home" className={styles.link}>
          <li>HOME</li>
        </Link>

        <Link to="/favorites" className={styles.link}>
          <li>FAVORITES</li>
        </Link>

        <Link to="/about" className={styles.link}>
          <li>ABOUT</li>
        </Link>
      </ul>
      <div className={styles.searchContainer}>
        <p className={styles.searchText}>Seleccione un Nº del 1 al 826</p>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
