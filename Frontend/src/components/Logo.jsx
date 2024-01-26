import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return <NavLink to="/"> <img src="/nita_logo.jpg" alt="NITA logo" className={styles.logo} /></NavLink>;
}

export default Logo;
