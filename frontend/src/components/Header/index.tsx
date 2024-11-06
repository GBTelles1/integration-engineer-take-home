import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to={"/"} className={styles.pageTitle}>
        Task Management App
      </Link>

      <Link to={"/"} className={styles.homeLink}>
        Home
      </Link>
    </header>
  );
};
