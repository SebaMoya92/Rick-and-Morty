import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.bar}>
      <input className={styles.search} type="search" onChange={handleChange} />
      <button className={styles.button} onClick={() => onSearch(id)}>
        <FaSearch className={styles.searchIcon} />{" "}
      </button>
    </div>
  );
}
