import { NavLink } from "react-router-dom";
import styles from "./ReqNav.module.css";
import { useTranslation } from "react-i18next";

function ReqNav() {
  const {t} = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/app/requestedLocations" autoFocus>{t("reqnav.req")}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ReqNav;
