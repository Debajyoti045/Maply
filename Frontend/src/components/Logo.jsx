import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
import { useAuth } from "../contexts/AuthContext";
function Logo() {
  const {isAuthenticated } = useAuth();
  const {sidebarClicked,setsidebarClicked } = useAuth();
  const hanleClick = ()=>{
    let b = sidebarClicked;
    setsidebarClicked(!b);
  }
  return (
    <>
      <div className="container">
      {!isAuthenticated && <NavLink to="/"> <img src="/nita_logo.jpg" alt="NITA logo" className={styles.logo} /></NavLink>}
      </div>
    </>
  );
}

export default Logo;
