import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyRight}>
          &copy; Copyright {new Date().getFullYear()} By WorldWise Inc. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
