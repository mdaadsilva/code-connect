"use client";

import styles from "./searchbar.module.css";

export const SearchBar = () => {
  return (
    <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Digite o que você procura"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Buscar
      </button>
    </form>
  );
};
