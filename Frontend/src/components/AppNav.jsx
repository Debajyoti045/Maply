import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";

function AppNav() {
  const { setIsNotification } = useAuth();
  const {t} = useTranslation();

  function handleClick() {
    setIsNotification(false);
  }

  return (
    <nav className={styles.nav}>
      <ul onClick={handleClick}>
        <li>
          <NavLink to="all">{t("appnav.all")}</NavLink>
        </li>
        <li>
          <NavLink to="departments">{t("appnav.dep")}</NavLink>
        </li>
        <li>
          <NavLink to="restaurants">{t("appnav.res")}</NavLink>
        </li>
        <li>
          <NavLink to="hostels">{t("appnav.hos")}</NavLink>
        </li>
        <li>
          <NavLink to="playgrounds">{t("appnav.play")}</NavLink>
        </li>
        <li>
          <NavLink to="others">{t("appnav.oth")}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
