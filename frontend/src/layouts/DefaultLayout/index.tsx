import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.css";
import { Header } from "../../components/Header";

export const DefaultLayout = () => {
  return (
    <div>
      <Header />

      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
