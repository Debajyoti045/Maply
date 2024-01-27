import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import SearchPosts from "./SearchQuery";
import { useAuth } from "../contexts/AuthContext";
import ReqNav from "./ReqNav";

function Sidebar() {
  const { reqNav, isAdmin } = useAuth();
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SearchPosts />
      {!isAdmin ? <AppNav /> : reqNav ? <ReqNav /> : <AppNav />}
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          @ Copyright {new Date().getFullYear} by Maply Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
