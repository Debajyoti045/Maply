import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import SearchPosts from "./SearchQuery";
import { useAuth } from "../contexts/AuthContext";
import ReqNav from "./ReqNav";

function Sidebar() {
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { reqNav, isAdmin } = useAuth();
  const { sidebarOpen, setSidebarOpen } = useAuth();
  return (
    <>
      <i
        className="fa-solid fa-bars"
        style={{ marginRight: "20px", color: "black", fontSize: "30px" }}
        onClick={handleClick}
      ></i>
      <div
        className={styles.sidebar}
        style={{ display: sidebarOpen ? "block" : "none" }}
      >
        <SearchPosts />
        {!isAdmin ? <AppNav /> : reqNav ? <ReqNav /> : <AppNav />}
        <Outlet />
        <footer className={`${styles.footer} text-center`}>
          <p className={styles.copyright}>
            @ Copyright {new Date().getFullYear} by Maply Inc.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
